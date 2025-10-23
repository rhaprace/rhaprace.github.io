import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, GitBranch, Eye } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import { BadgeList } from "@/components/BadgeList";
import quakeSafeImage from "@/assets/Projects/quake-safe.png";
import fireAwareImage from "@/assets/Projects/fire-aware.png";
import nutrimateLoginImage from "@/assets/Projects/Nutrimate/Login.png";
import nutrimateDashboardImage from "@/assets/Projects/Nutrimate/Dashboard.png";
import nutrimateAddMealImage from "@/assets/Projects/Nutrimate/AddMeal.png";
import nutrimateSearchMealImage from "@/assets/Projects/Nutrimate/SearchMeal.png";
import nutrimateHistoryImage from "@/assets/Projects/Nutrimate/History.png";
import nutrimateProfileImage from "@/assets/Projects/Nutrimate/Profile.png";

const projects = [
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
    tags: ["React 18", "TypeScript", "Zustand", "Tailwind CSS", "MongoDB", "Jotai", "Lucide React", "Zod","Node.js", "Express.js", "node-cron", "JWT"],
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

export const ProjectsSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Carousel opts={{ align: "start", loop: false }} className="w-full">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <Card className="shadow-[var(--shadow-card)] border-border overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="h-48 overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View Source Code">
                            <GitBranch className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="View Live Site">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.carouselImages && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="icon" variant="ghost" className="h-8 w-8" title="View Details">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh]">
                            <DialogHeader>
                              <DialogTitle>{project.title}</DialogTitle>
                            </DialogHeader>
                            <Carousel opts={{ loop: false }} className="w-full">
                              <CarouselContent>
                                {project.carouselImages.map((image, imgIndex) => (
                                  <CarouselItem key={imgIndex}>
                                    <img src={image.src} alt={image.alt} className="w-full rounded-lg" />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <CarouselPrevious />
                              <CarouselNext />
                            </Carousel>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <BadgeList items={project.tags} />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
