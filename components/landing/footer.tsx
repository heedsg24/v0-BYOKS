import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6">
          <h3 className="font-serif text-2xl text-foreground">
            BYOKS
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Be Your Own Kind of Sober
          </p>
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground mb-8 text-lg">
          No pressure. No shame. Just space.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://instagram.com/byoks.co"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
            aria-label="Follow BYOKS on Instagram"
          >
            <Instagram className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://tiktok.com/@byoks.co"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
            aria-label="Follow BYOKS on TikTok"
          >
            <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a
            href="mailto:hello@byoks.co"
            className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
            aria-label="Email BYOKS"
          >
            <Mail className="w-5 h-5 text-foreground" />
          </a>
        </div>

        {/* Bottom text */}
        <p className="text-sm text-muted-foreground">
          Made with care. For anyone figuring it out.
        </p>

        <div className="mt-4 flex justify-center gap-4 text-xs text-muted-foreground/60">
          <span>© {new Date().getFullYear()} BYOKS. All rights reserved.</span>
          <span aria-hidden="true">·</span>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
