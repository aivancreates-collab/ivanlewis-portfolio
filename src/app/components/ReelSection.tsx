import { useEffect, useRef, useState } from 'react';
import reelVideo1 from '../../imports/reel_1.mp4';
import reelVideo2 from '../../imports/reel_2.mp4';

export function ReelSection() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    [videoRef1.current, videoRef2.current].forEach((video) => {
      if (video) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    });
  }, [shouldLoad]);

  return (
    <section ref={sectionRef} className="px-6 md:px-16 py-16 md:py-24" style={{ backgroundColor: 'var(--dark-bg)' }} id="reel">
      <div className="max-w-[1150px] mx-auto">
        {/* First Reel Block - 20% smaller size (max-w-[920px]) */}
        <div className="reveal mb-16 md:mb-20 max-w-[920px] mx-auto">
          <div
            className="relative w-full aspect-video overflow-hidden border p-1"
            style={{ backgroundColor: 'var(--dark-surface)', borderColor: 'var(--border)' }}
          >
            <video
              ref={videoRef1}
              autoPlay
              loop
              muted
              playsInline
              src={shouldLoad ? reelVideo1 : undefined}
              preload={shouldLoad ? "auto" : "none"}
              className="w-full h-full object-cover"
              style={{
                filter: 'saturate(0.55)',
              }}
            />
            {/* Minimal overlay title */}
            <div className="absolute bottom-6 left-6 z-10 text-white select-none">
              <p
                className="text-[20px] sm:text-[26px] font-normal leading-[1.2] tracking-[-0.01em] mb-1"
                style={{
                  fontFamily: 'var(--font-family-serif)',
                  color: 'var(--dark-text)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                }}
              >
                Twenty years. One edit.
              </p>
              <span
                className="text-[11px] font-light tracking-[0.12em]"
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  color: 'var(--dark-text-secondary)',
                  textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                }}
              >
                assembling · 2026
              </span>
            </div>
          </div>
        </div>

        {/* Second Reel Block - Same size (max-w-[920px]) */}
        <div className="reveal max-w-[920px] mx-auto">
          <div
            className="relative w-full aspect-video overflow-hidden border p-1"
            style={{ backgroundColor: 'var(--dark-surface)', borderColor: 'var(--border)' }}
          >
            <video
              ref={videoRef2}
              autoPlay
              loop
              muted
              playsInline
              src={shouldLoad ? reelVideo2 : undefined}
              preload={shouldLoad ? "auto" : "none"}
              className="w-full h-full object-cover"
              style={{
                filter: 'saturate(0.55)',
              }}
            />
            {/* Minimal overlay title */}
            <div className="absolute bottom-6 left-6 z-10 text-white select-none">
              <p
                className="text-[20px] sm:text-[26px] font-normal leading-[1.2] tracking-[-0.01em] mb-1"
                style={{
                  fontFamily: 'var(--font-family-serif)',
                  color: 'var(--dark-text)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                }}
              >
                Without a crew.
              </p>
              <span
                className="text-[11px] font-light tracking-[0.12em]"
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  color: 'var(--dark-text-secondary)',
                  textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                }}
              >
                assembling · 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
