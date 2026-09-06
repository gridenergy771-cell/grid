import { motion, useInView } from "motion/react";
import { useRef } from "react";

const LINES = [
  "ENERGY BECOMES DATA.",
  "DATA BECOMES DECISION.",
  "DECISION BECOMES ACTION.",
  "ACTION BECOMES PAYMENT.",
];

function Line({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="text-[2rem] leading-[1.05] font-semibold tracking-[-0.045em] sm:text-[3.5rem] lg:text-[4.6rem]"
      style={{ color: index === LINES.length - 1 ? "var(--cyan)" : undefined }}
    >
      {text}
    </motion.p>
  );
}

export function Manifesto() {
  return (
    <section className="relative py-40 md:py-56">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <div className="max-w-4xl space-y-8 md:space-y-12">
          {LINES.map((l, i) => (
            <Line key={l} text={l} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
