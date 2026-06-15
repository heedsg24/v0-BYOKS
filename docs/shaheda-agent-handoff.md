# Shaheda / Heda takeover notes

This repo is ready for Shaheda and her cypher.camp agent to take over from the demo build.

## What exists now

- Live site: https://v0-byoks.vercel.app/
- Repo: `git@github.com:Catalyst-Digital-Ventures/v0-BYOKS.git`
- Framework: Next.js 16 + React 19 + Tailwind 4
- Main page: `app/page.tsx`
- Landing components: `components/landing/`
- Current CTA links are configured through public env vars in `.env.local.example`.

## Current strategic frame

The first milestone is **not** the full community platform. The first milestone is:

> Make Be Your Own Kind of Sober feel real, professional, and shareable, with Open Me Win positioned as the flagship journal/product.

## Best next inputs from Shaheda

Ask for exactly one of these at a time:

1. One current Open Me Win journal page or section.
2. The preferred domain/canonical URL.
3. The final journal purchase link or waitlist/community link.
4. A short founder-story paragraph in her own words.

## Agent workflow

1. Pull the latest repo.
2. Read `AGENTS.md`.
3. Ask Shaheda for one concrete asset/input.
4. Make a small branch or a tiny focused commit.
5. Run:

```bash
corepack pnpm build
```

6. Push and let Vercel deploy from `main` or a reviewed PR, depending on repo permissions.

## Recommended first prompt for her agent

```text
Read AGENTS.md and this handoff doc. This repo is my Be Your Own Kind of Sober landing page for the Open Me Win journal. Help me improve one section at a time. First, ask me for one current journal page or section. Then turn that into: (1) a sharper landing-page section, (2) three social posts, and (3) one CTA idea. Do not redesign the whole site unless I ask.
```
