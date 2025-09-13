'use client'
import { motion } from 'framer-motion'
import CategoryCard from '@/components/CategoryCard'
import Gallery from '@/components/Gallery'

export default function HomePage() {
  return (
    <main id="home">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/hero/1800/900" alt="Hero" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-28 md:py-44">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight">
            Beelden die blijven hangen.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 max-w-2xl text-neutral-300">
            Portfolio met focus op architectuur, eyes/wildlife en natuur. Tijdloze fotografie met aandacht voor detail, licht en sfeer.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-medium hover:opacity-90">
              Bekijk portfolio →
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-2xl border border-neutral-700 px-5 py-3 font-medium hover:bg-neutral-900">
              Neem contact op
            </a>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section id="portfolio" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <CategoryCard href="/architecture" title="Architecture" image="https://picsum.photos/seed/arch/800/900" description="Lijnen, ritme en materiaal in stedelijke en tijdloze ruimtes." />
          <CategoryCard href="/eyes-wildlife" title="Eyes / Wildlife" image="https://picsum.photos/seed/wild/800/900" description="Intieme ontmoetingen met ogen en dieren in hun natuurlijke habitat." />
          <CategoryCard href="/nature" title="Nature" image="https://picsum.photos/seed/nature/800/900" description="Landschappen, texturen en stille momenten in de natuur." />
        </div>
      </section>

      {/* Feature gallery */}
      <section className="bg-neutral-900/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Uitgelichte beelden</h2>
          <p className="mt-2 text-neutral-300">Een selectie van recente projecten en favoriete foto’s.</p>
          <div className="mt-8">
            <Gallery seeds={[ 'feature-1','feature-2','feature-3','feature-4','feature-5','feature-6','feature-7','feature-8','feature-9' ]} />
          </div>
        </div>
      </section>
    </main>
  )
}
