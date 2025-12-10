export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "PoliSwift",
    description: "A Next.js web application built with the T3 Stack that automatically generates legally compliant business policies (Privacy Policy, Terms & Conditions, Refund/Shipping Policy) tailored for Philippine e-commerce businesses. Ensures compliance with Philippine Data Privacy Act (DPA) 2012.",
    tags: ["T3 Stack", "Next.js 15", "React 19", "TypeScript", "tRPC", "Turso", "Drizzle ORM", "TailwindCSS", "Framer Motion", "PDF Export", "SEO", "Vercel"],
    images: ["/projects/poliswift.png"],
    liveUrl: "https://poli-swift.vercel.app",
  },
  {
    id: 2,
    title: "rhap-env-guardian",
    description: "A production-ready, zero-dependency environment variable validator with full TypeScript support. Provides compile-time and runtime safety with type inference, universal compatibility for Node.js and Vite/React, and descriptive error messages.",
    tags: ["TypeScript", "Node.js", "NPM Package", "Vite", "React", "Type Safety", "Zero Dependencies"],
    images: ["/projects/env-guardian.png"],
    liveUrl: "https://www.npmjs.com/package/rhap-env-guardian",
    repoUrl: "https://github.com/rhaprace/env-guardian",
  },
  {
    id: 3,
    title: "QuakeSafe",
    description: "An earthquake safety and preparedness application with interactive maps, real-time alerts, and offline-first capabilities for emergency situations",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Leaflet", "i18next", "PWA", "Vercel"],
    images: ["/projects/quake-safe.png"],
    liveUrl: "https://quakesafe-beta.vercel.app/",
    repoUrl: "https://github.com/rhaprace/quakesafe",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "My personal portfolio website built with React, TypeScript, and Tailwind CSS. Features include a hero section, about me section, experience section, and a projects section.",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "GSAP", "React Responsive"],
    images: ["/projects/portfolio.png"],
    liveUrl: "https://rhaprace.github.io",
    repoUrl: "https://github.com/rhaprace/rhaprace.github.io",
  },
  {
    id: 5,
    title: "NutriMate",
    description: "NutriMate is a smart nutrition tracking and meal logging web application designed to help users monitor their daily food intake, track macronutrients, and achieve their health goals.",
    tags: ["React 18", "TypeScript" ,"Zustand","Tailwind CSS","MongoDB","Jotai","Lucide React","Zod","Node.js","Express.js","node-cron","JWT"],
    images: ["/projects/Nutrimate/login.png", "/projects/Nutrimate/dashboard.png", "/projects/Nutrimate/history.png"],
  },
];



