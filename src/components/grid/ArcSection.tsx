import { Reveal, Section, SectionLabel } from "./primitives";

const CONCEPTS = [
  {
    t: "SUB-SECOND SETTLEMENT",
    d: "Fast, deterministic settlement is a core part of Arc's infrastructure vision.",
  },
  {
    t: "USDC",
    d: "Stablecoin-denominated infrastructure enables predictable digital settlement.",
  },
  {
    t: "MACHINE ECONOMY",
    d: "Arc has documented applications involving autonomous agents, machine-to-machine payments, and physical infrastructure.",
  },
];

export function ArcSection() {
  return (
    <Section className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/10"
        style={{ animation: "grid-drift 18s ease-in-out infinite" }}
      />
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel>Ecosystem</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 text-[2.2rem] leading-[1] font-semibold tracking-[-0.04em] sm:text-[3rem]">
              WHY ARC
            </h2>
          </Reveal>
        </div>
        <div>
          <div className="space-y-6 text-[0.98rem] leading-relaxed text-muted-foreground">
            <Reveal delay={0.1}>
              <p>
                Arc is being developed as infrastructure for internet-native economic activity,
                including payments, capital markets, tokenized assets, and agentic commerce.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                GRID uses documented Arc ecosystem use cases around autonomous systems,
                machine-to-machine payments, and real-time settlement as the foundation for its
                narrative.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 divide-y divide-border border-y border-border">
            {CONCEPTS.map((c, i) => (
              <Reveal key={c.t} delay={0.1 + i * 0.08} y={18}>
                <div className="group grid gap-3 py-7 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-8">
                  <h3 className="font-mono text-[0.75rem] tracking-[0.2em] text-ice transition-colors duration-300 group-hover:text-cyan">
                    {c.t}
                  </h3>
                  <p className="text-[0.88rem] leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
