import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
  scriptId: 'e1' | 'e2';
}

export function ScriptModal({ isOpen, onClose, scriptId }: ScriptModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark-bg/80 backdrop-blur-md transition-opacity duration-300"
        style={{ backgroundColor: 'rgba(31, 19, 10, 0.8)' }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl h-[85vh] bg-bg border shadow-2xl flex flex-col z-10 overflow-hidden transform transition-all duration-500 ease-out animate-in fade-in zoom-in-95 rounded-none"
        style={{ cursor: 'default', backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b z-20" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-raised)' }}>
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.2em] font-medium text-text-muted" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
              {scriptId === 'e1' ? 'SCREENPLAY EXCERPT // FEB 2026' : 'SCREENPLAY EXCERPT // NOV 2025'}
            </span>
            <span className="text-[16px] font-normal text-text" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
              {scriptId === 'e1' ? 'The Last Message' : 'Maati Kona Chi? (Whose Soil is It?)'}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full transition-colors relative z-30"
            style={{ color: 'var(--text-muted)', backgroundColor: 'transparent' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.backgroundColor = 'rgba(106, 68, 34, 0.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Paper Container (scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 py-10 sm:px-16 sm:py-14 custom-scrollbar selection:bg-accent/30" style={{ backgroundColor: 'var(--bg)' }}>
          {scriptId === 'e1' ? (
            <div 
              className="max-w-[650px] mx-auto text-text text-[13px] leading-[1.62] space-y-8 select-text"
              style={{ fontFamily: 'var(--font-family-mono)', whiteSpace: 'pre-wrap', color: 'var(--text)' }}
            >
              {/* Title page element */}
              <div className="text-center py-10 border-b mb-12" style={{ borderColor: 'var(--border)' }}>
                <h1 className="text-[20px] tracking-[0.12em] font-normal uppercase mb-2">THE LAST MESSAGE</h1>
                <p className="text-[11px] tracking-[0.08em] mb-8" style={{ color: 'var(--text-muted)' }}>An Original Screenplay</p>
                <p className="text-[12px] italic">Written by</p>
                <p className="text-[13px] font-semibold tracking-wider mt-1">IVAN LEWIS</p>
                <div className="mt-10 text-[9px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>
                  SWA REGISTERED // PAGES 1 — 2 / 18
                </div>
              </div>

              {/* Scene 1 */}
              <div>
                <span className="font-bold">INT. BATHROOM – DAY</span>
                <p className="mt-4">
                  Steam clouds a bathroom mirror.
                </p>
                <p className="mt-4">
                  A SHOWER runs.
                </p>
                <p className="mt-4">
                  From somewhere beyond the door — thin, tinny music bleeds in.
                </p>
                <p className="mt-4">
                  Bright. Cheerful. Then it shifts.
                </p>
                <p className="mt-4">
                  A WOMAN'S VOICE. Warm. Bedtime-soft.
                </p>
                <p className="mt-4">
                  Each line spaced with a small, practiced pause.
                </p>

                <div className="text-center px-12 sm:px-24 mt-6">
                  <span className="block font-bold uppercase">VO</span>
                  <p className="mt-2 text-left sm:text-center sm:inline-block">
                    "Solace.<br />
                    Breathe in. We count it.<br />
                    Breathe out. We keep it.<br />
                    For goodbyes that come too fast.<br />
                    For love when it gets messy.<br />
                    We find the words. You hold the rest.<br />
                    Solace — for you, with you, always."
                  </p>
                </div>

                <p className="mt-6">
                  A soft, signature chime.
                </p>
                <p className="mt-4">
                  The earlier music returns.
                </p>
                <p className="mt-4">
                  ALEX (late 30s/early 40s) shuts off the water.
                </p>
                <p className="mt-4">
                  He steps out. In a towel. Drips on tile.
                </p>
                <p className="mt-4">
                  On a counter: a small digital display — date/time — easy to miss.
                </p>
              </div>

              {/* Scene 2 */}
              <div className="pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
                <span className="font-bold">INT. BEDROOM / CLOSET – CONTINUOUS</span>
                <p className="mt-4">
                  Alex pulls open a crowded wardrobe.
                </p>
                <p className="mt-4">
                  He takes pants. Then a shirt.
                </p>
                <p className="mt-4">
                  He lifts the shirt to his face. Smells it. A pause.
                </p>
                <p className="mt-4">
                  He puts it on.
                </p>
              </div>
            </div>
          ) : (
            <div 
              className="max-w-[650px] mx-auto text-text text-[13px] leading-[1.62] space-y-8 select-text"
              style={{ fontFamily: 'var(--font-family-mono)', whiteSpace: 'pre-wrap', color: 'var(--text)' }}
            >
              {/* Title page element */}
              <div className="text-center py-10 border-b mb-12" style={{ borderColor: 'var(--border)' }}>
                <h1 className="text-[20px] tracking-[0.12em] font-normal uppercase mb-2">MAATI KONA CHI?</h1>
                <p className="text-[11px] tracking-[0.08em] mb-2" style={{ color: 'var(--text-muted)' }}>Whose Soil is It?</p>
                <p className="text-[11px] tracking-[0.08em] mb-8" style={{ color: 'var(--text-muted)' }}>An Original Marathi Short Screenplay</p>
                <p className="text-[12px] italic">Written by</p>
                <p className="text-[13px] font-semibold tracking-wider mt-1">IVAN LEWIS</p>
                <div className="mt-10 text-[9px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>
                  SWA REGISTERED // PAGES 1 — 2 / 9
                </div>
              </div>

              {/* Scene 1 */}
              <div>
                <p className="mt-4 italic">
                  FADE IN:
                </p>
                <span className="font-bold block mt-6">EXT. BUNGALOW GARDEN - MORNING</span>
                <p className="mt-4">
                  A wet glimmer of morning. The first breath of light.
                </p>
                <p className="mt-4">
                  CLOSE ON an EARTHWORM, slow and certain, burrowing into damp soil - the earth moves like it’s breathing. Grains collapse, reform, close over.
                </p>
                <p className="mt-4">
                  WIDER ...CHINNI, six, lies flat on her stomach, face inches from the ground. Her elbows are muddy; her nose wrinkles with delight.
                </p>
                <p className="mt-4">
                  She watches the worm build its home. Still.
                </p>
                <p className="mt-4">
                  This tiny kingdom is - alive, endless.
                </p>
                <p className="mt-4">
                  ANTS march in a thin brown line.
                </p>
                <p className="mt-4">
                  The earthworm folds and unfolds in the morning light.
                </p>
                <p className="mt-4">
                  A LADYBIRD inches toward warmth.
                </p>
                <p className="mt-4">
                  A drop of dew trembles on a blade, reflecting a small universe. The world hums. Tiny. Ordered. Content.
                </p>
                <p className="mt-4">
                  Then - a faint hum. Growing louder by the second.
                </p>
                <p className="mt-4">
                  The harsh sound of a LAWN MOWER tears through the quiet.
                </p>
                <p className="mt-4">
                  A mower’s wheel slashes into the frame.
                </p>
                <p className="mt-4">
                  Grass flings upward. Bits of mud rain down.
                </p>
                <p className="mt-4">
                  The roar fills everything, swallowing the calm.
                </p>
                <p className="mt-4">
                  CHINNI turned around, shouting over the noise.
                </p>

                <div className="text-center px-12 sm:px-24 mt-6">
                  <span className="block font-bold uppercase">CHINNI</span>
                  <p className="mt-2 text-left sm:text-center sm:inline-block">
                    "Ramu kaka… O - Ramu kakaaa"
                  </p>
                </div>

                <p className="mt-6">
                  RAMESH, mid-forties, wiry, methodical, pushes the mower across the far corner of the garden. The machine bucks over a lump. He steadies it, adjusts the throttle. He doesn’t hear her.
                </p>

                <div className="text-center px-12 sm:px-24 mt-6">
                  <span className="block font-bold uppercase">CHINNI (CONT'D)</span>
                  <span className="block italic text-[12px]" style={{ color: 'var(--text-secondary)' }}>(as loud as she can muster, waving too)</span>
                  <p className="mt-2 text-left sm:text-center sm:inline-block">
                    "Aaho Thamba na…aikoo yet nahi maala…"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer bar */}
        <div className="px-6 py-4 border-t text-center select-none text-[10px] tracking-[0.12em]" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-raised)', color: 'var(--text-muted)', fontFamily: 'var(--font-family-mono)' }}>
          PRESS <span className="font-semibold text-text" style={{ color: 'var(--text)' }}>ESC</span> OR CLICK OUTSIDE TO RETURN
        </div>
      </div>
    </div>
  );
}
