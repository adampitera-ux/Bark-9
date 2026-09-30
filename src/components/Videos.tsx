"use client";
import Script from "next/script";
import { motion } from "framer-motion";
import { SOCIAL, VIDEOS } from "@/data/content";

function embedSrc(v: (typeof VIDEOS)[number]) {
  if (v.platform === "tiktok") {
    const id = v.url.match(/video\/(\d+)/)?.[1];
    return id ? `https://www.tiktok.com/embed/v2/${id}` : null;
  }
  const code = v.url.match(/\/(?:reel|p)\/([\w-]+)/)?.[1];
  return code ? `https://www.instagram.com/reel/${code}/embed` : null;
}

export function Videos() {
  const clips = VIDEOS.map((v) => ({ v, src: embedSrc(v) })).filter((c) => c.src);
  return (
    <section className="sec videos" id="watch">
      <div className="wrap">
        <div className="videos-head">
          <div>
            <div className="eyebrow">Straight from the field</div>
            <h2 className="h2 disp">
              Watch the <em>work.</em>
            </h2>
          </div>
          <div className="v-links">
            <a className="btn btn-primary" href={SOCIAL.tiktok} target="_blank" rel="noreferrer">
              <span>TikTok {SOCIAL.tiktokHandle}</span>
            </a>
            <a className="btn btn-ghost" style={{ color: "#fff" }} href={SOCIAL.instagram} target="_blank" rel="noreferrer">
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="v-grid">
          {clips.map(({ v, src }, i) => (
            <motion.div key={v.url} className="phone" initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.8 }}>
              <div className="phone-notch" />
              <iframe src={src!} title={v.caption ?? "Bark9 video"} loading="lazy" allow="encrypted-media; fullscreen" allowFullScreen />
            </motion.div>
          ))}
          {clips.length === 0 && (
            <>
              <motion.div className="phone v-tt" initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <div className="phone-notch" />
                <blockquote className="tiktok-embed" cite={SOCIAL.tiktok} data-unique-id="bark9training" data-embed-from="embed_page" data-embed-type="creator" style={{ maxWidth: "none", minWidth: 0 }}>
                  <section>
                    <a target="_blank" rel="noreferrer" href={`${SOCIAL.tiktok}?refer=creator_embed`}>
                      {SOCIAL.tiktokHandle}
                    </a>
                  </section>
                </blockquote>
              </motion.div>
              <motion.div className="phone" initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12, duration: 0.8 }}>
                <div className="phone-notch" />
                <iframe src={`${SOCIAL.instagram}/embed`} title="Bark9 Training on Instagram" loading="lazy" />
              </motion.div>
              <motion.div className="phone" initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.24, duration: 0.8 }} style={{ display: "grid", placeItems: "center", background: "var(--lime)", color: "var(--ink)", textAlign: "center", padding: 32 }}>
                <div>
                  <div className="disp" style={{ fontSize: 64 }}>Follow the reps.</div>
                  <p style={{ margin: "18px 0 28px", fontSize: 17 }}>New training clips, transformations and behind-the-scenes drills, posted all the time.</p>
                  <a className="btn btn-ghost" href={SOCIAL.tiktok} target="_blank" rel="noreferrer">
                    <span>Open TikTok →</span>
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </section>
  );
}
