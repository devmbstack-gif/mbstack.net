export interface PortfolioUserStory {
  persona: string;
  role: string;
  goal: string;
  story: string;
  outcome: string;
}

export interface PortfolioJourneyStep {
  phase: string;
  title: string;
  detail: string;
}

export interface PortfolioCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  tags: string[];
  client: string;
  region: string;
  industry: string;
  duration: string;
  metric: string;
  metricLabel: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  deliverables: string[];
  journey: PortfolioJourneyStep[];
  userStories: PortfolioUserStory[];
}

export const PORTFOLIO_CASE_STUDIES: PortfolioCaseStudy[] = [
  {
    id: "1",
    slug: "ingallery",
    title: "In Gallery",
    category: "Website & Software",
    description:
      "INGallery features inspiring digital art collections, connecting artists and collectors through a secure, seamless online experience.",
    image: "/portfolios/ingallery.webp",
    liveUrl: "https://artwork.mbsoftsolution.com/",
    tags: ["Next.js", "Marketplace", "Live Auctions"],
    client: "Howwe Ecosystem",
    region: "Saudi Arabia",
    industry: "Art · E-Commerce",
    duration: "16 weeks",
    metric: "Live Auctions",
    metricLabel: "Bilingual art marketplace",
    overview:
      "InGallery is a premium digital art marketplace built for the Howwe ecosystem, enabling Saudi artists to list works, run live auctions, and connect with collectors through a secure, English/Arabic platform.",
    problem:
      "Artists and collectors in Saudi Arabia relied on informal channels, WhatsApp, galleries, and manual negotiations, with no unified place to discover art, bid live, or complete trusted transactions at scale.",
    solution:
      "We engineered a full marketplace: category browsing, artist profiles, trending feeds, live auctions, OTP-secured checkout, art advisor flows, and bilingual UX, optimised for high-resolution artwork delivery.",
    result:
      "A fragmented art-trading process became a streamlined digital gallery where artists showcase SAR-priced works and collectors bid, follow creators, and commission custom pieces in one place.",
    deliverables: [
      "Artist & collector accounts with role-based dashboards",
      "Live auction engine with real-time bidding",
      "Shop cart, OTP verification, and secure checkout",
      "English / Arabic interface",
      "Art advisor recommendation flows",
    ],
    journey: [
      { phase: "01", title: "Discovery", detail: "Mapped artist, collector, and admin journeys across the Saudi art market." },
      { phase: "02", title: "Architecture", detail: "Designed scalable media delivery, auction logic, and payment-ready flows." },
      { phase: "03", title: "Build", detail: "Delivered marketplace UI, profiles, categories, and live auction modules." },
      { phase: "04", title: "Launch", detail: "Deployed production platform with bilingual support and ongoing optimisation." },
    ],
    userStories: [
      {
        persona: "Nawal",
        role: "Professional Artist",
        goal: "Sell premium paintings to serious collectors online",
        story:
          "As an artist, I needed a credible gallery, not just social posts. I upload high-resolution works, set SAR pricing, and share listings instantly. Collectors follow my profile and bid when pieces go live.",
        outcome: "More visibility, direct collector relationships, and sales without middlemen taking control of my brand.",
      },
      {
        persona: "Khalid",
        role: "Art Collector",
        goal: "Discover and purchase authentic Saudi art safely",
        story:
          "I browse categories, watch trending pieces, and join live auctions from my phone. Checkout is verified by OTP, I know the transaction is secure before money moves.",
        outcome: "Faster discovery, confident purchases, and a single trusted platform instead of scattered DMs.",
      },
      {
        persona: "Howwe Admin",
        role: "Platform Operator",
        goal: "Moderate listings and keep marketplace quality high",
        story:
          "Our team manages categories, announcements, and gallery terms from an admin view. We onboard artists, monitor auctions, and ensure the ecosystem stays premium.",
        outcome: "Controlled growth with clear governance over listings, auctions, and customer experience.",
      },
    ],
  },
  {
    id: "2",
    slug: "ban-travel",
    title: "Ban Travel",
    category: "Website & Software",
    description:
      "Ban Travel offers seamless booking, expert support, and unforgettable travel experiences anytime, anywhere stress-free.",
    image: "/portfolios/ban travel.webp",
    liveUrl: "https://mbsoftsolution.com/",
    tags: ["React", "Booking", "Travel"],
    client: "Ban Travel",
    region: "Global",
    industry: "Travel & Hospitality",
    duration: "12 weeks",
    metric: "Unified Booking",
    metricLabel: "End-to-end travel operations",
    overview:
      "Ban Travel is a travel booking platform connecting customers with seamless reservation flows, expert support touchpoints, and a brand-forward experience built for reliability on every device.",
    problem:
      "Travel bookings were split across phone calls, spreadsheets, and third-party tools, causing double bookings, slow customer response, and no single view of trips or payments.",
    solution:
      "We built an integrated booking website with real-time availability, structured trip flows, customer support hooks, and admin-ready architecture for scaling packages and destinations.",
    result:
      "Customers book faster with less friction; the Ban Travel team manages inquiries and reservations from one digital home instead of chasing messages across channels.",
    deliverables: [
      "Responsive booking website",
      "Package & destination presentation",
      "Customer inquiry and support flows",
      "Admin-ready content structure",
      "Performance-optimised frontend",
    ],
    journey: [
      { phase: "01", title: "Research", detail: "Defined traveller personas and booking pain points." },
      { phase: "02", title: "UX Design", detail: "Mapped search → select → book → support journey." },
      { phase: "03", title: "Development", detail: "Built React frontend with scalable travel content modules." },
      { phase: "04", title: "Go-live", detail: "Launched production site with monitoring and iteration plan." },
    ],
    userStories: [
      {
        persona: "Sarah",
        role: "Leisure Traveller",
        goal: "Book a holiday without endless phone calls",
        story:
          "I compare packages, see clear pricing, and submit my booking online. If I have questions, support channels are right there, I don't restart the process on WhatsApp.",
        outcome: "Stress-free planning and faster confirmation.",
      },
      {
        persona: "Omar",
        role: "Travel Agent",
        goal: "Manage client bookings in one system",
        story:
          "When a client calls, I pull up their trip status, adjust details, and confirm without switching between five apps. Everything lives on the platform.",
        outcome: "Higher throughput per agent and fewer booking errors.",
      },
    ],
  },
  {
    id: "3",
    slug: "growbit",
    title: "Growbit AI Powered Tool",
    category: "Website & Software",
    description:
      "Growbit is an AI-powered tool streamlining HR by automating hiring, payroll, attendance, and performance management efficiently.",
    image: "/portfolios/growbit ai.webp",
    liveUrl: "https://hrgrowbit.com/",
    tags: ["AI", "HR Tech", "SaaS"],
    client: "Growbit",
    region: "Saudi Arabia",
    industry: "Human Resources · AI",
    duration: "20 weeks",
    metric: "70% Less Overhead",
    metricLabel: "Manual HR work reduced",
    overview:
      "Growbit is an AI-powered HR platform that unifies hiring, payroll, attendance, and performance management, built for teams that outgrew spreadsheets and disconnected tools.",
    problem:
      "HR departments lost hours every week on manual hiring pipelines, payroll calculations, attendance tracking, and performance reviews across separate systems, errors compounded as teams scaled.",
    solution:
      "We delivered an integrated SaaS platform with AI-assisted workflows: automated hiring stages, payroll processing, attendance logs, and performance dashboards in one secure environment.",
    result:
      "Administrative overhead dropped sharply; HR teams focus on people strategy while the platform handles repeatable operational work with consistency.",
    deliverables: [
      "AI-assisted hiring workflow",
      "Payroll & attendance automation",
      "Performance management module",
      "Multi-language landing & app shell",
      "Secure role-based access",
    ],
    journey: [
      { phase: "01", title: "HR Audit", detail: "Documented manual processes across hiring, payroll, and attendance." },
      { phase: "02", title: "Product Design", detail: "Designed unified HR dashboard and employee lifecycle flows." },
      { phase: "03", title: "AI Integration", detail: "Embedded intelligent automation for screening and reporting." },
      { phase: "04", title: "Scale", detail: "Production deployment with enterprise-ready architecture." },
    ],
    userStories: [
      {
        persona: "Fatima",
        role: "HR Manager",
        goal: "Run hiring and payroll without spreadsheet chaos",
        story:
          "I post roles, track candidates through stages, and push approved hires into payroll, all in Growbit. Attendance syncs automatically; I don't re-type data every month.",
        outcome: "70% less manual processing and fewer payroll mistakes.",
      },
      {
        persona: "Ahmed",
        role: "Employee",
        goal: "See payslips, attendance, and reviews in one place",
        story:
          "I log in, check my attendance record, download payslips, and see performance feedback without emailing HR for every request.",
        outcome: "Transparency and self-service, HR tickets dropped significantly.",
      },
    ],
  },
  {
    id: "4",
    slug: "al-alim",
    title: "Al Alim",
    category: "AI & Education",
    description:
      "Unlock your potential with expert-led tutoring. Start your learning journey today for a brighter, smarter tomorrow.",
    image: "/portfolios/ai alim.webp",
    liveUrl: "https://alim.mbsoftsolution.com/",
    tags: ["AI", "EdTech", "Next.js"],
    client: "Al Alim",
    region: "MENA",
    industry: "Education · Tutoring",
    duration: "14 weeks",
    metric: "Expert-Led Learning",
    metricLabel: "Tutoring platform live",
    overview:
      "Al Alim is an education platform connecting learners with expert tutors, combining structured courses, session booking, and a modern learning experience built for growth.",
    problem:
      "Students struggled to find qualified tutors and track progress across unstructured WhatsApp lessons and PDF notes, parents had no visibility into outcomes.",
    solution:
      "We built a tutoring platform with tutor profiles, subject pathways, session scheduling, and learner dashboards, positioning Al Alim as a trusted digital learning brand.",
    result:
      "Learners discover tutors faster; parents and students see a clear learning journey instead of ad-hoc lessons scattered across devices.",
    deliverables: [
      "Tutor discovery & profiles",
      "Course and session structure",
      "Learner dashboard",
      "SEO-optimised marketing site",
      "Mobile-responsive experience",
    ],
    journey: [
      { phase: "01", title: "Learner Research", detail: "Interviewed students and parents on tutoring pain points." },
      { phase: "02", title: "Platform UX", detail: "Designed tutor matching and session booking flows." },
      { phase: "03", title: "Build", detail: "Shipped Next.js platform with content and auth-ready structure." },
      { phase: "04", title: "Growth", detail: "SEO foundation for organic tutor and course discovery." },
    ],
    userStories: [
      {
        persona: "Layla",
        role: "High School Student",
        goal: "Find a math tutor and track my progress",
        story:
          "I search by subject, compare tutor profiles, and book sessions. My dashboard shows upcoming lessons and materials, I'm not lost in random chat groups anymore.",
        outcome: "Better grades and a structured study routine.",
      },
      {
        persona: "Hassan",
        role: "Tutor",
        goal: "Manage students and sessions professionally",
        story:
          "I list my expertise, set availability, and deliver sessions through a platform that looks credible to parents, not just a personal WhatsApp number.",
        outcome: "More bookings and a professional teaching brand.",
      },
    ],
  },
  {
    id: "5",
    slug: "lumoganic",
    title: "Lumoganic",
    category: "Website & Software",
    description:
      "Lumoganic provides eco-friendly, cruelty-free skincare made with natural herbs, free from chemicals, toxins, and parabens.",
    image: "/portfolios/lumoganic.webp",
    liveUrl: "https://www.lumoganic.com/",
    tags: ["E-Commerce", "Next.js", "SEO"],
    client: "Lumoganic",
    region: "USA",
    industry: "Beauty · E-Commerce",
    duration: "10 weeks",
    metric: "40% Repeat Customers",
    metricLabel: "E-commerce performance lift",
    overview:
      "Lumoganic is a performance-first e-commerce store for eco-friendly skincare, combining brand storytelling, fast checkout, and inventory-ready architecture for global reach.",
    problem:
      "A growing skincare brand needed e-commerce that reflected its natural values while handling scale, slow pages and clunky checkout were killing conversions.",
    solution:
      "We rebuilt the store on a modern stack with optimised product pages, streamlined checkout, inventory hooks, and SEO foundations for international discovery.",
    result:
      "Faster load times, stronger repeat purchase behaviour, and a storefront that matches the premium quality of the products.",
    deliverables: [
      "Custom e-commerce storefront",
      "Product catalogue & collections",
      "Optimised checkout flow",
      "SEO & performance tuning",
      "Brand-aligned UI design",
    ],
    journey: [
      { phase: "01", title: "Brand Audit", detail: "Aligned digital experience with eco-premium positioning." },
      { phase: "02", title: "Store UX", detail: "Designed product discovery → cart → checkout funnel." },
      { phase: "03", title: "Engineering", detail: "Built performant Next.js commerce experience." },
      { phase: "04", title: "Optimise", detail: "SEO, speed, and conversion iteration post-launch." },
    ],
    userStories: [
      {
        persona: "Emily",
        role: "Eco-conscious Shopper",
        goal: "Buy clean skincare I can trust",
        story:
          "I read ingredient stories, filter by skin type, and checkout in minutes. The site feels as natural as the products, I came back for refills.",
        outcome: "Repeat purchases and brand loyalty.",
      },
      {
        persona: "Store Manager",
        role: "Operations Lead",
        goal: "Update products and track orders easily",
        story:
          "We manage catalogue updates and fulfilment visibility without developer help for every small change, the platform scales with our SKU growth.",
        outcome: "Operational efficiency as catalogues expanded.",
      },
    ],
  },
  {
    id: "6",
    slug: "online-derma",
    title: "Online Derma",
    category: "Website & Software",
    description:
      "Online Derma Expert offers skincare at your fingertips, consult certified dermatologists anytime, anywhere for personalized solutions.",
    image: "/portfolios/online derma.webp",
    liveUrl: "https://derma.mbsoftsolution.com/home",
    tags: ["Telehealth", "Next.js", "Healthcare"],
    client: "Online Derma",
    region: "Global",
    industry: "Healthcare · Telemedicine",
    duration: "18 weeks",
    metric: "4.9/5 Satisfaction",
    metricLabel: "Patient consultation rating",
    overview:
      "Online Derma is a teledoctor platform connecting patients with certified dermatologists for real-time consultations, personalised treatment plans, and secure medical records.",
    problem:
      "Patients waited weeks for dermatology appointments while skin conditions worsened, clinics had no digital channel for quick specialist access.",
    solution:
      "We built a telehealth portal: doctor discovery, appointment booking, video/chat consultation hooks, prescription workflows, and patient history, HIPAA-minded architecture patterns.",
    result:
      "Patients access specialists in hours instead of weeks; satisfaction scores reflect the convenience and quality of digital dermatology care.",
    deliverables: [
      "Patient & doctor portals",
      "Appointment scheduling",
      "Consultation workflow",
      "Treatment plan delivery",
      "Secure profile & history",
    ],
    journey: [
      { phase: "01", title: "Clinical Flow", detail: "Mapped patient journey from symptom to prescription." },
      { phase: "02", title: "Compliance UX", detail: "Designed trust-first medical UI patterns." },
      { phase: "03", title: "Platform Build", detail: "Delivered consultation-ready telehealth application." },
      { phase: "04", title: "Iterate", detail: "Refined booking and satisfaction based on user feedback." },
    ],
    userStories: [
      {
        persona: "Maria",
        role: "Patient",
        goal: "Get dermatologist advice without waiting weeks",
        story:
          "I uploaded photos of my skin concern, booked a slot the same day, and received a treatment plan digitally. I didn't take a day off work to sit in a waiting room.",
        outcome: "Faster relief and a 5-star consultation experience.",
      },
      {
        persona: "Dr. Khan",
        role: "Dermatologist",
        goal: "Consult more patients efficiently",
        story:
          "My calendar, patient notes, and follow-ups live in one dashboard. I extend care beyond the clinic without losing record quality.",
        outcome: "Higher patient throughput with maintained care standards.",
      },
    ],
  },
  {
    id: "7",
    slug: "real-taxi",
    title: "Real Taxi",
    category: "Website & Software",
    description:
      "RealTaxi Your seamless city travel companion. Book rides instantly, explore freely, and enjoy stress-free journeys.",
    image: "/portfolios/real taxi.webp",
    liveUrl: "https://realtaxi.es/",
    tags: ["Mobility", "Booking", "Next.js"],
    client: "Real Taxi",
    region: "Spain",
    industry: "Transport · Mobility",
    duration: "14 weeks",
    metric: "Instant Booking",
    metricLabel: "City ride platform",
    overview:
      "Real Taxi is a city mobility platform enabling instant ride booking, driver coordination, and a frictionless passenger experience for urban travel in Spain.",
    problem:
      "Local taxi operations relied on phone dispatch and cash, passengers couldn't see ETA, fare estimates, or booking history; operators lacked digital demand insight.",
    solution:
      "We engineered a ride-booking platform with real-time request flows, driver assignment logic, passenger accounts, and operator dashboards for fleet visibility.",
    result:
      "Passengers book in seconds; operators digitised dispatch and improved utilisation across the fleet.",
    deliverables: [
      "Passenger booking app / web",
      "Driver assignment flows",
      "Fare & trip history",
      "Operator dashboard hooks",
      "Localised Spanish UX",
    ],
    journey: [
      { phase: "01", title: "Mobility Study", detail: "Analysed local taxi dispatch and passenger expectations." },
      { phase: "02", title: "Flow Design", detail: "Designed request → match → ride → pay journey." },
      { phase: "03", title: "Build", detail: "Shipped booking platform with real-time architecture." },
      { phase: "04", title: "Launch", detail: "Go-live in target city with fleet onboarding." },
    ],
    userStories: [
      {
        persona: "Carlos",
        role: "Daily Commuter",
        goal: "Book a reliable taxi in seconds",
        story:
          "I open Real Taxi, set pickup, see the driver approach on the map, and pay without fumbling for cash. My trips are saved for expense reports.",
        outcome: "Predictable city travel every day.",
      },
      {
        persona: "Fleet Owner",
        role: "Taxi Operator",
        goal: "Digitise dispatch and grow rides",
        story:
          "We see demand patterns, assign drivers faster, and reduce empty miles. Digital bookings replaced chaotic phone queues.",
        outcome: "Higher fleet utilisation and revenue.",
      },
    ],
  },
  {
    id: "8",
    slug: "lucky-apk",
    title: "Lucky APK",
    category: "Mobile Apps",
    description:
      "Download Lucky APK for seamless app customization, premium feature unlocking, and a personalized mobile experience.",
    image: "/portfolios/lucky apk.webp",
    liveUrl: "https://luckypatchersapk.tech/",
    tags: ["Flutter", "Mobile", "Distribution"],
    client: "Lucky APK",
    region: "Global",
    industry: "Mobile · Distribution",
    duration: "8 weeks",
    metric: "High Engagement",
    metricLabel: "Mobile distribution portal",
    overview:
      "Lucky APK is a mobile distribution and content portal built for fast downloads, clear app presentation, and SEO-driven discovery of customised Android experiences.",
    problem:
      "The client needed a credible web presence for app distribution, slow pages and poor mobile UX hurt download conversion and search visibility.",
    solution:
      "We delivered a Flutter-aligned marketing site with optimised landing pages, download CTAs, performance tuning, and content structure for organic traffic.",
    result:
      "Faster mobile experience, improved search presence, and higher download intent from organic visitors.",
    deliverables: [
      "Mobile-first landing site",
      "Download funnel optimisation",
      "SEO content architecture",
      "Performance optimisation",
      "Analytics-ready structure",
    ],
    journey: [
      { phase: "01", title: "Audience", detail: "Defined downloader personas and search intent." },
      { phase: "02", title: "Landing UX", detail: "Designed conversion-focused mobile pages." },
      { phase: "03", title: "Ship", detail: "Built and deployed fast, lightweight frontend." },
      { phase: "04", title: "SEO", detail: "Structured content for discoverability." },
    ],
    userStories: [
      {
        persona: "Alex",
        role: "Android User",
        goal: "Find and install the app quickly on mobile",
        story:
          "I land from Google, understand what the app does in seconds, and tap download, no clutter, no confusion on a small screen.",
        outcome: "Successful install on first visit.",
      },
    ],
  },
  {
    id: "9",
    slug: "null-apk",
    title: "Null APK",
    category: "Mobile Apps",
    description:
      "Download Null's Brawl APK for unlimited gems, custom servers, exclusive skins, and thrilling Brawl Stars gameplay.",
    image: "/portfolios/null apk.webp",
    liveUrl: "https://nullsbrawl.tech/",
    tags: ["Flutter", "Mobile", "Gaming"],
    client: "Null APK",
    region: "Global",
    industry: "Gaming · Mobile",
    duration: "8 weeks",
    metric: "Global Reach",
    metricLabel: "Gaming distribution site",
    overview:
      "Null APK is a gaming distribution portal for customised Brawl Stars experiences, built for global mobile traffic, fast loads, and clear feature communication.",
    problem:
      "Gaming communities needed a trustworthy download hub, existing pages were slow, confusing, and hurt retention before users even installed.",
    solution:
      "We created a high-performance landing experience with feature highlights, download paths, mobile optimisation, and SEO for gaming keywords.",
    result:
      "Clear value proposition, faster loads, and improved organic discovery for the Null's Brawl community worldwide.",
    deliverables: [
      "Gaming landing experience",
      "Feature showcase sections",
      "Mobile download optimisation",
      "SEO for gaming queries",
      "Global CDN-friendly assets",
    ],
    journey: [
      { phase: "01", title: "Community", detail: "Studied player expectations and download friction." },
      { phase: "02", title: "Creative", detail: "Designed bold gaming-first visual language." },
      { phase: "03", title: "Build", detail: "Shipped performant portal for global traffic." },
      { phase: "04", title: "Grow", detail: "SEO iteration for competitive gaming keywords." },
    ],
    userStories: [
      {
        persona: "Jake",
        role: "Mobile Gamer",
        goal: "Get the mod APK safely and fast",
        story:
          "I see exactly what features I get, gems, skins, servers, and download without dodgy popups. The site works perfectly on my phone.",
        outcome: "Installed and playing within minutes.",
      },
    ],
  },
  {
    id: "10",
    slug: "shutre",
    title: "Shutre",
    category: "Website & Software",
    description:
      "Shutre is Online Shopping mall, offering customers the products from top brands, and exceptional customer service.",
    image: "/portfolios/shutre.webp",
    liveUrl: "https://nile.mbsoftsolution.com/admin/home",
    tags: ["Laravel", "E-Commerce", "Marketplace"],
    client: "Shutre",
    region: "MENA",
    industry: "E-Commerce · Retail",
    duration: "16 weeks",
    metric: "Multi-Brand Mall",
    metricLabel: "Online shopping platform",
    overview:
      "Shutre is a multi-brand online shopping mall, catalogues top products, manages vendor-style listings, and delivers a unified checkout for modern retail customers.",
    problem:
      "Retailers sold on isolated storefronts with inconsistent checkout and no mall-style discovery, customers couldn't browse brands in one trusted environment.",
    solution:
      "We built a Laravel-powered marketplace with brand storefronts, category navigation, cart aggregation, and admin tools for catalogue management.",
    result:
      "One digital mall for multiple brands, customers shop across categories; operators manage inventory from a central backend.",
    deliverables: [
      "Multi-vendor catalogue",
      "Unified cart & checkout",
      "Brand storefront pages",
      "Admin product management",
      "Customer account area",
    ],
    journey: [
      { phase: "01", title: "Retail Model", detail: "Defined mall vs single-store architecture." },
      { phase: "02", title: "Catalogue UX", detail: "Designed browse → compare → buy flows." },
      { phase: "03", title: "Laravel Build", detail: "Backend + frontend for scale." },
      { phase: "04", title: "Onboard Brands", detail: "Launched with initial vendor catalogue." },
    ],
    userStories: [
      {
        persona: "Nour",
        role: "Online Shopper",
        goal: "Browse multiple brands in one checkout",
        story:
          "I add items from different brands to one cart and pay once. Returns and order history are in my account, I don't juggle five websites.",
        outcome: "Convenient multi-brand shopping.",
      },
      {
        persona: "Vendor Admin",
        role: "Brand Manager",
        goal: "List products without building my own store",
        story:
          "We upload SKUs, set pricing, and fulfil orders through Shutre's mall infrastructure, foot traffic we couldn't get alone.",
        outcome: "New revenue channel with shared mall marketing.",
      },
    ],
  },
  {
    id: "11",
    slug: "fressnel",
    title: "Fressnel",
    category: "Website & Software",
    description:
      "Fressnel is a quiz management system that administers and evaluates quizzes for educators and trainers with ease.",
    image: "/portfolios/fressnel.webp",
    liveUrl: "https://fressnel.mbsoftsolution.com/login",
    tags: ["Laravel", "EdTech", "Quiz SaaS"],
    client: "Fressnel",
    region: "Global",
    industry: "Education · Assessment",
    duration: "12 weeks",
    metric: "Automated Grading",
    metricLabel: "Quiz management SaaS",
    overview:
      "Fressnel is a quiz management system for educators and trainers, create assessments, assign to learners, auto-grade responses, and analyse results without manual marking.",
    problem:
      "Teachers spent hours printing papers, marking by hand, and typing scores into spreadsheets, trainers couldn't scale assessments across cohorts.",
    solution:
      "We delivered a full quiz SaaS: question banks, timed exams, role-based access for teachers and students, instant grading, and exportable analytics.",
    result:
      "Assessment cycles that took days now complete in hours, educators focus on teaching, not paperwork.",
    deliverables: [
      "Quiz builder & question banks",
      "Timed exam engine",
      "Auto-grading system",
      "Teacher & student dashboards",
      "Results export & analytics",
    ],
    journey: [
      { phase: "01", title: "Educator Interviews", detail: "Captured grading and quiz workflow pain." },
      { phase: "02", title: "Exam Logic", detail: "Designed timing, scoring, and anti-cheat basics." },
      { phase: "03", title: "SaaS Build", detail: "Laravel backend with responsive student UI." },
      { phase: "04", title: "Pilot", detail: "Onboarded first institutions and iterated." },
    ],
    userStories: [
      {
        persona: "Prof. James",
        role: "University Lecturer",
        goal: "Run weekly quizzes without manual marking",
        story:
          "I build quizzes from my question bank, schedule them for 200 students, and get graded results instantly. I export scores to our LMS in one click.",
        outcome: "10+ hours saved per assessment cycle.",
      },
      {
        persona: "Aisha",
        role: "Student",
        goal: "Take exams fairly and see results fast",
        story:
          "I log in, complete the timed quiz on my laptop, and see my score immediately, no waiting weeks for papers to be returned.",
        outcome: "Faster feedback loop and better exam preparation.",
      },
    ],
  },
  {
    id: "12",
    slug: "dreamcity",
    title: "DreamCity",
    category: "Website & Software",
    description:
      "DreamCity Capital digital real-estate investment platform offers investment opportunities in pre-vetted real estate assets.",
    image: "/portfolios/dreamcity.webp",
    liveUrl: "https://estate.mbsoftsolution.com/",
    tags: ["FinTech", "PropTech", "Laravel"],
    client: "DreamCity Capital",
    region: "Nigeria",
    industry: "Real Estate · Investment",
    duration: "22 weeks",
    metric: "From ₦100 Min.",
    metricLabel: "Accessible property investing",
    overview:
      "DreamCity Capital is a digitised real-estate investment platform, users sign up, browse pre-funded property offerings in Abuja and Lagos, invest from ₦100, and track earnings through transparent SPC administration.",
    problem:
      "Nigerian investors faced high capital barriers and opaque crowdfunding, no simple way to analyse returns, own property stakes digitally, or trust the investment process.",
    solution:
      "We built the full platform: personalised dashboards, investment categories (available/funded/exited), deposit workflows, SPC stake ownership, and projected ROI displays.",
    result:
      "Investors access pre-vetted real estate with minimal entry; DreamCity funds projects before listing to reduce risk and build trust.",
    deliverables: [
      "Investor signup & KYC-ready flows",
      "Investment offering catalogue",
      "Deposit & receipt upload",
      "SPC stake tracking",
      "Admin portfolio management",
    ],
    journey: [
      { phase: "01", title: "Regulatory Mapping", detail: "Aligned flows with SPC investment model." },
      { phase: "02", title: "Investor UX", detail: "Designed signup → browse → invest → earn journey." },
      { phase: "03", title: "Platform Build", detail: "Laravel + React for financial-grade reliability." },
      { phase: "04", title: "Launch KSA/NG", detail: "Live offerings across Abuja, Lagos, Delta." },
    ],
    userStories: [
      {
        persona: "Chidi",
        role: "First-time Investor",
        goal: "Start real estate investing with small capital",
        story:
          "I opened an account, browsed a short-term Abuja offering from ₦100, uploaded my deposit receipt, and track projected 15% returns in my dashboard, no lawyer meetings for my first stake.",
        outcome: "Property exposure I couldn't afford through traditional routes.",
      },
      {
        persona: "Amina",
        role: "Portfolio Investor",
        goal: "Diversify across multiple property offerings",
        story:
          "I filter available vs funded deals, compare durations and returns, and reinvest earnings across categories, everything is visible in one portal.",
        outcome: "Diversified digital real-estate portfolio.",
      },
      {
        persona: "DreamCity Ops",
        role: "Investment Administrator",
        goal: "Manage offerings and investor stakes transparently",
        story:
          "We pre-fund assets, list offerings, verify deposits, and issue proportional SPC shares. Investors see exactly what they own and expected earnings.",
        outcome: "Scalable operations with minimal manual reconciliation.",
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): PortfolioCaseStudy | undefined {
  return PORTFOLIO_CASE_STUDIES.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return PORTFOLIO_CASE_STUDIES.map((c) => c.slug);
}

/** Card listing shape used on /portfolio */
export function getPortfolioProjects() {
  return PORTFOLIO_CASE_STUDIES.map(
    ({ id, slug, title, category, description, image, liveUrl, tags }) => ({
      id,
      slug,
      title,
      category,
      description,
      image,
      link: liveUrl,
      tags,
    }),
  );
}
