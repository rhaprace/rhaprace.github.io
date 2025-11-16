export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  clientCompany: string;
  videoUrl: string;
  videoThumbnail: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-albert-opdahl",
    clientName: "Albert Opdahl",
    clientTitle: "Product Owner",
    clientCompany: "Glowtech",
    videoUrl: "/testimonials/Albert-Testimonial.mp4",
    videoThumbnail: "/testimonials/Albert-Testimonial-Thumbnail.png",
  },
];

