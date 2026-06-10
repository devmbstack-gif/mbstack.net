import { COMPANY_STATS, PORTFOLIO_LINK } from "./site";

export const SALES = {
  hero: {
    headline: "Your Operations Have Grown Faster Than Your Systems.",
    painPoints: [
      "Processes become bottlenecks.",
      "Teams spend more time chasing information.",
      "Leadership gets pulled into operations instead of focusing on growth.",
    ],
    description:
      "We help growing companies eliminate operational friction, connect disconnected systems, and build the infrastructure needed to scale without replacing what already works.",
    trustLine:
      "Trusted by 50+ companies across the USA, Saudi Arabia, UAE, and Pakistan.",
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    cta: "Book Your Operational Friction Assessment",
    assessmentDescription:
      "In 30 minutes, we'll identify the process costing your business the most time, capacity, and executive attention.",
    pilotNote:
      "We typically start with a focused 4-week pilot so you can see measurable results before making a larger commitment.",
    benefits: [
      "Security-first implementation",
      "Low-risk rollout",
      "Measurable outcomes",
      "Built around existing systems",
    ],
    statsLine: `${COMPANY_STATS.companiesServed}+ Companies Served · ${COMPANY_STATS.projectsCompleted}+ Projects Delivered`,
    services: [
      "Custom Software",
      "AI Solutions",
      "Automation",
      "Enterprise Integrations",
    ],
    ctaHref: "/consultancy",
    portfolio: PORTFOLIO_LINK,
  },
  trustLogos: [
    { name: "Space Zone", logo: "/skillsAndComapies/s.webp" },
    { name: "GrowthTechz", logo: "/skillsAndComapies/growthtechz.webp" },
    { name: "DreamCity", logo: "/skillsAndComapies/dream city.webp" },
    { name: "Fressnel", logo: "/skillsAndComapies/Fressnel.webp" },
    { name: "Howwe", logo: "/skillsAndComapies/howwe.webp" },
  ],
  problem: {
    headline: "Why Growing Companies Get Stuck",
    lead: "Most companies don't need more software.",
    leadAccent: "They need less friction.",
    description:
      "Disconnected systems, manual handoffs, duplicate work, and reporting bottlenecks create a hidden tax on growth.",
    solution:
      "The solution isn't adding more tools. It's fixing the process that's slowing everything down.",
    closing: "That's where we start.",
  },
  steps: {
    headline: "How We Work",
    items: [
      {
        title: "Operational Friction Assessment",
        description:
          "We identify the biggest bottleneck in your operation.",
      },
      {
        title: "4-Week Pilot",
        description:
          "We solve one high-impact problem with a defined scope and measurable outcome.",
      },
      {
        title: "Review The Results",
        description:
          "You evaluate real results before committing to anything larger.",
      },
      {
        title: "Scale With Confidence",
        description:
          "Once proven, we expand strategically across the organization.",
      },
    ],
  },
  clientResults: {
    headline: "Client Projects",
    items: [
      {
        name: "Growbit",
        problem:
          "HR teams spent hours on manual hiring, payroll, and attendance tracking across disconnected tools.",
        solution:
          "We built an AI-powered platform that automates hiring workflows, payroll, and performance management in one integrated system.",
        result: "Manual HR processing → 70% reduction in administrative overhead",
        image: "/portfolios/growbit ai.webp",
      },
      {
        name: "Ban Travel",
        problem:
          "Booking operations relied on manual handoffs between systems, slowing response times and creating duplicate work.",
        solution:
          "We connected their booking, support, and reporting systems into a seamless platform with real-time availability.",
        result: "Fragmented booking flow → Unified operations with faster customer response",
        image: "/portfolios/ban travel.webp",
      },
      {
        name: "In Gallery",
        problem:
          "Artists and collectors lacked a secure, seamless platform to connect and showcase digital art collections.",
        solution:
          "We developed a sophisticated digital art gallery platform with secure transaction systems and high-performance image rendering.",
        result: "Slow manual art trading → Optimized digital marketplace with 100% secure artist-to-collector connections",
        image: "/portfolios/ingallery.webp",
      },
      {
        name: "Lumoganic",
        problem:
          "An eco-friendly skincare brand needed an e-commerce infrastructure that reflected its brand values while handling scale.",
        solution:
          "We designed and built a performance-first e-commerce engine with streamlined checkout and inventory management.",
        result: "Limited local reach → Global e-commerce presence with 40% increase in repeat customers",
        image: "/portfolios/lumoganic.webp",
      },
      {
        name: "Online Derma",
        problem:
          "Patients struggled to find certified dermatologists for quick, personalized skincare consultations.",
        solution:
          "We built a teledoctor platform enabling real-time consultations, secure medical record storage, and personalized treatment plans.",
        result: "Long wait times → Instant access to specialists with a 4.9/5 patient satisfaction rate",
        image: "/portfolios/online derma.webp",
      },
    ],
  },
  successStories: {
    headline: "Success Stories",
    items: [
      {
        clientName: "Howwe",
        problem: "Talent in Saudi Arabia was Smashed",
        solution: "We offer the online artist booking platform for saudi arabia talent communities",
        result: "Before our offered platform that’s revenue was 100k $ but after our developed platform this beat the Millions",
        bgImage:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      },
      {
        clientName: "Dr. Ayman",
        problem: " he was a senior project manager on their company but he did not have system to manage their projects and saas",
        solution: "we offered the our services of talented team we worked multiple projects of AI and SAAS tools development. Also Automations projects",
        result: "the projects was facing crysing but after our developed platforms this beat millions of Saudi Reyals revenue in saudi market.",
        bgImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  whyUs: {
    headline: "Why Companies Work with Us",
    description: `We've helped more than ${COMPANY_STATS.companiesServed} companies modernize operations, integrate systems, and build infrastructure that supports growth.`,
    beliefIntro: "Our belief is simple:",
    belief:
      "The businesses that scale best aren't the ones running the most software. They're the ones carrying the least operational friction.",
    founder: {
      name: "Mr. Bilal",
      title: "CEO & Co-Founder",
      image: "/team/sir.webp",
    },
  },
  testimonials: [
    {
      name: "Ahmed Raza",
      role: "CEO at GrowthTechz",
      quote:
        "MB Stack transformed our legacy systems into a modern, scalable platform. Their support is unmatched.",
      image: "/team/sir.webp",
    },
    {
      name: "John Doe",
      role: "Project Manager",
      quote:
        "The speed and quality of work delivered by MB Stack exceeded our expectations. Highly recommended!",
      image: "/team/Mr-Ahmad.webp",
    },
  ],
  faqs: [
    {
      question: "Will this work with our existing systems?",
      answer: "Yes. We prioritize integration before replacement.",
    },
    {
      question: "Will implementation disrupt operations?",
      answer: "No. Everything is phased, tested, and validated.",
    },
    {
      question: "How do we measure ROI?",
      answer: "We establish baseline metrics and measure actual results.",
    },
    {
      question: "Why start with a pilot?",
      answer:
        "Because you should see proof before making a larger commitment.",
    },
  ],
  footerCta: {
    headline: "Ready To Find the Bottleneck Holding Growth Back?",
    subheadline: "Book your Operational Friction Assessment.",
    description:
      "We'll identify the process costing your business the most time, capacity, and attention and show you the lowest-risk path to improving it.",
    closing: "No obligation. No generic pitch. Just clarity.",
    cta: "Book Your Operational Friction Assessment",
    href: "/consultancy",
  },
} as const;
