"use client";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMode } from "./ModeProvider";
import { MODES } from "@/data/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { mode, entered } = useMode();
  const m = MODES[mode];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  return (
    <section id="top" className="hero" ref={ref}>
      <div className="hero-bg" />
      <div className="wrap hero-grid">
        <div>
          <motion.div className="eyebrow" initial={{ opacity: 0, x: -20 }} animate={entered ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5 }}>
            Dog training · Sport · Behaviour
          </motion.div>
          <h1 className="hero-h1 disp">
            {["Where every", "good dog", "becomes an", "athlete."].map((t, i) => (
              <span className="l" key={t}>
                <motion.span
                  className={i === 1 ? "hl" : i === 3 ? "out" : ""}
                  initial={{ y: "110%" }}
                  animate={entered ? { y: 0 } : {}}
                  transition={{ delay: 0.55 + i * 0.1, duration: 0.9, ease }}
                >
                  {t}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p className="lead" initial={{ opacity: 0, y: 20 }} animate={entered ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.1 }}>
            Sharp obedience, agility and off-leash focus — coached with high energy, clear rules and rewards your dog will actually work for.
          </motion.p>
          <motion.div className="hero-ctas" initial={{ opacity: 0, y: 20 }} animate={entered ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.25 }}>
            <a href="#book" className="btn btn-primary">
              <span>Book a session →</span>
            </a>
            <a href="#coaches" className="btn btn-ghost">
              <span>Meet the coaches</span>
            </a>
          </motion.div>
          <motion.div className="chips" initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 1.5 }}>
            <div>
              <b>EST. 2016</b>on the field
            </div>
            <div>
              <b>1,200</b>reps a week
            </div>
            <div>
              <b>
                <span className="star">★</span> 4.9
              </b>
              pet parents
            </div>
          </motion.div>
        </div>

        <motion.div className="hero-media" style={{ y }} initial={{ opacity: 0, scale: 0.9, rotate: 4 }} animate={entered ? { opacity: 1, scale: 1, rotate: 0 } : {}} transition={{ delay: 0.7, duration: 1, ease }}>
                    <div className="hero-frame">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={m.hero}
                src={m.hero}
                alt={m.heroName}
                style={{ scale: imgScale, objectPosition: m.pos, position: "absolute", inset: 0 }}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease }}
              />
            </AnimatePresence>
          </div>
          <div className="hero-tag">
            <small>{m.heroTag}</small>
            {m.heroName}
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
