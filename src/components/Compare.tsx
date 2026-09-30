"use client";
import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

export function Compare() {
  const [x, setX] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const drag = useRef(false);
  const move = useCallback((cx: number) => {
    const r = box.current!.getBoundingClientRect();
    setX(Math.max(4, Math.min(96, ((cx - r.left) / r.width) * 100)));
  }, []);
  return (
    <section className="sec compare">
      <div className="wrap">
        <motion.div className="compare-head" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="eyebrow">Every breed welcome</div>
          <h2 className="h2 disp">Husky or shepherd. <em>Same standard.</em></h2>
          <p className="lead">Independent thinkers and born workers need different game plans. Drag to compare.</p>
        </motion.div>
        <div
          ref={box}
          className="cmp"
          onPointerDown={(e) => {
            drag.current = true;
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
            move(e.clientX);
          }}
          onPointerMove={(e) => drag.current && move(e.clientX)}
          onPointerUp={() => (drag.current = false)}
        >
          <img src="/img/shep1.jpg" alt="German Shepherd with a ball" style={{ objectPosition: "50% 30%" }} />
          <div className="cmp-top" style={{ clipPath: `inset(0 ${100 - x}% 0 0)` }}>
            <img src="/img/husky1.jpg" alt="Siberian Husky" style={{ objectPosition: "50% 40%" }} />
          </div>
          <span className="cmp-label l">Husky</span>
          <span className="cmp-label r">Shepherd</span>
          <div className="cmp-handle" style={{ left: `${x}%` }}>
            <div className="cmp-knob">⇄</div>
          </div>
        </div>
      </div>
    </section>
  );
}
