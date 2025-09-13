import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard({ href, title, image, description }:
  { href: string; title: string; image: string; description: string }) {
  return (
    <Link href={href} className="group relative overflow-hidden rounded-3xl border border-neutral-800">
      <div className="relative h-96 w-full">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent" />
      <div className="absolute bottom-0 p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-neutral-300 text-sm mt-1 max-w-sm">{description}</p>
      </div>
    </Link>
  )
}
