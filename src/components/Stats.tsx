"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/content";

function Count({ to, dec = 0 }: { to: number; dec?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease: [0.16, 1, 0.3, 1], onUpdate: (n) => setV(n) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{dec ? v.toFixed(dec) : Math.round(v).toLocaleString()}</span>;
}

export function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-top">
          <div>
            <div className="eyebrow">Proof in the reps</div>
            <h2 className="h2 disp" style={{ marginTop: 18 }}>The numbers bark for themselves.</h2>
          </div>
        </div>
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.l}>
              <div className="stat-v">
                <Count to={s.v} dec={s.dec} />
                {s.s}
              </div>
              <div className="stat-l">
                {s.l}
                <br />
                {s.l2}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
