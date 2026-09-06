import { useEffect, useState } from "react";
import { motion } from "motion/react";
import banner from "@/assets/grid-banner.png.asset.json";
import { RADARDEX_URL } from "@/config/grid";
import { useLaunch } from "./launch";

const ease = [0.16, 1, 0.3, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export function Hero() {
  const { unlocked, openModal } = useLaunch();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    const onMove = (e: MouseEvent) =>
      setTilt({
        x: (e.clientX / window.innerWidth - 0.5) * 18,
        y: (e.clientY / window.innerHeight - 0.5) * 12,
      });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
        <div className="order-2 lg:order-1">
          <motion.p {...rise(0.15)} className="label-tech">
            Autonomous Energy Infrastructure
          </motion.p>

          <motion.h1
            {...rise(0.3)}
            className="mt-6 text-[4.5rem] leading-[0.85] font-semibold tracking-[-0.05em] sm:text-[6rem] lg:text-[7.5rem]"
          >
            GRID
          </motion.h1>

          <motion.p
            {...rise(0.45)}
            className="mt-5 font-mono text-[0.7rem] tracking-[0.34em] text-cyan/90 uppercase"
          >
            Autonomous Energy Grid
          </motion.p>

          <motion.p
            {...rise(0.45)}
            className="mt-8 max-w-lg text-2xl leading-[1.2] font-medium tracking-[-0.02em] text-ice sm:text-[2rem]"
          >
            Energy Meets Programmable Money.
          </motion.p>

          <motion.p
            {...rise(0.6)}
            className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground"
          >
            GRID explores the intersection of autonomous energy infrastructure,
            machine-to-machine payments, real-time data, and programmable settlement.
          </motion.p>

          <motion.div {...rise(0.75)} className="mt-10 flex flex-wrap items-center gap-3">
            <button
              data-cursor="cta"
              onClick={openModal}
              className="rounded-sm border border-cyan/50 bg-cyan/12 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-ice transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan/20 hover:shadow-[0_10px_40px_-16px_var(--cyan)] active:translate-y-0 active:scale-[0.985]"
            >
              {unlocked ? "ENTER GRID" : "LAUNCH GRID"}
            </button>
            <a
              data-cursor="cta"
              href={RADARDEX_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-sm border border-border px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/50 active:translate-y-0"
            >
              VIEW CHART
            </a>
            <a
              data-cursor="cta"
              href={RADARDEX_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-sm px-2 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-cyan"
            >
              BUY $GRID →
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative order-1 lg:order-2 lg:-mr-[14vw]"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease }}
        >
          <div
            className="absolute -inset-10 -z-10 opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--cyan) 22%, transparent), transparent 70%)",
            }}
          />
          <img
            src={banner.url}
            alt="GRID — Autonomous Energy Grid"
            className="w-full transition-transform duration-[900ms] ease-out"
            style={{
              transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0)`,
              maskImage:
                "radial-gradient(120% 100% at 45% 50%, black 55%, transparent 92%), linear-gradient(to right, transparent 0%, black 14%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mt-20 w-full max-w-[1240px] px-6 md:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="relative h-px w-full overflow-hidden bg-border">
          <div
            className="absolute inset-y-0 w-1/3"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--cyan), transparent)",
              animation: "grid-sweep 7s linear infinite",
            }}
          />
        </div>
        <p className="label-tech mt-5">Machines. Energy. Settlement.</p>
      </motion.div>
    </section>
  );
}
