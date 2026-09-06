import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { unlockTime } from "@/config/grid";

type LaunchState = {
  unlocked: boolean;
  remaining: string;
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const Ctx = createContext<LaunchState | null>(null);

function format(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

export function LaunchProvider({ children }: { children: ReactNode }) {
  const target = useMemo(() => unlockTime(), []);
  const [now, setNow] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const value: LaunchState = {
    unlocked: now !== null && now >= target,
    remaining: now === null ? "--:--:--" : format(target - now),
    modalOpen,
    openModal: () => setModalOpen(true),
    closeModal: () => setModalOpen(false),
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLaunch() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLaunch must be used inside LaunchProvider");
  return ctx;
}
