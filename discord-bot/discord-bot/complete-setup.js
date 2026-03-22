const { Client, GatewayIntentBits, PermissionFlagsBits, ChannelType } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

async function completeSetup(guild) {
  console.log('🚀 Complete ZenDaddy Setup...\n');

  try {
    // Get or create roles
    let lifetimeRole = guild.roles.cache.find(r => r.name === '💎 LIFETIME VIP');
    if (!lifetimeRole) {
      lifetimeRole = await guild.roles.create({
        name: '💎 LIFETIME VIP',
        color: '#00FF00',
        hoist: true,
        mentionable: true,
      });
      console.log('✅ Created role: 💎 LIFETIME VIP');
    } else {
      console.log('✅ Found role: 💎 LIFETIME VIP');
    }

    let v20Role = guild.roles.cache.find(r => r.name === '⚡ v2.0 MEMBER');
    if (!v20Role) {
      v20Role = await guild.roles.create({
        name: '⚡ v2.0 MEMBER',
        color: '#39FF14',
        hoist: true,
        mentionable: true,
      });
      console.log('✅ Created role: ⚡ v2.0 MEMBER');
    } else {
      console.log('✅ Found role: ⚡ v2.0 MEMBER');
    }

    // Get existing categories
    const customersCategory = guild.channels.cache.find(c => c.name === '🛒 CUSTOMERS' && c.type === ChannelType.GuildCategory);
    const infoCategory = guild.channels.cache.find(c => c.name === '📢 INFORMATION' && c.type === ChannelType.GuildCategory);

    console.log('\n📝 Setting up essential channels...\n');

    // 1. CREATE VERIFY CHANNEL in CUSTOMERS category
    let verifyChannel = guild.channels.cache.find(c => c.name.includes('verify'));
    if (!verifyChannel) {
      verifyChannel = await guild.channels.create({
        name: '✅│verify-purchase',
        type: ChannelType.GuildText,
        parent: customersCategory?.id,
        topic: 'Verify your purchase here with /verify <email>',
        permissionOverwrites: [
          {
            id: guild.id, // @everyone can see and send
            allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
          },
        ],
      });
      console.log('✅ Created: ✅│verify-purchase');
    } else {
      console.log('✅ Found: ' + verifyChannel.name);
    }

    // 2. CREATE DOWNLOADS CHANNEL in CUSTOMERS category
    let downloadsChannel = guild.channels.cache.find(c => c.name.includes('download'));
    if (!downloadsChannel) {
      downloadsChannel = await guild.channels.create({
        name: '📥│downloads',
        type: ChannelType.GuildText,
        parent: customersCategory?.id,
        topic: 'Download your ZenDaddy script here (VIP only)',
        permissionOverwrites: [
          {
            id: guild.id,
            deny: [PermissionFlagsBits.ViewChannel],
          },
          {
            id: lifetimeRole.id,
            allow: [PermissionFlagsBits.ViewChannel],
          },
          {
            id: v20Role.id,
            allow: [PermissionFlagsBits.ViewChannel],
          },
        ],
      });
      console.log('✅ Created: 📥│downloads (VIP only)');
    } else {
      console.log('✅ Found: ' + downloadsChannel.name);
      // Update permissions
      await downloadsChannel.permissionOverwrites.set([
        {
          id: guild.id,
          deny: [PermissionFlagsBits.ViewChannel],
        },
        {
          id: lifetimeRole.id,
          allow: [PermissionFlagsBits.ViewChannel],
        },
        {
          id: v20Role.id,
          allow: [PermissionFlagsBits.ViewChannel],
        },
      ]);
    }

    // 3. CREATE/UPDATE WELCOME in INFORMATION
    let welcomeChannel = guild.channels.cache.find(c => c.name.includes('welcome'));
    if (!welcomeChannel) {
      welcomeChannel = await guild.channels.create({
        name: '👋│welcome',
        type: ChannelType.GuildText,
        parent: infoCategory?.id,
        topic: 'Welcome to ZenDaddy!',
      });
      console.log('✅ Created: 👋│welcome');
    } else {
      console.log('✅ Found: ' + welcomeChannel.name);
    }

    // 3a. CREATE REFERRAL REWARDS CHANNEL in INFORMATION
    let referralChannel = guild.channels.cache.find(c => c.name.includes('referral') || c.name.includes('invite-rewards'));
    if (!referralChannel) {
      referralChannel = await guild.channels.create({
        name: '🎁│invite-rewards',
        type: ChannelType.GuildText,
        parent: infoCategory?.id,
        topic: 'Earn rewards by inviting friends!',
      });
      console.log('✅ Created: 🎁│invite-rewards');
    } else {
      console.log('✅ Found: ' + referralChannel.name);
    }

    // 3b. CREATE CUSTOM SCRIPTS CHANNEL in INFORMATION
    let customScriptsChannel = guild.channels.cache.find(c => c.name.includes('custom') || c.name.includes('other-games'));
    if (!customScriptsChannel) {
      customScriptsChannel = await guild.channels.create({
        name: '🎯│custom-scripts',
        type: ChannelType.GuildText,
        parent: infoCategory?.id,
        topic: 'Request scripts for other games',
      });
      console.log('✅ Created: 🎯│custom-scripts');
    } else {
      console.log('✅ Found: ' + customScriptsChannel.name);
    }

    // 4. GET EXISTING CHANNELS
    const setupHelpChannel = guild.channels.cache.find(c => c.name === '⚙️│setup-help');
    const troubleshootingChannel = guild.channels.cache.find(c => c.name === '🔧│troubleshooting');

    console.log('\n💬 Adding content to channels...\n');

    // WELCOME MESSAGE
    const welcomeMessages = await welcomeChannel.messages.fetch({ limit: 10 });
    const welcomeBotMessages = welcomeMessages.filter(m => m.author.bot);
    if (welcomeBotMessages.size > 0) await welcomeChannel.bulkDelete(welcomeBotMessages);
    
    await welcomeChannel.send({
      content: `# 🎮 WELCOME TO ZENDADDY\n\n` +
               `**Get Started:**\n` +
               `1️⃣ Verify your purchase in <#${verifyChannel.id}>\n` +
               `2️⃣ Type \`/verify your@email.com\`\n` +
               `3️⃣ Get your VIP role\n` +
               `4️⃣ Access <#${downloadsChannel.id}> and <#${setupHelpChannel?.id || 'setup-help'}>\n\n` +
               `**Roles:**\n` +
               `💎 **LIFETIME VIP** - All future updates FREE forever\n` +
               `⚡ **v2.0 MEMBER** - Get 25% off future updates\n\n` +
               `**Commands:**\n` +
               `• \`/verify <email>\` - Verify purchase & get role\n` +
               `• \`/discount <email>\` - Get 25% returning customer code\n\n` +
               `**Need help?** Ask in <#${setupHelpChannel?.id || 'setup-help'}>!`
    });
    console.log('✅ Posted welcome message');

    // VERIFY INSTRUCTIONS
    const verifyMessages = await verifyChannel.messages.fetch({ limit: 10 });
    const verifyBotMessages = verifyMessages.filter(m => m.author.bot);
    if (verifyBotMessages.size > 0) await verifyChannel.bulkDelete(verifyBotMessages);
    
    await verifyChannel.send({
      content: `# ✅ VERIFY YOUR PURCHASE\n\n` +
               `**How to verify:**\n` +
               `1. Type: \`/verify your@email.com\`\n` +
               `2. Use EXACT email from Stripe purchase\n` +
               `3. Wait 1-2 minutes after payment\n\n` +
               `**You'll receive:**\n` +
               `💎 **LIFETIME VIP** - If you bought Lifetime ($249.99)\n` +
               `⚡ **v2.0 MEMBER** - If you bought v2.0 ($69.99)\n\n` +
               `**After verification:**\n` +
               `• Access <#${downloadsChannel.id}> for downloads\n` +
               `• Get help in <#${setupHelpChannel?.id || 'setup-help'}>\n\n` +
               `**Returning customer?**\n` +
               `Type \`/discount your@email.com\` for 25% off code!`
    });
    console.log('✅ Posted verify instructions');

    // DOWNLOADS INFO
    const downloadMessages = await downloadsChannel.messages.fetch({ limit: 10 });
    const downloadBotMessages = downloadMessages.filter(m => m.author.bot);
    if (downloadBotMessages.size > 0) await downloadsChannel.bulkDelete(downloadBotMessages);
    
    await downloadsChannel.send({
      content: `# 📥 DOWNLOAD ZENDADDY SCRIPT\n\n` +
               `**Download Link:**\n` +
               `🔗 [Click here to download](https://zendaddy.pro/downloads/zendaddy_magnetic_ultimate.gpc)\n\n` +
               `**Installation Steps:**\n` +
               `1. Download: \`zendaddy_magnetic_ultimate.gpc\`\n` +
               `2. Open **Zen Studio** on your PC\n` +
               `3. Connect your **Cronus Zen** device via USB\n` +
               `4. Upload the .gpc file to **Slot 1**\n` +
               `5. Press the **program button** on your Zen to activate\n\n` +
               `**OLED Menu Controls:**\n` +
               `• **L2 + Options** = Open settings menu\n` +
               `• **Circle** = Close menu\n` +
               `• **D-Pad** = Navigate & adjust sliders\n\n` +
               `**8 Professional Sliders:**\n` +
               `• **STRENGTH** - Overall aim enhancement power (0-200%)\n` +
               `• **SMOOTHNESS** - Movement fluidity (0-200%)\n` +
               `• **ROTATION** - Tracking strength (0-200%)\n` +
               `• **CLOSE** - Close range aim (0-200%)\n` +
               `• **MEDIUM** - Medium range aim (0-200%)\n` +
               `• **FAR** - Long range aim (0-200%)\n` +
               `• **TRICKSHOT** - Special trickshot mode (0-200%)\n` +
               `• **DEADZONE** - Stick sensitivity (0-200%)\n\n` +
               `💡 **Recommended Settings:**\n` +
               `• STRENGTH: 70-90%\n` +
               `• SMOOTHNESS: 60-80%\n` +
               `• ROTATION: 75-85%\n\n` +
               `Need help? Ask in <#${troubleshootingChannel?.id || 'troubleshooting'}>!`
    });
    console.log('✅ Posted download guide');

    // UPDATE TROUBLESHOOTING
    if (troubleshootingChannel) {
      await troubleshootingChannel.permissionOverwrites.set([
        {
          id: guild.id,
          deny: [PermissionFlagsBits.ViewChannel],
        },
        {
          id: lifetimeRole.id,
          allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
        },
        {
          id: v20Role.id,
          allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
        },
      ]);

      const tsMessages = await troubleshootingChannel.messages.fetch({ limit: 10 });
      const tsBotMessages = tsMessages.filter(m => m.author.bot);
      if (tsBotMessages.size > 0) await troubleshootingChannel.bulkDelete(tsBotMessages);
      
      await troubleshootingChannel.send({
        content: `# 🔧 TROUBLESHOOTING\n\n` +
                 `**Common Issues & Solutions:**\n\n` +
                 `❓ **Script not activating?**\n` +
                 `• Press **program button** on Zen to toggle\n` +
                 `• Check OLED display for "ACTIVE" status\n` +
                 `• Restart Cronus Zen device\n` +
                 `• Re-upload .gpc file to Slot 1\n\n` +
                 `❓ **Aim feels too strong/weak?**\n` +
                 `• Open menu: **L2 + Options**\n` +
                 `• Adjust **STRENGTH** slider (try 70-90%)\n` +
                 `• Adjust **SMOOTHNESS** (try 60-80%)\n` +
                 `• Fine-tune **ROTATION** (try 75-85%)\n\n` +
                 `❓ **Menu won't open?**\n` +
                 `• Hold **L2** first, then press **Options**\n` +
                 `• Make sure script is active (use Zen program button)\n` +
                 `• Check OLED display\n\n` +
                 `❓ **Aim drifting/inconsistent?**\n` +
                 `• Adjust **DEADZONE** slider\n` +
                 `• Increase if too sensitive\n` +
                 `• Decrease if not responsive\n\n` +
                 `❓ **Different feel in ADS vs Hip-Fire?**\n` +
                 `• This is normal - script auto-adjusts\n` +
                 `• Tune **ROTATION** for tracking\n` +
                 `• Adjust **CLOSE/MEDIUM/FAR** for ranges\n\n` +
                 `💡 **Pro Tips:**\n` +
                 `• Start with default settings (50% = neutral)\n` +
                 `• Adjust one slider at a time\n` +
                 `• Test in Creative mode first\n` +
                 `• Save your preferred settings\n\n` +
                 `Still need help? Ask here! We usually respond within a few hours. 💚`
      });
      console.log('✅ Posted troubleshooting guide');
    }

    // REFERRAL REWARDS INFO
    const referralMessages = await referralChannel.messages.fetch({ limit: 10 });
    const referralBotMessages = referralMessages.filter(m => m.author.bot);
    if (referralBotMessages.size > 0) await referralChannel.bulkDelete(referralBotMessages);
    
    await referralChannel.send({
      content: `# 🎁 INVITE REWARDS PROGRAM\n\n` +
               `**Earn exclusive rewards by inviting friends to ZenDaddy!**\n\n` +
               `**How it works:**\n` +
               `1. Create your personal invite link in any channel\n` +
               `2. Share it with friends on Discord, Twitter, Reddit, etc.\n` +
               `3. When someone joins using your link, you get credit!\n` +
               `4. Check progress with \`/invites\` command\n\n` +
               `**🏆 Reward Tiers:**\n\n` +
               `**3 INVITES** = 👥 **Ambassador Role**\n` +
               `• Special role color\n` +
               `• Recognition in the community\n\n` +
               `**5 INVITES** = 🔥 **Recruiter Role + 10% Discount**\n` +
               `• Exclusive Recruiter role\n` +
               `• 10% discount code for any product\n` +
               `• Early access to updates\n\n` +
               `**10 INVITES** = ⭐ **Legend Role + FREE v2.0**\n` +
               `• Legendary status role\n` +
               `• FREE ZenDaddy v2.0 script ($69.99 value!)\n` +
               `• VIP priority support\n` +
               `• Lifetime recognition\n\n` +
               `**💡 Tips to get invites:**\n` +
               `• Share in gaming Discord servers\n` +
               `• Post on r/CronusZen, r/FortniteCompetitive\n` +
               `• Share on Twitter/X with #CronusZen #Fortnite\n` +
               `• Tell your squad/friends who play Fortnite\n\n` +
               `**Track your progress:**\n` +
               `Type \`/invites\` to see how many you've referred!\n\n` +
               `🚀 Start inviting and earn rewards today!`
    });
    console.log('✅ Posted referral rewards info');

    // CUSTOM SCRIPTS INFO
    const customMessages = await customScriptsChannel.messages.fetch({ limit: 10 });
    const customBotMessages = customMessages.filter(m => m.author.bot);
    if (customBotMessages.size > 0) await customScriptsChannel.bulkDelete(customBotMessages);
    
    await customScriptsChannel.send({
      content: `# 🎯 CUSTOM SCRIPTS FOR OTHER GAMES\n\n` +
               `**Looking for aim enhancement scripts for other games?**\n` +
               `We can build custom scripts for any game!\n\n` +
               `**Games we can script for:**\n` +
               `• Call of Duty (Warzone, MW3, BO6)\n` +
               `• Apex Legends\n` +
               `• Valorant (controller on PC)\n` +
               `• Rainbow Six Siege\n` +
               `• Overwatch 2\n` +
               `• Destiny 2\n` +
               `• Any other FPS/TPS game\n\n` +
               `**What we can create:**\n` +
               `✅ Aim assist enhancement\n` +
               `✅ Recoil control scripts\n` +
               `✅ Movement optimization\n` +
               `✅ Custom OLED sliders for fine-tuning\n` +
               `✅ Game-specific mechanics (slide cancel, bunny hop, etc.)\n\n` +
               `**How to request:**\n` +
               `1. Tell us which game you want\n` +
               `2. Describe what features you need\n` +
               `3. We'll analyze the game mechanics\n` +
               `4. Create a custom script tailored to your needs\n\n` +
               `**Pricing:**\n` +
               `• Single game script: $79.99\n` +
               `• Multi-game bundle: Starting at $149.99\n` +
               `• Lifetime updates included\n\n` +
               `💬 **Interested? Message us here!**\n` +
               `Or open a ticket in support to discuss your custom script needs.\n\n` +
               `We'll respond within 24 hours with a development timeline and final quote! 🚀`
    });
    console.log('✅ Posted custom scripts info');

    // UPDATE SETUP HELP
    if (setupHelpChannel) {
      await setupHelpChannel.permissionOverwrites.set([
        {
          id: guild.id,
          deny: [PermissionFlagsBits.ViewChannel],
        },
        {
          id: lifetimeRole.id,
          allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
        },
        {
          id: v20Role.id,
          allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
        },
      ]);

      const shMessages = await setupHelpChannel.messages.fetch({ limit: 10 });
      const shBotMessages = shMessages.filter(m => m.author.bot);
      if (shBotMessages.size > 0) await setupHelpChannel.bulkDelete(shBotMessages);
      
      await setupHelpChannel.send({
        content: `# ⚙️ SETUP HELP\n\n` +
                 `**Need setup assistance? Ask here!**\n\n` +
                 `**Quick Start:**\n` +
                 `1. Download script from <#${downloadsChannel.id}>\n` +
                 `2. Install via Zen Studio\n` +
                 `3. Use Zen program button to activate\n` +
                 `4. Configure sliders (L2 + Options)\n\n` +
                 `**First Time Setup:**\n` +
                 `• Install Zen Studio on PC\n` +
                 `• Connect Cronus Zen via USB\n` +
                 `• Upload .gpc to Slot 1\n` +
                 `• Connect controller to Zen\n` +
                 `• Press program button on Zen to activate\n\n` +
                 `**Returning Customer Discount:**\n` +
                 `Type \`/discount your@email.com\` in <#${verifyChannel.id}> for 25% off!\n\n` +
                 `We respond within a few hours 💚`
      });
      console.log('✅ Posted setup help info');
    }

    console.log('\n✨ COMPLETE SETUP FINISHED! ✨');
    console.log('\n📋 Summary:');
    console.log('   ✅ Roles: 💎 LIFETIME VIP, ⚡ v2.0 MEMBER');
    console.log('   ✅ Channels: verify, downloads, welcome, setup, troubleshooting');
    console.log('   ✅ Permissions: VIP-only access configured');
    console.log('   ✅ Content: All instructions posted');
    console.log('\n🎯 System Ready:');
    console.log('   • Customers verify in: ' + verifyChannel.name);
    console.log('   • Downloads in: ' + downloadsChannel.name);
    console.log('   • Support in: setup-help & troubleshooting');

  } catch (error) {
    console.error('❌ Error:', error);
  }

  process.exit(0);
}

client.once('ready', async () => {
  console.log(`🤖 Logged in as ${client.user.tag}\n`);
  
  const guild = client.guilds.cache.first();
  
  if (!guild) {
    console.error('❌ Bot not in any server!');
    process.exit(1);
  }

  console.log(`🏠 Server: ${guild.name}\n`);
  
  await completeSetup(guild);
});

const token = process.env.DISCORD_BOT_TOKEN.split(' ')[0].trim();
client.login(token);
