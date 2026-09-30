"use client";
import { motion } from "framer-motion";
import { Logo } from "./Icons";
import { SOCIAL } from "@/data/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <Logo />
            </div>
            <p className="foot-blurb">Dog training built for sport, focus and a lifelong bond.</p>
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#athletes">Athletes</a></li>
              <li><a href="#coaches">Coaches</a></li>
              <li><a href="#watch">Watch</a></li>
            </ul>
          </div>
          <div>
            <h5>Follow</h5>
            <ul>
              <li><a href={SOCIAL.tiktok} target="_blank" rel="noreferrer">TikTok</a></li>
              <li><a href={SOCIAL.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h5>Train</h5>
            <ul>
              <li><a href={SOCIAL.phoneHref}>{SOCIAL.phone}</a></li>
              <li><a href="#book">Book a session</a></li>
              <li><a href="#top" className="up">Back to the top ↑</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-word disp" aria-hidden>
          {"BARK9".split("").map((l, i) => (
            <motion.span key={i} initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, type: "spring", stiffness: 120, damping: 14 }}>
              {l}
            </motion.span>
          ))}
        </div>

        <div className="ball-zone">
          <motion.div className="ball" drag dragSnapToOrigin dragElastic={0.35} dragTransition={{ bounceStiffness: 500, bounceDamping: 14 }} whileDrag={{ scale: 1.15, cursor: "grabbing" }} aria-label="Toss the ball" />
          <span className="ball-hint">← toss the ball · he&apos;ll bring it back</span>
          <span />
        </div>

        <div className="foot-bottom">
          <span>© 2026 Bark9 Training. All rights reserved.</span>
          <span>
            Photos: Wikimedia Commons contributors (CC BY / CC BY-SA / public domain) — swap in your own.
          </span>
        </div>
        <p className="foot-easter">Good human — you made it all the way down. Sit. Stay. Treat yourself.</p>
      </div>
    </footer>
  );
}
