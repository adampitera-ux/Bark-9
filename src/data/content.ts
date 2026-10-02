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

export const TRAINER = {
  role: "Owner & Trainer",
  cred: "BARK9 Training",
  quote: "Control before protection.",
  bio: [
    "My passion for dog training began when I was a teenager, training a Great Dane for the show ring. That early experience sparked a lifelong interest in dogs, training, and the unique bond that develops between a dog and its handler.",
    "Not long after, I discovered my love for German Shepherds. I was drawn to their intelligence, versatility, work ethic, and willingness to learn. Their ability to form a strong partnership with their handler made a lasting impression on me and deepened my passion for working dogs and training.",
    "Today, that passion continues with my own Dutch Shepherd, whom I am actively training for **PSA (Protection Sports Association)**. Working toward PSA has given me the opportunity to continue developing my skills while challenging both myself and my dog through obedience, control, and protection work.",
    "Through BARK9 Training, my goal is to share that experience and passion with other dog owners. I believe effective training is built on communication, consistency, trust, and understanding—creating not just a well-trained dog, but a strong partnership between dog and handler.",
  ],
  facts: ["Puppy training", "Obedience", "Protection", "Behavior modification", "Handler skills"],
  ask: "your first session",
  img: "/img/work1.jpg",
  pos: "50% 35%",
};

export const STATS = [
  { v: 4.9, s: "★", l: "from happy", l2: "pet parents", dec: 1 },
  { v: 98, s: "%", l: "of questions", l2: "answered same-day" },
];

export const REVIEWS = [
  { q: "They got on the floor with me before they even said hello to my human. Correct priorities.", who: "Koda", note: "as dictated to his human" },
  { q: "I used to lunge at every dog on the block. Now I sit, look up and collect my snack. Do not tell the other dogs.", who: "Luna", note: "translated by her owner" },
  { q: "One week of drills and the ball is officially mine, on command. Ten out of ten, would heel again.", who: "Ranger", note: "typed with a paw" },
];
