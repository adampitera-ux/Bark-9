"use client";
import { motion } from "framer-motion";
import { REVIEWS } from "@/data/content";

export function Reviews() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="reviews-head">
          <div className="eyebrow">The voices</div>
          <h2 className="h2 disp">
            Reviews, straight <em>from the snout.</em>
          </h2>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((r, i) => (
            <motion.figure key={r.who} className="rev" initial={{ opacity: 0, y: 60, }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.12, duration: 0.8 }}>
              <div className="rev-q">“</div>
              <motion.p initial="h" whileInView="v" viewport={{ once: true }} variants={{ v: { transition: { staggerChildren: 0.035, delayChildren: 0.3 + i * 0.12 } } }}>
                {r.q.split(" ").map((w, k) => (
                  <motion.span key={k} className="w" variants={{ h: { opacity: 0, y: 12 }, v: { opacity: 1, y: 0 } }}>
                    {w}
                  </motion.span>
                ))}
              </motion.p>
              <figcaption className="rev-who">
                — {r.who}
                <small>{r.note}</small>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
