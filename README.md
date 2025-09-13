# Franky Portfolio (Next.js + Tailwind)

## Lichtbak
- Klik op een foto om te vergroten.
- Gebruik toetsenbord: ← → voor vorige/volgende, `Esc` om te sluiten.

## Contactformulier via Resend (Vercel)
1. Maak een account op https://resend.com en haal je **RESEND_API_KEY** op.
2. Vercel → Project → Settings → Environment Variables:
   - `RESEND_API_KEY` = jouw sleutel
   - `CONTACT_TO` = `son034@gmail.com` (optioneel; standaard gaat het al naar dit adres)
3. Redeploy (kies **Clear build cache**).
4. Test via `/contact`.

## Afbeeldingen vervangen
- Zet je beelden in `/public` (bijv. `/public/architecture/...`) en verwijs ernaar met `/architecture/foto.jpg`.
- De demo gebruikt `picsum.photos` tot je je eigen beelden plaatst.

## Ontwikkelen
```bash
npm install
npm run dev
```

## Deploy
- Push naar GitHub → Vercel bouwt en publiceert automatisch.
