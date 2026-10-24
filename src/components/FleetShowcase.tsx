import React, { useState } from 'react';
import { FLEET_ENGINEERING_SPECS, ATS_CONTACT, FleetEngineeringSpec } from '../data/logisticsData';
import { Truck, ShieldCheck, Check, Layers, Cpu, Compass, MessageSquare, PhoneCall, Gauge, Scale } from 'lucide-react';

export const FleetShowcase: React.FC = () => {
  const [activeSpecId, setActiveSpecId] = useState<string>(FLEET_ENGINEERING_SPECS[0].id);

  const selectedSpec =
    FLEET_ENGINEERING_SPECS.find((s) => s.id === activeSpecId) || FLEET_ENGINEERING_SPECS[0];

  const handleInquireVehicle = (spec: FleetEngineeringSpec) => {
    const text = encodeURIComponent(
      `*FREIGHT BOOKING INQUIRY - ATS TRANSPORT KATNI*\n` +
      `----------------------------------------\n` +
      `*Proprietor Incharge:* Ashima Pathak\n` +
      `*Fleet Unit:* ${spec.title} (${spec.modelCode})\n` +
      `*Category:* ${spec.category}\n` +
      `*GVW Rating:* ${spec.grossVehicleWeight}\n` +
      `*Payload Required:* ${spec.netPayloadCapacity}\n` +
      `*Chassis / Deck:* ${spec.deckDimensions}\n` +
      `Please provide instant spot tariff and vehicle availability from Katni Hub.`
    );
    window.open(`https://wa.me/91${ATS_CONTACT.phones[0].number}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-500/20 pb-5">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Heavy-Duty Engineering & Multi-Axle Fleet Architecture
          </div>
          <h3 className="text-2xl lg:text-3xl font-display font-extrabold text-white tracking-tight">
            High-Tonnage Fleet Specifications & Fleet Matrix
          </h3>
          <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
            Detailed engineering parameters extracted from ATS&apos;s active multi-axle carrier operations. Built for severe industrial loads with All-India National Goods Permits.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-amber-500/20 text-xs font-mono text-amber-300 self-start md:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>All-India Commercial Fleet Clearance</span>
        </div>
      </div>

      {/* Fleet Category Navigation Tabs (Luxury Segmented Selector) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {FLEET_ENGINEERING_SPECS.map((spec) => {
          const isActive = activeSpecId === spec.id;
          return (
            <button
              key={spec.id}
              onClick={() => setActiveSpecId(spec.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/10 border-amber-400 text-white font-semibold shadow-md shadow-amber-950/40'
                  : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              <Truck className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-zinc-500'}`} />
              <span>{spec.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Vehicle Architectural Showcase Detail */}
      <div className="bg-gradient-to-br from-zinc-900 via-[#151619] to-zinc-950 border border-amber-500/25 rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Schematic Silhouette & Key Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 border-b border-zinc-800/80 pb-3 mb-4">
                <span>CONFIG: {selectedSpec.modelCode}</span>
                <span className="text-amber-400 font-bold">ALL-INDIA PERMIT</span>
              </div>

              {/* Technical Schematic Graphic (Pure SVG vector styling, no raw photo) */}
              <div className="w-full py-6 flex flex-col items-center justify-center border border-dashed border-zinc-800 rounded-lg bg-zinc-900/40">
                <div className="w-full px-4">
                  <svg viewBox="0 0 400 160" className="w-full h-auto select-none">
                    {/* Road base line */}
                    <line x1="20" y1="140" x2="380" y2="140" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />

                    {/* Cabin Front (Tata Heavy Truck Silhouette) */}
                    <path
                      d="M 60,135 L 60,85 L 75,55 L 115,55 L 125,85 L 125,135 Z"
                      fill="#1c1917"
                      stroke="#d4af37"
                      strokeWidth="2"
                    />
                    {/* Cabin windshield */}
                    <path d="M 77,58 L 113,58 L 120,83 L 72,83 Z" fill="#292524" stroke="#78716c" strokeWidth="1" />
                    {/* Front Grille */}
                    <rect x="65" y="95" width="20" height="25" fill="#0c0a09" stroke="#d4af37" strokeWidth="1" />
                    <line x1="68" y1="102" x2="82" y2="102" stroke="#d4af37" strokeWidth="1" />
                    <line x1="68" y1="108" x2="82" y2="108" stroke="#d4af37" strokeWidth="1" />
                    <line x1="68" y1="114" x2="82" y2="114" stroke="#d4af37" strokeWidth="1" />

                    {/* Cargo Deck / Container Body */}
                    <rect
                      x="130"
                      y="40"
                      width="235"
                      height="95"
                      rx="4"
                      fill="#18181b"
                      stroke="#d4af37"
                      strokeWidth="2"
                    />

                    {/* Internal reinforcement struts */}
                    <line x1="180" y1="40" x2="180" y2="135" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="240" y1="40" x2="240" y2="135" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="300" y1="40" x2="300" y2="135" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Fleet Emblem on cargo side */}
                    <text x="247" y="90" fill="#d4af37" fontSize="16" fontWeight="bold" textAnchor="middle" className="font-display tracking-widest">
                      ATS KATNI
                    </text>
                    <text x="247" y="106" fill="#a1a1aa" fontSize="8" textAnchor="middle" className="font-mono tracking-wider">
                      ASHIMA TRANSPORT SERVICE
                    </text>

                    {/* Wheels & Tandem Axles */}
                    {/* Front steer wheels */}
                    <circle cx="85" cy="138" r="14" fill="#09090b" stroke="#d4af37" strokeWidth="2" />
                    <circle cx="85" cy="138" r="6" fill="#27272a" />

                    {/* Rear Tandem Axles */}
                    <circle cx="260" cy="138" r="14" fill="#09090b" stroke="#d4af37" strokeWidth="2" />
                    <circle cx="260" cy="138" r="6" fill="#27272a" />

                    <circle cx="295" cy="138" r="14" fill="#09090b" stroke="#d4af37" strokeWidth="2" />
                    <circle cx="295" cy="138" r="6" fill="#27272a" />

                    <circle cx="330" cy="138" r="14" fill="#09090b" stroke="#d4af37" strokeWidth="2" />
                    <circle cx="330" cy="138" r="6" fill="#27272a" />
                  </svg>
                </div>

                <div className="text-[11px] font-mono text-zinc-400 mt-2 flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Schematic: {selectedSpec.wheelConfiguration}</span>
                </div>
              </div>

              {/* Payload & GVW Highlights */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase flex items-center gap-1">
                    <Scale className="w-3 h-3 text-amber-400" />
                    <span>GVW Rating</span>
                  </div>
                  <div className="text-lg font-bold font-mono text-white mt-0.5">
                    {selectedSpec.grossVehicleWeight.split('(')[0]}
                  </div>
                </div>

                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase flex items-center gap-1">
                    <Gauge className="w-3 h-3 text-emerald-400" />
                    <span>Net Payload</span>
                  </div>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">
                    {selectedSpec.netPayloadCapacity.split('/')[0]}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Booking CTA for this exact spec */}
            <div className="flex gap-2">
              <button
                onClick={() => handleInquireVehicle(selectedSpec)}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-lg transition-colors shadow-lg shadow-amber-950/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book This Fleet Unit via WhatsApp</span>
              </button>

              <a
                href={`tel:${ATS_CONTACT.phones[0].number}`}
                className="p-3 bg-zinc-900 hover:bg-zinc-800 text-amber-400 rounded-lg border border-amber-500/20 transition-colors"
                title="Call Desk"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Deep Engineering Specs Table */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="text-xs font-mono text-amber-400 font-semibold mb-1">
                {selectedSpec.category}
              </div>
              <h4 className="text-2xl font-bold text-white font-display">
                {selectedSpec.title}
              </h4>
              <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                {selectedSpec.bestSuitedFor}
              </p>
            </div>

            {/* Specifications Matrix Table */}
            <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950/70 text-xs">
              <div className="grid grid-cols-1 divide-y divide-zinc-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 gap-1">
                  <span className="text-zinc-500 font-mono">Gross Vehicle Weight (GVW):</span>
                  <span className="text-white font-mono font-bold">{selectedSpec.grossVehicleWeight}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 gap-1">
                  <span className="text-zinc-500 font-mono">Net Payload Allowance:</span>
                  <span className="text-emerald-400 font-mono font-bold">{selectedSpec.netPayloadCapacity}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 gap-1">
                  <span className="text-zinc-500 font-mono">Axle & Wheel Geometry:</span>
                  <span className="text-zinc-200 font-mono">{selectedSpec.wheelConfiguration}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 gap-1">
                  <span className="text-zinc-500 font-mono">Deck / Cargo Dimensions:</span>
                  <span className="text-zinc-200">{selectedSpec.deckDimensions}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 gap-1">
                  <span className="text-zinc-500 font-mono">Powerplant & Torque:</span>
                  <span className="text-zinc-200 font-mono">{selectedSpec.engineSpecs}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 gap-1">
                  <span className="text-zinc-500 font-mono">Chassis & Suspension:</span>
                  <span className="text-zinc-200">{selectedSpec.suspensionAndChassis}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 gap-1">
                  <span className="text-zinc-500 font-mono">Weatherproofing & Rigging:</span>
                  <span className="text-amber-400/90">{selectedSpec.weatherproofingSystem}</span>
                </div>
              </div>
            </div>

            {/* Operational Features Checklist */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Operational Compliance & Safety Capabilities:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSpec.keyTechnicalFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-start gap-2 text-xs text-zinc-300"
                  >
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
