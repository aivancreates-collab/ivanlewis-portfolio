import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import reelVideo1 from '../../imports/reel_1.mp4';
import reelVideo2 from '../../imports/reel_2.mp4';

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
      className="px-5 sm:px-10 lg:px-16 py-12 md:py-16" 
      style={{ backgroundColor: 'var(--dark-bg)' }} 
      id="reel"
    >
      <div className="max-w-[1000px] mx-auto space-y-12 md:space-y-16">
        {/* Reel Block 1 */}
        <div className="reveal max-w-[920px] mx-auto">
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

            {/* Existing cinematic text info layout (Do not obscure faces or essential visual details) */}
            <div className="absolute bottom-5 left-5 z-10 text-white select-none pointer-events-none">
              <p
                className="text-[18px] sm:text-[22px] md:text-[24px] font-normal leading-[1.2] tracking-tight mb-0.5"
                style={{
                  fontFamily: 'var(--font-family-serif)',
                  color: 'var(--dark-text)',
                  textShadow: '0 2px 6px rgba(0,0,0,0.5)',
                }}
              >
                Twenty years. One edit.
              </p>
              <span
                className="text-[12px] sm:text-[13px] font-normal tracking-[0.1em]"
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  color: 'var(--dark-text-secondary)',
                  textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                }}
              >
                assembling · 2026
              </span>
            </div>
          </div>
        </div>

        {/* Reel Block 2 */}
        <div className="reveal max-w-[920px] mx-auto">
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

            {/* Existing cinematic text info layout */}
            <div className="absolute bottom-5 left-5 z-10 text-white select-none pointer-events-none">
              <p
                className="text-[18px] sm:text-[22px] md:text-[24px] font-normal leading-[1.2] tracking-tight mb-0.5"
                style={{
                  fontFamily: 'var(--font-family-serif)',
                  color: 'var(--dark-text)',
                  textShadow: '0 2px 6px rgba(0,0,0,0.5)',
                }}
              >
                Without a crew.
              </p>
              <span
                className="text-[12px] sm:text-[13px] font-normal tracking-[0.1em]"
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  color: 'var(--dark-text-secondary)',
                  textShadow: '0 1px 3px rgba(0,0,0,0.5)',
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
