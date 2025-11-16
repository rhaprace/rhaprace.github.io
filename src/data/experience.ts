export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  status: "current" | "past";
  responsibilities: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "maplab-fullstack",
    title: "Junior Full Stack Developer",
    company: "Map Lab",
    location: "Remote",
    period: "2025 – Present",
    status: "current",
    responsibilities: [
      "Developing Lexi Quest, a quest based React Native language learning app.",
      "Built features for AI-powered phrase building, vocabulary exploration, and cultural deep-dives.",
      "Enhanced app UI/UX, making language learning engaging and interactive.",
    ],
    technologies: [
      "React Native",
      "Supabase",
      "PowerSync",
      "TypeScript",
      "Expo",
      "EAS",
      "Github Actions",
      "Docker",
      "Lolli",
    ],
  },
  {
    id: "glowtech-shopify",
    title: "Shopify Developer",
    company: "Glowtech, Co.",
    location: "Remote",
    period: "January 2025 (2 weeks)",
    status: "past",
    responsibilities: [
      "Developed custom Shopify theme features and enhancements.",
      "Implemented responsive design improvements for better mobile experience.",
      "Enhanced user experience and optimized site performance.",
    ],
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CSS",
      "HTML",
    ],
  },
];

