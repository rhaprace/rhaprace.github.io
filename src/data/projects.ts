import { Project } from "@/types/project";
import quakeSafeImage from "@/assets/Projects/quake-safe.png";
import fireAwareImage from "@/assets/Projects/fire-aware.png";
import nutrimateLoginImage from "@/assets/Projects/Nutrimate/Login.png";
import nutrimateDashboardImage from "@/assets/Projects/Nutrimate/Dashboard.png";
import nutrimateAddMealImage from "@/assets/Projects/Nutrimate/AddMeal.png";
import nutrimateSearchMealImage from "@/assets/Projects/Nutrimate/SearchMeal.png";
import nutrimateHistoryImage from "@/assets/Projects/Nutrimate/History.png";
import nutrimateProfileImage from "@/assets/Projects/Nutrimate/Profile.png";
import saasLanding1Image from "@/assets/Projects/SaaS/Landing1.png";
import saasLoginImage from "@/assets/Projects/SaaS/Login.png";
import saasDashboardImage from "@/assets/Projects/SaaS/Dashboard.png";
import saasProductsImage from "@/assets/Projects/SaaS/Products.png";
import saasAddProductsImage from "@/assets/Projects/SaaS/Add_Products.png";
import saasCategoriesImage from "@/assets/Projects/SaaS/Categories.png";
import saasSuppliersImage from "@/assets/Projects/SaaS/Suppliers.png";
import saasAddSuppliersImage from "@/assets/Projects/SaaS/Add_Suppliers.png";
import saasActivitiesImage from "@/assets/Projects/SaaS/Activities.png";
import saasAddActivitiesImage from "@/assets/Projects/SaaS/Add_Activities.png";

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
  {
    title: "Inventory Management SaaS",
    description: "A modern, multi-tenant inventory management system that enables businesses to track products, manage stock levels, monitor supplier relationships, and analyze inventory activities in real-time. Features include low-stock alerts, activity tracking with automatic stock adjustments, CSV export capabilities, and a comprehensive dashboard with analytics. Built with enterprise-grade security including Auth0 authentication, rate limiting, and data isolation per tenant.",
    tags: ["React 19", "TypeScript", "TanStack Query", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "Auth0", "Vite", "Axios", "Winston", "Helmet.js", "Joi"],
    image: saasLanding1Image,
    carouselImages: [
      { src: saasLoginImage, alt: "Login" },
      { src: saasDashboardImage, alt: "Dashboard" },
      { src: saasProductsImage, alt: "Products" },
      { src: saasAddProductsImage, alt: "Add Products" },
      { src: saasCategoriesImage, alt: "Categories" },
      { src: saasSuppliersImage, alt: "Suppliers" },
      { src: saasAddSuppliersImage, alt: "Add Suppliers" },
      { src: saasActivitiesImage, alt: "Activities" },
      { src: saasAddActivitiesImage, alt: "Add Activities" },
    ],
  },
];

