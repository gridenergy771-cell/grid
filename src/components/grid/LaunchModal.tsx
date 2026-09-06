import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import logo from "@/assets/grid-logo.png.asset.json";
import { useLaunch } from "./launch";

export function LaunchModal() {
  const { modalOpen, closeModal, unlocked, remaining } = useLaunch();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            aria-label="Close"
            onClick={closeModal}
            className="absolute inset-0 bg-[oklch(0.09_0.03_265_/_0.8)] backdrop-blur-md"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="GRID launch status"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md border border-cyan/35 bg-[oklch(0.16_0.04_264)] p-9 text-center shadow-[0_40px_120px_-40px_var(--cyan)]"
          >
            <img src={logo.url} alt="GRID" className="mx-auto h-20 w-20" />
            <h2 className="mt-6 text-xl font-semibold tracking-[0.06em]">
              {unlocked ? "GRID IS READY" : "GRID IS PREPARING"}
            </h2>
            <p className="mx-auto mt-4 max-w-xs text-[0.88rem] leading-relaxed text-muted-foreground">
              {unlocked
                ? "GRID utilities are now available."
                : "GRID utilities will become available 24 hours after the token launch."}
            </p>

            <div className="mt-8 border-y border-border py-5">
              <div className="flex items-center justify-between">
                <span className="label-tech">Utility Status</span>
                <span
                  className="font-mono text-[0.75rem] tracking-[0.2em]"
                  style={{ color: unlocked ? "var(--cyan)" : "var(--muted-foreground)" }}
                >
                  {unlocked ? "AVAILABLE" : "LOCKED"}
                </span>
              </div>
              {!unlocked && (
                <div className="mt-5">
                  <p className="label-tech">Available in</p>
                  <p className="mt-2 font-mono text-3xl tracking-[0.12em] text-ice tabular-nums">
                    {remaining}
                  </p>
                </div>
              )}
            </div>

            <button
              data-cursor="cta"
              onClick={closeModal}
              className="mt-8 w-full rounded-sm border border-cyan/45 bg-cyan/12 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-ice transition-colors duration-300 hover:bg-cyan/20"
            >
              {unlocked ? "ENTER GRID →" : "CLOSE"}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
