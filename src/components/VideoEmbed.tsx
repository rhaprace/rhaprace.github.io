import { memo } from "react";

interface VideoEmbedProps {
  videoUrl: string;
  title: string;
  thumbnail?: string;
}

export const VideoEmbed = memo(({ videoUrl, title, thumbnail }: VideoEmbedProps) => {
  const getEmbedUrl = (url: string): string => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes("youtu.be")
        ? url.split("youtu.be/")[1]?.split("?")[0]
        : url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("vimeo.com")) {
      const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  const isDirectVideo = !videoUrl.includes("youtube") && !videoUrl.includes("vimeo");
  const embedUrl = getEmbedUrl(videoUrl);

  if (isDirectVideo) {
    return (
      <div className="testimonial-video relative w-full aspect-video rounded-2xl overflow-hidden border-4 border-black shadow-2xl">
        <video
          className="w-full h-full object-cover"
          controls
          poster={thumbnail}
          preload="metadata"
        >
          <source src={embedUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="testimonial-video relative w-full aspect-video rounded-2xl overflow-hidden border-4 border-black shadow-2xl">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
});

VideoEmbed.displayName = "VideoEmbed";

