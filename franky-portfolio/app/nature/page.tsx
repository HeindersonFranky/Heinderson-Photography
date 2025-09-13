import Gallery from '@/components/Gallery'

export default function NaturePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Nature</h1>
      <p className="mt-2 text-neutral-300">Landschappen, texturen en stille momenten in de natuur.</p>
      <div className="mt-8">
        <Gallery seeds={[ 'nature-1','nature-2','nature-3','nature-4','nature-5','nature-6' ]} />
      </div>
    </main>
  )
}