import Gallery from '@/components/Gallery'

const images = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/arch-${i+1}/1600/1200`)

export default function ArchitecturePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Architecture</h1>
      <p className="mt-2 text-neutral-300">Lijnen, ritme en materiaal in stedelijke en tijdloze ruimtes.</p>
      <div className="mt-8">
        <Gallery images={images} />
      </div>
    </main>
  )
}
