"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const JOIN_URL =
  process.env.NEXT_PUBLIC_WHOP_JOIN_URL ?? "https://whop.com/checkout/plan_v8I2kdIqJmRob"

export function EmailCapture() {
  return (
    <section className="px-6 py-24 md:py-32 bg-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          be the first to hold it.
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Join the BYOKS circle — early access, first prompts free, and notes from the founder.
        </p>

        <Button
          asChild
          size="lg"
          className="rounded-full px-10 py-6 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
        >
          <a href={JOIN_URL} target="_blank" rel="noopener noreferrer">
            join the circle
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
