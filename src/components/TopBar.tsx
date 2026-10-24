import React, { useState } from 'react';
import { ATS_CONTACT } from '../data/logisticsData';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';

interface TopBarProps {
  onNavigate: (sectionId: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Katni Map', id: 'route-map' },
    { label: 'Fleet & Specs', id: 'fleet-showcase' },
    { label: 'Freight Calculator', id: 'freight-estimator' },
    { label: 'Executive Desk', id: 'contact-desk' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80">
      {/* Saffron-White-Green tricolor line reflecting Pan-India freight authority */}
      <div className="w-full flex h-1 shadow-sm">
        <div className="flex-1 bg-[#FF9933]" title="Saffron - Pan-India Freight Authority" />
        <div className="flex-1 bg-[#FFFFFF]" title="White - Commercial Integrity & Safety" />
        <div className="flex-1 bg-[#138808]" title="Green - Pan-India Growth & Logistics" />
      </div>

      {/* Main 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-display font-extrabold text-slate-950 text-base shadow-md group-hover:scale-105 transition-transform border border-amber-300/30">
              ATS
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-display font-extrabold tracking-tight text-white whitespace-nowrap">
                Ashima Transport Service
              </span>
              <span className="text-[10px] font-mono text-amber-400 -mt-0.5 tracking-wider uppercase">
                Katni Central Logistics Hub · MP
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${ATS_CONTACT.phones[0].number}`}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 9009949723</span>
          </a>
          <a
            href={`https://wa.me/91${ATS_CONTACT.phones[0].number}?text=${encodeURIComponent(
              'Hello Ashima Pathak ji, I need a freight quotation from ATS Transport Katni.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${ATS_CONTACT.phones[0].number}`}
            className="p-2 text-amber-400 bg-zinc-900 border border-zinc-800 rounded-lg"
            title="Call"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left py-2 px-3 text-sm text-zinc-300 hover:text-amber-400 hover:bg-zinc-900 rounded-lg transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex gap-2">
            <a
              href={`tel:${ATS_CONTACT.phones[0].number}`}
              className="flex-1 py-2 text-center text-xs font-bold text-slate-950 bg-amber-400 rounded-lg"
            >
              Call 9009949723
            </a>
            <a
              href={`https://wa.me/91${ATS_CONTACT.phones[0].number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center text-xs font-bold text-white bg-emerald-600 rounded-lg flex items-center justify-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
