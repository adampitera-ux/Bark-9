"use client";
import { motion } from "framer-motion";
import { TRAINER } from "@/data/content";

export function Team() {
  const t = TRAINER;
  return (
    <section className="sec" id="trainer" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="team-head">
          <div>
            <div className="eyebrow">Your trainer</div>
            <h2 className="h2 disp">
              One trainer.
              <br />
              <em>Every session.</em>
            </h2>
          </div>
          <p className="lead">When you train with BARK9, you work directly with the owner — from the first session to the last.</p>
        </div>
        <motion.div className="t-solo" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.8 }}>
          <div className="t-card">
            <img src={t.img} alt="" style={{ objectPosition: t.pos }} loading="lazy" />
            <div className="t-body">
              <h3 className="t-role disp">{t.role}</h3>
              <div className="t-cred">{t.cred}</div>
              <div className="t-quote">“{t.quote}”</div>
            </div>
          </div>
          <div className="t-about">
            <p>{t.fun}</p>
            <ul>
              {t.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="#book" className="btn btn-primary">
              <span>Book {t.ask} →</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
