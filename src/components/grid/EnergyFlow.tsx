import { useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const NODES = [
  {
    key: "energy",
    label: "ENERGY",
    items: ["Solar", "Wind", "Storage"],
    note: "Physical generation and storage assets producing measurable output.",
  },
  {
    key: "data",
    label: "DATA",
    items: ["Frequency", "Pricing", "Availability"],
    note: "Grid conditions expressed as machine-readable, real-time signals.",
  },
  {
    key: "agent",
    label: "AGENT",
    items: ["Decision"],
    note: "An autonomous system evaluates conditions and chooses an action.",
  },
  {
    key: "payment",
    label: "PAYMENT",
    items: ["USDC"],
    note: "The agent pays for the data or service it consumes.",
  },
  {
    key: "settlement",
    label: "SETTLEMENT",
    items: ["Arc"],
    note: "Economic activity settles on programmable payment infrastructure.",
  },
];

export function EnergyFlow() {
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <div ref={ref} className="relative">
      <div className="border border-border bg-[oklch(0.17_0.04_264_/_0.5)] p-6 sm:p-9">
        <p className="label-tech">System Flow</p>
        <div className="mt-8 flex flex-col">
          {NODES.map((n, i) => {
            const on = active === n.key;
            return (
              <div key={n.key}>
                <motion.button
                  type="button"
                  onMouseEnter={() => setActive(n.key)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(n.key)}
                  onBlur={() => setActive(null)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.5, delay: i * 0.14 }}
                  className={cn(
                    "grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-l px-4 py-4 text-left transition-all duration-300",
                    on
                      ? "border-cyan bg-cyan/[0.06]"
                      : "border-border hover:border-cyan/40",
                  )}
                >
                  <div className="min-w-0">
                    <span
                      className={cn(
                        "font-mono text-[0.72rem] tracking-[0.24em] transition-colors duration-300",
                        on ? "text-cyan" : "text-foreground",
                      )}
                    >
                      {n.label}
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[0.8rem] text-muted-foreground">
                      {n.items.map((it) => (
                        <span key={it}>{it}</span>
                      ))}
                    </div>
                    <motion.p
                      initial={false}
                      animate={{ height: on ? "auto" : 0, opacity: on ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-[0.8rem] leading-relaxed text-ice/80"
                    >
                      <span className="block pt-2">{n.note}</span>
                    </motion.p>
                  </div>
                  <span className="label-tech shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.button>

                {i < NODES.length - 1 && (
                  <div className="ml-4 h-8 w-px overflow-hidden bg-border">
                    <motion.div
                      className="h-full w-px bg-cyan"
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                      style={{
                        transformOrigin: "top",
                        opacity: active ? 0.9 : 0.35,
                        transition: "opacity 300ms",
                      }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.14 }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
