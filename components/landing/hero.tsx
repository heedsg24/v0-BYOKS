"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

const WHOP_URL = process.env.NEXT_PUBLIC_WHOP_URL ?? "https://whop.com/checkout/plan_LWUhA5jX2iLa1"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])

  const scrollToFounder = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("founder-note")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-20 md:py-32"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xs md:text-sm tracking-[0.28em] uppercase text-primary/70 mb-6"
            >
              Open Me When
            </motion.p>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground mb-8 text-balance">
              for the moments you feel like drinking. or already have.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              A guided journal and survival kit for anyone sober, sober-curious, cutting back, or rebuilding. No pressure. No shame. Just a place to come back to.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
              >
                <a href={WHOP_URL} target="_blank" rel="noopener noreferrer">
                  get your journal
                </a>
              </Button>

              <a
                href="#founder-note"
                onClick={scrollToFounder}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4 text-base mt-2 sm:mt-3"
              >
                read the story
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/5] md:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
            >
              <Image
                src="/images/journal-hero.jpg"
                alt="Open Me When guided journal on a cozy surface with candle and coffee"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 60vw, 90vw"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/40 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
