import Gallery from '@/components/Gallery'

const images = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/wild-${i+1}/1600/1200`)

export default function EyesWildlifePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Eyes / Wildlife</h1>
      <p className="mt-2 text-neutral-300">Intieme ontmoetingen met ogen en dieren in hun natuurlijke habitat.</p>
      <div className="mt-8">
        <Gallery images={images} />
      </div>
    </main>
  )
}
