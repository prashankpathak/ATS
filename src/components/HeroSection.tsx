import React, { useState } from 'react';
import { ATS_CONTACT } from '../data/logisticsData';
import { ShieldCheck, ArrowRight, Navigation, Phone, MessageSquare, Copy, Check, MapPin, Mail, Award } from 'lucide-react';

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
  const [copiedCard, setCopiedCard] = useState(false);

  const handleCopyCardDetails = async () => {
    const cardText = `${ATS_CONTACT.company}\n${ATS_CONTACT.tagline}\nProprietor: ${ATS_CONTACT.proprietor}\nPhones: ${ATS_CONTACT.phones.map(p => p.number).join(', ')}\nEmails: ${ATS_CONTACT.emails.join(', ')}\nAddress: ${ATS_CONTACT.address.line1}, ${ATS_CONTACT.address.road}, ${ATS_CONTACT.address.city} - ${ATS_CONTACT.address.pincode} (M.P.)`;
    await copyToClipboard(cardText);
    setCopiedCard(true);
    setTimeout(() => setCopiedCard(false), 2500);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-amber-950/40">
      {/* Ambient luxury gold backdrop lighting (No blue) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[350px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 right-10 w-[400px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Premium Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* National Authority Badge */}
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

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
              Pan-India Heavy Haulage & Multi-Axle Fleet Authority from{' '}
              <span className="gold-gradient-text drop-shadow-sm">
                India&apos;s Central Heart
              </span>
            </h1>

            {/* Value Description */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Operating from the central crossroads along Maihar Road in Katni, <strong className="text-white font-semibold">ATS (Ashima transport service)</strong> commands heavy-duty 14-wheeler haulers, 12-wheeler carriers, and sealed 32-ft express containers with guaranteed 18 to 36-hour transit across all 28 states and major industrial ports.
            </p>

            {/* Executive Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
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

              <a
                href={`https://wa.me/91${ATS_CONTACT.phones[0].number}?text=${encodeURIComponent(
                  'Hello Ashima Pathak ji, I need a heavy multi-axle freight booking quote from ATS Katni.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-4 bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-sm rounded-lg transition-colors shadow-md shadow-emerald-950/50"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Proprietor: <strong className="text-zinc-200">Ashima Pathak</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Depot: <strong className="text-zinc-200">Maihar Road, Katni</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Direct Line: <strong className="text-zinc-200 font-mono">+91 9009949723</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Ultra-Premium Executive Digital Card of ATS (Replacing raw photo) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-zinc-900 via-[#161619] to-zinc-950 border border-amber-500/30 p-6 lg:p-7 shadow-2xl gold-glow overflow-hidden">
              {/* Gold foil edge accents */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/20 to-transparent pointer-events-none" />

              {/* Card Header & Seal */}
              <div className="flex items-start justify-between gap-4 mb-5 border-b border-amber-500/20 pb-4">
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

              {/* Proprietor & Central Depot Block */}
              <div className="space-y-4 mb-6">
                <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3.5">
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

                {/* Direct Calling Channels */}
                <div>
                  <div className="text-[11px] font-mono text-amber-400/90 mb-1.5 flex items-center justify-between">
                    <span>Direct Dispatch Mobiles:</span>
                    <span className="text-[10px] text-zinc-500">One-Touch Connect</span>
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
                </div>

                {/* Registered Address */}
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

                {/* Official Emails */}
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono truncate">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{ATS_CONTACT.emails.join(' · ')}</span>
                </div>
              </div>

              {/* Action Toolbar on Card */}
              <div className="pt-3 border-t border-zinc-800 flex items-center gap-2">
                <button
                  onClick={handleCopyCardDetails}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-zinc-900 hover:bg-zinc-800 text-amber-400 text-xs font-mono font-medium rounded-lg border border-amber-500/20 transition-colors"
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
                  className="py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition-colors font-mono"
                >
                  Full Desk ➔
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Operational KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-zinc-800/80">
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
    </section>
  );
};
