import Gallery from '@/components/Gallery'

export default function EyeswildlifePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Eyes / Wildlife</h1>
      <p className="mt-2 text-neutral-300">Intieme ontmoetingen met ogen en dieren in hun natuurlijke habitat.</p>
      <div className="mt-8">
        <Gallery seeds={[ 'wild-1','wild-2','wild-3','wild-4','wild-5','wild-6' ]} />
      </div>
    </main>
  )
}