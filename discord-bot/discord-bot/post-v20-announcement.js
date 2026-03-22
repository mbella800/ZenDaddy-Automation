const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const DISCOUNT_CODE = 'UPGRADE15';

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);
  
  const guild = client.guilds.cache.first();
  if (!guild) {
    console.error('No guild found');
    process.exit(1);
  }

  let channel = guild.channels.cache.find(c => c.name === '📣│announcements');
  if (!channel) {
    channel = guild.channels.cache.find(c => c.name.includes('announcements'));
  }
  if (!channel) {
    channel = guild.channels.cache.find(c => c.name.includes('general'));
  }
  
  if (!channel) {
    console.error('No announcement channel found.');
    process.exit(1);
  }

  console.log(`Posting to: #${channel.name}`);

  const messages = [
    `@everyone

# GOD FLICK v2.0 PRO IS HERE

The biggest ZenDaddy update yet. Completely rebuilt from the ground up.

## WHAT IS IT?

ZenDaddy GOD FLICK is an advanced aim assist calibration script for **Cronus Zen** that enhances Fortnite's built-in aim assist. It fine-tunes your controller input in real-time so your crosshair stays on target with minimal effort.

It doesn't add anything external — it makes the game's existing aim assist work harder for you.

## WHAT'S NEW IN v2.0 PRO

**Per-Stick, Per-Mode Control**
Each stick (left & right) now has independent settings for ADS and Hip-fire. Different patterns and speeds depending on whether you're scoped in or hip-firing.

**5 Aim Patterns per Stick**
\`\`\`
CIR - Circle      (smooth rotational tracking)
DIA - Diamond     (sharp directional pulls)
CRS - Cross       (quick X-axis snaps)
FG8 - Figure-8    (continuous flowing motion)
JIT - Jitter      (random micro-adjustments)
\`\`\`
Mix and match — run Circle on right stick + Jitter on left stick.`,

    `**Pre-Aim Sticky (NEW)**
Extra dampening when you ADS without firing. Perfect for shotguns & snipers — aim first, lock on, then shoot. That "glued to the enemy" feeling before you pull the trigger.

**23 Settings Across 5 OLED Pages**
Full real-time control on your Cronus Zen screen:
\`\`\`
PAGE 1: L STICK  — Pattern, Speed, Size (ADS/HIP)
PAGE 2: R STICK  — Pattern, Speed, Size (ADS/HIP)
PAGE 3: DAMP     — ADS, Hip, Turn, Pre-Aim
PAGE 4: SYSTEM   — Deadzone, DZ Range, Track Fade
PAGE 5: BOOST    — Track, Stick, L Random, R Random
\`\`\`

**Per-Stick Randomness**
Each stick has independent random jitter using different prime-offset sequences. No correlation = natural, undetectable movement.

## HOW IT WORKS

Pulsed micro-movements on your sticks continuously trigger Fortnite's rotational aim assist while stick resistance dampening kicks in when you're on target. Your crosshair practically magnets to enemies.`,

    `## PRICING

**€59.99** — one-time payment, instant download. No subscription. Yours forever.

## EXISTING CUSTOMERS — 15% OFF

Already bought a previous version? Use code **\`${DISCOUNT_CODE}\`** at checkout for 15% off.

## HOW TO GET IT

1. Go to **https://zendaddy.pro**
2. Click **GET GOD FLICK PRO**
3. Pay via card, iDEAL, or other methods
4. Download instantly
5. Load on your Cronus Zen

## SETUP SUPPORT (OPTIONAL — €14.99)

New to Cronus Zen? We offer a live 1-on-1 Discord screenshare session where we install everything and tune settings to your playstyle. Also on the website.

Works on **PS4, PS5, Xbox One, Xbox Series X/S**.

🔗 **https://zendaddy.pro**`
  ];

  try {
    for (const msg of messages) {
      await channel.send(msg);
      await new Promise(r => setTimeout(r, 1000));
    }
    console.log('All announcement messages posted successfully!');
  } catch (error) {
    console.error('Failed to post:', error.message);
  }

  process.exit(0);
});

const token = process.env.DISCORD_BOT_TOKEN.split(' ')[0].trim();
client.login(token);
