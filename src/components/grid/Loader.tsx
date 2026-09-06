import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import logo from "@/assets/grid-logo.png.asset.json";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 800);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[oklch(0.12_0.03_265)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.img
            src={logo.url}
            alt=""
            className="h-20 w-20"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
