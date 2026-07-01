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
    <section ref={sectionRef} className="px-6 md:px-16 py-8 md:py-16" style={{ backgroundColor: 'var(--dark-bg)' }} id="reel">
      <span
        className="block text-[13px] uppercase font-light tracking-[0.16em] reveal"
        style={{
          fontFamily: 'var(--font-family-mono)',
          fontWeight: 400,
          color: 'var(--dark-text-secondary)',
        }}
      >
        REEL
      </span>
      <p className="text-[16px] italic mt-2 mb-8 reveal" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--dark-text-secondary)' }}>
        see for yourself
      </p>

      <div
        className="relative aspect-video flex items-center justify-center reveal overflow-hidden border"
        style={{ backgroundColor: 'var(--dark-surface)', borderColor: 'var(--border)' }}
      >
        {/* Background Video */}
        <video
          ref={videoRef1}
          autoPlay
          loop
          muted
          playsInline
          src={shouldLoad ? reelVideo1 : undefined}
          preload={shouldLoad ? "auto" : "none"}
          className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-lighten"
          style={{
            filter: 'saturate(0.6) contrast(1.1) brightness(0.75)',
          }}
        />

        {/* Contrast vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80 pointer-events-none" />

        <div className="text-center z-10 relative">
          <p
            className="text-[clamp(26px,4vw,54px)] font-normal italic leading-[1.2] tracking-[-0.01em]"
            style={{
              fontFamily: 'var(--font-family-serif)',
              color: 'var(--dark-text)',
            }}
          >
            Twenty years.
            <br />
            One edit.
          </p>
          <p
            className="text-[12px] font-light tracking-[0.14em] mt-5"
            style={{
              fontFamily: 'var(--font-family-mono)',
              fontWeight: 400,
              color: 'var(--dark-text-secondary)',
            }}
          >
            assembling · 2026
          </p>
        </div>
      </div>

      <div
        className="h-[0.5px] my-12 reveal"
        style={{ backgroundColor: 'var(--border)' }}
      />

      <div className="mb-6 reveal">
        <span
          className="text-[12px] font-light tracking-[0.14em]"
          style={{
            fontFamily: 'var(--font-family-mono)',
            fontWeight: 400,
            color: 'var(--dark-text-secondary)',
          }}
        >
          written &middot; directed &middot; generated
        </span>
      </div>

      <div
        className="relative aspect-video flex items-center justify-center reveal overflow-hidden border"
        style={{ backgroundColor: 'var(--dark-surface)', borderColor: 'var(--border)' }}
      >
        {/* Background Video */}
        <video
          ref={videoRef2}
          autoPlay
          loop
          muted
          playsInline
          src={shouldLoad ? reelVideo2 : undefined}
          preload={shouldLoad ? "auto" : "none"}
          className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-lighten"
          style={{
            filter: 'saturate(0.6) contrast(1.1) brightness(0.75)',
          }}
        />

        {/* Contrast vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80 pointer-events-none" />

        <div className="text-center z-10 relative">
          <p
            className="text-[clamp(20px,3vw,38px)] font-normal italic leading-[1.2]"
            style={{
              fontFamily: 'var(--font-family-serif)',
              color: 'var(--dark-text)',
            }}
          >
            Without a crew.
          </p>
          <p
            className="text-[12px] font-light tracking-[0.14em] mt-5"
            style={{
              fontFamily: 'var(--font-family-mono)',
              fontWeight: 400,
              color: 'var(--dark-text-secondary)',
            }}
          >
            assembling · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
