"use client";
import { motion } from "framer-motion";
import { TICKER } from "@/data/content";

export function Marquee() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="marquee" aria-hidden>
      <motion.div className="marquee-track" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 28 }}>
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
        {items.map((t, i) => (
          <span key={"b" + i}>{t}</span>
        ))}
      </motion.div>
    </div>
  );
}
