import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logo from "@/assets/grid-logo.png.asset.json";
import { NAV_LINKS, X_URL } from "@/config/grid";
import { useLaunch } from "./launch";
import { XIcon } from "./primitives";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { unlocked, openModal } = useLaunch();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const cta = unlocked ? "ENTER GRID" : "LAUNCH GRID";

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ease-out"
        style={{
          backgroundColor: scrolled ? "oklch(0.16 0.04 264 / 0.78)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--hairline)" : "transparent"}`,
        }}
      >
        <div
          className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 transition-all duration-500 ease-out md:px-10"
          style={{ paddingTop: scrolled ? 12 : 22, paddingBottom: scrolled ? 12 : 22 }}
        >
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="GRID"
              className="shrink-0 transition-all duration-500 ease-out"
              style={{ width: scrolled ? 30 : 38, height: scrolled ? 30 : 38 }}
            />
            <span className="text-[0.95rem] font-semibold tracking-[0.22em]">GRID</span>
          </a>

          <nav
            className="hidden items-center transition-all duration-500 ease-out lg:flex"
            style={{ gap: scrolled ? 28 : 40 }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[0.8rem] font-medium tracking-[0.08em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GRID on X"
              className="hidden h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-all duration-300 hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_18px_-4px_var(--cyan)] sm:flex"
            >
              <XIcon className="h-3.5 w-3.5" />
            </a>
            <button
              data-cursor="cta"
              onClick={openModal}
              className="hidden rounded-sm border border-cyan/40 bg-cyan/10 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.16em] text-ice transition-all duration-300 hover:-translate-y-px hover:border-cyan hover:bg-cyan/20 active:translate-y-0 active:scale-[0.98] sm:block"
            >
              {cta}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span className="h-px w-5 bg-foreground" />
              <span className="h-px w-5 bg-foreground" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="absolute inset-0 bg-[oklch(0.13_0.035_265_/_0.97)] backdrop-blur-xl" />
            <div className="relative flex h-full flex-col px-6 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={logo.url} alt="GRID" className="h-8 w-8" />
                  <span className="text-sm font-semibold tracking-[0.22em]">GRID</span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="text-2xl leading-none text-muted-foreground"
                >
                  ×
                </button>
              </div>

              <motion.div
                className="mt-16 flex flex-col gap-7"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
              >
                {NAV_LINKS.map((l) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                    }}
                    className="text-2xl font-semibold tracking-tight"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </motion.div>

              <div className="mt-auto pb-10">
                <div className="hairline-x mb-6" />
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label-tech flex items-center gap-3"
                >
                  <XIcon className="h-3.5 w-3.5" /> Follow on X
                </a>
                <button
                  onClick={() => {
                    setOpen(false);
                    openModal();
                  }}
                  className="mt-6 w-full rounded-sm border border-cyan/40 bg-cyan/10 py-3.5 text-xs font-semibold tracking-[0.18em] text-ice"
                >
                  {cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
