"use client"

import { motion } from "framer-motion"

export function TheWhy() {
  return (
    <section className="px-6 py-28 md:py-40 bg-card">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 text-balance">
          sobriety isn&apos;t one size fits all.
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          BYOKS exists because you deserve space to figure out what feels right for you — without shame, pressure, or perfection. Whether you&apos;re 10 years sober or 10 minutes in, this is for you.
        </p>
      </motion.div>
    </section>
  )
}
