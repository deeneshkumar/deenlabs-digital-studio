export const SITE = {
  name: "DeenLabs",
  founder: "Deenesh Kumar",
  email: "deenesh.official@gmail.com",
  phoneDisplay: "+91 82205 73381",
  whatsapp: "918220573381",
  whatsappUrl:
    "https://wa.me/918220573381?text=Hi%20DeenLabs%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  tagline: "Technology-focused digital agency",
  mission: "Transform ideas into digital products and opportunities.",
  vision:
    "Build an ecosystem where technology, creativity, and entrepreneurship come together.",
  socials: {
    youtube: "https://www.youtube.com/@deeneshkumarj",
    instagram: "https://www.instagram.com/deenesh.real/",
    linkedin: "https://www.linkedin.com/in/deenesh2006/",
  },
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/contact", label: "Contact" },
] as const;

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  icon: string;
  status: "live" | "soon";
};

export const LIVE_SERVICES: ServiceItem[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Modern, fast, responsive websites and web apps — from personal portfolios to full business platforms.",
    points: [
      "Landing pages & business websites",
      "Portfolio and personal brand sites",
      "Web apps with dashboards & databases",
      "Performance, SEO and mobile-first builds",
    ],
    icon: "Code2",
    status: "live",
  },
];

export const FUTURE_SERVICES: ServiceItem[] = [
  {
    slug: "ai-productivity",
    title: "AI for Productivity",
    summary:
      "Practical training on using AI tools to work faster, automate the boring parts and multiply output.",
    points: [
      "AI workflow setups for students & teams",
      "Prompting systems that actually ship work",
      "Automation for repetitive daily tasks",
    ],
    icon: "Sparkles",
    status: "soon",
  },
  {
    slug: "business-sessions",
    title: "Business Knowledge Sessions",
    summary:
      "Live sharing sessions on building, pricing and growing a small business or freelance practice.",
    points: [
      "Idea validation & offer design",
      "Client acquisition fundamentals",
      "Money, pricing and positioning",
    ],
    icon: "Presentation",
    status: "soon",
  },
  {
    slug: "job-prep",
    title: "Tech Job Preparation",
    summary:
      "Consulting for students and early-career developers preparing for interviews and real hiring rounds.",
    points: [
      "Resume and portfolio review",
      "DSA & project-based interview prep",
      "Mock interviews and offer guidance",
    ],
    icon: "GraduationCap",
    status: "soon",
  },
  {
    slug: "psychology-growth",
    title: "Psychology & Personal Growth",
    summary:
      "Mindset, focus and habit systems grounded in psychology — built to raise real daily productivity.",
    points: [
      "Focus systems and deep-work routines",
      "Habit design & discipline frameworks",
      "Beating procrastination and burnout",
    ],
    icon: "Brain",
    status: "soon",
  },
  {
    slug: "fitness",
    title: "Fitness Transformation",
    summary:
      "Start your fitness journey — structured lean-to-bulk transformation guidance for beginners.",
    points: [
      "Lean to bulk transformation plans",
      "Training splits for busy schedules",
      "Nutrition basics that are sustainable",
    ],
    icon: "Dumbbell",
    status: "soon",
  },
  {
    slug: "personal-branding",
    title: "Personal Branding",
    summary:
      "Build a presence people remember — content strategy, positioning and a digital identity that converts.",
    points: [
      "Profile and content positioning",
      "Short-form content strategy",
      "Portfolio + social ecosystem setup",
    ],
    icon: "BadgeCheck",
    status: "soon",
  },
];

export const TRUST_POINTS = [
  {
    title: "Founder-led work",
    body: "Every project is handled directly by Deenesh Kumar — no handoffs, no agency middle layer, no guesswork.",
    icon: "UserRound",
  },
  {
    title: "Built in public",
    body: "Our work, learnings and process are shared openly on YouTube, Instagram and LinkedIn. You can see how we think before you hire us.",
    icon: "Radio",
  },
  {
    title: "Modern tech stack",
    body: "React, TypeScript and modern tooling — fast, responsive, SEO-ready builds that hold up as you grow.",
    icon: "Cpu",
  },
  {
    title: "Clear communication",
    body: "Fixed scope, honest timelines and updates you don't have to chase. You always know what's happening.",
    icon: "MessagesSquare",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    body: "A short call to understand your goal, audience and budget. We tell you honestly what's worth building.",
  },
  {
    step: "02",
    title: "Design",
    body: "A clear structure and visual direction so you can see the outcome before a line of code is written.",
  },
  {
    step: "03",
    title: "Build",
    body: "Development in short cycles with a live preview link, so feedback happens early instead of at the end.",
  },
  {
    step: "04",
    title: "Launch & support",
    body: "Deployment, performance checks and post-launch support so your product keeps working.",
  },
];

export const FAQS = [
  {
    q: "What does DeenLabs do right now?",
    a: "Web development is our active service — websites, portfolios, landing pages and web apps. Everything else on the roadmap is being built and will open in phases.",
  },
  {
    q: "Who do you usually work with?",
    a: "Students, creators, freelancers, early-stage startups and small businesses who need a serious digital presence without an enterprise budget.",
  },
  {
    q: "How long does a website take?",
    a: "A focused landing page typically takes a few days. A multi-page business site or a web app with a backend usually takes two to four weeks depending on scope.",
  },
  {
    q: "How do we start?",
    a: "Send a message from the contact page or email deenesh.official@gmail.com with a short description of your idea. You'll get a reply with next steps and a rough estimate.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Deenesh rebuilt my portfolio in under a week and it finally looks like the work I actually do. Two client enquiries came in the same month.",
    name: "Aravind S.",
    role: "Freelance UI Designer",
    initials: "AS",
  },
  {
    quote:
      "We needed a landing page fast for a college startup pitch. Clear communication, daily preview links, and it loaded instantly on mobile.",
    name: "Priya R.",
    role: "Co-founder, Campus Startup",
    initials: "PR",
  },
  {
    quote:
      "What I liked most was the honesty — he told me what I did not need to build. Saved me money and the site still does everything.",
    name: "Mohammed I.",
    role: "Owner, Local Fitness Studio",
    initials: "MI",
  },
  {
    quote:
      "Simple process, no jargon. I could follow every step and ask questions without feeling stupid. The site has been running without issues.",
    name: "Keerthana V.",
    role: "Content Creator",
    initials: "KV",
  },
];
