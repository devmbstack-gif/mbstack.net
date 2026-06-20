export const SITE = {
  name: "MB Stack",
  tagline: "IT Solutions Company",
  description:
    "MB Stack is a dynamic IT software solutions and development company at the forefront of technological innovation.",
  heroHeadline: "We Provide ",
  heroSubline: "Software, Mobile App, E-Commerce, Websites & More",
  ctaConsultancy: "Get Consultancy",
  ctaContact: "Contact Us",
  consultancyHref: "/consultancy",
  contactHref: "/contact",
} as const;

/** Base URL for canonical links, Open Graph, and sitemap. Set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_SITE_URL) ||
  "https://mbsoftsolution.com";

/** SEO defaults used in layout and page metadata. */
export const SEO = {
  titleTemplate: `%s | ${SITE.name}`,
  defaultTitle: `${SITE.name} – ${SITE.tagline}`,
  defaultDescription: SITE.description,
  keywords: [
    "software development",
    "IT solutions",
    "web development",
    "mobile app development",
    "Laravel",
    "Next.js",
    "React Native",
    "Flutter",
    "SEO services",
    "digital marketing",
    "Gujranwala",
    "Pakistan",
    "USA",
  ].join(", "),
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image" as const,
  },
} as const;

export const RATING = {
  value: 4.8,
  sources: [
    { name: "Google", href: "#" },
    { name: "Trustpilot", href: "#" },
  ],
} as const;

export const BRAND_COLOR = "#31B574";
export const BRAND_COLOR_DARK = "#2a9d63";

export { HERO_CLIENT_IMAGES, HERO_TRUSTED_CLIENTS } from "./clients";

export const LIVE_COUNTRIES = [
  { name: "Pakistan", shortName: "Pakistan", flagCode: "pk" },
  { name: "Saudi Arabia", shortName: "KSA", flagCode: "sa" },
  { name: "United Arabs Emirate", shortName: "UAE", flagCode: "ae" },
  { name: "United States of America", shortName: "USA", flagCode: "us" },
] as const;

export const COMPANY_STATS = {
  projectsCompleted: 50,
  happyClients:50,
  companiesServed: 50,
  teamMembers: 11,
  yearsExperience: 10,
} as const;

export const STATS = [
  { value: COMPANY_STATS.projectsCompleted, label: "Projects Completed" },
  { value: COMPANY_STATS.happyClients, label: "Happy Clients" },
  { value: COMPANY_STATS.teamMembers, label: "Team Members" },
  { value: COMPANY_STATS.yearsExperience, label: "Years Experience" },
] as const;

export const PORTFOLIO_LINK = {
  label: "View Our Projects",
  href: "/portfolio",
} as const;

export const CONSULTANCY_BANNER = {
  title: "Get Free Consultancy",
  subtitle:
    "Empower Your Growth with MB Stack's Custom Software Solutions.",
  ctaLabel: "Get Now",
  href: "/consultancy",
} as const;

export const SERVICES = [
  {
    id: "web",
    title: "Web Development",
    description:
      "We specialize in Laravel, WordPress, and various frameworks, offering web development with content management systems for clients who need more than just the basics.",
    icon: "web",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "Transform your business with our comprehensive suite of AI services, each designed to enhance decision-making, reduce operational costs, and improve customer experience.",
    icon: "ai",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "We specialize in mobile app development using Flutter and React Native, building high-quality applications for e-commerce, gaming, and more.",
    icon: "mobile",
  },
  {
    id: "seo",
    title: "SEO (Search Engine Optimization)",
    description:
      "Our SEO services will help your business grow in the digital world by optimizing your website and improving its ranking on search engine results pages.",
    icon: "seo",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "We provide digital marketing solutions for your brand, company, and products/services. In today's online world, it's essential for businesses to reach and engage with as many customers as possible.",
    icon: "marketing",
  },
  {
    id: "it",
    title: "IT Support",
    description:
      "Our IT support and maintenance services ensure the efficient operation and longevity of various assets, from machinery and equipment to infrastructure and technology.",
    icon: "it",
  },
] as const;

export const FOOTER = {
  companyDescription:
    "MB Stack is a software company providing IT solutions. We offer development services, digital marketing, SEO, IT consulting, managed services, IT outsourcing, project management, and more.",
  addresses: [
    "1st floor, Bhutta Plaza, Near Islamia College Road, Gujranwala, Pakistan.",
    "444 Alaska Avenue, Suite #BBC525, Torrance, CA 90503 USA.",
  ],
  helplines: [
    "+92 316 1465299 | +1 838 2131775",
    "+92 347 9516266 | +92 55 4251078",
  ],
  email: "info@mbstack.net",
  supportLinks: [
    { label: "About Us", href: "/about" },
    { label: "Join Us", href: "/sales" },
    { label: "Jobs", href: "/contact" },
    { label: "Our Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact Us", href: "/contact" },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact" },
    { label: "Get a Quote", href: "/consultancy" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/privacy" },
  ],
  copyright:
    "Copyright © 2022-2026 MB Stack | Software Development Company",
  whatsappNumber: "+923161465299", // e.g. '923161465299' for WhatsApp link
  chatLabel: "Chat with us",
} as const;

export { HOME_TESTIMONIALS as TESTIMONIALS } from "./clients";

const SKILLS_IMG = "/skillsAndComapies";

export interface Partner {
  name: string;
  logo: string;
  href: string;
}
export const PARTNERS: Partner[] = [
  { name: "SPACE Zone", logo: `${SKILLS_IMG}/s.webp`, href: "#" },
  { name: "GrowthTechz", logo: `${SKILLS_IMG}/growthtechz.webp`, href: "#" },
  {
    name: "DreamCity CAPITAL",
    logo: `${SKILLS_IMG}/dream%20city.webp`,
    href: "#",
  },
  { name: "Fressnel", logo: `${SKILLS_IMG}/Fressnel.webp`, href: "#" },
  { name: "Howwe", logo: `${SKILLS_IMG}/howwe.webp`, href: "#" },
] as const;

export const TECHNOLOGIES_HEADING = "We are working with these technologies";

export interface Technology {
  name: string;
  logo: string;
  shortName: string;
}

export const TECHNOLOGIES: Technology[] = [
  { name: "JavaScript", logo: `${SKILLS_IMG}/js.webp`, shortName: "JS" },
  { name: "Bootstrap", logo: `${SKILLS_IMG}/bootstrap.webp`, shortName: "B" },
  { name: "WordPress", logo: `${SKILLS_IMG}/wordpress.webp`, shortName: "W" },
  { name: "MySQL", logo: `${SKILLS_IMG}/mysql.webp`, shortName: "MySQL" },
  { name: "jQuery", logo: `${SKILLS_IMG}/jquery.webp`, shortName: "jQuery" },
  { name: "Laravel", logo: `${SKILLS_IMG}/laravel.webp`, shortName: "Laravel" },
  { name: "PHP", logo: `${SKILLS_IMG}/php.webp`, shortName: "php" },
  {
    name: "Xcode",
    logo: `${SKILLS_IMG}/apple%20store.webp`,
    shortName: "Xcode",
  },
  { name: "Android", logo: `${SKILLS_IMG}/android.webp`, shortName: "Android" },
] as const;

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Muhammad Bilal",
    role: "CEO & COO Founder",
    image: "/team/1.png",
  },
  {
    name: "Hafiz Ahmad Ali",
    role: "Chief Technology Officer (CTO)",
    image: "/team/2.png",
  },
  {
    name: "Rana Ali Raza",
    role: "Project Manager Officer (PMO)",
    image: "/team/3.jpeg",
  },
  {
    name: "Muqqadas",
    role: "Chief Marketing Officer (CMO)",
    image: "/team/4.png",
  },
  {
    name: "Amina Bibi",
    role: "IT Manager",
    image: "/team/5.png",
  },
  {
    name: "Syed Safeer ul Hassan",
    role: "Senior Business Developer",
    image: "/team/6.png",
  },
  {
    name: "Usama Nawab",
    role: "Flutter Developer",
    image: "/team/7.png",
  },
  {
    name: "Ujala Fiaz",
    role: "Business Developer",
    image: "/team/8.png",
  },
  {
    name: "Nida Fatima",
    role: "Business Developer",
    image: "/team/9.png",
  },
  {
    name: "Mr. Talha",
    role: "Graphic Designer",
    image: "/team/10.png",
  },
  {
    name: "Sumavia Khurum",
    role: "Digital Marketer",
    image: "/team/11.png",
  },
] as const;

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "In Gallery",
    category: "Website & Software",
    description:
      "INGallery features inspiring digital art collections, connecting artists and collectors through a secure, seamless online experience.",
    image: "/portfolios/ingallery.webp", // Place images in your public/portfolio folder
    link: "https://artwork.mbsoftsolution.com/",
    tags: ["Next.js", "Prisma", "Tailwind"],
  },
  {
    id: "2",
    title: "Ban Travel",
    category: "Website & Software",
    description:
      "Ban Travel offers seamless booking, expert support, and unforgettable travel experiences anytime, anywhere stress-free.",
    image: "/portfolios/ban travel.webp",
    link: "https://mbsoftsolution.com/",
    tags: ["React", "Recharts", "Brand-Design"],
  },
  {
    id: "3",
    title: "Growbit AI Powered Tool",
    category: "Website & Software",
    description:
      "Growbit is an AI-powered tool streamlining HR by automating hiring, payroll, attendance, and performance management efficiently.",
    image: "/portfolios/growbit ai.webp",
    link: "https://hrgrowbit.com/",
    tags: ["SEO", "Performance", "Next.js"],
  },
  {
    id: "4",
    title: "Al Alim",
    category: "ai",
    description:
      "Unlock your potential with expert-led tutoring. Start your learning journey today for a brighter, smarter tomorrow.",
    image: "/portfolios/ai alim.webp",
    link: "https://alim.mbsoftsolution.com/",
    tags: ["SEO", "AI", "Next.js"],
  },
  {
    id: "5",
    title: "Lumoganic",
    category: "Website & Software",
    description:
      "Lumoganic provides eco-friendly, cruelty-free skincare made with natural herbs—free from chemicals, toxins, and parabens.",
    image: "/portfolios/lumoganic.webp",
    link: "https://www.lumoganic.com/",
    tags: ["SEO", "AI", "Next.js"],
  },
  {
    id: "6",
    title: "Online Derma",
    category: "Website & Software",
    description:
      "Online Derma Expert offers skincare at your fingertips—consult certified dermatologists anytime, anywhere for personalized solutions.",
    image: "/portfolios/online derma.webp",
    link: "https://derma.mbsoftsolution.com/home",
    tags: ["SEO", "AI", "Next.js"],
  },
  {
    id: "7",
    title: "Real Taxi",
    category: "Website & Software",
    description:
      "RealTaxi Your seamless city travel companion. Book rides instantly, explore freely, and enjoy stress-free journeys.",
    image: "/portfolios/real taxi.webp",
    link: "https://realtaxi.es/",
    tags: ["SEO", "AI", "Next.js"],
  },
  {
    id: "8",
    title: "Lucky APK",
    category: "Mobile Apps",
    description:
      "Download Lucky APK for seamless app customization, premium feature unlocking, and a personalized mobile experience.",
    image: "/portfolios/lucky apk.webp",
    link: "https://luckypatchersapk.tech/",
    tags: ["Figma", "AI", "Flutter"],
  },
  {
    id: "9",
    title: "Null APK",
    category: "Mobile Apps",
    description:
      "Download Null’s Brawl APK for unlimited gems, custom servers, exclusive skins, and thrilling Brawl Stars gameplay.",
    image: "/portfolios/null apk.webp",
    link: "https://nullsbrawl.tech/",
    tags: ["Figma", "AI", "Flutter"],
  },
  {
    id: "10",
    title: "Shutre",
    category: "Website & Software",
    description:
      "Shutre is Online Shopping mall, offering customers the products from top brands, and exceptional customer service.",
    image: "/portfolios/shutre.webp",
    link: "https://nile.mbsoftsolution.com/admin/home",
    tags: ["Figma", "AI", "Laravel"],
  },
  {
    id: "11",
    title: "Fressnel",
    category: "Website & Software",
    description:
      "Fressnel is a quiz management system that administers and evaluates quizzes for educators and trainers with ease.",
    image: "/portfolios/fressnel.webp",
    link: "https://nile.mbsoftsolution.com/admin/home",
    tags: ["SEO", "Next.js", "Laravel"],
  },
  {
    id: "12",
    title: "DreamCity",
    category: "Website & Software",
    description:
      "DreamCity Capital digital real-estate investment platform offers investment opportunities in pre-vetted real estate assets.",
    image: "/portfolios/dreamcity.webp",
    link: "https://nile.mbsoftsolution.com/admin/home",
    tags: ["Figma", "React", "Laravel"],
  },
];
