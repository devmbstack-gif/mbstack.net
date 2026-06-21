export type ClientImageVariant = "logo" | "photo";

export interface HeroTrustedClient {
  src: string;
  name: string;
  variant: ClientImageVariant;
}

/** Client faces shown in the homepage hero "Trusted by Clients" stack. */
export const HERO_TRUSTED_CLIENTS: HeroTrustedClient[] = [
  {
    src: "/dr ayman.jpeg",
    name: "Dr. Ayman Ali",
    variant: "photo",
  },
  {
    src: "/testimonials/sohelarman20.png",
    name: "Sohelarman20",
    variant: "photo",
  },
  {
    src: "/testimonials/zelimchankagiro.webp",
    name: "Zelimchankagiro",
    variant: "photo",
  },
  {
    src: "/testimonials/freaksonar.webp",
    name: "Freaksonar",
    variant: "photo",
  },
  {
    src: "/testimonials/bilalax.webp",
    name: "Bilalax",
    variant: "photo",
  },
];

export const HERO_CLIENT_IMAGES = HERO_TRUSTED_CLIENTS.map(
  (client) => client.src,
);

export interface ClientTestimonial {
  image: string;
  imageVariant?: ClientImageVariant;
  name: string;
  title: string;
  rating: number;
  quote: string;
}

export interface ClientSuccessStory {
  clientName: string;
  company: string;
  role: string;
  clientImage: string;
  clientImageVariant: ClientImageVariant;
  projectImage: string;
  projectHref?: string;
  problem: string;
  solution: string;
  result: string;
  quote: string;
}

export interface ClientProjectResult {
  name: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  clientLogo?: string;
  clientLogoVariant?: ClientImageVariant;
}

/** Case studies + quotes reused on /sales and homepage testimonials. */
export const CLIENT_SUCCESS_STORIES: ClientSuccessStory[] = [
  {
    clientName: "Howwe",
    company: "Howwe",
    role: "Product Leadership · Saudi Arabia",
    clientImage: "/skillsAndComapies/howwe.webp",
    clientImageVariant: "logo",
    projectImage: "/portfolios/ingallery.webp",
    projectHref: "/portfolio",
    problem:
      "Talent in Saudi Arabia lacked a unified platform to discover, book, and manage artists at scale.",
    solution:
      "We built an online artist booking platform for Saudi Arabia's talent communities with secure payments and real-time availability.",
    result:
      "Revenue scaled from $100K to multi-million SAR after launching the new platform.",
    quote:
      "MB Stack understood the Saudi market and delivered a platform our artists and customers use every day.",
  },
  {
    clientName: "Dr. Ayman",
    company: "Enterprise SaaS",
    role: "Senior Project Manager · Saudi Arabia",
    clientImage: "",
    clientImageVariant: "photo",
    projectImage: "/portfolios/growbit ai.webp",
    projectHref: "https://hrgrowbit.com/",
    problem:
      "As a senior project manager, teams lacked integrated systems to manage multiple AI and SaaS initiatives.",
    solution:
      "We delivered AI automation tools, SaaS platforms, and workflow integrations across several high-impact projects.",
    result:
      "Previously struggling products became multi-million SAR revenue streams in the Saudi market.",
    quote:
      "They brought structure to complex AI and SaaS delivery, speed, quality, and measurable outcomes.",
  },
  {
    clientName: "GrowthTechz",
    company: "GrowthTechz",
    role: "Leadership Team · USA",
    clientImage: "/skillsAndComapies/growthtechz.webp",
    clientImageVariant: "logo",
    projectImage: "/portfolios/lumoganic.webp",
    projectHref: "https://www.lumoganic.com/",
    problem:
      "Legacy systems slowed product launches and made it hard to scale operations across teams.",
    solution:
      "We modernized their stack with scalable architecture, automation, and ongoing engineering support.",
    result:
      "Faster releases, lower operational friction, and a platform ready for the next stage of growth.",
    quote:
      "MB Stack transformed our legacy systems into a modern, scalable platform. Their support is unmatched.",
  },
];

export const CLIENT_PROJECT_RESULTS: ClientProjectResult[] = [
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
      "We connected booking, support, and reporting systems into a seamless platform with real-time availability.",
    result:
      "Fragmented booking flow → Unified operations with faster customer response",
    image: "/portfolios/ban travel.webp",
  },
  {
    name: "In Gallery",
    problem:
      "Artists and collectors lacked a secure, seamless platform to connect and showcase digital art collections.",
    solution:
      "We developed a digital art gallery with secure transactions and high-performance image rendering.",
    result:
      "Slow manual art trading → Optimized marketplace with secure artist-to-collector connections",
    image: "/portfolios/ingallery.webp",
    clientLogo: "/case-studies/ingallery-logo.jpeg",
    clientLogoVariant: "logo",
  },
  {
    name: "Lumoganic",
    problem:
      "An eco-friendly skincare brand needed e-commerce infrastructure that reflected its values while handling scale.",
    solution:
      "We designed and built a performance-first e-commerce engine with streamlined checkout and inventory management.",
    result:
      "Limited local reach → Global e-commerce presence with 40% increase in repeat customers",
    image: "/portfolios/lumoganic.webp",
    clientLogo: "/skillsAndComapies/growthtechz.webp",
    clientLogoVariant: "logo",
  },
  {
    name: "Online Derma",
    problem:
      "Patients struggled to find certified dermatologists for quick, personalized skincare consultations.",
    solution:
      "We built a teledoctor platform with real-time consultations, secure medical records, and personalized treatment plans.",
    result:
      "Long wait times → Instant specialist access with a 4.9/5 patient satisfaction rate",
    image: "/portfolios/online derma.webp",
  },
];

/** Homepage + sales page testimonial slider, imported from mbsoftsolution.com. */
export const HOME_TESTIMONIALS: ClientTestimonial[] = [
  {
    image: "/testimonials/laravel-saudi.png",
    imageVariant: "photo",
    name: "Saudi Arabia",
    title: "Laravel Development",
    rating: 5,
    quote:
      "Quality website and mobile application development with timely delivery – highly recommended!",
  },
  {
    image: "/testimonials/sohelarman20.png",
    imageVariant: "photo",
    name: "Sohelarman20, Bangladesh",
    title: "JavaScript Development",
    rating: 5,
    quote:
      "Best services. Very professional and delivered exactly as promised. Definitely recommend him. Thanks a lot!",
  },
  {
    image: "/testimonials/mlmsoftwarez.webp",
    imageVariant: "photo",
    name: "Mlmsoftwarez, India",
    title: "Website Development",
    rating: 4,
    quote:
      "It was excellent working with him. He is good with his clients .patience and trust keeping person.",
  },
  {
    image: "/testimonials/zelimchankagiro.webp",
    imageVariant: "photo",
    name: "Zelimchankagiro, Austria",
    title: "Web Application",
    rating: 5,
    quote:
      "App development, delivering exceptional results, and providing excellent service, good job!",
  },
  {
    image: "/testimonials/freaksonar.webp",
    imageVariant: "photo",
    name: "Freaksonar, Nigeria",
    title: "PHP Development",
    rating: 5,
    quote: "Great PHP developer, delivering quality work with excellence.",
  },
  {
    image: "/testimonials/etrillionapps.webp",
    imageVariant: "photo",
    name: "Etrillionapps, Pakistan",
    title: "Web Application",
    rating: 5,
    quote: "He is pro developer done my job within 20 mints great!!!!!",
  },
  {
    image: "/testimonials/bilalax.webp",
    imageVariant: "photo",
    name: "Bilalax, Morocco",
    title: "Web Application",
    rating: 5,
    quote: "very good job. and nice to deal with him",
  },
  {
    image: "/testimonials/hooderuja.webp",
    imageVariant: "photo",
    name: "Hooderuja, Nigeria",
    title: "Custom Website",
    rating: 5,
    quote:
      "He is a calm person and knows what he is doing, he is always ready to implement changes. In the end he did a great job.",
  },
];
