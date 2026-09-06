import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal, Section, SectionLabel } from "./primitives";

const STAGES = [
  { n: "01", t: "ENERGY", d: "Physical energy infrastructure." },
  { n: "02", t: "DATA", d: "Real-time information becomes machine-readable." },
  { n: "03", t: "DECISION", d: "Autonomous systems respond to changing conditions." },
  { n: "04", t: "SETTLEMENT", d: "Programmable payments settle economic activity." },
];

export function Infrastructure() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <Section id="infrastructure" className="py-28 md:py-36">
      <Reveal>
        <SectionLabel>Infrastructure</SectionLabel>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-8 max-w-2xl text-[2.2rem] leading-[1] font-semibold tracking-[-0.04em] sm:text-[3rem]">
          ENERGY BECOMES PROGRAMMABLE
        </h2>
      </Reveal>

      <div ref={ref} className="mt-16 grid gap-px border border-border bg-border md:grid-cols-4">
        {STAGES.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 26 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[oklch(0.15_0.035_264)] p-7 transition-colors duration-300 hover:bg-[oklch(0.19_0.045_262)] sm:p-9"
          >
            <span className="font-mono text-[0.72rem] tracking-[0.24em] text-cyan/70">
              {s.n}
            </span>
            <h3 className="mt-8 text-lg font-semibold tracking-[0.06em] transition-transform duration-300 group-hover:translate-x-1">
              {s.t}
            </h3>
            <p className="mt-3 text-[0.85rem] leading-relaxed text-muted-foreground">{s.d}</p>
            <span className="absolute inset-x-0 bottom-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
