'use client'
import Image from 'next/image'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Lightbox = dynamic(() => import('@/components/Lightbox'), { ssr: false })

export default function Gallery({ images = [] as string[], altPrefix = 'Foto' }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src + i}
            className="relative w-full h-72 rounded-2xl overflow-hidden border border-neutral-800 group"
            onClick={() => setOpenIndex(i)}
          >
            <Image
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority={i < 3}
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  )
}
