import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy",
  description: "How BYOKS handles the small amount of personal information you share with us.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy · BYOKS",
    description: "Privacy, plainly. BYOKS doesn't collect emails directly — Whop handles all that.",
  },
  robots: { index: true, follow: true },
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
            <h2 className="font-serif text-2xl mb-3">what we collect on this site</h2>
            <p className="text-muted-foreground">
              Almost nothing. This site doesn&apos;t collect your email or any personal details directly. The only data we see is anonymous traffic information (page views, rough location, device type) via Vercel Analytics — no cookies, no tracking across other sites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">when you click &ldquo;get your journal&rdquo; or &ldquo;join the circle&rdquo;</h2>
            <p className="text-muted-foreground">
              Both buttons send you to Whop, our checkout and community partner. Anything you enter there — name, email, payment — is handled by Whop under{" "}
              <a
                href="https://whop.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                their privacy policy
              </a>
              . When you complete a purchase or join, Whop shares your name and email with us so we can deliver the journal and send the notes we promised.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">how we use what Whop shares</h2>
            <p className="text-muted-foreground">
              We use your email and name to send you BYOKS — your journal, early access, first prompts, and occasional notes from Heda. Nothing else. We don&apos;t sell, rent, or share your information with third parties for advertising.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">leaving</h2>
            <p className="text-muted-foreground">
              Every email we send has an unsubscribe link. Click it and you&apos;re out — no friction, no follow-up. You can also email{" "}
              <a href="mailto:hello@byoks.co" className="underline underline-offset-4 hover:text-foreground">
                hello@byoks.co
              </a>{" "}
              and ask us to delete your information, and we will. To cancel a Whop purchase or membership, manage it from your Whop account.
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
