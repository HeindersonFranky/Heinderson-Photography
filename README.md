# Franky Portfolio – Contact zonder Resend (FormSubmit)

Dit project gebruikt **FormSubmit.co** zodat je zonder server of API-sleutel mails kan ontvangen.

## Hoe werkt het?
- Het formulier op `/contact` POST naar `https://formsubmit.co/son034@gmail.com`.
- Bij de **allereerste inzending** stuurt FormSubmit een bevestigingsmail naar jouw adres. Klik op **Confirm**.
- Daarna komen nieuwe inzendingen rechtstreeks in je inbox.

## Anti-spam
- Er zit een honeypot-veld `_honey` in de form (bots vullen dit vaak in).
- `_captcha` staat op `false`. Wil je extra bescherming, verwijder deze regel.

## Bedankpagina
- Na succes redirect het formulier naar `/contact?sent=1` en toont het “Bericht is verstuurd”.

## Je eigen foto’s
- Zet je beelden in `/public` en vervang de `picsum.photos` voorbeelden in de pagina’s.

## Ontwikkelen
```bash
npm install
npm run dev
```

## Deploy
- Push naar GitHub → Vercel bouwt en publiceert automatisch.
- Geen environment variables nodig.
