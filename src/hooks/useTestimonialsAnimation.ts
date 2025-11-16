import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { SCROLL_TRIGGER_CONFIGS, EASING, STAGGER } from "../utils/animationConfigs";

export const useTestimonialsAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const title = section.querySelector(".testimonials-title");
    const items = section.querySelectorAll(".testimonial-item");

    if (!title || items.length === 0) return;

    const titleSplit = new SplitText(title, { type: "words" });

    gsap.set(titleSplit.words, { opacity: 0, y: 100 });
    gsap.set(items, { opacity: 0, y: 50 });

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        ...SCROLL_TRIGGER_CONFIGS.entrance,
      },
    })
      .to(titleSplit.words, {
        opacity: 1,
        y: 0,
        stagger: STAGGER.tight,
        ease: EASING.smooth,
      })
      .to(
        items,
        { opacity: 1, y: 0, stagger: STAGGER.loose, ease: EASING.strong },
        "-=0.3"
      );

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        ...SCROLL_TRIGGER_CONFIGS.exit,
      },
    })
      .to(titleSplit.words, { opacity: 0, y: -50, ease: EASING.bounce })
      .to(items, { opacity: 0, y: -50, ease: EASING.bounce }, 0);

    return () => {
      titleSplit.revert();
    };
  }, [sectionRef]);

  return sectionRef;
};

