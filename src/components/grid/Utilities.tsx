import { Reveal, Section, SectionLabel } from "./primitives";
import { useLaunch } from "./launch";
import { cn } from "@/lib/utils";

const CARDS = [
  { t: "ENERGY DATA", d: "Real-time grid signals surfaced for machine consumption." },
  { t: "GRID AGENTS", d: "Autonomous actors that respond to changing conditions." },
  { t: "MARKET SIGNALS", d: "Pricing and availability structured for decisioning." },
  { t: "AUTONOMOUS SETTLEMENT", d: "Programmable payment flows between machines." },
];

export function Utilities() {
  const { unlocked } = useLaunch();

  return (
    <Section id="utilities" className="py-28 md:py-36">
      <Reveal>
        <SectionLabel>Utilities</SectionLabel>
      </Reveal>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <Reveal delay={0.06}>
          <h2 className="text-[2.2rem] leading-[1] font-semibold tracking-[-0.04em] sm:text-[3rem]">
            GRID UTILITIES
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-[0.95rem] text-muted-foreground">Infrastructure is being prepared.</p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
        {CARDS.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.08} y={20}>
            <div className="group h-full bg-[oklch(0.15_0.035_264)] p-7 transition-colors duration-300 hover:bg-[oklch(0.19_0.045_262)] sm:p-9">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <h3 className="min-w-0 font-mono text-[0.8rem] tracking-[0.18em] text-ice transition-transform duration-300 group-hover:translate-x-1">
                  {c.t}
                </h3>
                <span
                  className={cn(
                    "shrink-0 border px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.2em]",
                    unlocked
                      ? "border-cyan/50 text-cyan"
                      : "border-border text-muted-foreground",
                  )}
                  style={!unlocked ? { animation: "grid-pulse 3.4s ease-in-out infinite" } : undefined}
                >
                  {unlocked ? "AVAILABLE" : "LOCKED"}
                </span>
              </div>
              <p className="mt-4 max-w-sm text-[0.85rem] leading-relaxed text-muted-foreground">
                {c.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
