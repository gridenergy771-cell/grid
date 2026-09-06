import { useEffect, useState } from "react";

export function Cursor() {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<"dot" | "link" | "cta">("dot");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setActive(true);
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement | null;
      const interactive = el?.closest("a,button,[data-cursor]");
      if (!interactive) return setMode("dot");
      setMode(interactive.getAttribute("data-cursor") === "cta" ? "cta" : "link");
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.style.cursor = "";
    };
  }, []);

  if (!active) return null;

  const size = mode === "cta" ? 42 : mode === "link" ? 20 : 8;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] rounded-full transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        border: mode === "cta" ? "1px solid var(--cyan)" : "1px solid transparent",
        backgroundColor:
          mode === "cta"
            ? "transparent"
            : mode === "link"
              ? "color-mix(in oklab, var(--cyan) 45%, transparent)"
              : "oklch(0.97 0.02 220)",
        boxShadow:
          mode === "dot"
            ? "none"
            : "0 0 18px color-mix(in oklab, var(--cyan) 45%, transparent)",
      }}
    />
  );
}
