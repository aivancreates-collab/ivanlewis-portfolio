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
      <div className="max-w-[1240px] mx-auto space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="reveal text-center max-w-[850px] mx-auto">
          <h2
            className="text-[26px] sm:text-[36px] md:text-[44px] leading-[1.18] font-normal tracking-[-0.01em] text-white/95 uppercase text-balance"
            style={{ fontFamily: 'var(--font-family-serif)' }}
          >
            TWO WAYS OF MAKING.<br />
            <span className="italic text-white/75">ONE POINT OF VIEW.</span>
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
            <div className="mt-5 sm:mt-6 px-1 space-y-2">
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
                className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#A0A0A0] leading-[1.6]"
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

              {/* Uploading Soon Badge Overlay */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/85 backdrop-blur-md border border-white/20 text-[11px] font-semibold tracking-[0.16em] text-[var(--accent-warm)] uppercase shadow-lg"
                  style={{ fontFamily: 'var(--font-family-mono)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-warm)] animate-pulse" />
                  Uploading soon!
                </span>
              </div>

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
                className="text-[20px] sm:text-[22px] md:text-[24px] font-normal text-white leading-[1.25] tracking-tight"
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                From idea to final frame.
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
