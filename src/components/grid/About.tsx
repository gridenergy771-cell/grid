import { Reveal, Section, SectionLabel } from "./primitives";
import { EnergyFlow } from "./EnergyFlow";

export function About() {
  return (
    <Section id="about" className="py-28 md:py-40">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel>About</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 text-[2.5rem] leading-[0.95] font-semibold tracking-[-0.04em] sm:text-[3.4rem]">
              THE
              <br />
              AUTONOMOUS
              <br />
              <span className="text-cyan">ENERGY GRID</span>
            </h2>
          </Reveal>
          <div className="mt-10 max-w-lg space-y-6 text-[0.98rem] leading-relaxed text-muted-foreground">
            <Reveal delay={0.14}>
              <p>
                Energy infrastructure is becoming increasingly connected, programmable, and
                machine-driven.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                GRID explores a future where energy assets, autonomous systems, real-time
                information, and programmable money can interact through digital infrastructure.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="text-xl font-medium tracking-[-0.02em] text-ice">
                When energy moves, money moves.
              </p>
            </Reveal>
          </div>
        </div>

        <EnergyFlow />
      </div>
    </Section>
  );
}
