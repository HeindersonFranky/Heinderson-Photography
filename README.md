# Franky Portfolio (Next.js + Tailwind)

- Lightbox op galerijen (klik op foto → fullscreen, pijltjes/esc werken).
- Contact via FormSubmit → mailt naar **son034@gmail.com**.
- Redirect na succes: **https://heinderson-photography.vercel.app/contact?sent=1**.

## Aanpassen
- Foto's: zet JPG's in `/public` en vervang de `picsum.photos` URL's in de pagina's door jouw paden.
- Tekst/menu: `components/Navbar.tsx`, `app/page.tsx`, `app/*/page.tsx`, `app/about/page.tsx`

## Develop
```bash
npm install
npm run dev
```

## Deploy (GitHub + Vercel)
- Upload **de ínhoud** van deze map naar de **root** van je GitHub repo.
- In Vercel: Framework Preset = **Next.js**; Root Directory leeg (of op submap als je die gebruikt).
- Deployments → Redeploy → Clear build cache bij problemen.
