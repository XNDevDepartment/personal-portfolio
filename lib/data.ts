import type {
  Project,
  ExperienceEntry,
  SkillGroup,
  Stat,
  Award,
  Language,
  NavLink,
} from "@/types"

export const SITE_META = {
  title: "Francisco Forte — AI Solutions Engineer & Founder",
  description:
    "Francisco Forte is an AI Solutions Engineer and founder of ProduktPix. I build AI-powered systems, products, and automations that solve real business problems — across e-commerce, operations, and digital products.",
  url: "https://franciscoforte.com",
  ogImage: "/og-image.png",
  email: "francisco.forte1605@gmail.com",
  phone: "+351 926 356 479",
  linkedin: "francisco-forte",
  location: "Braga, Portugal",
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export const HERO_CONTENT = {
  name: "Francisco Forte",
  title: "AI Solutions Engineer",
  headline: "I build AI systems, products, and automations with business impact.",
  subheadline:
    "Engineer and founder focused on building AI-powered systems that improve business operations, customer experience, and internal efficiency. Experienced across product development, automation, GenAI applications, e-commerce systems, and process design.",
  badges: ["Founder, ProduktPix", "550+ Registered Users", "6 AI Systems Delivered", "30-Person Team Lead"],
}

export const STATS: Stat[] = [
  { value: 30, suffix: "", label: "Paying Customers" },
  { value: 550, suffix: "+", label: "Registered Users" },
  { value: 6, suffix: "", label: "AI Systems Delivered" },
  { value: 30, suffix: "", label: "Person Team Led" },
  { value: 7, suffix: "", label: "Sponsors Secured" },
  { value: 13, suffix: "%", label: "Sales Increase (automation)" },
]

export const PROJECTS: Project[] = [
  {
    id: "produktpix",
    title: "ProduktPix",
    category: "AI SaaS · Founder",
    summary:
      "Built an AI-powered SaaS platform that helps businesses create professional product photography faster and at lower cost than traditional studios.",
    highlights: [
      "End-to-end product development — strategy, engineering, and commercial execution",
      "AI workflows for generating and editing e-commerce visual content",
      "Direct customer acquisition, validation, and feedback loops",
      "550+ registered users and 30 paying customers achieved",
    ],
    tags: ["Next.js", "React", "AI/GenAI", "Supabase", "Stripe", "SaaS"],
    metric: "550+",
    metricLabel: "users",
    color: "bg-blue-50",
  },
  {
    id: "ecommerce-ai",
    title: "E-commerce AI Systems",
    category: "Freelance · AI Engineer",
    summary:
      "Designed and built AI systems and automation workflows for business operations and e-commerce use cases across multiple clients.",
    highlights: [
      "6 AI systems and automation workflows delivered end-to-end",
      "AI chatbots deployed for two online stores",
      "Stock update automation for a skincare brand — 100% manual processing eliminated",
      "Contributed to a 13% increase in sales through automation",
      "Product data standardisation and lead enrichment systems",
    ],
    tags: ["Python", "LangChain", "OpenAI", "Automation", "n8n", "APIs"],
    metric: "13%",
    metricLabel: "sales increase",
    color: "bg-cyan-50",
  },
  {
    id: "mecwide",
    title: "Internal Systems · Mecwide",
    category: "Software Engineer",
    summary:
      "Contributed to internal systems and applications for a multinational industrial company, working across the full stack in a cross-functional engineering environment.",
    highlights: [
      "Frontend and fullstack development on internal tools",
      "Frontend coordination and stakeholder meetings",
      "Process design and cross-functional execution",
      "Worked within structured engineering teams and delivery processes",
    ],
    tags: ["TypeScript", "React", "Fullstack", "Process Design", "Stakeholder Management"],
    metric: "2y",
    metricLabel: "engineering",
    color: "bg-slate-50",
  },
  {
    id: "formula-student",
    title: "Formula Student UMinho",
    category: "Engineering Leadership",
    summary:
      "Led a 30-person multidisciplinary engineering team competing in Formula Student, one of the most demanding student engineering competitions in Europe.",
    highlights: [
      "Led team structure, recruitment, and operations across 30 members",
      "Secured 7 sponsors through commercial and technical communication",
      "1st Place — Business Plan, Formula Student Portugal",
      "2nd Place — Engineering Design, Formula Student Portugal",
    ],
    tags: ["Team Leadership", "Sponsorship", "Business Plan", "Engineering", "Strategy"],
    metric: "1st",
    metricLabel: "Business Plan",
    color: "bg-amber-50",
  },
]

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Founder",
    company: "ProduktPix",
    period: "2025 — Present",
    location: "Braga, Portugal",
    description:
      "Building an AI-powered SaaS platform for professional product photography. Responsible for all aspects of the product — engineering, design, customer development, and commercial execution.",
    highlights: [
      "Developed the full product from concept to paying customers",
      "Built AI workflows integrating GenAI image models with e-commerce platforms",
      "Acquired and managed 30 paying customers and 550+ registered users",
      "Managed product roadmap, pricing strategy, and customer feedback loops",
    ],
  },
  {
    role: "Freelance AI & Automation Engineer",
    company: "Independent",
    period: "2024 — 2025",
    location: "Remote",
    description:
      "Designed and delivered AI systems and automation workflows for e-commerce businesses and operations teams. Focused on high-impact, practical systems that reduced manual work and improved commercial outcomes.",
    highlights: [
      "6 AI systems and workflow automations delivered across multiple clients",
      "AI chatbots, stock automation, lead enrichment, and data pipelines",
      "Contributed to a 13% sales increase through operational automation",
      "Eliminated 100% of manual processing in one critical client workflow",
    ],
  },
  {
    role: "Software Engineer",
    company: "Mecwide S.A.",
    period: "2022 — 2024",
    location: "Braga, Portugal",
    description:
      "Frontend and fullstack engineering in a multinational industrial company. Worked on internal tools and applications within structured, cross-functional delivery teams.",
    highlights: [
      "Frontend development and coordination across engineering teams",
      "Participated in stakeholder meetings and process design sessions",
      "Delivered features across the full stack within agile processes",
      "Developed practical problem-solving skills in a professional engineering environment",
    ],
  },
  {
    role: "Team Leader — Business & Operations",
    company: "Formula Student UMinho",
    period: "2022 — 2023",
    location: "University of Minho, Portugal",
    description:
      "Led the business and operations division of a 30-person student engineering team competing in Formula Student Portugal.",
    highlights: [
      "Led team structure, task allocation, and recruitment for a 30-person team",
      "Secured 7 sponsors through commercial proposals and partnerships",
      "Achieved 1st Place in Business Plan and 2nd Place in Engineering Design",
      "Developed leadership, communication, and strategic planning skills under pressure",
    ],
  },
]

export const SKILLS: SkillGroup[] = [
  {
    title: "AI & Automation",
    icon: "Brain",
    skills: [
      "AI Solutions Design",
      "GenAI Applications",
      "Workflow Automation",
      "Process Design",
      "LangChain / LangGraph",
      "OpenAI API",
      "Anthropic Claude",
      "RAG Systems",
      "Multi-agent Orchestration",
      "Prompt Engineering",
    ],
  },
  {
    title: "Engineering",
    icon: "Code2",
    skills: [
      "Systems Development",
      "Web Development",
      "Solution Architecture",
      "Product Development",
      "Next.js / React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Git",
    ],
  },
  {
    title: "Execution",
    icon: "Target",
    skills: [
      "Problem Solving",
      "Team Leadership",
      "Communication",
      "Strategic Thinking",
      "Stakeholder Collaboration",
      "Project Planning",
      "Commercial Awareness",
      "Customer Development",
    ],
  },
]

export const ABOUT_CONTENT = {
  paragraphs: [
    "I work at the intersection of AI, systems design, and business execution. My interest is in building practical technology that creates leverage — systems that reduce friction, eliminate manual work, and improve how businesses operate.",
    "I have built products from scratch, delivered automation systems for paying clients, and led engineering teams under real competitive pressure. Each experience has reinforced a preference for clarity over complexity: the best system is the one that solves the actual problem, simply and reliably.",
    "Whether I'm designing an AI workflow, architecting a product, or coordinating a team — I try to bring the same discipline: understand the problem deeply, move quickly on what matters, and build things that work in the real world.",
  ],
}

export const AWARDS: Award[] = [
  {
    placement: "1st",
    title: "Business Plan",
    event: "Formula Student Portugal",
    year: "2023",
  },
  {
    placement: "2nd",
    title: "Engineering Design",
    event: "Formula Student Portugal",
    year: "2023",
  },
]

export const LANGUAGES: Language[] = [
  { name: "Portuguese", level: "Native", proficiency: 100 },
  { name: "English", level: "C2", proficiency: 95 },
  { name: "French", level: "B1", proficiency: 55 },
  { name: "Mandarin", level: "HSK-1", proficiency: 12 },
]

export const CONTACT = {
  headline: "Let's build something meaningful.",
  subtext:
    "I'm open to roles, collaborations, and opportunities involving AI systems, product development, and digital transformation.",
  email: SITE_META.email,
  phone: SITE_META.phone,
  linkedin: SITE_META.linkedin,
}
