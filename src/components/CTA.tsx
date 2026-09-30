"use client";
import { motion } from "framer-motion";
import { SOCIAL } from "@/data/content";

export function CTA() {
  return (
    <section className="cta" id="book">
      <div className="wrap">
        <motion.div className="eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          The invitation
        </motion.div>
        <motion.h2 className="disp" initial={{ opacity: 0, scale: 0.85, y: 60 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          Ready to <em>train?</em>
        </motion.h2>
        <p className="cta-sub">Call or text, tell us about your dog and we&apos;ll build the game plan together.</p>
        <div className="cta-btns">
          <a className="btn btn-primary" href={SOCIAL.phoneHref}>
            <span>Call {SOCIAL.phone}</span>
          </a>
          <a className="btn btn-ghost" href={SOCIAL.smsHref}>
            <span>Send a text</span>
          </a>
        </div>
        <div className="cta-meta">
          <span>Puppies to seniors</span>
          <span>All breeds welcome</span>
          <span>Same-day replies</span>
        </div>
      </div>
    </section>
  );
}
