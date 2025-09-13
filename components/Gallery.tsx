import Image from 'next/image'

export default function Gallery({ seeds = [] as string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {seeds.map((seed, i) => (
        <div key={seed + i} className="relative w-full h-72 rounded-2xl overflow-hidden border border-neutral-800">
          <Image
            src={`https://picsum.photos/seed/${seed}/900/900`}
            alt={`Foto ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority={i < 3}
          />
        </div>
      ))}
    </div>
  )
}
