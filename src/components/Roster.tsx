"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ATHLETES } from "@/data/content";
import { useMode } from "./ModeProvider";

export function Roster() {
  const { mode } = useMode();
  const [open, setOpen] = useState<string | null>(null);
  const list = useMemo(() => {
    const first = mode === "husky" ? "Koda" : "Ranger";
    return [...ATHLETES].sort((a, b) => (a.name === first ? -1 : b.name === first ? 1 : 0));
  }, [mode]);
  return (
    <section className="sec" id="athletes">
      <div className="wrap">
        <div className="roster-head">
          <div className="eyebrow">Our athletes</div>
          <h2 className="h2 disp">
            The <em>roster.</em>
          </h2>
          <p className="lead">Every face on this wall has a training log, a favorite reward and a personal best.</p>
        </div>
        <div className="r-grid">
          {list.map((a, i) => (
            <motion.article
              layout
              key={a.name}
              className={`r-card ${open === a.name ? "open" : ""}`}
              onClick={() => setOpen(open === a.name ? null : a.name)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ layout: { type: "spring", stiffness: 260, damping: 28 }, delay: (i % 4) * 0.08, duration: 0.7 }}
            >
              <img src={a.img} alt={`${a.name} the ${a.breed}`} style={{ objectPosition: a.pos }} loading="lazy" />
              <div className="r-shade" />
              <span className="r-no">№ {String(i + 1).padStart(2, "0")}</span>
              {i === 0 && <span className="r-star">COVER STAR</span>}
              <div className="r-info">
                <h3 className="disp">{a.name}</h3>
                <div className="r-breed">{a.breed}</div>
                <div className="r-tag">{a.tag}</div>
                <div className="r-more">
                  <div className="r-stats">
                    <span>{a.lvl}</span>
                    <span>{a.move}</span>
                  </div>
                  <p>{a.story}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
