"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TEAM } from "@/data/content";

export function Team() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="sec" id="trainers" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="team-head">
          <div>
            <div className="eyebrow">The training staff</div>
            <h2 className="h2 disp">
              Tough love.
              <br />
              <em>Big rewards.</em>
            </h2>
          </div>
          <p className="lead">Four trainers, one shared weakness for wagging tails. Hover or tap a card to see who to ask about what.</p>
        </div>
        <div className="t-grid">
          {TEAM.map((t, i) => (
            <motion.article
              key={t.role}
              className={`t-card ${open === i ? "open" : ""}`}
              onClick={() => setOpen(open === i ? null : i)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <img src={t.img} alt="" style={{ objectPosition: t.pos }} loading="lazy" />
              <div className="t-body">
                <div className="t-no">0{i + 1}</div>
                <h3 className="t-role disp">{t.role}</h3>
                <div className="t-cred">{t.cred}</div>
                <div className="t-quote">“{t.quote}”</div>
              </div>
              <div className="t-back">
                <h4>{t.role}</h4>
                <p>{t.fun}</p>
                <ul>
                  {t.facts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="t-ask">Ask about: {t.ask}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
