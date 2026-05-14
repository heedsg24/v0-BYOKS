import { Hero } from "@/components/landing/hero"
import { TheWhy } from "@/components/landing/the-why"
import { WhatsInside } from "@/components/landing/whats-inside"
import { WhoItsFor } from "@/components/landing/who-its-for"
import { FounderNote } from "@/components/landing/founder-note"
import { EmailCapture } from "@/components/landing/email-capture"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TheWhy />
      <WhatsInside />
      <WhoItsFor />
      <FounderNote />
      <EmailCapture />
      <Footer />
    </main>
  )
}
