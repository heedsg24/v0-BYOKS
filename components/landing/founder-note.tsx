"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FounderNote() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border/50"
        >
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
            {/* Founder Photo */}
            <div className="relative">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0 rounded-2xl overflow-hidden">
                <Image
                  src="/images/founder.jpg"
                  alt="Founder of BYOKS"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary/40 rounded-full -z-10" />
            </div>
            
            {/* Letter */}
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                a note from the founder
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  BYOKS started because I couldn&apos;t find a sober space that felt like me. Not preachy. Not perfect. Just honest.
                </p>
                <p>
                  Open Me When is the first of many — built for the moments that matter most.
                </p>
                <p className="text-foreground font-medium">
                  Welcome in.
                </p>
                <p className="font-serif text-lg text-foreground italic">
                  — Sarah
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
