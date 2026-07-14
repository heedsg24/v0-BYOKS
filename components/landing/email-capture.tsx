"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const JOIN_URL =
  process.env.NEXT_PUBLIC_WHOP_JOIN_URL ?? "https://whop.com/checkout/plan_v8I2kdIqJmRob"

export function EmailCapture() {
  return (
    <section className="px-6 py-28 md:py-40 bg-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-5 leading-tight">
          be the first to hold it.
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Join the BYOKS circle — early access, first prompts free, and notes from the founder.
        </p>

        <Button
          asChild
          size="lg"
          className="rounded-full px-10 py-6 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
        >
          <a href={JOIN_URL} target="_blank" rel="noopener noreferrer">
            Join the Circle
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
