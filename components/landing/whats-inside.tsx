"use client"

import { motion } from "framer-motion"
import { BookOpen, Heart, Compass } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "prompts for the hard moments",
    description: "Guided journal entries for cravings, slips, anniversaries, hard days, good days you don't trust.",
  },
  {
    icon: Compass,
    title: "a survival kit, not a rulebook",
    description: "Tools, grounding exercises, and reminders you can flip to when you need them most.",
  },
  {
    icon: Heart,
    title: "yours to come back to",
    description: "No streaks, no scores. Just a soft place that's always waiting.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function WhatsInside() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-center text-foreground mb-16"
        >
          what&apos;s inside
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
