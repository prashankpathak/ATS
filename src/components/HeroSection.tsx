import React, { useState, useRef, useEffect } from 'react';
import { ATS_CONTACT } from '../data/logisticsData';
import {
  ShieldCheck,
  ArrowRight,
  Navigation,
  Phone,
  MessageSquare,
  Copy,
  Check,
  MapPin,
  Mail,
  Award,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { copyToClipboard } from '../utils/safeHelpers';

interface HeroSectionProps {
  onExploreMap: () => void;
  onOpenEstimator: () => void;
  onContactDesk: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMap,
  onOpenEstimator,
  onContactDesk,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false); // Default unmuted as requested!
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [copiedCard, setCopiedCard] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const videoSource = '/assets/aistudio/download_20261025_112112_0000_acf2b960.mp4';

  // Handle immediate autoplay with audio on
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set audio on by default as requested
    video.muted = false;
    video.volume = 1.0;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
          setAutoplayBlocked(false);
        })
        .catch((err) => {
          console.warn('Browser autoplay policy required muted start, will auto-unmute on first user click:', err);
          // Fallback to muted playback so video starts rolling immediately
          video.muted = true;
          video.play()
            .then(() => {
              setIsPlaying(true);
              setIsMuted(true);
              setAutoplayBlocked(true);
            })
            .catch(() => {});
        });
    }

    // Auto-unmute on first click/touch anywhere on the page
    const handleFirstInteraction = () => {
      if (video) {
        video.muted = false;
        video.volume = 1.0;
        setIsMuted(false);
        setAutoplayBlocked(false);
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.volume = 1.0;
        setAutoplayBlocked(false);
      }
    }
  };

  const handleCopyCardDetails = async () => {
    const cardText = `${ATS_CONTACT.company}\n${ATS_CONTACT.tagline}\nProprietor: ${ATS_CONTACT.proprietor}\nPhones: ${ATS_CONTACT.phones.map((p) => p.number).join(', ')}\nEmails: ${ATS_CONTACT.emails.join(', ')}\nAddress: ${ATS_CONTACT.address.line1}, ${ATS_CONTACT.address.road}, ${ATS_CONTACT.address.city} - ${ATS_CONTACT.address.pincode} (M.P.)`;
    await copyToClipboard(cardText);
    setCopiedCard(true);
    setTimeout(() => setCopiedCard(false), 2500);
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0a0c] border-b border-amber-950/40">
      {/* Ambient background gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* 1. CINEMATIC FRONT-PAGE VIDEO SHOWCASE (100% Unobstructed Video with External Controls) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
        <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-amber-500/35 gold-glow bg-zinc-950 shadow-2xl flex flex-col">
          {/* Top Panel (Cleanly Above Video) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-3.5 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-amber-500/20">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase">
                  ATS (Ashima Transport Service)
                </span>
                <span className="hidden sm:inline text-amber-400 font-mono text-xs">·</span>
                <span className="text-amber-400 font-mono text-[11px]">
                  Live Multi-Axle Fleet On Highway · Katni Central Hub (MP)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              {!isMuted ? (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono">
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 bg-amber-400 animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
                    <span className="w-0.5 bg-amber-400 animate-[pulse_0.4s_ease-in-out_infinite] h-3" />
                    <span className="w-0.5 bg-amber-400 animate-[pulse_0.7s_ease-in-out_infinite] h-1.5" />
                  </div>
                  <span className="ml-1 font-bold">Highway Audio Active</span>
                </div>
              ) : (
                <button
                  onClick={toggleSound}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-mono transition-transform hover:scale-105 cursor-pointer shadow-md"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Turn Sound ON 🔊</span>
                </button>
              )}
            </div>
          </div>

          {/* Pure, Unobstructed Video View (Zero Overlapping Elements) */}
          <div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-black overflow-hidden flex items-center justify-center">
            <video
              ref={videoRef}
              src={videoSource}
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Panel (Cleanly Below Video) */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-t border-amber-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left Playback Controls */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={togglePlay}
                className="flex items-center gap-2 py-2 px-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/30 transition-colors cursor-pointer text-xs font-mono font-bold"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-amber-400" />
                    <span>Play</span>
                  </>
                )}
              </button>

              <button
                onClick={toggleSound}
                className={`flex items-center gap-2 py-2 px-3.5 rounded-xl border transition-all cursor-pointer text-xs font-mono font-bold ${
                  !isMuted
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300 hover:bg-amber-500/30 shadow-md shadow-amber-950/40'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                }`}
                title={isMuted ? 'Turn Sound ON' : 'Mute Sound'}
              >
                {!isMuted ? (
                  <>
                    <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
                    <span>Audio ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4 text-zinc-400" />
                    <span>Unmute Audio</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-colors cursor-pointer text-xs font-mono"
                title="Enlarge Video / Theater Mode"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Fullscreen</span>
              </button>
            </div>

            {/* Right Dispatch & Direct Booking Actions */}
            <div className="flex items-center gap-2.5">
              <a
                href={`https://wa.me/91${ATS_CONTACT.phones[0].number}?text=${encodeURIComponent(
                  'Hello Ashima Pathak ji, I watched the ATS fleet highway video. I want to book a heavy truck.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-lg shadow-emerald-950/50"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book via WhatsApp</span>
              </a>

              <a
                href={`tel:${ATS_CONTACT.phones[0].number}`}
                className="flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-amber-950/40"
              >
                <Phone className="w-4 h-4" />
                <span>Call 9009949723</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ENTERPRISE DETAILS & CREDENTIALS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Direct Logistics Overview */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-amber-300/90">
              <span className="px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Katni Central Nexus · Madhya Pradesh
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                All India National Goods Permit (NL)
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
              Pan-India Heavy Haulage & Multi-Axle Fleet Authority from{' '}
              <span className="gold-gradient-text drop-shadow-sm">
                India&apos;s Central Heart
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Operating from the central crossroads along Maihar Road in Katni, <strong className="text-white font-semibold">ATS (Ashima transport service)</strong> commands heavy-duty 14-wheeler haulers, 12-wheeler carriers, and sealed 32-ft express containers with guaranteed 18 to 36-hour transit across all 28 states and major industrial ports.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenEstimator}
                className="flex items-center gap-2 py-3 px-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm rounded-lg transition-all shadow-lg shadow-amber-950/60 cursor-pointer"
              >
                <span>Instant Freight Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreMap}
                className="flex items-center gap-2 py-3 px-5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm rounded-lg border border-amber-500/20 transition-colors cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Interactive Katni Map</span>
              </button>

              <button
                onClick={onContactDesk}
                className="flex items-center gap-2 py-3 px-4 bg-zinc-900 hover:bg-zinc-800 text-amber-400 font-semibold text-sm rounded-lg border border-amber-500/30 transition-colors cursor-pointer"
              >
                <span>Executive Desk</span>
              </button>
            </div>
          </div>

          {/* Right Column: Executive Credentials Digital Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-zinc-900 via-[#161619] to-zinc-950 border border-amber-500/30 p-6 lg:p-7 shadow-2xl gold-glow overflow-hidden">
              <div className="flex items-start justify-between gap-4 mb-4 border-b border-amber-500/20 pb-4">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-amber-400 mb-0.5">
                    Executive Freight Credentials
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-white tracking-tight">
                    {ATS_CONTACT.company}
                  </h3>
                  <div className="text-xs text-amber-300/80 font-mono tracking-wider italic mt-0.5">
                    &ldquo;{ATS_CONTACT.tagline}&rdquo;
                  </div>
                </div>

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-display font-black text-xl shadow-lg border border-amber-300/40">
                  ATS
                </div>
              </div>

              <div className="space-y-3.5 mb-5">
                <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    Proprietor / Incharge
                  </div>
                  <div className="text-base font-bold text-white font-display flex items-center justify-between">
                    <span>{ATS_CONTACT.proprietor}</span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      Verified Owner
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {ATS_CONTACT.phones.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:${phone.number}`}
                      className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-zinc-900 border border-amber-500/20 hover:border-amber-400 text-zinc-200 hover:text-white transition-colors text-center"
                    >
                      <span className="text-[10px] text-zinc-500 font-mono">
                        {phone.isPrimary ? 'Primary Desk' : 'Line'}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-400">
                        {phone.number}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3 text-xs">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">Registered Central Depot:</div>
                      <div className="text-zinc-200 font-medium">
                        {ATS_CONTACT.address.line1}, {ATS_CONTACT.address.road}, {ATS_CONTACT.address.city} - {ATS_CONTACT.address.pincode} (M.P.)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono truncate">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{ATS_CONTACT.emails.join(' · ')}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center gap-2">
                <button
                  onClick={handleCopyCardDetails}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-zinc-900 hover:bg-zinc-800 text-amber-400 text-xs font-mono font-medium rounded-lg border border-amber-500/20 transition-colors cursor-pointer"
                >
                  {copiedCard ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Details Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Card Details</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onContactDesk}
                  className="py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition-colors font-mono cursor-pointer"
                >
                  Full Desk ➔
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Operational KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-zinc-800/80">
          <div className="bg-zinc-900/60 border border-amber-500/10 p-4 rounded-xl">
            <div className="text-xs text-zinc-500 font-mono mb-1">Geographic Central Heart</div>
            <div className="text-2xl font-bold font-mono text-white">Katni Nexus</div>
            <div className="text-[11px] text-amber-400 mt-0.5">NH-30, NH-43 & NH-44 Hub</div>
          </div>

          <div className="bg-zinc-900/60 border border-amber-500/10 p-4 rounded-xl">
            <div className="text-xs text-zinc-500 font-mono mb-1">Heavy Fleet Payload</div>
            <div className="text-2xl font-bold font-mono text-white">20 - 35 MT</div>
            <div className="text-[11px] text-zinc-300 mt-0.5">Tata 14W / 12W Multi-Axle</div>
          </div>

          <div className="bg-zinc-900/60 border border-amber-500/10 p-4 rounded-xl">
            <div className="text-xs text-zinc-500 font-mono mb-1">Express Transit Windows</div>
            <div className="text-2xl font-bold font-mono text-white">18 - 36 Hrs</div>
            <div className="text-[11px] text-zinc-300 mt-0.5">Pan-India Industrial Terminals</div>
          </div>

          <div className="bg-zinc-900/60 border border-amber-500/10 p-4 rounded-xl">
            <div className="text-xs text-zinc-500 font-mono mb-1">Direct Proprietor</div>
            <div className="text-xl font-bold font-display text-white">Ashima Pathak</div>
            <div className="text-[11px] text-amber-400 mt-0.5 font-mono">100% On-Road Dispatch Desk</div>
          </div>
        </div>
      </div>

      {/* Theater Mode Enlarge Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-zinc-950 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <h4 className="text-sm font-bold text-white font-display">
                  ATS (Ashima Transport Service) · Official Highway Video Showcase
                </h4>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              <video
                ref={modalVideoRef}
                src={videoSource}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
