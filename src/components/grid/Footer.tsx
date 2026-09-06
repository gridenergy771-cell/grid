import logo from "@/assets/grid-logo.png.asset.json";
import { NAV_LINKS, X_URL } from "@/config/grid";
import { Section, XIcon } from "./primitives";

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-12">
      <Section>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div className="flex min-w-0 items-center gap-4">
            <img src={logo.url} alt="GRID" className="h-11 w-11 shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-semibold tracking-[0.2em]">GRID</p>
              <p className="label-tech mt-1">Autonomous Energy Grid</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.82rem] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GRID on X"
              className="text-muted-foreground transition-all duration-300 hover:text-cyan hover:drop-shadow-[0_0_8px_var(--cyan)]"
            >
              <XIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="hairline-x mt-12" />

        <p className="mt-8 max-w-3xl text-[0.72rem] leading-relaxed text-muted-foreground/60">
          GRID is an independent community project and is not affiliated with, endorsed by, or
          issued by Circle or Arc. GRID explores documented use cases and infrastructure concepts
          within the Arc ecosystem.
        </p>
      </Section>
    </footer>
  );
}
