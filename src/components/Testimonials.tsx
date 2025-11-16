import { memo } from "react";
import { useTestimonialsAnimation } from "../hooks/useTestimonialsAnimation";
import { PositionedOrbital } from "./PositionedOrbital";
import { testimonials } from "../utils/dataCache";
import { SectionTitle } from "./SectionTitle";
import { VideoEmbed } from "./VideoEmbed";

export const Testimonials = memo(() => {
  const sectionRef = useTestimonialsAnimation();

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex items-center py-20 md:py-32 relative overflow-hidden bg-white"
    >
      <PositionedOrbital position="right" size="large" />

      <div className="w-full px-8 md:px-16 relative z-10">
        <SectionTitle className="testimonials-title mb-16 md:mb-24">
          Testimonials
        </SectionTitle>

        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <VideoEmbed
                    videoUrl={testimonial.videoUrl}
                    title={`Testimonial from ${testimonial.clientName}`}
                    thumbnail={testimonial.videoThumbnail}
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="relative">
                    <div className="h-1 w-16 bg-black mb-6"></div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 leading-tight">
                      {testimonial.clientName}
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-2">
                      {testimonial.clientTitle}
                    </p>
                    {testimonial.clientCompany && (
                      <p className="text-lg md:text-xl text-gray-600 font-medium">
                        {testimonial.clientCompany}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {testimonials.length > 0 && !testimonials[0].videoUrl && (
          <div className="max-w-4xl mx-auto mt-12 p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
            <p className="text-center text-gray-600 text-lg font-medium">
              Add your testimonial video URL in{" "}
              <code className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">
                src/data/testimonials.ts
              </code>
            </p>
          </div>
        )}
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

