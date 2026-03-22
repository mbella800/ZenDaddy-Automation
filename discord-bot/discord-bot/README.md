# ZenDaddy Discord Verification Bot

## Setup Instructions

### 1. Create Discord Bot
1. Go to https://discord.com/developers/applications
2. Click "New Application" → Name it "ZenDaddy Bot"
3. Go to "Bot" tab → Click "Add Bot"
4. **Copy the Bot Token** (you'll need this)
5. Enable these **Privileged Gateway Intents**:
   - ✅ SERVER MEMBERS INTENT
   - ✅ MESSAGE CONTENT INTENT

### 2. Get Client ID
1. Go to "OAuth2" → "General"
2. **Copy your Client ID**

### 3. Invite Bot to Server
1. Go to "OAuth2" → "URL Generator"
2. Select scopes:
   - ✅ `bot`
   - ✅ `applications.commands`
3. Select bot permissions:
   - ✅ Manage Roles
   - ✅ Send Messages
   - ✅ Use Slash Commands
4. **Copy the generated URL** and open it in browser
5. Select your Discord server → Authorize

### 4. Create Discord Roles
In your Discord server, create these roles:
- `💎 LIFETIME VIP` (for Lifetime buyers)
- `⚡ v2.0 MEMBER` (for v2.0 buyers)

**Important:** Make sure the bot's role is **ABOVE** these roles in the role hierarchy!

### 5. Configure Environment Variables
1. Copy `.env.example` to `.env`
2. Fill in your credentials:
   ```
   DISCORD_BOT_TOKEN=your_bot_token_from_step_1
   DISCORD_CLIENT_ID=your_client_id_from_step_2
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

### 6. Install Dependencies & Run
```bash
npm install
npm start
```

## Usage

### For Customers
After purchasing, customers should:
1. Join Discord server: https://discord.gg/zp2HmEgTWq
2. Type: `/verify email@example.com`
3. Bot checks Stripe, assigns role automatically!

### Bot Commands
- `/verify <email>` - Verify purchase and get role

## How It Works
1. Customer buys product on Stripe
2. Customer joins Discord
3. Customer runs `/verify their@email.com`
4. Bot checks Stripe API for purchases
5. If found, assigns role based on product:
   - Lifetime ($249.99) → `💎 LIFETIME VIP`
   - v2.0 ($69.99) → `⚡ v2.0 MEMBER`

## Troubleshooting

**Bot not responding?**
- Check bot is online (green dot in Discord)
- Verify bot has "Use Slash Commands" permission
- Re-register commands: restart bot

**Role not added?**
- Check bot role is ABOVE customer roles in hierarchy
- Verify "Manage Roles" permission enabled

**Email not found?**
- Customer must use exact email from Stripe purchase
- Check Stripe Dashboard → Customers for correct email
