"use client";
import { motion } from "framer-motion";
import { WALL } from "@/data/content";

function Row({ dir, imgs }: { dir: 1 | -1; imgs: string[] }) {
  const all = [...imgs, ...imgs, ...imgs, ...imgs];
  return (
    <motion.div className="wall-row" animate={{ x: dir === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 60 }}>
      {all.map((s, i) => (
        <img key={i} src={s} alt="" loading="lazy" />
      ))}
    </motion.div>
  );
}

export function Wall() {
  return (
    <section className="wall">
      <div className="wall-head">
        <div className="eyebrow">Hall of fame</div>
        <h2 className="h2 disp">Good dogs. <em>Great reps.</em></h2>
      </div>
      <Row dir={1} imgs={WALL} />
      <Row dir={-1} imgs={[...WALL].reverse()} />
    </section>
  );
}
