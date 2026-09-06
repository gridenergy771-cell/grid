import { useEffect, useState } from "react";

/** Layered background environment: navy gradient, faint grid, mouse light, grain. */
export function Atmosphere() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.25 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) =>
      setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden className="grain pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, oklch(0.26 0.07 258) 0%, oklch(0.16 0.04 264) 45%, oklch(0.11 0.03 265) 100%)",
        }}
      />
      <div className="grid-field absolute inset-0" />
      <div
        className="absolute inset-x-0 top-0 h-[70vh] opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 65% 20%, color-mix(in oklab, var(--cyan) 12%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-[50vh] w-full opacity-40"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 100%, color-mix(in oklab, var(--violet) 14%, transparent), transparent 70%)",
        }}
      />
      {enabled && (
        <div
          className="absolute h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out"
          style={{
            left: `${pos.x * 100}%`,
            top: `${pos.y * 100}%`,
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--cyan) 7%, transparent) 0%, transparent 62%)",
          }}
        />
      )}
    </div>
  );
}
