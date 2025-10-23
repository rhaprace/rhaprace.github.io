export interface CarouselImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  carouselImages?: CarouselImage[];
}

