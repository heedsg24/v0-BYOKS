import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy — BYOKS",
  description: "How BYOKS handles the small amount of personal information you share with us.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-20 md:py-28">
      <article className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
        >
          ← back to home
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-8 mb-4 text-balance">
          privacy, plainly.
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="space-y-8 text-foreground leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl mb-3">what we collect</h2>
            <p className="text-muted-foreground">
              When you join the BYOKS list, we collect the email address you give us. That&apos;s it. We don&apos;t ask for your name, your phone number, or your sobriety story. If you reach out by email, we&apos;ll have whatever you share in that message.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">how we use it</h2>
            <p className="text-muted-foreground">
              We use your email to send you BYOKS — early access, first prompts, occasional notes from Heda. Nothing else. We don&apos;t sell, rent, or share your email with third parties for advertising.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">where it lives</h2>
            <p className="text-muted-foreground">
              Your email is stored with our email provider (Substack) and a small amount of anonymous traffic data is collected by Vercel Analytics. Both have their own privacy policies, and both are standard tools used by independent creators.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">leaving</h2>
            <p className="text-muted-foreground">
              Every email we send has an unsubscribe link. Click it and you&apos;re out — no friction, no follow-up. You can also email{" "}
              <a href="mailto:hello@byoks.co" className="underline underline-offset-4 hover:text-foreground">
                hello@byoks.co
              </a>{" "}
              and ask us to delete your information, and we will.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">contact</h2>
            <p className="text-muted-foreground">
              Questions, concerns, or just want to say hi? Reach Heda at{" "}
              <a href="mailto:hello@byoks.co" className="underline underline-offset-4 hover:text-foreground">
                hello@byoks.co
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
