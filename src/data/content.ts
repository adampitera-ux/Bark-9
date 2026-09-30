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

export const TICKER = ["OBEDIENCE", "PROTECTION", "PUPPY TRAINING", "BEHAVIOR MODIFICATION", "RECALL", "IMPULSE CONTROL", "CONTROL BEFORE PROTECTION"];

export const PROGRAMS = [
  {
    n: 1,
    key: "puppy",
    title: "Puppy Training",
    sub: "Build the foundation",
    body: "At BARK9 Training, our puppy program builds the foundation for a confident, well-mannered, and reliable dog.",
    more: [
      "Training focuses on engagement, basic obedience, socialization, leash skills, house manners, impulse control, and confidence building. Puppies learn how to focus on their handlers, navigate new environments, and develop positive behaviors from an early age.",
      "Our goal is to establish clear communication and strong habits early, creating a foundation that can support your puppy throughout their development.",
      "Whether you have a new puppy or are preparing for advanced training in the future, BARK9 Training provides structured, age-appropriate training tailored to each puppy and their individual needs.",
    ],
  },
  {
    n: 2,
    key: "obedience",
    title: "Obedience Training",
    sub: "Responsive. Reliable. Well-mannered.",
    body: "At BARK9 Training, our obedience program is designed to create dogs that are responsive, reliable, and well-mannered in everyday life.",
    more: [
      "Training focuses on clear communication, engagement, leash skills, recall, place, sit, down, stay, impulse control, and reliable obedience around distractions. Dogs learn to understand and respond to their handlers while building confidence and consistency in a variety of environments.",
      "Our goal is more than teaching commands—it’s developing a strong working relationship between dog and handler built on communication, structure, and trust.",
      "Whether you're starting with the basics or looking to strengthen advanced obedience, BARK9 Training provides structured training tailored to each dog and handler's individual goals.",
    ],
  },
  {
    n: 3,
    key: "protection",
    title: "Protection Dog Training",
    sub: "Control before protection",
    body: "At BARK9 Training, our protection dog program is designed to develop confident, obedient, and reliable dogs with a strong foundation in control and real-world preparedness.",
    more: [
      "Training focuses on advanced obedience, handler control, environmental confidence, threat awareness, and controlled protection work. Dogs are taught to respond reliably to their handler while maintaining composure in challenging environments.",
      "Our approach emphasizes control before protection. A well-trained protection dog must be able to work when needed and remain calm, neutral, and obedient when protection is not required.",
      "Whether you are looking to develop an existing dog or build advanced skills from the ground up, BARK9 Training provides structured training tailored to the individual dog, handler, and goals.",
    ],
  },
  {
    n: 4,
    key: "behavior",
    title: "Behavior Modification",
    sub: "Confident. Balanced. Manageable.",
    body: "At BARK9 Training, our behavior modification program is designed to address unwanted behaviors and help dogs become more confident, balanced, and manageable in everyday life.",
    more: [
      "Training may address challenges such as reactivity, fear, anxiety, excessive barking, leash pulling, resource guarding, jumping, inappropriate behaviors, and difficulty around people or other dogs.",
      "We focus on identifying the factors contributing to the behavior while building clear communication, structure, impulse control, confidence, and reliable responses. Training is tailored to each dog and their individual behavior, environment, and goals.",
      "Our goal is to create meaningful, lasting changes while strengthening the relationship between dog and handler through consistency, communication, and trust.",
    ],
  },
];

export const STEPS = [
  { t: "You arrive.", b: "Nerves, zoomies, pulling on the leash — all welcome. We meet you both, watch how you move together, and set the first goal." },
  { t: "We train.", b: "Structured sessions with clear communication, consistent markers and real rewards. You learn the drills too, so it sticks past the last session." },
  { t: "Home, under control.", b: "A written game plan, follow-up video check-ins and a dog who finally listens — in the park, on the trail, at the door." },
];

export const ATHLETES = [
  { name: "Koda", breed: "Siberian Husky", tag: "professional escape artist", lvl: "Recall L3", move: "The Houdini sit", img: "/img/husky1.jpg", pos: "50% 45%", story: "Arrived believing fences were suggestions. Now holds a 60-second stay and only *considers* the neighbor's gate." },
  { name: "Ranger", breed: "German Shepherd", tag: "locked in. ball secured.", lvl: "Obedience L4", move: "Heel, then heel harder", img: "/img/shep1.jpg", pos: "40% 30%", story: "Zero-to-focus in three sessions. Protects his tennis ball with the seriousness of a bank vault." },
  { name: "Storm", breed: "Belgian Malinois", tag: "all drive, all control", lvl: "Protection P3", move: "Out on command", img: "/img/work1.jpg", pos: "50% 35%", story: "Endless drive channeled into a clean out and a calm, neutral settle. Works when asked, off when not." },
  { name: "Luna", breed: "Siberian Husky", tag: "the opera singer", lvl: "Behavior B2", move: "Quiet-on-cue", img: "/img/husky4.jpg", pos: "50% 40%", story: "Used to narrate every passing dog at full volume. Now trades the aria for a calm check-in." },
  { name: "Duke", breed: "German Shepherd", tag: "the quiet guardian", lvl: "Protection P2", move: "Watch and hold", img: "/img/shep2.jpg", pos: "55% 50%", story: "Confident on the fence line, neutral everywhere else. Control first, always." },
  { name: "Nova", breed: "Husky Mix", tag: "eyes like a winter sky", lvl: "Puppy P2", move: "Sit for snacks", img: "/img/husky2.jpg", pos: "50% 45%", story: "Our newest rookie. Learned 'sit' in a single afternoon and has not stopped bragging." },
];

export const WALL = ["/img/husky1.jpg", "/img/shep1.jpg", "/img/work1.jpg", "/img/husky4.jpg", "/img/shep2.jpg", "/img/husky3.jpg", "/img/husky2.jpg"];

export const TEAM = [
  { role: "Head Trainer", cred: "Behavior & obedience", quote: "Clear rules. Big rewards.", ask: "behavior plans", facts: ["Obedience", "Behavior", "Leash skills"], fun: "Believes every dog is a champion in progress.", img: "/img/husky1.jpg", pos: "50% 40%" },
  { role: "Protection Trainer", cred: "Control & protection work", quote: "Control before protection.", ask: "protection dogs", facts: ["Handler control", "Threat awareness", "Protection work"], fun: "Wants a dog that works when needed and stays neutral when not.", img: "/img/work1.jpg", pos: "50% 35%" },
  { role: "Puppy Trainer", cred: "Early foundations", quote: "Start small. Win daily.", ask: "puppy plans", facts: ["Foundations", "Socialization", "House manners"], fun: "Smuggles treats in every pocket.", img: "/img/husky2.jpg", pos: "50% 45%" },
  { role: "Handler Trainer", cred: "Handler skills", quote: "We train you too.", ask: "your first session", facts: ["Handling", "Timing", "Consistency"], fun: "Convinced the handler is half the team.", img: "/img/shep1.jpg", pos: "40% 30%" },
];

export const STATS = [
  { v: 10, s: "", l: "years of", l2: "wagging tails" },
  { v: 1200, s: "", l: "reps a week", l2: "on the training field" },
  { v: 4.9, s: "★", l: "from happy", l2: "pet parents", dec: 1 },
  { v: 98, s: "%", l: "of questions", l2: "answered same-day" },
];

export const REVIEWS = [
  { q: "They got on the floor with me before they even said hello to my human. Correct priorities.", who: "Koda", note: "as dictated to his human" },
  { q: "I used to lunge at every dog on the block. Now I sit, look up and collect my snack. Do not tell the other dogs.", who: "Luna", note: "translated by her owner" },
  { q: "One week of drills and the ball is officially mine, on command. Ten out of ten, would heel again.", who: "Ranger", note: "typed with a paw" },
];
