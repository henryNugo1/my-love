import { useEffect, useRef, useState } from "react";
import { cloudinaryVideoPoster } from "../lib/cloudinary";

type ViewportVideoProps = {
  src: string;
  className: string;
};

export function ViewportVideo({ src, className }: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "150px 0px", threshold: 0.15 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={shouldLoad ? cloudinaryVideoPoster(src) : undefined}
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
}
