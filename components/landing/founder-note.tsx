"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FounderNote() {
  return (
    <section id="founder-note" className="px-6 py-28 md:py-40 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="bg-card rounded-3xl p-10 md:p-16 shadow-sm border border-border/50"
        >
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
            {/* Founder Photo */}
            <div className="relative">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0 rounded-2xl overflow-hidden">
                <Image
                  src="/images/founder.jpg"
                  alt="Heda G., founder of BYOKS"
                  fill
                  sizes="(min-width: 768px) 192px, 160px"
                  className="object-cover object-[center_25%]"
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
                  I&apos;ve been the person staring at a glass at 5pm trying to talk myself out of it, and the person who already poured one and felt the shame curl in afterward. I wanted something to hold in those moments — not a 12-step, not a course, not another guru. Just a page that met me where I was.
                </p>
                <p>
                  Open Me When is the first of many. It&apos;s for the cravings, the slips, the anniversaries, and the quiet good days you don&apos;t quite trust yet. No streaks. No scoring. Just a soft place that&apos;s always waiting.
                </p>
                <p className="text-foreground font-medium">
                  Welcome in.
                </p>
                <p
                  className="text-foreground pt-2 leading-none"
                  style={{ fontFamily: "var(--font-script)", fontSize: "2.75rem" }}
                  aria-label="Signed, Heda G."
                >
                  Heda G.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
