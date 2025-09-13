import Gallery from '@/components/Gallery'

export default function ArchitecturePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Architecture</h1>
      <p className="mt-2 text-neutral-300">Lijnen, ritme en materiaal in stedelijke en tijdloze ruimtes.</p>
      <div className="mt-8">
        <Gallery seeds={[ 'arch-1','arch-2','arch-3','arch-4','arch-5','arch-6' ]} />
      </div>
    </main>
  )
}