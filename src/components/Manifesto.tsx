"use client";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Word({ w, p, a, b, hl }: { w: string; p: MotionValue<number>; a: number; b: number; hl?: boolean }) {
  const o = useTransform(p, [a, b], [0.16, 1]);
  const y = useTransform(p, [a, b], [14, 0]);
  return (
    <motion.span className="w" style={{ opacity: o, y, color: hl ? "var(--accent)" : undefined }}>
      {w}
    </motion.span>
  );
}

export function WordReveal({ text, className, highlight = [] }: { text: string; className?: string; highlight?: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <div ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} w={w} p={scrollYProgress} a={i / words.length} b={Math.min(1, (i + 1.5) / words.length)} hl={highlight.includes(w.replace(/[^a-zA-Z]/g, "").toLowerCase())} />
      ))}
    </div>
  );
}

export function Manifesto() {
  return (
    <section className="manifesto" id="about">
      <div className="wrap">
        <div className="eyebrow">Welcome to Bark9</div>
        <WordReveal className="manifesto-text disp" text="Not obedience school. A training ground for the dog who runs your whole heart." highlight={["training", "ground"]} />
        <p className="manifesto-sub">Positive · Structured · Sport-minded</p>
      </div>
    </section>
  );
}
