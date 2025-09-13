'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ContactPage() {
  const params = useSearchParams()
  const sent = params.get('sent') === '1'
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Pre-fill from local storage if you like; left minimal for now.
  }, [])

  return (
    <main className="bg-neutral-900/40">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 text-neutral-300">Voor opdrachten, prints of samenwerkingen.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <form className="grid gap-4"
                action="https://formsubmit.co/son034@gmail.com"
                method="POST">
            {/* Honeypot */}
            <input type="text" name="_honey" className="hidden" />
            {/* Disable Captcha (optioneel) */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Redirect after success */}
            <input type="hidden" name="_next" value="/contact?sent=1" />
            {/* Subject */}
            <input type="hidden" name="_subject" value="Nieuw bericht via portfolio" />
            {/* Email template */}
            <input type="hidden" name="_template" value="table" />

            <input className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3"
                   placeholder="Naam" name="name" required />
            <input className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3"
                   placeholder="E-mail" type="email" name="email" required
                   value={email} onChange={e => setEmail(e.target.value)} />
            <textarea className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 min-h-[140px]"
                      placeholder="Bericht" name="message" required />
            <button type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-medium hover:opacity-90">
              Verstuur →
            </button>
            {sent && <p className="text-green-400 text-sm">Bedankt! Je bericht is verstuurd.</p>}
          </form>

          <div className="grid gap-4 text-sm">
            <a href="mailto:son034@gmail.com" className="inline-flex items-center gap-2 hover:text-white/80">son034@gmail.com</a>
            <a href="tel:+32000000000" className="inline-flex items-center gap-2 hover:text-white/80">+32 000 00 00 00</a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white/80">Instagram</a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white/80">Facebook</a>
          </div>
        </div>
      </div>
    </main>
  )
}
