import { Project } from "@/types/project";
import quakeSafeImage from "@/assets/Projects/quake-safe.png";
import fireAwareImage from "@/assets/Projects/fire-aware.png";
import nutrimateLoginImage from "@/assets/Projects/Nutrimate/Login.png";
import nutrimateDashboardImage from "@/assets/Projects/Nutrimate/Dashboard.png";
import nutrimateAddMealImage from "@/assets/Projects/Nutrimate/AddMeal.png";
import nutrimateSearchMealImage from "@/assets/Projects/Nutrimate/SearchMeal.png";
import nutrimateHistoryImage from "@/assets/Projects/Nutrimate/History.png";
import nutrimateProfileImage from "@/assets/Projects/Nutrimate/Profile.png";

export const projects: Project[] = [
  {
    title: "QuakeSafe",
    description: "An earthquake safety and preparedness application with interactive maps, real-time alerts, and offline-first capabilities for emergency situations.",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Leaflet", "i18next", "PWA"],
    image: quakeSafeImage,
    liveUrl: "https://quakesafe-beta.vercel.app/",
    githubUrl: "https://github.com/rhaprace/quakeSafe",
  },
  {
    title: "Fire-Aware",
    description: "A comprehensive fire safety and awareness application with real-time alerts, emergency protocols, and interactive safety features for fire prevention and response.",
    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Recharts"],
    image: fireAwareImage,
  },
  {
    title: "Nutrimate",
    description: "NutriMate is a smart nutrition tracking and meal logging web application designed to help users monitor their daily food intake, track macronutrients, and achieve their health goals.",
    tags: ["React 18", "TypeScript", "Zustand", "Tailwind CSS", "MongoDB", "Jotai", "Lucide React", "Zod", "Node.js", "Express.js", "node-cron", "JWT"],
    image: nutrimateLoginImage,
    carouselImages: [
      { src: nutrimateDashboardImage, alt: "Dashboard" },
      { src: nutrimateAddMealImage, alt: "Add Meal" },
      { src: nutrimateSearchMealImage, alt: "Search Meal" },
      { src: nutrimateHistoryImage, alt: "History" },
      { src: nutrimateProfileImage, alt: "Profile" },
    ],
  },
];

