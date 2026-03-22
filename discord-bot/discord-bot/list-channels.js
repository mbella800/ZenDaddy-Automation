const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
  ],
});

client.once('ready', async () => {
  console.log(`🤖 Logged in as ${client.user.tag}\n`);
  
  const guild = client.guilds.cache.first();
  
  if (!guild) {
    console.error('❌ Bot is not in any server!');
    process.exit(1);
  }

  console.log(`📋 ALL CHANNELS IN: ${guild.name}\n`);
  console.log('=' .repeat(50));
  
  // Categories
  const categories = guild.channels.cache.filter(c => c.type === 4);
  
  categories.forEach(cat => {
    console.log(`\n📁 CATEGORY: ${cat.name}`);
    console.log('-'.repeat(50));
    
    // Text channels in this category
    const textChannels = guild.channels.cache.filter(c => c.parentId === cat.id && c.type === 0);
    textChannels.forEach(ch => {
      console.log(`   💬 ${ch.name}`);
    });
    
    // Voice channels in this category
    const voiceChannels = guild.channels.cache.filter(c => c.parentId === cat.id && c.type === 2);
    voiceChannels.forEach(ch => {
      console.log(`   🔊 ${ch.name}`);
    });
  });
  
  // Channels without category
  const noCategoryText = guild.channels.cache.filter(c => !c.parentId && c.type === 0);
  const noCategoryVoice = guild.channels.cache.filter(c => !c.parentId && c.type === 2);
  
  if (noCategoryText.size > 0 || noCategoryVoice.size > 0) {
    console.log(`\n📁 NO CATEGORY`);
    console.log('-'.repeat(50));
    noCategoryText.forEach(ch => {
      console.log(`   💬 ${ch.name}`);
    });
    noCategoryVoice.forEach(ch => {
      console.log(`   🔊 ${ch.name}`);
    });
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('\n✅ Copy the exact channel names you want to use!');
  
  process.exit(0);
});

const token = process.env.DISCORD_BOT_TOKEN.split(' ')[0].trim();
client.login(token);
