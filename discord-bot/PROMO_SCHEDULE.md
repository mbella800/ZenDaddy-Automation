# 48-HOUR €15 DISCOUNT PROMO SCHEDULE

## Initial Post: DONE ✅
**Posted automatically when Discord Bot restarts**
**Use Stripe code: 15DISCOUNT (NO PayPal refunds)**

---

## Reminder Schedule

Update the promo code in `discord-bot/bot.js` and change `post48HPromo()` function to post the appropriate message, then restart the "Discord Bot" workflow.

### Hour 8 (Morning Reminder)
**Time:** 8 hours after initial post
**Message:**
```
# ☀️ Good Morning - Promo Still Active!

**X/5 spots remaining for €15 discount!**

If you've been thinking about it, now's the time. Several spots already claimed!

⏰ **Ends:** [Discord timestamp]

🔗 https://zendaddy.pro
```

---

### Hour 18 (Evening Peak)
**Time:** 18 hours after initial post  
**Message:**
```
# 🌙 Evening Reminder - Don't Sleep On This!

**ONLY X/5 spots left for €15 OFF!**

Time is running out for the first 5 buyer discount. Will you be one of them?

⏰ **Ends:** [Discord timestamp]

🔗 https://zendaddy.pro

Questions? Drop them below! 👇
```

---

### Hour 28 (Day 2 Afternoon)
**Time:** 28 hours after initial post
**Message:**
```
# ⚡ Day 2 - Over Halfway Through!

**X/5 discount spots still available!**

Less than 24 hours remaining to claim your €15 discount. The clock is ticking!

✅ 56+ players already using ZenDaddy
✅ 4.8/5 rating
✅ Instant download

⏰ **Time left:** [Discord timestamp]

🔗 https://zendaddy.pro
```

---

### Hour 40 (Final 8 Hours)
**Time:** 40 hours after initial post
**Message:**
```
# 🚨 FINAL 8 HOURS!

**ONLY X/5 discount spots remaining!**

This is your last chance to save €15. Once these 5 spots are gone, the promo is OVER.

⏰ **Ends:** [Discord timestamp]

🔗 https://zendaddy.pro

Don't regret missing this! 💸
```

---

### Hour 47 (Last Hour)
**Time:** 47 hours after initial post
**Message:**
```
@everyone

# ⏰ LAST HOUR - FINAL CALL!

**X/5 discount spots left!**

This is it - the final hour to claim €15 OFF. After this, the promo is GONE forever.

🔗 **Last chance:** https://zendaddy.pro

*Act now or regret later!* 🔥
```

---

### End of Promo
**Time:** 48 hours after initial post
**Message:**
```
# 🔒 48-Hour Promo ENDED

Thank you to everyone who participated! The exclusive €15 discount promotion has officially ended.

**Didn't make it?**
Don't worry - we'll have more exclusive offers in the future. Stay tuned! 👀

🔗 Regular pricing: https://zendaddy.pro
💬 Questions: <#1425164631231697089>
```

---

## How to Post Reminders

**Option 1: Manual posting**
1. Copy the message above
2. Paste it into #📣│announcements in Discord
3. Update "X/5" with actual spots remaining

**Option 2: Update bot code**
1. Edit `discord-bot/bot.js`
2. Replace `post48HPromo()` function content
3. Restart "Discord Bot" workflow

---

## Tracking First 5 Buyers

**CRITICAL: Korting via Stripe code 15DISCOUNT - GEEN PayPal!**

When someone purchases:
1. Check Stripe dashboard for successful payment
2. Verify they used code "15DISCOUNT" 
3. If yes: count as 1 of the 5 spots
4. Update spots counter in Discord (5→4→3→2→1→0)
5. They use `/verify` to get VIP role
6. If 0 spots: post "SOLD OUT" announcement

**NOTE:** Als ze de code NIET gebruiken = telt NIET mee!

**Sold Out Message:**
```
# 🔥 ALL 5 SPOTS CLAIMED!

The €15 discount promotion has been fully claimed! Thank you to the first 5 buyers.

**Didn't make it in time?**
Regular pricing still available: https://zendaddy.pro

More exclusive offers coming soon! 👀
```
