"use client"

import { motion } from "framer-motion"

export function PullQuote() {
  return (
    <section className="relative px-6 py-32 md:py-48 overflow-hidden">
      {/* Soft tint behind the quote, brand sage */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/20 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center"
      >
        <blockquote className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground text-balance">
          be your own kind
          <br className="hidden sm:block" />
          {" "}of sober.
        </blockquote>

        <div className="mt-12 inline-flex items-center gap-5">
          <span aria-hidden="true" className="h-px w-12 bg-foreground/20" />
          <span className="text-xs tracking-[0.32em] uppercase text-muted-foreground">
            BYOKS
          </span>
          <span aria-hidden="true" className="h-px w-12 bg-foreground/20" />
        </div>
      </motion.div>
    </section>
  )
}
