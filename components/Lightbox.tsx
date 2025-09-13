'use client'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

export default function Lightbox({ images, startIndex = 0, onClose }:
  { images: string[]; startIndex?: number; onClose: () => void }) {

  const [index, setIndex] = useState(startIndex)

  const close = useCallback(() => onClose(), [onClose])
  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close, prev, next])

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center">
      <button aria-label="Close" onClick={close} className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl">×</button>
      <button aria-label="Prev" onClick={prev} className="absolute left-4 md:left-8 text-white/80 hover:text-white text-3xl">‹</button>
      <button aria-label="Next" onClick={next} className="absolute right-4 md:right-8 text-white/80 hover:text-white text-3xl">›</button>

      <div className="relative w-[92vw] h-[82vh] max-w-6xl">
        <Image
          key={images[index]}
          src={images[index]}
          alt={`Foto ${index + 1}`}
          fill
          className="object-contain"
          sizes="92vw"
          priority
        />
      </div>
    </div>
  )
}
