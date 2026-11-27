/**
 * All site content lives here. Edit this file to update the portfolio.
 * Leave a URL as "" to hide that link (nothing on the site will point to a dead page).
 */

export const site = {
  name: "Jawad Olamide Yuusuf",
  initials: "JY",
  categories: ["Software Development", "Business Development"],
  headline: "I build web applications and help businesses find opportunities.",
  intro:
    "I'm a software developer with experience building web applications and working with business research, lead generation, outreach and CRM operations.",
  location: "Ibadan, Nigeria",
  availability: "Available for remote roles",
  // Replace /public/profile.svg with your own photo (e.g. /public/jawad.jpg) and update this path.
  photo: "/projects/jawad.png",
  photoAlt: "Portrait of Jawad Olamide Yuusuf",
  resume: "/resume.pdf",
  // Set this to your live domain once deployed (used for social sharing previews).
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export const contact = {
  email: "yuusufjawadolamide67@gmail.com",
  phone: "+234 814 241 7877",
  phoneHref: "tel:+2348142417877",
  whatsappHref: "https://wa.me/2348142417877",
  linkedin: "https://www.linkedin.com/in/jawad-olamide-yuusuf",
  // Add your GitHub profile URL, e.g. "https://github.com/your-username". Hidden while empty.
  github: "",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Business Development", href: "#business-development" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I work across two areas that usually sit apart. On the software side, I build web applications with React, Next.js and TypeScript, mostly responsive frontends that connect to APIs and are easy for real people to use.",
    "On the business side, I research businesses, identify potential leads, organise contact information, handle outreach and keep CRM records accurate. Most of this work is done remotely with US-based teams, using GoHighLevel, ClickUp and Google Workspace.",
    "Both sides come down to the same habits: check the details, keep things organised and make sure every open item has a clear next step.",
  ],
};

export const capabilities = [
  {
    title: "Software Development",
    description:
      "Web applications, frontend development, responsive interfaces and working with APIs.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Supabase"],
  },
  {
    title: "Business Development",
    description:
      "Business research, lead identification, lead generation, prospect qualification, outreach and follow-up.",
    skills: ["Business research", "Lead generation", "Qualification", "Outreach", "Follow-up"],
  },
  {
    title: "CRM Operations",
    description:
      "Contact management, pipeline tracking, workflow review, lead validation, task documentation and keeping CRM records organised.",
    skills: ["GoHighLevel", "Pipelines", "Lead validation", "Workflow review", "Documentation"],
  },
];

export const processSteps = [
  {
    title: "Find potential businesses",
    body: "Research businesses and business owners across relevant online platforms, communities and search engines.",
  },
  {
    title: "Identify the right people",
    body: "Find the business owner or decision-maker and relevant contact information where publicly available.",
  },
  {
    title: "Qualify the lead",
    body: "Check whether the business is relevant, whether the person is a real business owner, whether their needs match the service and whether the opportunity is worth pursuing.",
  },
  {
    title: "Organise the information",
    body: "Record the lead, source, business details, date, qualification status and notes in a spreadsheet or CRM.",
  },
  {
    title: "Personalise outreach",
    body: "Write a short, friendly message that refers to the business, its needs or its recent activity.",
  },
  {
    title: "Follow up",
    body: "Keep track of replies, follow-ups and next steps without sending repetitive or unwanted messages.",
  },
];

export const crmAreas = [
  {
    title: "Contact and lead management",
    body: "Keep contact and lead records complete and accurate across client sub-accounts.",
  },
  {
    title: "Pipeline tracking",
    body: "Follow where each lead sits in the pipeline and keep stages up to date.",
  },
  {
    title: "Contact validation",
    body: "Confirm which records are real and current before any work is done on them.",
  },
  {
    title: "Workflow review",
    body: "Read through automations step by step, check conditions and branches, and note questions for the team.",
  },
  {
    title: "Task documentation",
    body: "Write up checklists, findings and workarounds so the team can act on them.",
  },
  {
    title: "Lead status tracking",
    body: "Make sure each lead's status reflects what has actually happened with it.",
  },
  {
    title: "CRM organisation",
    body: "Keep tags, fields and records tidy so anyone can find what they need.",
  },
  {
    title: "Follow-up tracking",
    body: "Track open items and follow-ups until each one is resolved or has a clear next step.",
  },
];

export type ExperienceItem = {
  period?: string;
  role: string;
  org?: string;
  meta?: string;
  points: string[];
  keySkills?: string[];
};

// Company names are left out of the first two entries on purpose. Add them here if you want them shown.
export const experience: ExperienceItem[] = [
  {
    period: "2026 – Present",
    role: "CRM Operations Support",
    org: "US Roofing CRM Agency",
    meta: "Remote · GoHighLevel",
    points: [
      "Work in GoHighLevel across five US roofing client sub-accounts: contacts, pipelines, lead statuses and automations.",
      "Reviewed the automation that moves new leads to \"workable\" status, checked each condition and branch, and prepared findings for the team standup.",
      "Confirmed which client account held the real production data (4,000+ contacts) and which was an empty duplicate before any work started.",
      "Built a data migration checklist for moving a client's contacts and records to a new CRM setup, without changing any live workflows.",
      "Track open items for each client and send a structured daily report on what was completed, tested, at risk and next.",
    ],
  },
  {
    period: "2026 – Present",
    role: "Project Manager",
    org: "US-Based Product Team",
    meta: "Remote · Team coordination",
    points: [
      "Coordinate sprint planning for a remote team of developers and a product designer.",
      "Reconcile meeting transcripts, existing ClickUp tasks and team input into one agreed list of work.",
      "Set up and maintain the ClickUp board so every task is assigned, described and given a clear status.",
      "Write sprint plans and ticket documents ready to share with the team and stakeholders.",
    ],
  },
  {
    period: "Contract",
    role: "Front-end Developer",
    org: "Starlight Energy and Agro Allied Ltd",
    meta: "Remote · Next.js, React, TypeScript",
    points: [
      "Build and refine frontend pages and components for an agricultural marketplace and farmer financing platform.",
      "Reworked page content and layout to reflect the marketplace focus: farmers, buyers, farm inputs and financing.",
    ],
  },
  {
    role: "Business Development & Client Outreach",
    points: [
      "Identified potential clients and businesses that could benefit from the company's services.",
      "Researched businesses, decision-makers and contact details to support outreach efforts.",
      "Drafted personalised outreach messages through email, LinkedIn and other social media platforms.",
      "Followed up with prospects to maintain communication and encourage business conversations.",
      "Helped introduce company services to potential clients and build relationships that could lead to business opportunities.",
    ],
    keySkills: [
      "Lead generation",
      "Prospect research",
      "Cold outreach",
      "Follow-ups",
      "Client communication",
      "Relationship building",
    ],
  },
  {
    role: "Social Media Management & Business Visibility",
    points: [
      "Managed and prepared social media content to promote business services, products and brand awareness.",
      "Developed simple content ideas, captions and promotional posts for platforms such as Facebook, Instagram and LinkedIn.",
      "Helped businesses communicate their services clearly to potential customers through social media.",
      "Maintained consistency in content presentation and messaging.",
      "Engaged with online audiences through comments, messages and other interactions to encourage conversations and enquiries.",
    ],
    keySkills: [
      "Social media management",
      "Content planning",
      "Copywriting",
      "Audience engagement",
      "Brand awareness",
      "Online communication",
    ],
  },
  {
    role: "Business Research, Lead Generation & Growth Support",
    points: [
      "Researched industries, businesses and potential customers to identify opportunities for business growth.",
      "Compiled prospect lists to support business outreach and sales activities.",
      "Identified potential business partners, customers and collaboration opportunities.",
      "Assisted in communicating business offerings to prospective clients.",
      "Supported business growth efforts through online research, outreach planning and follow-up communication.",
    ],
    keySkills: [
      "Market research",
      "Lead generation",
      "Prospect lists",
      "Business communication",
      "Partnership research",
      "Growth support",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  // Replace with a real screenshot in /public/projects/ (e.g. "/projects/starlight.png").
  image: string;
  // Leave "" until the project is live; the card will show "Link coming soon" instead of a dead link.
  url: string;
};

export const projects: Project[] = [
  {
    title: "Starlight Farmers & Buyers Marketplace",
    category: "Marketplace · ",
    description:
      "A marketplace connecting farmers with buyers and farm inputs. I worked on the frontend, including page components and responsive layouts.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/marketplace.png",
    url: "http://marketplace.starlightecoenergy.com/",
  },
  {
    title: "AgriConnect",
    category: "Agri-fintech · ",
    description:
      "A platform that helps smallholder farmers in Nigeria access financing. I built and refined frontend pages such as About and FAQ, and proposed admin dashboard UI improvements.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/agriflex.png",
    url: "https://agriflex.starlightecoenergy.com/",
  },
  // {
  //   title: "Kolobuy.ng",
  //   category: "E-commerce · Web app",
  //   description:
  //     "A modern e-commerce platform for discovering and shopping consumer products online.",
  //   tech: ["Next.js", "React", "TypeScript"],
  //   image: "/projects/kolobuy.png",
  //   url: "https://kolobuy.vercel.app/",
  // },
];

// export const alsoBuilt = ["NovaGlide Tech Solutions web app", "Quantivo crypto trading platform"];

export const tools = [
  { category: "Research", items: ["Google Search", "LinkedIn", "Facebook Groups", "Online business directories"] },
  { category: "CRM", items: ["GoHighLevel"] },
  { category: "Task management", items: ["ClickUp"] },
  { category: "Data and organisation", items: ["Google Sheets", "Google Workspace", "Microsoft Office"] },
  { category: "Communication", items: ["Slack", "Email"] },
  { category: "Software Development", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "Git", "GitHub"] },
];

export const education = [
  { title: "B.Sc. Economics", institution: "Obafemi Awolowo University", year: "2018" },
  { title: "Software Engineering Training", institution: "SQI College of ICT, Ibadan", year: "2023" },
];
