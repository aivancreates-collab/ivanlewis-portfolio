import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import reelVideo1 from '../../imports/reel_1.mp4';
import reelVideo2 from '../../imports/reel_2.mp4';
import thumbnail1 from '../../imports/thumbnail S1.png';
import thumbnail2 from '../../imports/thumbnail s 2.jfif';

export function ReelSection() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying1, setIsPlaying1] = useState(true);
  const [isPlaying2, setIsPlaying2] = useState(true);
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);

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

  const togglePlay1 = () => {
    const video = videoRef1.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying1(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying1(false);
    }
  };

  const togglePlay2 = () => {
    const video = videoRef2.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying2(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying2(false);
    }
  };

  const toggleMute1 = () => {
    const video = videoRef1.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted1(video.muted);
  };

  const toggleMute2 = () => {
    const video = videoRef2.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted2(video.muted);
  };

  return (
    <section 
      ref={sectionRef} 
      className="px-5 sm:px-10 lg:px-16 py-12 md:py-20" 
      style={{ backgroundColor: 'var(--dark-bg)' }} 
      id="reel"
    >
      <div className="max-w-[1240px] mx-auto space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="reveal text-center max-w-[850px] mx-auto">
          <h2
            className="text-[26px] sm:text-[36px] md:text-[44px] leading-[1.18] font-normal tracking-[-0.01em] text-white/95 uppercase text-balance"
            style={{ fontFamily: 'var(--font-family-serif)' }}
          >
            TWO WAYS OF MAKING.<br />
            <span className="italic text-white">ONE POINT OF VIEW.</span>
          </h2>
        </div>

        {/* 2 Equal Sized Video Panels - Side-by-Side on Desktop & Tablet, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Reel Block 1 */}
          <div className="reveal w-full">
            <div
              className="relative w-full aspect-video overflow-hidden border p-1 rounded-sm group/player"
              style={{ backgroundColor: 'var(--dark-surface)', borderColor: 'rgba(247, 249, 250, 0.12)' }}
            >
              <video
                ref={videoRef1}
                autoPlay
                loop
                muted={isMuted1}
                playsInline
                poster={thumbnail1}
                src={shouldLoad ? reelVideo1 : undefined}
                preload={shouldLoad ? "auto" : "none"}
                className="w-full h-full object-cover"
                style={{
                  filter: 'saturate(0.6)',
                }}
              />
              
              {/* Custom Minimal Controls Overlay */}
              <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover/player:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
                <button
                  onClick={togglePlay1}
                  className="w-9 h-9 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-none border border-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  aria-label={isPlaying1 ? "Pause Video" : "Play Video"}
                >
                  {isPlaying1 ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                  onClick={toggleMute1}
                  className="w-9 h-9 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-none border border-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  aria-label={isMuted1 ? "Unmute Video" : "Mute Video"}
                >
                  {isMuted1 ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>
            </div>

            {/* Showreel 1 Details */}
            <div className="mt-5 sm:mt-6 px-1 space-y-2 overflow-hidden">
              <div
                className="text-[11px] sm:text-[12px] uppercase font-semibold tracking-[0.2em] text-[var(--accent-warm)]"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                SELECTED COMMERCIAL WORK
              </div>
              <h3
                className="text-[20px] sm:text-[22px] md:text-[24px] font-normal text-white leading-[1.25] tracking-tight"
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                Concept. Script. Creative Direction.
              </h3>
              <p
                className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#A0A0A0] leading-[1.6] whitespace-nowrap overflow-hidden text-ellipsis"
                style={{ fontFamily: 'var(--font-family-sans)' }}
              >
                A selection of films created across live action, CG and VFX - for different brands, categories and audiences.
              </p>
            </div>
          </div>

          {/* Reel Block 2 */}
          <div className="reveal w-full">
            <div
              className="relative w-full aspect-video overflow-hidden border p-1 rounded-sm group/player"
              style={{ backgroundColor: 'var(--dark-surface)', borderColor: 'rgba(247, 249, 250, 0.12)' }}
            >
              <video
                ref={videoRef2}
                autoPlay
                loop
                muted={isMuted2}
                playsInline
                poster={thumbnail2}
                src={shouldLoad ? reelVideo2 : undefined}
                preload={shouldLoad ? "auto" : "none"}
                className="w-full h-full object-cover"
                style={{
                  filter: 'saturate(0.6)',
                }}
              />

              {/* Custom Minimal Controls Overlay */}
              <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover/player:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
                <button
                  onClick={togglePlay2}
                  className="w-9 h-9 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-none border border-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  aria-label={isPlaying2 ? "Pause Video" : "Play Video"}
                >
                  {isPlaying2 ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                  onClick={toggleMute2}
                  className="w-9 h-9 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-none border border-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  aria-label={isMuted2 ? "Unmute Video" : "Mute Video"}
                >
                  {isMuted2 ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>
            </div>

            {/* Showreel 2 Details */}
            <div className="mt-5 sm:mt-6 px-1 space-y-2">
              <div
                className="text-[11px] sm:text-[12px] uppercase font-semibold tracking-[0.2em] text-[var(--accent-warm)]"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                GEN AI FILM
              </div>
              <h3
                className="text-[20px] sm:text-[22px] md:text-[24px] font-normal text-white leading-[1.25] tracking-tight uppercase"
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                FROM IDEA TO FINAL FRAME.
              </h3>
              <p
                className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#A0A0A0] leading-[1.6]"
                style={{ fontFamily: 'var(--font-family-sans)' }}
              >
                A commercial conceptualised, scripted, generated, directed and edited by me with generative AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
