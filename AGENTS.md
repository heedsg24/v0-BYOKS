# Agent handoff: Be Your Own Kind of Sober

This repo is the live landing page for Shaheda/Heda Greeley's sober-curious brand:

- Brand: **Be Your Own Kind of Sober** / **BYOKS**
- Flagship product: **Open Me Win** journal
- Live demo/deployment: https://v0-byoks.vercel.app/
- GitHub repo: `git@github.com:Catalyst-Digital-Ventures/v0-BYOKS.git`
- v0 continuation link: https://v0.app/chat/projects/prj_kS1zkZcaHi0ZNmxflW9Fmn9NAY1a

## Product direction

This should stay focused on the first concrete customer artifact: a polished landing page / storefront / waitlist for BYOKS and the Open Me Win journal. Do **not** expand into the full community web app, journaling dashboard, or companion app until the journal + landing-page foundation is real.

Priority outcomes:

1. Help Shaheda finish/audit the Open Me Win journal.
2. Turn journal ideas into clear landing-page copy and social content.
3. Capture early interest with a simple CTA: journal checkout, community/waitlist, or "first 100" invite.
4. Keep the voice no-shame, sober-curious, stigma-free, honest, and modern.

## Development commands

Use pnpm unless the user specifically asks for a different package manager.

```bash
corepack pnpm install
corepack pnpm dev
corepack pnpm build
```

Local app: http://localhost:3000

## Important files

- `app/page.tsx` — landing-page section order.
- `components/landing/` — visible landing-page sections.
- `.env.local.example` — public environment variables for canonical URL and CTA checkout links.
- `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` — SEO/canonical metadata surfaces.

## Editing guardrails

- Keep the page beginner/customer friendly; avoid internal platform language.
- Avoid shame/guilt framing around drinking, relapse, or sobriety labels.
- Do not invent medical/therapy claims.
- Do not paste private customer notes, credentials, API keys, or Telegram bot tokens into the repo.
- If changing CTAs, confirm whether the target is journal purchase, waitlist, or community join.
- After code changes, run `corepack pnpm build` before pushing.

## Suggested first agent tasks

When Shaheda starts using her agent on this repo, a good first prompt is:

> Read AGENTS.md and inspect the landing page. Help me improve one section at a time for Be Your Own Kind of Sober and Open Me Win. Start by asking me for one current journal page or section, then turn it into landing-page copy and 3 social posts without changing the whole site at once.
