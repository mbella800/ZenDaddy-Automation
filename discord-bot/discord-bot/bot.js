const { Client, GatewayIntentBits, SlashCommandBuilder, REST, Routes } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

// Stats update interval (5 minutes)
let statsUpdateInterval = null;

// Base stats for social proof (real community stats)
const BASE_BUYERS = 56;
const BASE_LIFETIME = 12;
const BASE_V20 = 44;

// Discord Channel IDs
const DOWNLOADS_ID = '1425217762170503342';
const VERIFY_ID = '1425217754830606366';
const SETUP_ID = '1425164232919486464';
const TROUBLESHOOT_ID = '1425164288959447130';
const TICKETS_ID = '1425164562193321984';

// In-memory database (replace with real DB in production)
const verifiedUsers = new Map();
const inviteTracking = new Map(); // Track invites: userId -> { invites: number, invitedBy: userId }
const guildInvites = new Map(); // Cache invites to detect which was used

client.once('ready', async () => {
  console.log(`✅ ZenDaddy Bot logged in as ${client.user.tag}`);
  
  // Register slash commands
  registerCommands();
  
  // Cache invites for tracking
  const guild = client.guilds.cache.first();
  if (guild) {
    const invites = await guild.invites.fetch();
    guildInvites.set(guild.id, new Map(invites.map(inv => [inv.code, inv.uses])));
    console.log(`📊 Cached ${invites.size} invite codes`);
  }
  
  // Start stats auto-update
  statsUpdateInterval = setInterval(() => updateStats(), 5 * 60 * 1000); // Every 5 min
  updateStats(); // Initial update
  
  // DISABLED: Post promo on startup causes repeated messages when bot restarts
  // The promo is posted once when the bot first launches, not on every restart
  // To post reminders manually, use: await post48HPromo() in console
  
  console.log('📊 Stats auto-update started (every 5 minutes)');
});

// Post 48H €15 discount promo
async function post48HPromo() {
  try {
    const guild = client.guilds.cache.first();
    if (!guild) return;

    let announcementChannel = guild.channels.cache.find(c => c.name === '📣│announcements');
    if (!announcementChannel) {
      announcementChannel = guild.channels.cache.find(c => c.name.includes('general'));
    }
    
    if (!announcementChannel) return;

    const promoEndTime = Date.now() + (48 * 60 * 60 * 1000); // 48 hours from now

    await announcementChannel.send({
      content: `@everyone

# 🎁 EXCLUSIVE 48-HOUR LAUNCH OFFER

**First 5 Buyers Get €15 OFF!**

To celebrate our newest community members, we're offering an **exclusive €15 discount** to the **first 5 people** who purchase in the next 48 hours.

**How to claim:**
1. Go to https://zendaddy.pro and select your tier
2. At checkout, enter code: **15DISCOUNT**
3. Get €15 instant discount - no waiting!

**What you get:**
✅ 8 Real-Time OLED Sliders
✅ Distance-Based Tracking Zones  
✅ Enhanced Aim Assist Mechanics
✅ Discord VIP Support
✅ Instant Download

**⏰ STATUS: 5/5 spots remaining**
**⏰ ENDS: <t:${Math.floor(promoEndTime / 1000)}:R>**

🔗 **Get it now:** https://zendaddy.pro

*First come, first served - don't miss out!* 💚`
    });

    console.log('📢 48H €15 PROMO posted to Discord!');
    console.log(`⏰ Promo ends: ${new Date(promoEndTime).toLocaleString()}`);
  } catch (error) {
    console.error('❌ Error posting promo:', error);
  }
}

// Post Beta Launch announcement
async function postBetaLaunch() {
  try {
    const guild = client.guilds.cache.first();
    if (!guild) return;

    let announcementChannel = guild.channels.cache.find(c => c.name === '📣│announcements');
    if (!announcementChannel) {
      announcementChannel = guild.channels.cache.find(c => c.name.includes('announcements') || c.name.includes('general'));
    }
    
    if (!announcementChannel) {
      console.log('❌ No announcement channel found');
      return false;
    }

    await announcementChannel.send({
      content: `@everyone

# CHAPTER 7 IS HERE. ARE YOU READY?

New season, new map, new competition. Time to level up your aim.

Introducing **ZENDADDY GOD FLICK v1** - the most advanced aim assist booster on the market.

## FOR ONLY €29.99

That's less than a battle pass. One payment. Forever yours.

**WHAT YOU GET:**
✅ Twin-engine aim assist (Helix + Turbo Pulse)
✅ Dynamic ADS - locks on target, smooth tracking
✅ Active flick assist - land those one-shots
✅ Plug & play - no config needed

**WHY NOW?**
🎮 Chapter 7 = fresh start = everyone grinding
⚡ Get the edge before others catch on
💰 Early adopter price won't last forever

**HOW TO GET IT:**
1. Go to https://zendaddy.pro
2. Click "GET BETA NOW"
3. Pay €29.99 via Stripe
4. Download instantly
5. Load on Zen → Dominate

**TOGGLE:** R1 + Dpad UP = ON | R1 + Dpad DOWN = OFF

Works on PS4, PS5, Xbox. Chapter 7 ready.

**PREMIUM COMING SOON:** Full OLED menu with 8 sliders in development. Beta buyers = early access + discount.

🔗 **https://zendaddy.pro**

See you in the lobbies. 💚`
    });

    console.log('📢 BETA LAUNCH announcement posted to Discord!');
    return true;
  } catch (error) {
    console.error('❌ Error posting beta launch:', error);
    return false;
  }
}

// Auto-update stats voice channel AND dashboard embed
async function updateStats(updateVoiceChannel = true) {
  try {
    const guild = client.guilds.cache.first();
    if (!guild) {
      console.log('⚠️ No guild found for stats update');
      return;
    }

    const lifetimeRole = guild.roles.cache.find(r => r.name === '💎 LIFETIME VIP');
    const v20Role = guild.roles.cache.find(r => r.name === '⚡ v2.0 MEMBER');
    
    const realLifetime = lifetimeRole ? lifetimeRole.members.size : 0;
    const realV20 = v20Role ? v20Role.members.size : 0;
    
    // Community stats (base + real members)
    const lifetimeCount = BASE_LIFETIME + realLifetime;
    const v20Count = BASE_V20 + realV20;
    const totalBuyers = BASE_BUYERS + realLifetime + realV20;
    const revenue = (lifetimeCount * 249.99 + v20Count * 79.99).toFixed(0);
    const conversionRate = totalBuyers > 0 ? ((lifetimeCount / totalBuyers) * 100).toFixed(1) : 0;

    // Update voice channel name (Discord limits: 2 updates per 10 min) - only during periodic updates
    if (updateVoiceChannel) {
      const statsVoice = guild.channels.cache.find(c => c.type === 2 && c.name.includes('Buyers'));
      if (statsVoice) {
        try {
          const newName = `👥 ${totalBuyers} Buyers | 💎 ${lifetimeCount} Lifetime`;
          if (statsVoice.name !== newName) {
            await statsVoice.setName(newName);
            console.log(`✅ Voice channel updated: ${newName}`);
          } else {
            console.log(`ℹ️ Voice channel already up to date: ${newName}`);
          }
        } catch (err) {
          if (err.code === 50013) {
            console.log('⚠️ Voice channel rate limited by Discord (max 2 updates/10min)');
          } else {
            console.log('⚠️ Voice channel update error:', err.message);
          }
        }
      } else {
        console.log('⚠️ Stats voice channel not found');
      }
    }

    // Update dashboard embed
    const dashboardChannel = guild.channels.cache.find(c => c.name === '📈│dashboard');
    if (dashboardChannel) {
      const messages = await dashboardChannel.messages.fetch({ limit: 5 });
      const dashboardMsg = messages.find(m => m.author.id === client.user.id && m.embeds.length > 0);
      
      if (dashboardMsg) {
        const updatedEmbed = {
          color: 0x00FF00,
          title: '📊 ZENDADDY LIVE STATS',
          description: 'Real-time statistics and metrics',
          fields: [
            { name: '👥 Total Buyers', value: `**${totalBuyers}**`, inline: true },
            { name: '💎 Lifetime Members', value: `**${lifetimeCount}**`, inline: true },
            { name: '⚡ v2.0 Members', value: `**${v20Count}**`, inline: true },
            { name: '💰 Revenue Generated', value: `**$${revenue}**`, inline: true },
            { name: '📈 Conversion Rate', value: `**${conversionRate}%**`, inline: true },
            { name: '🔥 Status', value: '**LIVE**', inline: true },
          ],
          footer: { text: 'Updates automatically every 5 minutes' },
          timestamp: new Date().toISOString(),
        };
        
        await dashboardMsg.edit({ embeds: [updatedEmbed] });
        console.log(`✅ Dashboard updated: ${totalBuyers} buyers`);
      } else {
        console.log('⚠️ Dashboard message not found');
      }
    } else {
      console.log('⚠️ Dashboard channel not found');
    }

    console.log(`📊 Stats: ${totalBuyers} buyers (${lifetimeCount} Lifetime, ${v20Count} v2.0) | $${revenue}`);
  } catch (error) {
    console.error('❌ Stats update error:', error);
  }
}

// Post real sale (call this after successful /verify)
async function postRealSale(email, product) {
  try {
    const guild = client.guilds.cache.first();
    if (!guild) return;

    const salesChannel = guild.channels.cache.find(c => c.name === '🔔│recent-sales');
    if (!salesChannel) return;

    // Anonymize email
    const name = email.split('@')[0];
    const displayName = name.charAt(0).toUpperCase() + name.slice(1, 3) + '***';
    const productEmoji = product === 'Lifetime' ? '💎 Lifetime' : '⚡ v2.0';

    await salesChannel.send(
      `🎉 **${displayName}** just purchased ${productEmoji}! (just now)`
    );
    console.log(`🔔 Posted REAL sale: ${displayName} - ${product}`);
  } catch (error) {
    console.error('Real sale post error:', error);
  }
}

// Welcome DM for new members + Invite Tracking
client.on('guildMemberAdd', async (member) => {
  try {
    // Track invite usage
    const guild = member.guild;
    const newInvites = await guild.invites.fetch();
    const oldInvites = guildInvites.get(guild.id) || new Map();
    
    const usedInvite = newInvites.find(inv => {
      const oldUses = oldInvites.get(inv.code) || 0;
      return inv.uses > oldUses;
    });
    
    if (usedInvite && usedInvite.inviter) {
      const inviterId = usedInvite.inviter.id;
      const inviterData = inviteTracking.get(inviterId) || { invites: 0 };
      inviterData.invites += 1;
      inviteTracking.set(inviterId, inviterData);
      
      // Update member's invitedBy
      inviteTracking.set(member.id, { invites: 0, invitedBy: inviterId });
      
      // Send thank you DM to inviter
      const inviterMember = await guild.members.fetch(inviterId);
      const rewardMsg = await checkInviteRewards(inviterMember, inviterData.invites);
      
      console.log(`📊 Invite tracked: ${usedInvite.inviter.tag} invited ${member.user.tag} (total: ${inviterData.invites})`);
    }
    
    // Update invite cache
    guildInvites.set(guild.id, new Map(newInvites.map(inv => [inv.code, inv.uses])));
    
    const welcomeEmbed = {
      color: 0x00FF00,
      title: '👋 Welcome to ZenDaddy!',
      description: `Hey **${member.user.username}**, welcome aboard! Join 50+ players already using ZenDaddy to dominate their lobbies. 💚`,
      fields: [
        {
          name: '🎯 GOD FLICK v2.0 PRO — €59.99',
          value: '**The ultimate Cronus Zen aim assist script.**\n✅ 6 Aim Patterns (including DYN)\n✅ 23 OLED Settings\n✅ Per-Mode Control & Pre-Aim Sticky\n✅ Toggle: OPTIONS + D-PAD UP/DOWN',
        },
        {
          name: '🚀 How to Get Started',
          value: '1. Visit [zendaddy.pro](https://zendaddy.pro)\n2. Get GOD FLICK v2.0 PRO for €59.99\n3. Come back here and type `/verify your@email.com`\n4. Get instant access to downloads & VIP support',
        },
        {
          name: '💎 What You Get',
          value: '✅ 6 Aim Patterns (including DYN)\n✅ 23 OLED Settings with Per-Mode Control\n✅ Pre-Aim Sticky Technology\n✅ Discord VIP Support\n✅ Instant Download',
        },
        {
          name: '💬 Questions?',
          value: 'Drop a message in <#1425164631231697089> or <#general> - we\'re here to help!',
        },
      ],
      footer: { text: 'Join 50+ players already dominating with ZenDaddy! 🚀' },
    };

    // Try to send DM
    try {
      await member.send({ embeds: [welcomeEmbed] });
      console.log(`✅ Welcome DM sent to ${member.user.tag}`);
    } catch (dmError) {
      console.log(`⚠️ Could not DM ${member.user.tag} (DMs closed)`);
    }
    
    // ALWAYS post welcome in general channel (in case DMs are closed)
    const generalChannel = guild.channels.cache.find(c => c.name.includes('general') || c.name.includes('chat'));
    if (generalChannel) {
      await generalChannel.send({
        content: `👋 Welcome ${member}! Check your DMs for info on GOD FLICK v2.0 PRO — join 50+ players already using ZenDaddy! 💚`
      });
      console.log(`✅ Welcome message posted in ${generalChannel.name}`);
    }
  } catch (error) {
    console.log(`❌ Welcome system error for ${member.user.tag}:`, error.message);
  }
});

// Check and grant invite rewards
async function checkInviteRewards(member, inviteCount) {
  const guild = member.guild;
  let rewardMessage = '';
  
  try {
    // 3 invites = Ambassador role
    if (inviteCount === 3) {
      let ambassadorRole = guild.roles.cache.find(r => r.name === '👥 Ambassador');
      if (!ambassadorRole) {
        ambassadorRole = await guild.roles.create({
          name: '👥 Ambassador',
          color: 0x3498db,
          reason: 'Invite reward role'
        });
      }
      await member.roles.add(ambassadorRole);
      rewardMessage = '🎉 **3 Invites!** You earned the **👥 Ambassador** role!';
    }
    
    // 5 invites = Recruiter role + 10% discount code
    if (inviteCount === 5) {
      let recruiterRole = guild.roles.cache.find(r => r.name === '🔥 Recruiter');
      if (!recruiterRole) {
        recruiterRole = await guild.roles.create({
          name: '🔥 Recruiter',
          color: 0xe74c3c,
          reason: 'Invite reward role'
        });
      }
      await member.roles.add(recruiterRole);
      rewardMessage = '🔥 **5 Invites!** You earned the **🔥 Recruiter** role + 10% discount code!';
    }
    
    // 10 invites = Legend role + free v2.0 access
    if (inviteCount === 10) {
      let legendRole = guild.roles.cache.find(r => r.name === '⭐ Legend');
      if (!legendRole) {
        legendRole = await guild.roles.create({
          name: '⭐ Legend',
          color: 0xf39c12,
          reason: 'Invite reward role'
        });
      }
      await member.roles.add(legendRole);
      rewardMessage = '⭐ **10 Invites!** You earned the **⭐ Legend** role + FREE v2.0 access!';
    }
    
    if (rewardMessage) {
      await member.send(`${rewardMessage}\n\nThank you for growing the ZenDaddy community! 💚`);
      console.log(`🎁 Reward granted to ${member.user.tag}: ${inviteCount} invites`);
    }
  } catch (error) {
    console.error('Error granting invite rewards:', error);
  }
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'discount') {
    const email = interaction.options.getString('email');

    // Check if user has purchased v2.0 before
    const purchaseHistory = await checkStripePurchase(email);

    if (!purchaseHistory.success) {
      return interaction.reply({
        content: `❌ No purchase found for **${email}**\n\n` +
                 `This discount is only for returning customers who bought v2.0.\n` +
                 `Make your first purchase to become eligible!`,
        ephemeral: true,
      });
    }

    // Check if they bought Lifetime (no discount needed)
    if (purchaseHistory.product === 'Lifetime') {
      return interaction.reply({
        content: `💎 You have **Lifetime Access**!\n\n` +
                 `You already get all future updates FREE forever.\n` +
                 `No need for discounts! 🎉`,
        ephemeral: true,
      });
    }

    // Generate unique discount code (sanitize email for Stripe)
    const emailName = email.split('@')[0]
      .replace(/[^a-zA-Z0-9]/g, '') // Remove invalid chars (dots, plus, etc)
      .substring(0, 20) // Max 20 chars
      .toUpperCase();
    
    if (emailName.length < 2) {
      return interaction.reply({
        content: `❌ **Invalid email format**\n\nYour email can't be converted to a valid discount code. Contact support.`,
        ephemeral: true,
      });
    }

    const discountCode = `RETURN25-${emailName}`;

    // Create Stripe coupon + promotion code
    const couponResult = await createStripeCoupon(discountCode, email);

    if (!couponResult.success) {
      return interaction.reply({
        content: `❌ **Error creating discount code**\n\n` +
                 `${couponResult.error}\n\n` +
                 `Please try again or contact support.`,
        ephemeral: true,
      });
    }

    return interaction.reply({
      content: `🎁 **25% Returning Customer Discount!**\n\n` +
               `✅ Email Verified: **${email}**\n` +
               `✅ Previous Purchase: **v2.0**\n\n` +
               `**Your Unique Discount Code:**\n` +
               `\`\`\`${discountCode}\`\`\`\n\n` +
               `**How to Use:**\n` +
               `1. Go to the pricing page\n` +
               `2. Click on the product you want\n` +
               `3. Enter code at checkout: \`${discountCode}\`\n` +
               `4. Get 25% OFF! 💸\n\n` +
               `*This code is unique to you and works once.*`,
      ephemeral: true,
    });
  }

  if (interaction.commandName === 'verify') {
    const email = interaction.options.getString('email');

    // Check if email has purchased via Stripe
    const hasPurchased = await checkStripePurchase(email);

    if (!hasPurchased.success) {
      return interaction.reply({
        content: `❌ No purchase found for **${email}**\n\n` +
                 `**Troubleshooting:**\n` +
                 `• Used the EXACT email from your purchase?\n` +
                 `• Payment completed successfully?\n` +
                 `• Wait 2-3 minutes after payment\n` +
                 `• Check spam folder for receipt\n\n` +
                 `**Still not working?**\n` +
                 `Stripe might be busy - try again in 5 minutes.\n` +
                 `If problem persists, open a ticket in <#${TICKETS_ID}>`,
        ephemeral: true,
      });
    }

    // Determine role based on product
    const guild = interaction.guild;
    const member = interaction.member;
    
    let roleName;
    if (hasPurchased.product === 'Lifetime') {
      roleName = '💎 LIFETIME VIP';
    } else if (hasPurchased.product === 'Beta') {
      roleName = '🎮 BETA TESTER';
    } else {
      roleName = '⚡ v2.0 MEMBER';
    }

    let role = guild.roles.cache.find(r => r.name === roleName);

    // Auto-create BETA TESTER role if it doesn't exist
    if (!role && roleName === '🎮 BETA TESTER') {
      try {
        role = await guild.roles.create({
          name: '🎮 BETA TESTER',
          color: 0x00FF00,
          reason: 'Auto-created for beta purchasers'
        });
        console.log('✅ Created BETA TESTER role');
      } catch (err) {
        console.error('Failed to create BETA TESTER role:', err);
      }
    }

    if (!role) {
      return interaction.reply({
        content: `❌ Role "${roleName}" not found. Contact an admin.`,
        ephemeral: true,
      });
    }

    // Check if already has role
    if (member.roles.cache.has(role.id)) {
      return interaction.reply({
        content: `✅ You already have the **${roleName}** role!`,
        ephemeral: true,
      });
    }

    // Add role
    await member.roles.add(role);

    // Store verification
    verifiedUsers.set(interaction.user.id, {
      email: email,
      product: hasPurchased.product,
      verifiedAt: new Date(),
    });

    // Post REAL sale to sales channel
    await postRealSale(email, hasPurchased.product);
    
    // Update stats immediately to match
    await updateStats();

    return interaction.reply({
      content: `🎉 **Verification Successful!**\n\n` +
               `✅ Email: **${email}**\n` +
               `✅ Product: **${hasPurchased.product}**\n` +
               `✅ Role: **${roleName}**\n\n` +
               `**You now have access to:**\n` +
               `📥 <#${DOWNLOADS_ID}> - Download your script\n` +
               `⚙️ <#${SETUP_ID}> - Installation help\n` +
               `🔧 <#${TROUBLESHOOT_ID}> - Tech support\n\n` +
               `Check <#${DOWNLOADS_ID}> now to get started! 💚`,
      ephemeral: true,
    });
  }

  if (interaction.commandName === 'invites') {
    const userId = interaction.user.id;
    const userData = inviteTracking.get(userId) || { invites: 0 };
    const inviteCount = userData.invites;
    
    let rewardStatus = '🎯 **Next Rewards:**\n';
    if (inviteCount < 3) {
      rewardStatus += `• **3 invites** = 👥 Ambassador role\n• **5 invites** = 🔥 Recruiter role + 10% discount\n• **10 invites** = ⭐ Legend role + FREE v2.0`;
    } else if (inviteCount < 5) {
      rewardStatus += `✅ Unlocked: 👥 Ambassador\n• **5 invites** = 🔥 Recruiter role + 10% discount\n• **10 invites** = ⭐ Legend role + FREE v2.0`;
    } else if (inviteCount < 10) {
      rewardStatus += `✅ Unlocked: 👥 Ambassador, 🔥 Recruiter\n• **10 invites** = ⭐ Legend role + FREE v2.0`;
    } else {
      rewardStatus = '🎉 **All rewards unlocked!**\n✅ 👥 Ambassador\n✅ 🔥 Recruiter (10% discount)\n✅ ⭐ Legend (FREE v2.0 access)';
    }
    
    const inviteEmbed = {
      color: 0x00FF00,
      title: '📊 Your Invite Stats',
      description: `**Total Invites:** ${inviteCount}\n\n${rewardStatus}`,
      fields: [
        {
          name: '🔗 Your Invite Link',
          value: 'Create a custom invite in any channel and share it!\nAll joins through your link are automatically tracked.',
        },
      ],
      footer: { text: 'Grow the community and earn exclusive rewards! 💚' },
    };
    
    return interaction.reply({
      embeds: [inviteEmbed],
      ephemeral: true,
    });
  }

  if (interaction.commandName === 'announce') {
    // Check if user has admin permissions
    if (!interaction.member.permissions.has('Administrator')) {
      return interaction.reply({
        content: '❌ Only admins can post announcements.',
        ephemeral: true,
      });
    }

    await interaction.deferReply({ ephemeral: true });
    
    const success = await postBetaLaunch();
    
    if (success) {
      return interaction.editReply({
        content: '✅ **Beta launch announcement posted!**\n\nThe @everyone announcement is now live in the announcements channel.',
      });
    } else {
      return interaction.editReply({
        content: '❌ Failed to post announcement. Check if the announcements channel exists.',
      });
    }
  }

  if (interaction.commandName === 'share') {
    const username = interaction.user.username;

    const referralMessage = `🎯 **ZenDaddy GOD FLICK v2.0 PRO** — The #1 Cronus Zen Aim Assist Script\n\n` +
      `I'm using ZenDaddy and my aim has never been better. 6 aim patterns, 23 OLED settings, per-mode control & pre-aim sticky.\n\n` +
      `💰 Only **€59.99** — one-time purchase, instant download.\n\n` +
      `🔗 Get it here: https://zendaddy.pro\n` +
      `💬 Join the community: https://discord.gg/zp2HmEgTWq\n\n` +
      `Referred by: ${username}`;

    return interaction.reply({
      content: `📋 **Your Referral Message**\n\nCopy-paste this to social media, forums, or send it to friends:\n\n\`\`\`\n${referralMessage}\n\`\`\`\n\n💡 *Share this anywhere — Twitter, Reddit, TikTok comments, gaming forums!*`,
      ephemeral: true,
    });
  }

  if (interaction.commandName === 'campaign') {
    if (!interaction.member.permissions.has('Administrator')) {
      return interaction.reply({
        content: '❌ Only admins can post campaign announcements.',
        ephemeral: true,
      });
    }

    await interaction.deferReply({ ephemeral: true });

    try {
      const guild = interaction.guild;
      let announcementChannel = guild.channels.cache.find(c => c.name === '📣│announcements');
      if (!announcementChannel) {
        announcementChannel = guild.channels.cache.find(c => c.name.includes('announcements') || c.name.includes('general'));
      }

      if (!announcementChannel) {
        return interaction.editReply({
          content: '❌ No announcement channel found.',
        });
      }

      await announcementChannel.send({
        content: `@everyone

# 🚀 GOD FLICK v2.0 PRO IS HERE

**The most advanced Cronus Zen aim assist script — now even better.**

## €59.99 — One-Time Purchase

**WHAT'S NEW IN v2.0 PRO:**
🎯 **6 Aim Patterns** — including the all-new **DYN** pattern
⚙️ **23 OLED Settings** — full control at your fingertips
🔧 **Per-Mode Control** — customize every game mode separately
🧲 **Pre-Aim Sticky** — lock on before you even ADS
🔀 **Toggle:** OPTIONS + D-PAD UP/DOWN

**OPTIONAL ADD-ON:**
🛠️ **Setup Support** — €14.99 for guided 1-on-1 installation help

**50+ players already dominating with ZenDaddy.**

**HOW TO GET IT:**
1. Go to https://zendaddy.pro
2. Get GOD FLICK v2.0 PRO for €59.99
3. Download instantly
4. Load on Zen → Dominate
5. Come back here and \`/verify\` to unlock VIP access

🔗 **https://zendaddy.pro**

See you in the lobbies. 💚`
      });

      return interaction.editReply({
        content: '✅ **v2.0 PRO campaign announcement posted!**\n\nThe @everyone announcement is now live in the announcements channel.',
      });
    } catch (error) {
      console.error('❌ Error posting campaign:', error);
      return interaction.editReply({
        content: '❌ Failed to post campaign announcement. Check bot permissions.',
      });
    }
  }
});

async function createStripeCoupon(promoCode, customerEmail) {
  const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

  if (!STRIPE_SECRET_KEY) {
    console.error('❌ STRIPE_SECRET_KEY not set');
    return { success: false, error: 'Stripe configuration error' };
  }

  try {
    // Use sanitized promo code as both coupon ID and promotion code
    const couponId = promoCode.toLowerCase().replace(/[^a-z0-9_-]/g, '');

    // Step 1: Check if promotion code already exists
    const checkPromoResponse = await fetch(`https://api.stripe.com/v1/promotion_codes?code=${promoCode}&limit=1`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      },
    });

    const promoData = await checkPromoResponse.json();

    if (promoData.data && promoData.data.length > 0) {
      console.log(`✅ Promotion code ${promoCode} already exists, reusing`);
      return { success: true, promoCode: promoCode };
    }

    // Step 2: Create coupon (if doesn't exist)
    let createdCouponId = couponId;
    
    const checkCouponResponse = await fetch(`https://api.stripe.com/v1/coupons/${couponId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      },
    });

    if (!checkCouponResponse.ok) {
      // Coupon doesn't exist, create it
      const createCouponResponse = await fetch('https://api.stripe.com/v1/coupons', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'id': couponId,
          'percent_off': '25',
          'duration': 'once',
          'name': `25% Off - ${customerEmail}`,
        }),
      });

      const couponResult = await createCouponResponse.json();

      if (!createCouponResponse.ok) {
        console.error('Stripe coupon creation error:', couponResult);
        return { 
          success: false, 
          error: couponResult.error?.message || 'Failed to create coupon' 
        };
      }

      createdCouponId = couponResult.id;
      console.log(`✅ Created Stripe coupon: ${createdCouponId}`);
    } else {
      console.log(`✅ Coupon ${couponId} already exists`);
    }

    // Step 3: Create promotion code (customer can enter this at checkout)
    const createPromoResponse = await fetch('https://api.stripe.com/v1/promotion_codes', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'coupon': createdCouponId,
        'code': promoCode,
        'max_redemptions': '1',
      }),
    });

    const promoResult = await createPromoResponse.json();

    if (!createPromoResponse.ok) {
      console.error('Stripe promotion code creation error:', promoResult);
      return { 
        success: false, 
        error: promoResult.error?.message || 'Failed to create promotion code' 
      };
    }

    console.log(`✅ Created Stripe promotion code: ${promoCode}`);
    return { success: true, promoCode: promoCode };

  } catch (error) {
    console.error('Stripe API error:', error);
    return { 
      success: false, 
      error: 'Stripe API temporarily unavailable. Try again in a few minutes.' 
    };
  }
}

async function checkStripePurchase(email) {
  const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

  if (!STRIPE_SECRET_KEY) {
    console.error('❌ STRIPE_SECRET_KEY not set');
    return { success: false };
  }

  try {
    console.log(`🔍 Checking Stripe for email: ${email}`);
    
    // Method 1: Search checkout sessions (without invalid expand)
    const sessionsResponse = await fetch(`https://api.stripe.com/v1/checkout/sessions?limit=100`, {
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      },
    });

    if (!sessionsResponse.ok) {
      console.error('❌ Failed to fetch checkout sessions:', sessionsResponse.status);
    } else {
      const sessionsData = await sessionsResponse.json();
      
      // Find sessions with matching email and paid status
      const paidSession = sessionsData.data?.find(session => {
        const sessionEmail = session.customer_details?.email?.toLowerCase();
        return sessionEmail === email.toLowerCase() && session.payment_status === 'paid';
      });

      if (paidSession) {
        console.log(`✅ Found paid checkout session for ${email}`);
        
        // Determine product type based on amount
        const amount = paidSession.amount_total || 0;
        let product = 'Beta'; // Default to Beta (€29.99 = 2999 cents)
        
        if (amount >= 24999) {
          product = 'Lifetime';
        } else if (amount >= 6999) {
          product = 'v2.0';
        }
        
        return {
          success: true,
          product: product,
          sessionId: paidSession.id,
        };
      }
    }

    // Method 2: Fallback - search customers
    const response = await fetch(`https://api.stripe.com/v1/customers?email=${encodeURIComponent(email)}&limit=1`, {
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      },
    });

    const data = await response.json();

    if (data.data && data.data.length > 0) {
      const customer = data.data[0];

      // Check if customer has successful payments
      const paymentsResponse = await fetch(`https://api.stripe.com/v1/payment_intents?customer=${customer.id}&limit=1`, {
        headers: {
          'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        },
      });

      const payments = await paymentsResponse.json();

      if (payments.data && payments.data.length > 0 && payments.data[0].status === 'succeeded') {
        const amount = payments.data[0].amount;
        let product = 'Beta';
        
        if (amount >= 24999) {
          product = 'Lifetime';
        } else if (amount >= 6999) {
          product = 'v2.0';
        }

        console.log(`✅ Found customer payment for ${email}`);
        return {
          success: true,
          product: product,
          customerId: customer.id,
        };
      }
    }

    console.log(`❌ No purchase found for ${email}`);
    return { success: false };

  } catch (error) {
    console.error('Stripe verification error:', error);
    return { 
      success: false, 
      error: 'api_error',
      message: 'Stripe API temporarily unavailable'
    };
  }
}

// Register slash commands
async function registerCommands() {
  const commands = [
    new SlashCommandBuilder()
      .setName('verify')
      .setDescription('Verify your purchase and get your role')
      .addStringOption(option =>
        option
          .setName('email')
          .setDescription('The email you used for purchase')
          .setRequired(true)
      ),
    new SlashCommandBuilder()
      .setName('discount')
      .setDescription('Get your 25% returning customer discount code')
      .addStringOption(option =>
        option
          .setName('email')
          .setDescription('The email you used for your first purchase')
          .setRequired(true)
      ),
    new SlashCommandBuilder()
      .setName('invites')
      .setDescription('Check how many people you\'ve invited and your rewards'),
    new SlashCommandBuilder()
      .setName('announce')
      .setDescription('Post beta launch announcement (Admin only)'),
    new SlashCommandBuilder()
      .setName('share')
      .setDescription('Get a personalized referral message to share on social media'),
    new SlashCommandBuilder()
      .setName('campaign')
      .setDescription('Post v2.0 PRO launch announcement (Admin only)'),
  ].map(command => command.toJSON());

  const cleanToken = process.env.DISCORD_BOT_TOKEN.split(' ')[0].trim();
  const cleanClientId = process.env.DISCORD_CLIENT_ID.split(' ')[0].trim();
  const rest = new REST({ version: '10' }).setToken(cleanToken);

  try {
    console.log('🔄 Registering slash commands...');

    await rest.put(
      Routes.applicationCommands(cleanClientId),
      { body: commands },
    );

    console.log('✅ Slash commands registered successfully!');
  } catch (error) {
    console.error('❌ Failed to register commands:', error);
  }
}

// Login
// Clean token (remove any trailing text)
const token = process.env.DISCORD_BOT_TOKEN.split(' ')[0].trim();
client.login(token);
