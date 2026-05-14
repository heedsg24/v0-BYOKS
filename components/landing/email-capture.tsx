"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmailCapture() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

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
          Join the BYOKS list — early access, first prompts free, and notes from the founder. No spam, ever.
        </p>
        
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-accent/50 rounded-2xl p-8"
          >
            <p className="text-foreground font-medium text-lg">
              You&apos;re in. Welcome to the circle.
            </p>
            <p className="text-muted-foreground mt-2">
              We&apos;ll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full px-6 py-6 bg-background border-border/50 focus:border-primary transition-colors"
            />
            <Button 
              type="submit"
              size="lg"
              className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 whitespace-nowrap"
            >
              join the circle
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
