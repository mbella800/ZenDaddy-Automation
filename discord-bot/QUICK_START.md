# 🚀 ZENDADDY DISCORD BOT - QUICK START

## SUPER SNELLE SETUP (5 minuten)

### ✅ Stap 1: Discord Bot Aanmaken
1. Ga naar: **https://discord.com/developers/applications**
2. Klik **"New Application"** → Naam: `ZenDaddy Bot`
3. Ga naar **"Bot"** tab
4. Klik **"Reset Token"** → **KOPIEER HET TOKEN** (bewaar deze!)
5. Scroll naar beneden, zet deze 2 aan:
   - ✅ **SERVER MEMBERS INTENT**
   - ✅ **MESSAGE CONTENT INTENT**
6. Klik **"Save Changes"**

---

### ✅ Stap 2: Bot Uitnodigen naar Je Server
1. Blijf op dezelfde pagina
2. Ga naar **"OAuth2"** → **"URL Generator"**
3. Vink aan bij **Scopes**:
   - ✅ `bot`
   - ✅ `applications.commands`
4. Vink aan bij **Bot Permissions**:
   - ✅ `Administrator` (of selecteer: Manage Roles, Manage Channels, Send Messages, Use Slash Commands)
5. **Scroll naar beneden** → Kopieer de **Generated URL**
6. Plak URL in browser → Selecteer je server → **Authorize**

---

### ✅ Stap 3: Configureer Bot
1. **Kopieer `.env.example` naar `.env`**:
   ```bash
   cp .env.example .env
   ```

2. **Vul je gegevens in `.env`**:
   ```env
   DISCORD_BOT_TOKEN=jouw_bot_token_hier
   DISCORD_CLIENT_ID=jouw_client_id_hier
   STRIPE_SECRET_KEY=jouw_stripe_key_hier
   ```

   **Client ID vinden:**
   - Ga naar Discord Developer Portal → Je app → **OAuth2** → **Client ID** (kopieer)

   **Stripe Key vinden:**
   - Ga naar Stripe Dashboard → Developers → **API Keys** → **Secret key** (starts met `sk_`)

---

### ✅ Stap 4: Server Auto-Setup (1 commando!)
```bash
npm install
node setup.js
```

**Dit script maakt automatisch:**
- ✅ Rollen: `💎 LIFETIME VIP` en `⚡ v2.0 MEMBER`
- ✅ Channels: welcome, verify, downloads, support, updates
- ✅ Permissies: VIP krijgt exclusieve toegang
- ✅ Welcome messages met instructies

---

### ✅ Stap 5: Start de Bot
```bash
npm start
```

Je ziet: `✅ ZenDaddy Bot logged in as ZenDaddy Bot#1234`

---

## 🎯 HOE HET WERKT VOOR KLANTEN

### Voor Klanten:
1. **Koop script** op je website
2. **Join Discord**: https://discord.gg/jouwlink
3. **Ga naar #verify-here**
4. **Type:** `/verify hun@email.com`
5. **✨ Automatisch role + toegang!**

### Wat de Bot Doet:
- Checkt Stripe API: "Heeft dit email betaald?"
- Kijkt welk product: Lifetime ($249.99) of v2.0 ($69.99)
- Geeft juiste role:
  - 💎 **LIFETIME VIP** → lifetime buyers
  - ⚡ **v2.0 MEMBER** → v2.0 buyers
- Klant krijgt toegang tot #downloads en #support

---

## 📝 HANDIGE COMMANDO'S

**Test de bot:**
```bash
npm start
```

**Stop de bot:**
```
Ctrl + C
```

**Herstart setup (wist alles en maakt opnieuw aan):**
```bash
node setup.js
```

---

## 🛠 TROUBLESHOOTING

**Bot reageert niet?**
- ✅ Check of bot online is (groene bolletje in Discord)
- ✅ Zorg dat bot "Use Slash Commands" permission heeft
- ✅ Herstart bot: `npm start`

**Role wordt niet toegevoegd?**
- ✅ Bot role moet **HOGER** staan dan customer roles
- ✅ Check "Manage Roles" permission
- ✅ Ga naar Server Settings → Roles → sleep bot role naar boven

**Email niet gevonden?**
- ✅ Klant moet **exact** zelfde email gebruiken als bij Stripe
- ✅ Check Stripe Dashboard → Customers voor correcte email
- ✅ Wacht 1-2 min na betaling (Stripe sync)

---

## 🎉 KLAAR!

**Je server is nu volledig ingeruld!**
- Rollen aangemaakt ✅
- Channels klaargezet ✅
- Bot draait ✅
- Klanten kunnen verifiëren ✅

**Share je Discord link:**
https://discord.gg/jouwlink

**Veel succes met ZenDaddy! 🚀**
