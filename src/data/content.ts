export type Mode = "husky" | "shepherd";

export const SOCIAL = {
  tiktok: "https://www.tiktok.com/@bark9training",
  instagram: "https://www.instagram.com/bark9training",
  tiktokHandle: "@bark9training",
  phone: "(941) 294-9049",
  phoneHref: "tel:+19412949049",
  smsHref: "sms:+19412949049",
};

/**
 * Drop specific video links here to embed individual clips.
 * TikTok:    https://www.tiktok.com/@bark9training/video/1234567890123456789
 * Instagram: https://www.instagram.com/reel/AbCdEfGhIjK/
 * The profile embeds below them always work with no links.
 */
export const VIDEOS: { platform: "tiktok" | "instagram"; url: string; caption?: string }[] = [];

export const MODES: Record<
  Mode,
  { label: string; welcome: string; other: string; hero: string; heroName: string; heroTag: string; bark: string; photo: string; pos: string }
> = {
  husky: {
    label: "HUSKY",
    welcome: "Welcome, husky person",
    other: "shepherd",
    hero: "/img/husky1.jpg",
    heroName: "Koda — athlete nº 214",
    heroTag: "a very stubborn, very fast boy",
    bark: "AWOOO!",
    photo: "/img/husky1.jpg",
    pos: "50% 40%",
  },
  shepherd: {
    label: "SHEPHERD",
    welcome: "Welcome, shepherd person",
    other: "husky",
    hero: "/img/shep1.jpg",
    heroName: "Ranger — athlete nº 087",
    heroTag: "locked in. ball secured.",
    bark: "WOOF!",
    photo: "/img/shep1.jpg",
    pos: "40% 30%",
  },
};

export const TICKER = ["OBEDIENCE", "AGILITY", "RECALL", "PUPPY FOUNDATIONS", "REACTIVITY RESET", "BOARD & TRAIN", "EARN THE REP"];

export const PROGRAMS = [
  { n: 1, key: "foundations", title: "Puppy Foundations", sub: "Day-one game plan", body: "Name games, potty rhythm, crate calm and bite inhibition — the fundamentals every champion is built on.", short: "Start strong. Start early." },
  { n: 2, key: "obedience", title: "Obedience", sub: "Sit. Stay. Sharp.", body: "Clean sits, heel work and rock-solid stays, drilled in short reps that build confidence, not pressure.", short: "Clean reps, every rep." },
  { n: 3, key: "agility", title: "Agility & Sport", sub: "Jump. Weave. Fly.", body: "Hurdles, tunnels and weave poles to burn energy, build body awareness and sharpen focus.", short: "Athletic minds, athletic bodies." },
  { n: 4, key: "reactivity", title: "Reactivity Reset", sub: "Calm under pressure", body: "Leash reactivity, barking and big feelings — restructured with patience, distance and a solid plan.", short: "Big feelings, steady handler." },
  { n: 5, key: "recall", title: "Off-Leash Recall", sub: "Come back. Every time.", body: "Distraction-proof recall built in layers, from the living room to the open field and beyond.", short: "Freedom you can trust." },
  { n: 6, key: "board", title: "Board & Train", sub: "Training camp", body: "Immersive stays with daily structured sessions, so your dog comes home with habits already locked in.", short: "Bootcamp, dog-approved." },
];

export const STEPS = [
  { t: "You arrive.", b: "Nerves, zoomies, pulling on the leash — all welcome. We meet you both, watch how you move together, and set the first goal." },
  { t: "We train.", b: "Short, high-energy reps with clear markers and big rewards. You learn the drills too, so it sticks past the last session." },
  { t: "Home, off the leash.", b: "A written game plan, follow-up video check-ins and a dog who finally listens — in the park, on the trail, at the door." },
];

export const ATHLETES = [
  { name: "Koda", breed: "Siberian Husky", tag: "professional escape artist", lvl: "Recall L3", move: "The Houdini sit", img: "/img/husky1.jpg", pos: "50% 45%", story: "Arrived believing fences were suggestions. Now holds a 60-second stay and only *considers* the neighbour's gate." },
  { name: "Ranger", breed: "German Shepherd", tag: "locked in. ball secured.", lvl: "Obedience L4", move: "Heel, then heel harder", img: "/img/shep1.jpg", pos: "40% 30%", story: "Zero-to-focus in three sessions. Protects his tennis ball with the seriousness of a bank vault." },
  { name: "Luna", breed: "Siberian Husky", tag: "the opera singer", lvl: "Reactivity R2", move: "Quiet-on-cue", img: "/img/husky4.jpg", pos: "50% 40%", story: "Used to narrate every passing dog at full volume. Now trades the aria for a calm check-in." },
  { name: "Blitz", breed: "Doberman", tag: "aerial division", lvl: "Agility A3", move: "Top-bar clear", img: "/img/agility2.jpg", pos: "50% 30%", story: "Clears the bar like it owes him money. Landing form is being workshopped." },
  { name: "Storm", breed: "Malinois", tag: "frisbee lifer", lvl: "Drive D5", move: "Disc on demand", img: "/img/work1.jpg", pos: "50% 35%", story: "Endless drive channelled into a tidy out-and-drop. The frisbee has never been safer." },
  { name: "Nova", breed: "Husky Mix", tag: "eyes like a winter sky", lvl: "Puppy P2", move: "Sit for snacks", img: "/img/husky2.jpg", pos: "50% 45%", story: "Our newest rookie. Learned 'sit' in a single afternoon and has not stopped bragging." },
  { name: "Pepper", breed: "Border Terrier", tag: "fast, small, unbothered", lvl: "Agility A2", move: "Yellow-pole dash", img: "/img/agility3.jpg", pos: "50% 45%", story: "Proof that the smallest athlete on the field is often the quickest." },
  { name: "Ash", breed: "Cattle Dog", tag: "the metronome", lvl: "Agility A1", move: "Low-bar rhythm", img: "/img/agility1.jpg", pos: "35% 45%", story: "Steady, precise and never rushed. The crowd favourite in the rookie ring." },
];

export const WALL = ["/img/husky1.jpg", "/img/shep1.jpg", "/img/agility2.jpg", "/img/husky4.jpg", "/img/work1.jpg", "/img/agility3.jpg", "/img/husky2.jpg", "/img/agility4.jpg"];

export const TEAM = [
  { role: "Head Coach", cred: "Behaviour & obedience", quote: "Clear rules. Big rewards.", ask: "reactivity plans", facts: ["Obedience", "Behaviour", "Leash skills"], fun: "Believes every dog is a champion in progress.", img: "/img/husky1.jpg", pos: "50% 40%" },
  { role: "Agility Coach", cred: "Sport & conditioning", quote: "Fit dogs are calm dogs.", ask: "hurdles & weaves", facts: ["Agility", "Conditioning", "Focus games"], fun: "Has never met a tunnel they didn't like.", img: "/img/agility2.jpg", pos: "50% 30%" },
  { role: "Puppy Coach", cred: "Early foundations", quote: "Start small. Win daily.", ask: "puppy plans", facts: ["Foundations", "Socialisation", "Crate calm"], fun: "Smuggles treats in every pocket.", img: "/img/husky2.jpg", pos: "50% 45%" },
  { role: "Owner Coach", cred: "Handler skills", quote: "We train you too.", ask: "your first session", facts: ["Handling", "Timing", "Consistency"], fun: "Convinced the handler is half the team.", img: "/img/shep1.jpg", pos: "40% 30%" },
];

export const STATS = [
  { v: 9, s: "", l: "years of", l2: "wagging tails" },
  { v: 1200, s: "", l: "reps a week", l2: "on the training field" },
  { v: 4.9, s: "★", l: "from happy", l2: "pet parents", dec: 1 },
  { v: 98, s: "%", l: "of questions", l2: "answered same-day" },
];

export const REVIEWS = [
  { q: "They got on the floor with me before they even said hello to my human. Correct priorities.", who: "Koda", note: "as dictated to his human" },
  { q: "I used to lunge at every dog on the block. Now I sit, look up and collect my snack. Do not tell the other dogs.", who: "Luna", note: "translated by her owner" },
  { q: "One week of drills and the ball is officially mine, on command. Ten out of ten, would heel again.", who: "Ranger", note: "typed with a paw" },
];
