"use server"

type SubscribeResult =
  | { ok: true }
  | { ok: false; error: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribe(formData: FormData): Promise<SubscribeResult> {
  const email = String(formData.get("email") ?? "").trim()

  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email." }
  }

  const publication = process.env.SUBSTACK_PUBLICATION

  if (!publication) {
    // Demo mode — wiring is real, publication just isn't set yet.
    // Logged so signups during demo aren't silently lost.
    console.log("[subscribe] demo signup (no SUBSTACK_PUBLICATION set):", email)
    return { ok: true }
  }

  try {
    const res = await fetch(`https://${publication}.substack.com/api/v1/free`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        first_url: `https://${publication}.substack.com/`,
        first_referrer: "",
        current_url: `https://${publication}.substack.com/`,
        current_referrer: "",
        referral_code: "",
        source: "subscribe_page",
      }),
      cache: "no-store",
    })

    if (!res.ok) {
      console.error("[subscribe] substack non-ok:", res.status, await res.text().catch(() => ""))
      return { ok: false, error: "Something went sideways. Try again in a moment." }
    }

    return { ok: true }
  } catch (err) {
    console.error("[subscribe] fetch failed:", err)
    return { ok: false, error: "Network hiccup. Try again in a moment." }
  }
}
