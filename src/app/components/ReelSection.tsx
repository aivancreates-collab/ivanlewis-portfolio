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
  const [isPlayingYouTube1, setIsPlayingYouTube1] = useState(false);
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
      <div className="max-w-[1240px] mx-auto space-y-10 md:space-y-12">
        {/* Section Header */}
        <div className="reveal text-center max-w-[850px] mx-auto">
          <h2
            className="text-[17px] sm:text-[22px] md:text-[26px] leading-[1.2] font-light tracking-[0.14em] text-white/95 uppercase text-balance"
            style={{ fontFamily: 'var(--font-family-serif)', fontWeight: 300 }}
          >
            Commercial Work
          </h2>
        </div>

        {/* Focused Single Commercial Showreel Container (balanced, restrained width) */}
        <div className="max-w-[780px] mx-auto">
          {/* Reel Block 1 */}
          <div className="reveal w-full">
            <div
              className="relative w-full aspect-video overflow-hidden border p-1 rounded-sm group/player"
              style={{ backgroundColor: 'var(--dark-surface)', borderColor: 'rgba(247, 249, 250, 0.12)' }}
            >
              {!isPlayingYouTube1 ? (
                <div
                  onClick={() => setIsPlayingYouTube1(true)}
                  className="relative w-full h-full cursor-pointer group/thumb flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={thumbnail1}
                    alt="Selected Commercial Work Showreel Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/20 transition-colors" />

                  {/* Centered Play Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlayingYouTube1(true);
                    }}
                    className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-black/75 group-hover/thumb:bg-[var(--accent-warm)] text-white group-hover/thumb:text-black rounded-full border border-white/20 group-hover/thumb:border-transparent transition-all duration-300 shadow-2xl group-hover/thumb:scale-110"
                    aria-label="Play Selected Commercial Work Showreel"
                  >
                    <Play size={24} className="ml-1 fill-current" />
                  </button>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/E39DPnxkkvQ?autoplay=1&controls=1&rel=0&modestbranding=1"
                  title="Selected Commercial Work Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0 rounded-sm"
                />
              )}
            </div>

            {/* Showreel 1 Details */}
            <div className="mt-4 sm:mt-5 px-1 space-y-1.5 text-center sm:text-left flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <h3
                  className="text-[22px] sm:text-[24px] font-normal text-white leading-[1.3] tracking-tight"
                  style={{ fontFamily: 'var(--font-family-serif)' }}
                >
                  Concept. Script. Creative Direction.
                </h3>
                <p
                  className="text-[15px] sm:text-[16px] text-white leading-[1.6] mt-1 max-w-[580px]"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  Some work that I have conceptualized, written and directed across brands, categories, platforms and audiences, using live action, CG and VFX.
                </p>
              </div>
              <span
                className="text-[13px] sm:text-[14px] uppercase font-semibold tracking-[0.2em] text-[var(--accent-warm)] shrink-0 self-start"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                LIVE ACTION · CG · VFX
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
