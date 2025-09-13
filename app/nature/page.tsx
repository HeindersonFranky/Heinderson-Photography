import Gallery from '@/components/Gallery'

const images = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/nature-${i+1}/1600/1200`)

export default function NaturePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Nature</h1>
      <p className="mt-2 text-neutral-300">Landschappen, texturen en stille momenten in de natuur.</p>
      <div className="mt-8">
        <Gallery images={images} />
      </div>
    </main>
  )
}
