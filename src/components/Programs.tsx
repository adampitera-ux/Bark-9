"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROGRAMS } from "@/data/content";
import { ProgramIcon } from "./Icons";

export function Programs() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="sec dark" id="programs">
      <div className="wrap">
        <div className="prog-head">
          <div>
            <div className="eyebrow">The training menu</div>
            <h2 className="h2 disp">
              Every skill they need.
              <br />
              <em>Zero fluff.</em>
            </h2>
          </div>
          <div className="count">04 PROGRAMS</div>
        </div>
        <div className="prog-grid">
          {PROGRAMS.map((p, i) => (
            <motion.article
              key={p.key}
              className="card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="card-top">
                <span className="card-no">№ 0{p.n}</span>
                <ProgramIcon k={p.key} className="card-ico" />
              </div>
              <h3 className="disp">{p.title}</h3>
              <div className="card-sub">{p.sub}</div>
              <p>{p.body}</p>
              <AnimatePresence initial={false}>
                {open === p.key && (
                  <motion.div className="card-detail" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
                    {p.more.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <button className={`card-more ${open === p.key ? "on" : ""}`} aria-expanded={open === p.key} onClick={() => setOpen(open === p.key ? null : p.key)}>
                {open === p.key ? "Show less" : "Explore program"} <i>→</i>
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
