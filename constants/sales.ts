export const SALES = {
  hero: {
    badge: "Limited Spots Available",
    headline: "Transform Your Business with High-Performance IT Solutions",
    subheadline: "Accelerate Your Growth – Fast, Reliable, and Professional!",
    description: "We help you scale your business with custom software development, mobile apps, and AI solutions - with full support from concept to deployment and beyond.",
    cta: "Get Started Now",
    ctaSubtext: "Over 100+ businesses trust us",
    videoUrl: "https://www.youtube.com/embed/your-video-id", // Placeholder
  },
  trustLogos: [
    { name: "Space Zone", logo: "/skillsAndComapies/s.webp" },
    { name: "GrowthTechz", logo: "/skillsAndComapies/growthtechz.webp" },
    { name: "DreamCity", logo: "/skillsAndComapies/dream city.webp" },
    { name: "Fressnel", logo: "/skillsAndComapies/Fressnel.webp" },
    { name: "Howwe", logo: "/skillsAndComapies/howwe.webp" },
  ],
  problem: {
    headline: "Building software shouldn't be a nightmare...",
    description: "As a business owner, you dream of scaling your operations — but the path feels full of obstacles. Complex tech stacks, unreliable developers, and unclear processes make it hard to turn your vision into a reality.",
    frustration: "It's frustrating when you know what you want to build, but you're unsure how to start the development process or which technology you need. Maybe you've even tried working with an agency, only to end up with more bugs than solutions.",
    truth: "The truth is: it's not about the code. It's about having the right partner and a clear roadmap to launch your product successfully.",
    image: "/portfolios/growbit ai.webp", // Placeholder image from existing projects
  },
  expectations: {
    headline: "What you can expect",
    subheadline: "Use your full potential",
    items: [
      {
        title: "Your clear roadmap",
        description: "Forget the uncertainty. We'll show you exactly how to build, launch, and scale your product quickly without unnecessary technical debt.",
        icon: "roadmap",
      },
      {
        title: "Expert Developers",
        description: "You won't just get any dev — you'll secure a dedicated team that understands your business goals and values your vision.",
        icon: "team",
      },
      {
        title: "Seamless Integration",
        description: "We take care of hosting, architecture, and all technical deployments — so you can fully focus on growing your business.",
        icon: "integration",
      },
      {
        title: "Security & Success",
        description: "With our support, you'll launch your product without delays and secure a successful, long-term digital presence.",
        icon: "security",
      },
    ],
  },
  steps: {
    headline: "The 6-Step Path to Success",
    items: [
      { 
        title: "Initial Consultation", 
        description: "We start with a deep dive into your business vision. Our experts clarify your goals, technical requirements, and market potential to set a solid foundation for your project.",
        image: "/portfolios/ingallery.webp"
      },
      { 
        title: "Strategic Planning", 
        description: "No more guesswork. We create a detailed roadmap, choosing the perfect tech stack and architectural framework to ensure your product is scalable, secure, and future-proof.",
        image: "/portfolios/ban travel.webp"
      },
      { 
        title: "Design & UX Prototyping", 
        description: "Visualizing the future. Our designers craft intuitive UI/UX prototypes, focusing on user engagement and seamless navigation before a single line of code is written.",
        image: "/portfolios/growbit ai.webp"
      },
      { 
        title: "Agile Development", 
        description: "Building with precision. Our developers use agile methodologies, providing you with regular updates and functional builds, ensuring the project aligns perfectly with your evolving needs.",
        image: "/portfolios/ai alim.webp"
      },
      { 
        title: "Rigorous QA & Testing", 
        description: "Zero compromise on quality. We perform extensive automated and manual testing across all devices to ensure your application is bug-free, fast, and remarkably stable.",
        image: "/portfolios/lumoganic.webp"
      },
      { 
        title: "Launch & Ongoing Support", 
        description: "Your journey doesn't end at launch. We handle the full deployment and provide continuous maintenance and support to keep your platform running at peak performance.",
        image: "/portfolios/online derma.webp"
      },
    ],
  },
  framework: {
    headline: "Our Framework for Growth",
    description: "A structured approach to international recruitment and software excellence.",
    items: [
      "Agile Development",
      "Scalable Architecture",
      "Cloud Solutions",
      "AI Integration",
      "Dedicated Support",
      "Modern UI/UX",
      "Security First",
    ]
  },
  testimonials: [
    {
      name: "Ahmed Raza",
      role: "CEO at GrowthTechz",
      quote: "MB Stack transformed our legacy systems into a modern, scalable platform. Their support is unmatched.",
      image: "/team/sir.webp",
    },
    {
      name: "John Doe",
      role: "Project Manager",
      quote: "The speed and quality of work delivered by MB Stack exceeded our expectations. Highly recommended!",
      image: "/team/Mr-Ahmad.webp",
    }
  ],
  faqs: [
    {
      question: "What is the typical timeline for a project?",
      answer: "Depending on the complexity, projects typically range from 2 weeks for MVPs to 3-6 months for enterprise solutions."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide 24/7 maintenance and support to ensure your application runs smoothly after launch."
    },
    {
      question: "How do you handle project management?",
      answer: "We use agile methodologies and dedicated project managers to keep you updated every step of the way."
    }
  ],
  footerCta: {
    headline: "Ready to Start Your Journey?",
    subheadline: "Join 100+ businesses that have scaled with MB Stack.",
    cta: "Book a Free Consultation",
    href: "/consultancy"
  }
} as const;
