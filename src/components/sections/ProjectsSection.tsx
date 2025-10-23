import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const CAROUSEL_ITEM_BASIS = "md:basis-1/2 lg:basis-1/2";

export const ProjectsSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Carousel opts={{ align: "start", loop: false }} className="w-full">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className={CAROUSEL_ITEM_BASIS}>
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
