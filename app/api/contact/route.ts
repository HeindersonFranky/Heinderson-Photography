import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Vul alle velden in.' }, { status: 400 })
    }

    const to = process.env.CONTACT_TO || 'son034@gmail.com'

    await resend.emails.send({
      from: 'Franky Portfolio <onboarding@resend.dev>',
      to,
      subject: `Nieuw bericht via portfolio van ${name}`,
      reply_to: email,
      text: `Naam: ${name}\nE-mail: ${email}\n\nBericht:\n${message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Versturen mislukt. Probeer later opnieuw.' }, { status: 500 })
  }
}
