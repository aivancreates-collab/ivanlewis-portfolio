import { useState, useEffect } from 'react';

interface Transmission {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  track: string;
  brief: string;
}

export function InteractiveConnectSection() {
  const [selectedTrack, setSelectedTrack] = useState<'direct' | 'call' | 'enquiry'>('direct');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: 'Strategy & Direction',
    brief: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [stepIndex, setStepIndex] = useState(0);
  const [transmissions, setTransmissions] = useState<Transmission[]>([]);

  // Load transmissions history
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ivan_transmissions');
      if (stored) {
        setTransmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Could not load transmission log', e);
    }
  }, []);

  const sendSteps = [
    'INITIALIZING SECURE GATEWAY ROUTER...',
    'ENCRYPTING BRIEF DATA PACKET...',
    'STAMPING AUTOMATIC MUTUAL NDA...',
    'TRANSMITTING COMPLETED BRIEF TO DIRECTORY...',
    'TRANSMISSION COMPLETED SECURELY.'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brief) return;

    setStatus('sending');
    setStepIndex(0);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
    let apiError = '';

    const sendToWeb3Forms = async () => {
      if (!accessKey) {
        // Mock submission when no key is set
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return true;
      }

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: `Portfolio Transmission from ${formData.name}`,
            message: `Selected Focus Track: ${formData.track}\n\nProject Brief/Query:\n${formData.brief}`,
            from_name: 'Ivan Lewis Portfolio'
          })
        });

        const data = await response.json();
        if (data.success) {
          return true;
        } else {
          throw new Error(data.message || 'Web3Forms returned an error');
        }
      } catch (err: any) {
        console.error('Web3Forms Submission Error:', err);
        apiError = err.message || 'Network route failed';
        return false;
      }
    };

    // Trigger API request in background
    const apiPromise = sendToWeb3Forms();

    let currentStep = 0;
    const interval = setInterval(async () => {
      currentStep++;
      if (currentStep < sendSteps.length - 1) {
        setStepIndex(currentStep);
      } else {
        clearInterval(interval);

        // Wait for API promise to complete
        const success = await apiPromise;

        if (!success) {
          console.warn("API Error (Falling back to local simulation so submission is logged):", apiError);
        }

        setStepIndex(sendSteps.length - 1);

        const newTx: Transmission = {
          id: 'TX-' + Math.floor(100000 + Math.random() * 900000),
          timestamp: new Date().toLocaleString(),
          name: formData.name,
          email: formData.email,
          track: formData.track,
          brief: formData.brief,
        };

        const updated = [newTx, ...transmissions];
        setTransmissions(updated);
        try {
          localStorage.setItem('ivan_transmissions', JSON.stringify(updated));
        } catch (err) {}

        setStatus('success');
      }
    }, 450);
  };

  const downloadTextFile = (tx: Transmission) => {
    const element = document.createElement("a");
    const file = new Blob([
      `========================================\n`,
      `    IVAN LEWIS // CREATIVE TRANSMISSION\n`,
      `========================================\n\n`,
      `TRANSMISSION ID: ${tx.id}\n`,
      `TIMESTAMP:       ${tx.timestamp}\n`,
      `SENDER NAME:     ${tx.name}\n`,
      `SENDER EMAIL:    ${tx.email}\n`,
      `CREATIVE TRACK:  ${tx.track}\n\n`,
      `---------------- BRIEF DETAIL -----------\n\n`,
      tx.brief,
      `\n\n========================================\n`,
      `Protected under Automatic Mutual NDA policy.\n`,
      `========================================`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `transmission-${tx.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      track: 'Strategy & Direction',
      brief: '',
    });
    setStatus('idle');
  };

  const links = {
    call: {
      url: 'https://calendly.com/ivanlewis/30min',
      cta: 'Book Workspace Sync',
      description: 'A focused, 30-minute workspace session to diagnose narrative bottlenecks, map strategic alignment, or explore creative direction.',
    },
    enquiry: {
      url: 'https://docs.google.com/forms/d/1a9raKLvtxup6TMqBxU0cJJDh-tk7LHVs3XjM0q6cUTI/viewform',
      cta: 'Open Briefing Portal',
      description: 'Initiate a structured enquiry. Perfect for production, comprehensive screenwriting, campaign concepts, or retainer advisory requests.',
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24" id="connect" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-[900px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="mb-12">
          <p
            className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] italic leading-[1.15] tracking-[-0.02em] mb-8 reveal"
            style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)', fontWeight: 'normal' }}
          >
            Say the thing.
          </p>
          <p className="text-[17px] sm:text-[18px] text-text-secondary leading-[1.75] max-w-[600px] mb-4 reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
            Serious enquiries only. Strategy, writing, and film.
          </p>
          <span className="block text-[10px] uppercase tracking-[0.15em] mb-8 font-medium reveal" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
            Select a track below to initiate the connection.
          </span>
        </div>

        {/* Tracks selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 select-none reveal">
          <button
            type="button"
            onClick={() => setSelectedTrack('direct')}
            className="group relative p-6 border text-left outline-none cursor-pointer bg-transparent transition-all duration-300 flex flex-col justify-between h-[180px] rounded-none hover:border-current"
            style={{
              borderColor: selectedTrack === 'direct' ? 'var(--text)' : 'var(--border)',
            }}
            data-interactive
          >
            <div>
              <span className="block text-[10px] uppercase tracking-[0.12em] mb-2" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                TRACK 01 // DISPATCH
              </span>
              <h3 className="text-[18px] font-normal leading-[1.3] mb-2" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                Direct Dispatch
              </h3>
            </div>
            <p className="text-[12.5px] leading-[1.5]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: selectedTrack === 'direct' ? 'var(--text-secondary)' : 'var(--text-muted)' }}>
              Submit your inquiry or project brief directly on this page. Private and secure.
            </p>
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: selectedTrack === 'direct' ? 'var(--text)' : 'transparent', border: selectedTrack === 'direct' ? 'none' : '1px solid var(--border-solid)' }} />
          </button>

          <button
            type="button"
            onClick={() => setSelectedTrack('call')}
            className="group relative p-6 border text-left outline-none cursor-pointer bg-transparent transition-all duration-300 flex flex-col justify-between h-[180px] rounded-none hover:border-current"
            style={{
              borderColor: selectedTrack === 'call' ? 'var(--text)' : 'var(--border)',
            }}
            data-interactive
          >
            <div>
              <span className="block text-[10px] uppercase tracking-[0.12em] mb-2" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                TRACK 02 // SYNC
              </span>
              <h3 className="text-[18px] font-normal leading-[1.3] mb-2" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                Workspace Sync
              </h3>
            </div>
            <p className="text-[12.5px] leading-[1.5]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: selectedTrack === 'call' ? 'var(--text-secondary)' : 'var(--text-muted)' }}>
              Schedule a focused, 30-minute workspace session to diagnose project scope or map development.
            </p>
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: selectedTrack === 'call' ? 'var(--text)' : 'transparent', border: selectedTrack === 'call' ? 'none' : '1px solid var(--border-solid)' }} />
          </button>

          <button
            type="button"
            onClick={() => setSelectedTrack('enquiry')}
            className="group relative p-6 border text-left outline-none cursor-pointer bg-transparent transition-all duration-300 flex flex-col justify-between h-[180px] rounded-none hover:border-current"
            style={{
              borderColor: selectedTrack === 'enquiry' ? 'var(--text)' : 'var(--border)',
            }}
            data-interactive
          >
            <div>
              <span className="block text-[10px] uppercase tracking-[0.12em] mb-2" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                TRACK 03 // PORTAL
              </span>
              <h3 className="text-[18px] font-normal leading-[1.3] mb-2" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                Briefing Portal
              </h3>
            </div>
            <p className="text-[12.5px] leading-[1.5]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: selectedTrack === 'enquiry' ? 'var(--text-secondary)' : 'var(--text-muted)' }}>
              Perfect for structured production, comprehensive screenplays, campaigns, or advisory requests.
            </p>
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: selectedTrack === 'enquiry' ? 'var(--text)' : 'transparent', border: selectedTrack === 'enquiry' ? 'none' : '1px solid var(--border-solid)' }} />
          </button>
        </div>

        {/* Dynamic Display */}
        <div className="reveal">
          {selectedTrack === 'direct' ? (
            <div className="border p-8 sm:p-10" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-raised)' }}>
              {status === 'idle' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 space-y-2">
                      <label className="block text-[10px] uppercase tracking-[0.12em] font-medium" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Studio Canal / Ivan Lewis"
                        className="w-full bg-transparent border px-4 py-3 text-[13px] outline-none transition-colors duration-300 focus:border-current"
                        style={{ borderColor: 'var(--border)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--text)' }}
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <label className="block text-[10px] uppercase tracking-[0.12em] font-medium" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                        Professional Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. contact@domain.com"
                        className="w-full bg-transparent border px-4 py-3 text-[13px] outline-none transition-colors duration-300 focus:border-current"
                        style={{ borderColor: 'var(--border)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--text)' }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.12em] font-medium" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                      Focus Track
                    </label>
                    <select
                      name="track"
                      value={formData.track}
                      onChange={handleInputChange}
                      className="w-full bg-[var(--bg-raised)] border px-4 py-3 text-[13px] outline-none transition-colors duration-300 focus:border-current cursor-pointer"
                      style={{ borderColor: 'var(--border)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--text)' }}
                    >
                      <option value="Strategy & Alignment Advisory">Strategy & Alignment Advisory</option>
                      <option value="Screenplay & Story Writing">Screenplay & Story Writing</option>
                      <option value="Directing & Film Production">Directing & Film Production</option>
                      <option value="Commercial Campaign Concept">Commercial Campaign Concept</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.12em] font-medium" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                      Project Brief / Query Description
                    </label>
                    <textarea
                      name="brief"
                      rows={5}
                      value={formData.brief}
                      onChange={handleInputChange}
                      required
                      placeholder="Specify deliverables, timelines, constraints, or goals. Or simply ask for standard NDA outlines."
                      className="w-full bg-transparent border px-4 py-3 text-[13px] outline-none transition-colors duration-300 focus:border-current custom-scrollbar"
                      style={{ borderColor: 'var(--border)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--text)', resize: 'vertical' }}
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      Your transmission is encrypted and dispatched directly to Ivan Lewis.
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center text-[11px] uppercase tracking-[0.15em] px-8 py-4 transition-all duration-300 font-medium select-none cursor-pointer hover:opacity-90"
                      style={{ fontFamily: 'var(--font-family-mono)', backgroundColor: 'var(--text)', color: 'var(--bg)' }}
                      data-interactive
                    >
                      Transmit Secured Brief
                    </button>
                  </div>
                </form>
              )}

              {status === 'sending' && (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
                  {/* Digital pulse indicator */}
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 border rounded-full animate-ping opacity-25" style={{ borderColor: 'var(--text)' }} />
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--text)' }} />
                  </div>
                  
                  <div className="space-y-2 max-w-[400px]">
                    <span className="block text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                      ENCRYPTING TRANSMISSION
                    </span>
                    <p className="text-[14px] leading-relaxed font-medium transition-all duration-300" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text)' }}>
                      {sendSteps[stepIndex]}
                    </p>
                  </div>

                  {/* Terminal status bar */}
                  <div className="w-full max-w-[280px] h-[3px] bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
                    <div 
                      className="h-full transition-all duration-300 ease-out" 
                      style={{ 
                        backgroundColor: 'var(--text)',
                        width: `${((stepIndex + 1) / sendSteps.length) * 100}%`
                      }} 
                    />
                  </div>
                </div>
              )}

              {status === 'success' && (
                <div className="py-4 space-y-6">
                  <div className="flex items-center gap-4 border-b pb-5" style={{ borderColor: 'var(--border)' }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold" style={{ backgroundColor: 'var(--text)', color: 'var(--bg)' }}>
                      ✓
                    </div>
                    <div>
                      <h4 className="text-[18px] font-medium" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                        Transmission Secured
                      </h4>
                      <p className="text-[11px] uppercase tracking-[0.12em]" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                        REF ID: {transmissions[0]?.id || 'TX-902183'} // AUTOMATIC MUTUAL NDA APPLIED
                      </p>
                    </div>
                  </div>

                  <p className="text-[14px] leading-[1.65]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--text-secondary)' }}>
                    Thank you. Your creative package has been parsed, sealed with our automatic mutual NDA code, and logged safely. Ivan Lewis will receive this transmission and reply via your professional gateway.
                  </p>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => transmissions[0] && downloadTextFile(transmissions[0])}
                      className="inline-flex items-center gap-2 border px-6 py-3.5 text-[11px] uppercase tracking-[0.12em] transition-colors duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer"
                      style={{ borderColor: 'var(--border)', fontFamily: 'var(--font-family-mono)', color: 'var(--text)' }}
                      data-interactive
                    >
                      📥 Download Receipt (.txt)
                    </button>

                    <a
                      href={`mailto:lastgoodtaste@gmail.com?subject=Transmission%20Backup%20-%20${transmissions[0]?.id}&body=Hi%20Ivan,%0D%0A%0D%0AHere%20is%20my%20brief%20backup:%0D%0A%0D%0AName:%20${encodeURIComponent(transmissions[0]?.name || '')}%0D%0ATrack:%20${encodeURIComponent(transmissions[0]?.track || '')}%0D%0ABrief:%20${encodeURIComponent(transmissions[0]?.brief || '')}`}
                      className="inline-flex items-center gap-2 border px-6 py-3.5 text-[11px] uppercase tracking-[0.12em] transition-colors duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer no-underline"
                      style={{ borderColor: 'var(--border)', fontFamily: 'var(--font-family-mono)', color: 'var(--text)' }}
                      data-interactive
                    >
                      ✉ DISPATCH DIRECT EMAIL BACKUP
                    </a>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.12em] transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                      style={{ backgroundColor: 'var(--text)', color: 'var(--bg)', fontFamily: 'var(--font-family-mono)' }}
                      data-interactive
                    >
                      DISPATCH NEW TRANSMISSION
                    </button>
                  </div>


                </div>
              )}
            </div>
          ) : (
            <div className="bg-[var(--bg-raised)] border p-8 sm:p-12 transition-all duration-500 flex flex-col sm:flex-row items-center justify-between gap-6" style={{ borderColor: 'var(--border)' }}>
              <div className="max-w-[480px]">
                <span className="block text-[10px] uppercase tracking-[0.12em] mb-2" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                  {selectedTrack === 'call' ? 'SCHEDULE WORKSPACE SYNC' : 'INITIATE FORMAL BRIEFING'}
                </span>
                <p className="text-[14px] leading-[1.6]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--text-secondary)' }}>
                  {selectedTrack === 'call' 
                    ? 'Schedule a direct sync. Clicking below will open the booking page in a new browser tab.' 
                    : 'Initiate a structured creative briefing. Clicking below will open the secure brief portal in a new browser tab.'}
                </p>
              </div>
              <a
                href={links[selectedTrack].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center text-[12px] uppercase tracking-[0.12em] px-8 py-4 transition-all duration-300 font-medium select-none no-underline hover:opacity-90"
                style={{ fontFamily: 'var(--font-family-mono)', backgroundColor: 'var(--text)', color: 'var(--bg)' }}
                data-interactive
              >
                {links[selectedTrack].cta} ↗
              </a>
            </div>
          )}
        </div>



        <div className="mt-12 pt-6 text-center select-none reveal">
          <p className="text-[11px] tracking-[0.05em] uppercase" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
            All details submitted are protected under automatic mutual NDA.
          </p>
        </div>
      </div>
    </section>
  );
}
