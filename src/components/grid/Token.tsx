import { useState } from "react";
import logo from "@/assets/grid-logo.png.asset.json";
import { GRID_CONTRACT_ADDRESS, RADARDEX_URL, X_URL } from "@/config/grid";
import { LineDraw, Reveal, Section, SectionLabel, XIcon } from "./primitives";
import { useLaunch } from "./launch";

export function Token() {
  const { unlocked } = useLaunch();
  const [copied, setCopied] = useState(false);
  const hasCA = GRID_CONTRACT_ADDRESS !== "COMING SOON";

  const rows = [
    { k: "TOKEN", v: "$GRID" },
    { k: "CONTRACT", v: hasCA ? GRID_CONTRACT_ADDRESS : "COMING SOON" },
    { k: "MARKET", v: "RADARDEX" },
    { k: "UTILITY", v: unlocked ? "AVAILABLE" : "LOCKED — 24H AFTER LAUNCH" },
  ];

  return (
    <Section id="token" className="py-28 md:py-36">
      <Reveal>
        <SectionLabel>Token</SectionLabel>
      </Reveal>

      <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <Reveal delay={0.06}>
            <div className="flex items-center gap-6">
              <img src={logo.url} alt="GRID token" className="h-24 w-24 sm:h-28 sm:w-28" />
              <div>
                <p className="text-[2.6rem] leading-none font-semibold tracking-[-0.05em] sm:text-[3.4rem]">
                  $GRID
                </p>
                <p className="label-tech mt-3">Autonomous Energy Grid</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-wrap items-center gap-3 border border-border p-4">
              <span className="label-tech">CA</span>
              <code className="min-w-0 flex-1 truncate font-mono text-[0.8rem] text-ice">
                {hasCA ? GRID_CONTRACT_ADDRESS : "COMING SOON"}
              </code>
              <button
                disabled={!hasCA}
                onClick={() => {
                  navigator.clipboard.writeText(GRID_CONTRACT_ADDRESS);
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 1600);
                }}
                className="shrink-0 border border-border px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground transition-colors duration-300 enabled:hover:border-cyan/50 enabled:hover:text-cyan disabled:opacity-40"
              >
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                data-cursor="cta"
                href={RADARDEX_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-sm border border-cyan/50 bg-cyan/12 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-ice transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan/20 active:translate-y-0 active:scale-[0.985]"
              >
                BUY $GRID
              </a>
              <a
                data-cursor="cta"
                href={RADARDEX_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-sm border border-border px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/50 active:translate-y-0"
              >
                VIEW CHART
              </a>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.1}>
            <p className="label-tech">Token Status</p>
            <LineDraw className="mt-4" />
            <dl className="divide-y divide-border">
              {rows.map((r) => (
                <div
                  key={r.k}
                  className="flex flex-wrap items-baseline justify-between gap-3 py-5"
                >
                  <dt className="label-tech">{r.k}</dt>
                  <dd className="font-mono text-[0.82rem] text-ice">{r.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.16}>
            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-10 inline-flex items-center gap-3 border border-border px-5 py-3.5 transition-all duration-300 hover:border-cyan/50 hover:shadow-[0_0_28px_-12px_var(--cyan)]"
            >
              <XIcon className="h-3.5 w-3.5 text-muted-foreground transition-colors duration-300 group-hover:text-cyan" />
              <span className="font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-ice">
                FOLLOW GRID
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
