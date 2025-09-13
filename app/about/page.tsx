export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 grid md:grid-cols-3 gap-8 items-start">
      <img src="https://picsum.photos/seed/portrait/700/700" alt="Franky" className="rounded-2xl border border-neutral-800 w-full h-80 object-cover" />
      <div className="md:col-span-2">
        <h1 className="text-3xl font-semibold">Over Franky</h1>
        <p className="mt-3 text-neutral-300">Ik ben een fotograaf met een liefde voor strakke lijnen, natuurlijke momenten en het spel van licht. Mijn werk strekt zich uit van architecturale composities tot intieme wildlife-portretten en ruige landschappen.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700">Architectuur</span>
          <span className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700">Eyes / Wildlife</span>
          <span className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700">Natuur</span>
        </div>
      </div>
    </main>
  )
}
