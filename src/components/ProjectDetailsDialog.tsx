import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Eye } from "lucide-react";
import { Project, CarouselImage } from "@/types/project";

interface ProjectDetailsDialogProps {
  project: Project;
}

const ACTION_BUTTON_SIZE = "h-8 w-8";

export const ProjectDetailsDialog = ({ project }: ProjectDetailsDialogProps) => {
  if (!project.carouselImages) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" className={ACTION_BUTTON_SIZE} title="View Details">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <ImageCarousel images={project.carouselImages} />
      </DialogContent>
    </Dialog>
  );
};

const ImageCarousel = ({ images }: { images: CarouselImage[] }) => (
  <Carousel opts={{ loop: false }} className="w-full">
    <CarouselContent>
      {images.map((image, index) => (
        <CarouselItem key={index}>
          <img src={image.src} alt={image.alt} className="w-full rounded-lg" />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

