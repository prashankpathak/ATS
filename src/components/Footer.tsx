import React from 'react';
import { ATS_CONTACT } from '../data/logisticsData';
import { Phone, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 text-xs">
      {/* Saffron-White-Green tricolor bottom accent */}
      <div className="w-full flex h-1">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-[#FFFFFF]" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Brand & Hub Info */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-display font-extrabold text-slate-950 text-sm border border-amber-300/40">
                ATS
              </div>
              <span className="text-base font-display font-bold text-white tracking-tight">
                Ashima Transport Service
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Pan-India heavy freight, Tata multi-axle haulers, and containerized transport operating from India’s central logistics heartland in Katni, Madhya Pradesh.
            </p>
            <div className="text-[11px] font-mono text-amber-400 pt-1">
              Proprietor: {ATS_CONTACT.proprietor} · &ldquo;{ATS_CONTACT.tagline}&rdquo;
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-xs font-mono font-semibold uppercase text-zinc-200 tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('route-map')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Interactive Katni Route Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fleet-showcase')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Heavy Fleet & Technical Specs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('freight-estimator')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Freight & Transit Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact-desk')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Executive Proprietor Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details from Visiting Card */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-mono font-semibold uppercase text-zinc-200 tracking-wider">
              Visiting Card & Registered Credentials
            </div>
            <div className="space-y-1.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {ATS_CONTACT.address.line1}, {ATS_CONTACT.address.road}, {ATS_CONTACT.address.city} - {ATS_CONTACT.address.pincode} (MP)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono text-zinc-200">{ATS_CONTACT.phones.map((p) => p.number).join(' / ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono text-[11px] text-zinc-300">{ATS_CONTACT.emails.join(' · ')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} ATS (Ashima transport service). All rights reserved. Pan-India Commercial Freight Permit.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <Shield className="w-3.5 h-3.5" />
              NL Permit Compliant
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
