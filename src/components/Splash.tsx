"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useMode } from "./ModeProvider";
import { useEffect } from "react";

export function Splash() {
  const { entered, enter } = useMode();
  const letters = "BARK9".split("");
  useEffect(() => {
    if (entered) return;
    const t = setTimeout(() => enter("husky"), 1500);
    return () => clearTimeout(t);
  }, [entered, enter]);
  return (
    <AnimatePresence>
      {!entered && (
        <motion.div className="splash" exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} initial={{ clipPath: "inset(0 0 0% 0)" }}>
          <div className="splash-stripes" />
          <div className="splash-in">
            <div className="splash-word disp" aria-label="Bark9">
              {letters.map((l, i) => (
                <motion.span key={i} initial={{ y: "110%", rotate: 8 }} animate={{ y: 0, rotate: 0 }} transition={{ delay: 0.15 + i * 0.08, type: "spring", stiffness: 160, damping: 16 }}>
                  {l}
                </motion.span>
              ))}
            </div>
            <motion.p className="splash-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              Dog training · Built for sport
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
