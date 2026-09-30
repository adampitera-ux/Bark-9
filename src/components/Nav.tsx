"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Logo } from "./Icons";

const LINKS = [
  ["Programs", "#programs"],
  ["Athletes", "#athletes"],
  ["Coaches", "#coaches"],
  ["Watch", "#watch"],
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <motion.header className={`nav ${solid ? "solid" : ""}`} initial={{ y: -80 }} animate={{ y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <div className="wrap nav-in">
          <a href="#top" aria-label="Bark9 home" onClick={() => setOpen(false)}>
            <Logo />
          </a>
          <nav className="nav-links">
            {LINKS.map(([l, h]) => (
              <a key={h} href={h}>
                {l}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="#book" className="btn btn-primary">
              <span>Book a session</span>
            </a>
            <button className="burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
              <i />
              <i />
              <i />
            </button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ clipPath: "circle(0% at 90% 5%)" }} animate={{ clipPath: "circle(150% at 90% 5%)" }} exit={{ clipPath: "circle(0% at 90% 5%)" }} transition={{ duration: 0.6 }}>
            {[...LINKS, ["Book a session", "#book"]].map(([l, h]) => (
              <a key={h} href={h} className="disp" onClick={() => setOpen(false)}>
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
