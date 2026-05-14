"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const audiences = [
  "you're sober and want a space that doesn't feel clinical",
  "you're sober-curious and just exploring",
  "you're trying to cut back and figuring out what works",
  "you've slipped and don't want to start over alone",
  "you're rebuilding — again — and that's okay",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export function WhoItsFor() {
  return (
    <section className="px-6 py-24 md:py-32 bg-accent/30">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12"
        >
          this is for you if…
        </motion.h2>
        
        <motion.ul 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {audiences.map((audience, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 text-lg"
            >
              <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-primary-foreground" />
              </span>
              <span className="text-foreground leading-relaxed">{audience}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
