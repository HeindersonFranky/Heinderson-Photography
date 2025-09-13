'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Versturen mislukt')
      setStatus('success')
      setName(''); setEmail(''); setMessage('')
    } catch (err: any) {
      setStatus('error')
      setError(err.message || 'Er ging iets mis.')
    }
  }

  return (
    <main className="bg-neutral-900/40">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 text-neutral-300">Voor opdrachten, prints of samenwerkingen.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <form className="grid gap-4" onSubmit={onSubmit}>
            <input className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3"
                   placeholder="Naam" value={name} onChange={e => setName(e.target.value)} required />
            <input className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3"
                   placeholder="E‑mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <textarea className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 min-h-[140px]"
                      placeholder="Bericht" value={message} onChange={e => setMessage(e.target.value)} required />
            <button type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-medium hover:opacity-90 disabled:opacity-60"
                    disabled={status==='sending'}>
              {status==='sending' ? 'Versturen…' : 'Verstuur →'}
            </button>
            {status==='success' && <p className="text-green-400 text-sm">Bedankt! Je bericht is verstuurd.</p>}
            {status==='error' && <p className="text-red-400 text-sm">Oeps: {error}</p>}
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
