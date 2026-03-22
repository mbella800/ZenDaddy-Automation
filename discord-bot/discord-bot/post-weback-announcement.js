const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);

  try {
    const guild = client.guilds.cache.first();
    if (!guild) { console.log('No guild found'); process.exit(1); }

    let channel = guild.channels.cache.find(c => c.name === '📣│announcements');
    if (!channel) channel = guild.channels.cache.find(c => c.name.includes('announcements') || c.name.includes('general'));
    if (!channel) { console.log('No announcement channel found'); process.exit(1); }

    await channel.send({
      content: `@everyone

# 💚 15% OFF — WE'RE BACK ONLINE

Website was down for maintenance — everything is fully back up and running.

To make it up to you, here's an exclusive discount:

## 🎟️ Use code \`WEBACK15\` at checkout for 15% OFF

⏰ **Expires: April 1st, 23:59 UTC**
⚠️ **One-time use only** — first come, first served

🔗 **Grab it now:** https://www.zendaddy.pro

Don't sleep on it.`
    });

    console.log('✅ WEBACK15 announcement posted!');
  } catch (err) {
    console.error('Error:', err);
  }

  process.exit(0);
});

const token = process.env.DISCORD_BOT_TOKEN.split(' ')[0].trim();
client.login(token);
