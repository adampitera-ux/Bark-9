"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { STEPS } from "@/data/content";

const PHOTOS = ["/img/husky2.jpg", "/img/work1.jpg", "/img/shep2.jpg"];

export function Steps() {
  const ref = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setI(Math.min(2, Math.floor(v * 3))));
  const fills = [0, 1, 2].map((n) => useTransform(scrollYProgress, [n / 3, (n + 1) / 3], [0, 1])); // eslint-disable-line react-hooks/rules-of-hooks
  const s = STEPS[i];
  return (
    <section className="steps" ref={ref}>
      <div className="steps-stick">
        <div className="wrap steps-grid">
          <div className="steps-photo">
            <AnimatePresence mode="popLayout">
              <motion.img key={i} src={PHOTOS[i]} alt="" initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.15 }} animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />
            </AnimatePresence>
          </div>
          <div>
            <div className="eyebrow">How it works</div>
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.45 }}>
                <div className="steps-num">0{i + 1}</div>
                <div className="steps-of">/ 03</div>
                <h3 className="steps-t disp">{s.t}</h3>
                <p className="steps-b">{s.b}</p>
              </motion.div>
            </AnimatePresence>
            <div className="steps-bar">
              {fills.map((f, n) => (
                <i key={n}>
                  <motion.b style={{ scaleX: f }} />
                </i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
