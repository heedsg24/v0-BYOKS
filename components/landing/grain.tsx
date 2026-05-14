export function Grain() {
  // Inline SVG turbulence rendered to a fixed full-viewport layer.
  // Stays behind content (z-0), behind any pointer events, and stays
  // below ~5% opacity so it reads as paper texture rather than noise.
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.04] mix-blend-multiply motion-safe:animate-[grain_8s_steps(6)_infinite]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.8 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        backgroundSize: "180px 180px",
      }}
    />
  )
}
