import { useState } from "react";
import { PROOF_PRIMARY_URL, PROOF_SECONDARY_URL } from "@/config/grid";
import { LineDraw, Reveal, Section, SectionLabel } from "./primitives";
import { cn } from "@/lib/utils";

const FLOW = ["DATA", "AGENT", "PAYMENT", "ENERGY DECISION"];

const VALUES = [
  { k: "PRICE", v: "$0.0001 USDC" },
  { k: "INTERVAL", v: "Every 4 seconds" },
  { k: "ACTOR", v: "Autonomous grid-balancing agent" },
];

export function Proof() {
  const [hover, setHover] = useState(false);

  return (
    <Section id="proof" className="py-28 md:py-36">
      <Reveal>
        <SectionLabel>Proof</SectionLabel>
      </Reveal>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <Reveal delay={0.06}>
          <h2 className="text-[2.2rem] leading-[1] font-semibold tracking-[-0.04em] sm:text-[3rem]">
            PROOF
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-[0.95rem] text-muted-foreground">
            The idea is already being explored.
          </p>
        </Reveal>
      </div>

      <LineDraw className="mt-10" />

      <Reveal delay={0.1} y={24}>
        <article
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="mt-14 grid gap-10 border border-border bg-[oklch(0.16_0.038_264_/_0.6)] p-7 transition-colors duration-300 hover:border-cyan/35 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16"
        >
          <div>
            <p className="label-tech">Case Study</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">OPENVPP × ARC</h3>

            <div className="mt-10 space-y-3">
              {FLOW.map((f, i) => (
                <div key={f} className="flex items-center gap-4">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-all duration-300",
                      hover ? "bg-cyan shadow-[0_0_12px_var(--cyan)]" : "bg-muted-foreground/40",
                    )}
                    style={{ transitionDelay: hover ? `${i * 180}ms` : "0ms" }}
                  />
                  <span
                    className={cn(
                      "font-mono text-[0.72rem] tracking-[0.2em] transition-colors duration-300",
                      hover ? "text-ice" : "text-muted-foreground",
                    )}
                    style={{ transitionDelay: hover ? `${i * 180}ms` : "0ms" }}
                  >
                    {f}
                  </span>
                  <span className="h-px flex-1 overflow-hidden bg-border">
                    <span
                      className="block h-px bg-cyan transition-transform duration-500"
                      style={{
                        transform: `scaleX(${hover ? 1 : 0})`,
                        transformOrigin: "left",
                        transitionDelay: hover ? `${i * 180}ms` : "0ms",
                      }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[0.78rem] tracking-[0.2em] text-cyan">
              AUTONOMOUS ENERGY SETTLEMENT
            </h4>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              Arc documented an OpenVPP experiment exploring real-time energy settlement, where an
              autonomous grid-balancing agent pays USDC for frequency and pricing data and uses
              that information to make energy-management decisions.
            </p>

            <dl className="mt-8 divide-y divide-border border-y border-border">
              {VALUES.map((v) => (
                <div key={v.k} className="flex flex-wrap items-baseline justify-between gap-2 py-3.5">
                  <dt className="label-tech">{v.k}</dt>
                  <dd className="font-mono text-[0.85rem] text-ice">{v.v}</dd>
                </div>
              ))}
            </dl>

            <a
              data-cursor="cta"
              href={PROOF_PRIMARY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-8 inline-flex items-center gap-2 font-mono text-[0.75rem] tracking-[0.18em] text-ice transition-colors duration-300 hover:text-cyan"
            >
              READ THE PROOF
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <p className="mt-3 text-[0.72rem] leading-relaxed text-muted-foreground">
              Source: Arc — How OpenVPP Is Exploring Realtime Energy Settlement on Arc
            </p>
          </div>
        </article>
      </Reveal>

      <Reveal delay={0.14} y={20}>
        <article className="mt-6 grid gap-6 border border-border p-7 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] sm:p-9">
          <h3 className="font-mono text-[0.78rem] tracking-[0.2em] text-ice">AGENTIC ECONOMY</h3>
          <div>
            <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
              Arc has documented how autonomous agents can interact with real-world infrastructure
              and use programmable payments.
            </p>
            <a
              data-cursor="cta"
              href={PROOF_SECONDARY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-6 inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-cyan"
            >
              READ ARC BLUEPRINT
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </article>
      </Reveal>

      <p className="mt-8 max-w-2xl text-[0.72rem] leading-relaxed text-muted-foreground/70">
        These references demonstrate the underlying technology and use case. They are not an
        endorsement of GRID.
      </p>
    </Section>
  );
}
