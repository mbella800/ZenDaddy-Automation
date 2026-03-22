'use client';

import { useState } from 'react';

interface ContentBlock {
  platform: string;
  icon: string;
  label: string;
  text: string;
}

function CopyBlock({ platform, icon, label, text }: ContentBlock) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card p-6 mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <span className="text-matrix-green font-terminal font-bold text-sm uppercase tracking-wider">{platform}</span>
          <span className="text-gray-500 font-terminal text-xs">— {label}</span>
        </div>
        <button
          onClick={handleCopy}
          className="btn-neon px-4 py-1.5 text-sm font-terminal"
        >
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>
      </div>
      <pre className="whitespace-pre-wrap text-gray-300 font-terminal text-sm leading-relaxed bg-black/60 border border-lime-500/10 rounded-lg p-4 overflow-x-auto">{text}</pre>
    </div>
  );
}

export default function MarketingPage() {
  const redditPosts: ContentBlock[] = [
    {
      platform: 'Reddit',
      icon: '🟠',
      label: 'r/CronusZen — Technical Discussion',
      text: `Anyone else experimenting with different aim patterns on Fortnite Chapter 7?

I've been messing around with polar vs circular patterns and honestly the difference is massive once you understand how Fortnite's native aim assist works underneath.

For context — Fortnite uses a slowdown cone that reduces your stick velocity when your crosshair is near a target. Most scripts just layer a fixed anti-recoil or a basic circle on top, which actually fights the native assist and makes it feel "sticky" in a bad way.

What worked for me: I switched to a script that uses a dynamic pattern — basically it varies the micro-movement shape and intensity so it doesn't interfere with the slowdown cone. Think of it as adding natural thumb drift instead of a rigid pattern.

I'm running ZenDaddy's GOD FLICK and the DYN pattern does exactly this. You can also split ADS and hip-fire settings per stick which makes a huge difference for shotgun fights vs AR tracking.

If anyone wants to compare settings, my current setup:
- Pattern: DYN (dynamic human-like)
- ADS strength: ~35-40
- Hip-fire: ~20
- Pre-aim sticky: ON (great for snipers)
- Toggle: OPTIONS + D-PAD UP

Curious what patterns you guys are running. Drop your configs.`
    },
    {
      platform: 'Reddit',
      icon: '🟠',
      label: 'r/FortniteBR — Testimonial Style',
      text: `My aim improved massively and I want to share what changed

So I've been playing Fortnite since Chapter 1 and my aim was always... okay. Like I could hold my own but I'd lose 70% of close-range fights and never won a snipe duel.

Last month I got a Cronus Zen (yeah yeah, I know what people think) and tried a couple free scripts. They were trash honestly — aim felt robotic and I was WORSE than without it.

Then I tried ZenDaddy GOD FLICK and everything clicked. The difference is it has like 23 settings you can adjust ON the OLED screen while playing. So instead of guessing what values work, you just tweak it mid-game until it feels right.

The big thing for me was the per-mode control — I run totally different settings for ADS vs hip-fire. My AR tracking is smooth now and my shotgun flicks actually connect.

Went from like a 1.2 KD to 2.8 this season. Not even kidding. My duo partner thought I was cheating lmao.

Not trying to advertise, just sharing what worked for me. If anyone's on the fence about Zen scripts, don't waste money on free ones — they'll make your aim worse. zendaddy.pro if you want to check it out.

GGs only 🤝`
    },
    {
      platform: 'Reddit',
      icon: '🟠',
      label: 'r/FortniteCompetitive — Technical Breakdown',
      text: `Technical breakdown: How DYN aim patterns sync with Fortnite's aim assist engine

I've been reverse-engineering how different aim scripts interact with Fortnite's native aim assist and wanted to share some findings for the competitive community.

**How Fortnite's aim assist actually works (simplified):**
- There's a slowdown cone around each player hitbox
- When your crosshair enters this cone, stick input velocity is reduced (the "sticky" feeling)
- There's also a rotational component that nudges your crosshair toward center-mass
- These values change based on distance, weapon type, and ADS state

**Why most scripts feel bad:**
Traditional scripts use a fixed circular or polar pattern at constant intervals. This creates a predictable micro-movement that CONFLICTS with the slowdown cone. The native assist tries to slow you down, but the script keeps pushing at the same rate. Result: jittery, unnatural aim that actually reduces your accuracy.

**What DYN pattern does differently:**
The DYN (Dynamic Human-Like) pattern in ZenDaddy varies three things:
1. Pattern shape — alternates between micro-shapes instead of a fixed circle
2. Timing intervals — randomized within a range so it mimics natural thumb movement
3. Intensity scaling — reduces strength when the slowdown cone is already active

This means the script WORKS WITH the native assist instead of fighting it. Your crosshair moves naturally and the aim assist activates consistently.

**Per-mode control matters:**
ADS tracking (ARs, SMGs) needs different micro-movement than hip-fire (shotguns, SMGs close range). Being able to set different patterns and strengths per mode per stick is genuinely important for competitive play.

If anyone wants the technical details on how Fortnite's slowdown values scale with distance, I can write a follow-up post.

Script I'm referencing: ZenDaddy GOD FLICK v3.0 — zendaddy.pro`
    }
  ];

  const tiktokCaptions: ContentBlock[] = [
    {
      platform: 'TikTok',
      icon: '🎵',
      label: 'Hook — POV Style',
      text: `POV: You just turned on ZenDaddy and your first game looks like this... 🎯

23 settings. 6 aim patterns. One-time €59.99. No monthly fees.

Link in bio 🔗

#fortnite #cronuszen #aimassist #godflick #chapter7 #controller #fortniteclips #aimbot #cronuszenfortnite #gaming #zendaddy`
    },
    {
      platform: 'TikTok',
      icon: '🎵',
      label: 'Hook — Aimbot Accusation',
      text: `They thought I was using aimbot... nah it's just DYN pattern doing its thing 😮‍💨

This is what 29 OLED settings and per-mode aim control looks like on Cronus Zen.

ZenDaddy GOD FLICK v3.0 🔥 Link in bio

#fortnite #cronuszen #aimassist #godflick #chapter7 #controller #fortniteclips #viral #cronuszenfortnite #zendaddy`
    },
    {
      platform: 'TikTok',
      icon: '🎵',
      label: 'Hook — Before/After',
      text: `My aim BEFORE vs AFTER ZenDaddy... the difference is insane 📈

6 aim patterns including DYN (human-like movement)
23 real-time OLED settings
Per-mode ADS + hip-fire control

One-time purchase. No subscription. €59.99

@zendaddy.pro 🔗

#fortnite #cronuszen #aimassist #godflick #chapter7 #controller #beforeandafter #gaming #fyp #zendaddy`
    }
  ];

  const youtubeDescriptions: ContentBlock[] = [
    {
      platform: 'YouTube',
      icon: '▶️',
      label: 'Full Video Description',
      text: `🎯 ZenDaddy GOD FLICK v3.0 PRO — Best Cronus Zen Fortnite Script 2026

In this video I'm showcasing the ZenDaddy GOD FLICK v3.0 PRO aim assist script for Cronus Zen. This is hands down the most advanced Fortnite script available with 29 OLED settings, 6 aim patterns, per-mode control, and the new DYN human-like aim pattern.

🔗 GET IT HERE: https://zendaddy.pro
💬 DISCORD: https://discord.gg/zp2HmEgTWq
🎵 TIKTOK: https://tiktok.com/@zendaddy.pro

⏱️ TIMESTAMPS:
0:00 - Intro & Overview
0:30 - OLED Settings Walkthrough
2:00 - Aim Pattern Comparison (Circle vs DYN)
4:00 - ADS vs Hip-Fire Settings
5:30 - Live Gameplay & Results
8:00 - Final Thoughts & Verdict

📋 FEATURES:
✅ 29 OLED Settings (5 menu pages)
✅ 6 Aim Patterns: Circle, Diamond, Cross, Figure-8, Jitter, DYN
✅ Per-Mode ADS/Hip-Fire Control Per Stick
✅ Pre-Aim Sticky for One-Shot Weapons
✅ Human-Like DYN Pattern (undetectable feel)
✅ Toggle: OPTIONS + D-PAD UP (on) / DOWN (off)
✅ One-Time Purchase: €59.99
✅ Lifetime Free Updates
✅ 24/7 Discord Support

🔑 KEYWORDS:
fortnite aim assist, cronus zen, cronus zen fortnite, fortnite zen script, best aim assist script, cronus zen script 2026, fortnite controller script, best zen script, fortnite aim assist 2026, cronus zen aim assist, god flick, zendaddy, fortnite chapter 7, cronus zen chapter 7, aim assist script, fortnite competitive, controller aim assist

#fortnite #cronuszen #aimassist #godflick #zendaddy #chapter7 #controller`
    },
    {
      platform: 'YouTube',
      icon: '▶️',
      label: 'Shorts Description',
      text: `This is ZenDaddy GOD FLICK v3.0 🎯 Best Cronus Zen aim assist for Fortnite 2026

29 OLED settings • 6 aim patterns • DYN human-like mode
One-time €59.99 — no subscription

🔗 https://zendaddy.pro
💬 https://discord.gg/zp2HmEgTWq

#fortnite #cronuszen #aimassist #godflick #shorts #chapter7 #controller #zendaddy`
    }
  ];

  const twitterPosts: ContentBlock[] = [
    {
      platform: 'Twitter/X',
      icon: '🐦',
      label: 'Tweet — Feature Highlight',
      text: `29 OLED settings. 6 aim patterns. Per-mode ADS/hip-fire control. DYN human-like pattern.

ZenDaddy GOD FLICK v3.0 PRO — the only Cronus Zen Fortnite script you'll ever need.

€59.99 one-time. No subscription. Lifetime updates.

🔗 zendaddy.pro

#Fortnite #CronusZen #AimAssist #Chapter7`
    },
    {
      platform: 'Twitter/X',
      icon: '🐦',
      label: 'Tweet — Results Focus',
      text: `Went from 1.2 KD to 2.8 this season with ZenDaddy GOD FLICK 🎯

The DYN aim pattern feels like natural thumb movement — no robotic jitter, just clean tracking.

23 settings you can adjust ON the OLED while playing. Game changer.

zendaddy.pro

#Fortnite #CronusZen #Controller`
    },
    {
      platform: 'Twitter/X',
      icon: '🐦',
      label: 'Tweet — Quick Promo',
      text: `Still using free Cronus Zen scripts? 💀

ZenDaddy GOD FLICK v3.0 has 29 OLED settings, 6 aim patterns including DYN, and per-mode control.

€59.99 once. No monthly fees. Lifetime updates.

Your aim will thank you 🤝

zendaddy.pro #Fortnite #CronusZen`
    }
  ];

  const facebookPosts: ContentBlock[] = [
    {
      platform: 'Facebook',
      icon: '📘',
      label: 'Fortnite Gaming Group',
      text: `Hey everyone 👋 Wanted to share something that's been working really well for me this season.

I've been using Cronus Zen with the ZenDaddy GOD FLICK v3.0 script and my aim has improved massively. Not gonna lie, I was skeptical because I tried a couple free scripts before and they were terrible — felt robotic and actually made my aim worse.

The difference with this one is you get 23 settings on the OLED screen that you can adjust WHILE playing. No need to restart or plug into a PC every time you want to change something. And it has 6 different aim patterns — I use the DYN (dynamic) one which feels like natural thumb movement instead of a rigid circle pattern.

Best part: it's a one-time purchase (€59.99) with lifetime updates. No monthly subscription BS.

If anyone's running Cronus Zen for Fortnite and wants to compare settings, drop a comment. Happy to share my config.

🔗 zendaddy.pro
💬 Discord: discord.gg/zp2HmEgTWq`
    },
    {
      platform: 'Facebook',
      icon: '📘',
      label: 'Cronus Zen Group',
      text: `For anyone looking for a solid Fortnite script that actually works with Chapter 7's aim assist changes — check out ZenDaddy GOD FLICK v3.0 PRO.

Quick rundown of what makes it different:
✅ 29 OLED settings across 5 menu pages
✅ 6 aim patterns (Circle, Diamond, Cross, Figure-8, Jitter, DYN)
✅ Per-mode ADS/Hip-fire control per stick
✅ Pre-aim sticky for snipers and one-shot weapons
✅ DYN pattern = human-like micro-movement (no robotic feel)
✅ Toggle on/off: OPTIONS + D-PAD UP / DOWN

The DYN pattern is the key feature — it varies the aim pattern shape and timing to work WITH Fortnite's native aim assist instead of fighting it. Feels completely natural.

€59.99 one-time purchase with lifetime updates and Discord support.

🔗 zendaddy.pro
💬 discord.gg/zp2HmEgTWq`
    }
  ];

  const forumPosts: ContentBlock[] = [
    {
      platform: 'Forum',
      icon: '💬',
      label: 'Gaming Forum — Detailed Review',
      text: `[REVIEW] ZenDaddy GOD FLICK v3.0 PRO — Cronus Zen Fortnite Script

Been using this for about 3 weeks now and figured I'd write up a proper review since there's not a lot of honest info out there about Zen scripts.

BACKGROUND:
I've tried Panda Aim, SS Nikolai, Storm Scripts, and a couple others. Most of them use basic polar/circular patterns with no live adjustment. You download the script, load it, and hope the default settings work for your sensitivity. They usually don't.

WHAT'S DIFFERENT ABOUT ZENDADDY:
The main selling point is the 29 OLED settings across 5 menu pages. You can adjust literally everything on the Zen's screen without restarting:
- Aim pattern type (6 options: Circle, Diamond, Cross, Figure-8, Jitter, DYN)
- Strength per stick (right stick + left stick separate)
- ADS vs hip-fire toggle (different settings per mode)
- Pre-aim sticky intensity
- Step timing and radius

The DYN pattern is unique — it randomizes the micro-movement shape and timing to mimic natural thumb drift. Other scripts use a fixed circle that feels robotic and actually interferes with Fortnite's native aim assist slowdown. DYN works WITH the native assist.

RESULTS:
- AR tracking: Significantly improved. Beams feel consistent now.
- Shotgun fights: Per-mode hip-fire settings are clutch. Lower strength for hip-fire so flicks feel natural.
- Sniping: Pre-aim sticky holds the crosshair on target before you fire. Landing way more snipes.
- Overall KD went from ~1.5 to ~2.5 over 3 weeks.

PROS:
+ 23 real-time OLED settings
+ 6 aim patterns with DYN mode
+ Per-mode ADS/hip-fire control per stick
+ Natural feel — doesn't fight native aim assist
+ One-time €59.99 (no subscription)
+ Lifetime updates + Discord support
+ Toggle: OPTIONS + D-PAD UP (on) / DOWN (off)

CONS:
- Requires Cronus Zen (obviously)
- Takes 10-15 minutes to dial in your perfect settings
- Slightly pricier than some alternatives (but worth it)

VERDICT: 9/10
Best Fortnite Zen script I've used. The OLED settings and DYN pattern are genuine game-changers. If you're serious about improving your aim on controller, this is the one.

Website: https://zendaddy.pro
Discord: https://discord.gg/zp2HmEgTWq`
    },
    {
      platform: 'Forum',
      icon: '💬',
      label: 'Gaming Forum — Settings Share',
      text: `[SETTINGS] My ZenDaddy GOD FLICK v3.0 Settings for Fortnite Chapter 7

Sharing my current config for anyone running ZenDaddy. These settings work great for aggressive playstyle (push everything, shotgun-heavy).

GENERAL:
- Script: ZenDaddy GOD FLICK v3.0 PRO
- Game: Fortnite Chapter 7
- Controller: PS5 DualSense
- Sensitivity: 45/45 with 2.0x ADS multiplier

AIM SETTINGS (ADS — Right Stick):
- Pattern: DYN
- Strength: 38
- Radius: 12
- Step: 8ms
- Pre-aim sticky: ON (strength 25)

AIM SETTINGS (Hip-Fire — Right Stick):
- Pattern: Circle
- Strength: 22
- Radius: 8
- Step: 10ms

LEFT STICK (Movement):
- Pattern: OFF (I don't use aim on left stick)

TOGGLE: OPTIONS + D-PAD UP (on) / DOWN (off)

NOTES:
- DYN on ADS gives you the best tracking for ARs and SMGs
- Circle on hip-fire keeps shotgun flicks clean
- Pre-aim sticky is amazing for snipers — your crosshair holds position when you ADS without firing
- Keep hip-fire strength lower than ADS or close-range fights feel sluggish
- Adjust while playing using the OLED — no need to restart

Drop your settings below if you're running ZenDaddy. Always looking to optimize.

Get it here: https://zendaddy.pro
Discord for settings help: https://discord.gg/zp2HmEgTWq`
    }
  ];

  const sections = [
    { title: 'Reddit Posts', items: redditPosts },
    { title: 'TikTok Captions', items: tiktokCaptions },
    { title: 'YouTube Descriptions', items: youtubeDescriptions },
    { title: 'Twitter/X Posts', items: twitterPosts },
    { title: 'Facebook Group Posts', items: facebookPosts },
    { title: 'Forum Posts', items: forumPosts },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-matrix-green font-terminal">📋 Marketing</span>{' '}
            <span className="text-white font-terminal">Content Hub</span>
          </h1>
          <p className="text-gray-400 font-terminal text-sm">
            Internal use only — Copy-paste ready content for all platforms
          </p>
          <div className="mt-4 inline-block bg-black/60 border border-lime-500/30 rounded-lg px-4 py-2">
            <p className="text-matrix-green font-terminal text-xs">
              🔒 NOT publicly linked • Click "Copy" to grab any post
            </p>
          </div>
        </div>

        <nav className="glass-card p-4 mb-10 sticky top-4 z-50">
          <div className="flex flex-wrap gap-3 justify-center">
            {sections.map((section) => (
              <a
                key={section.title}
                href={`#${section.title.toLowerCase().replace(/[\s\/]+/g, '-')}`}
                className="btn-neon px-3 py-1.5 text-xs font-terminal"
              >
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        {sections.map((section) => (
          <section
            key={section.title}
            id={section.title.toLowerCase().replace(/[\s\/]+/g, '-')}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 border-b border-lime-500/30 pb-3">
              <span className="text-matrix-green font-terminal">{section.title}</span>
            </h2>
            {section.items.map((item, i) => (
              <CopyBlock key={i} {...item} />
            ))}
          </section>
        ))}

        <footer className="text-center text-gray-600 font-terminal text-xs mt-20 border-t border-lime-500/10 pt-8">
          <p>ZenDaddy Internal Marketing Content • Do not share this page publicly</p>
        </footer>
      </div>
    </main>
  );
}