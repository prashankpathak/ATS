import React, { useState } from 'react';
import { ROUTE_HUBS, KATNI_COORDS, ATS_CONTACT, RouteHub } from '../data/logisticsData';
import { Navigation, Clock, Truck, ArrowRight, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';
import { openExternalLink } from '../utils/safeHelpers';

interface InteractiveIndiaMapProps {
  onSelectRouteForEstimator?: (hub: RouteHub) => void;
}

export const InteractiveIndiaMap: React.FC<InteractiveIndiaMapProps> = ({
  onSelectRouteForEstimator,
}) => {
  const [selectedHub, setSelectedHub] = useState<RouteHub>(ROUTE_HUBS[0]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'ports' | 'industrial' | 'express'>('all');
  const [hoveredHub, setHoveredHub] = useState<RouteHub | null>(null);

  const displayedHubs = ROUTE_HUBS.filter((hub) => {
    if (activeFilter === 'ports') {
      return ['mumbai', 'kolkata', 'chennai', 'ahmedabad'].includes(hub.id);
    }
    if (activeFilter === 'industrial') {
      return ['delhi', 'raipur', 'nagpur', 'kanpur', 'hyderabad'].includes(hub.id);
    }
    if (activeFilter === 'express') {
      return ['delhi', 'mumbai', 'bengaluru', 'guwahati'].includes(hub.id);
    }
    return true;
  });

  const activeHub = hoveredHub || selectedHub;

  const handleWhatsAppRouteInquiry = (hub: RouteHub) => {
    const text = encodeURIComponent(
      `*ATS TRANSPORT KATNI - ROUTE INQUIRY*\n` +
      `------------------------------------\n` +
      `*Origin:* Katni Central Hub (Kailwara Kala, MP)\n` +
      `*Destination:* ${hub.name} (${hub.state})\n` +
      `*Distance:* ~${hub.distanceKm} KM\n` +
      `*Highway Corridor:* ${hub.majorHighway}\n` +
      `*Estimated Transit:* ${hub.transitDays}\n\n` +
      `Please provide truck dispatch availability and quote for 14W/12W multi-axle carrier.`
    );
    openExternalLink(`https://wa.me/91${ATS_CONTACT.phones[0].number}?text=${text}`);
  };

  return (
    <div className="relative bg-gradient-to-br from-zinc-900 via-[#141518] to-zinc-950 border border-amber-500/25 rounded-2xl p-6 lg:p-8 shadow-2xl overflow-hidden">
      {/* Background ambient luxury gold illumination */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 relative z-10 border-b border-zinc-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-amber-400 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            Central Geographic Crossroads of India
          </div>
          <h3 className="text-2xl lg:text-3xl font-display font-extrabold text-white tracking-tight">
            Katni Nerve Junction ➔ Pan-India Corridors
          </h3>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl">
            Headquartered in Katni (Madhya Pradesh), ATS commands rapid 18 to 36-hour multi-axle freight connectivity to all industrial and port zones.
          </p>
        </div>

        {/* Filter controls (Gold & Carbon) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-950/90 border border-zinc-800 rounded-lg">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            All Corridors ({ROUTE_HUBS.length})
          </button>
          <button
            onClick={() => setActiveFilter('ports')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeFilter === 'ports'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Maritime Ports
          </button>
          <button
            onClick={() => setActiveFilter('industrial')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeFilter === 'industrial'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Industrial Belts
          </button>
          <button
            onClick={() => setActiveFilter('express')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeFilter === 'express'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Express Metros
          </button>
        </div>
      </div>

      {/* Main Grid: Map canvas on left, interactive telemetry card on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* Interactive Map Visualizer */}
        <div className="lg:col-span-7 bg-zinc-950/90 border border-zinc-800 rounded-xl p-4 relative flex flex-col justify-between overflow-hidden shadow-inner min-h-[480px]">
          <div className="absolute top-3 left-4 text-xs font-mono text-zinc-400 flex items-center gap-3">
            <span className="text-amber-400 font-bold">KATNI HQ (23.83° N, 80.40° E)</span>
            <span className="text-zinc-700">·</span>
            <span className="text-emerald-400">HIGHWAYS ACTIVE</span>
          </div>

          {/* SVG Map Container */}
          <div className="w-full h-full my-auto flex items-center justify-center pt-6 pb-2">
            <svg
              viewBox="100 120 850 820"
              className="w-full max-h-[500px] select-none"
              style={{ filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.9))' }}
            >
              <defs>
                {/* Radial glow for Katni */}
                <radialGradient id="katniGoldGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.95" />
                  <stop offset="40%" stopColor="#d4af37" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </radialGradient>

                <filter id="goldNeon" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Stylized Geometric India Outline (Clean Carbon Surface) */}
              <polygon
                points="
                  350,150 420,165 470,200 480,240 540,250 600,270 650,290 700,310 
                  780,290 850,280 910,310 930,360 880,410 820,410 760,430 720,480 
                  680,550 630,620 570,720 510,840 470,920 440,880 390,800 340,700 
                  260,630 220,530 190,460 210,390 260,360 300,330 310,250 330,190
                "
                fill="#121316"
                stroke="#27272a"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-90"
              />

              {/* Major Highway Corridors Grid */}
              <path
                d="M 380,260 L 740,490 L 480,880 L 260,620 Z"
                fill="none"
                stroke="#27272a"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <path
                d="M 380,260 L 480,880"
                fill="none"
                stroke="#27272a"
                strokeWidth="1"
                strokeDasharray="6 6"
              />

              {/* Connecting Lines from Katni to each Hub */}
              {displayedHubs.map((hub) => {
                const isSelected = activeHub.id === hub.id;
                return (
                  <g key={`line-${hub.id}`}>
                    <line
                      x1={KATNI_COORDS.x}
                      y1={KATNI_COORDS.y}
                      x2={hub.svgCoords.x}
                      y2={hub.svgCoords.y}
                      stroke={isSelected ? '#d4af37' : '#3f3f46'}
                      strokeWidth={isSelected ? '2.5' : '1'}
                      strokeOpacity={isSelected ? '0.9' : '0.4'}
                      strokeDasharray={isSelected ? 'none' : '2 4'}
                    />

                    {/* Animated Gold Pulse along active line */}
                    {isSelected && (
                      <line
                        x1={KATNI_COORDS.x}
                        y1={KATNI_COORDS.y}
                        x2={hub.svgCoords.x}
                        y2={hub.svgCoords.y}
                        stroke="#f59e0b"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray="14 20"
                        filter="url(#goldNeon)"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="140;0"
                          dur="2.2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    )}
                  </g>
                );
              })}

              {/* Katni Central Hub Landmark Node */}
              <g className="cursor-pointer" onClick={() => setSelectedHub(ROUTE_HUBS[0])}>
                <circle cx={KATNI_COORDS.x} cy={KATNI_COORDS.y} r="28" fill="url(#katniGoldGlow)">
                  <animate
                    attributeName="r"
                    values="10;34;10"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.9;0.1;0.9"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={KATNI_COORDS.x}
                  cy={KATNI_COORDS.y}
                  r="7.5"
                  fill="#f59e0b"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  filter="url(#goldNeon)"
                />
                <text
                  x={KATNI_COORDS.x}
                  y={KATNI_COORDS.y - 14}
                  fill="#fbbf24"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                  className="font-mono tracking-wider drop-shadow"
                >
                  KATNI HUB
                </text>
                <text
                  x={KATNI_COORDS.x}
                  y={KATNI_COORDS.y + 18}
                  fill="#d4af37"
                  fontSize="9.5"
                  textAnchor="middle"
                  className="font-mono"
                >
                  Central Nexus (MP)
                </text>
              </g>

              {/* Destination Hub Nodes */}
              {displayedHubs.map((hub) => {
                const isSelected = activeHub.id === hub.id;
                return (
                  <g
                    key={`node-${hub.id}`}
                    className="cursor-pointer transition-all duration-150"
                    onMouseEnter={() => setHoveredHub(hub)}
                    onMouseLeave={() => setHoveredHub(null)}
                    onClick={() => setSelectedHub(hub)}
                  >
                    <circle cx={hub.svgCoords.x} cy={hub.svgCoords.y} r="18" fill="transparent" />

                    {isSelected && (
                      <circle
                        cx={hub.svgCoords.x}
                        cy={hub.svgCoords.y}
                        r="12"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        className="animate-ping opacity-60"
                      />
                    )}

                    <circle
                      cx={hub.svgCoords.x}
                      cy={hub.svgCoords.y}
                      r={isSelected ? '6.5' : '4.5'}
                      fill={isSelected ? '#f59e0b' : '#71717a'}
                      stroke="#09090b"
                      strokeWidth="2"
                    />

                    <text
                      x={hub.svgCoords.x + (hub.svgCoords.x > KATNI_COORDS.x ? 10 : -10)}
                      y={hub.svgCoords.y + 4}
                      fill={isSelected ? '#ffffff' : '#a1a1aa'}
                      fontSize={isSelected ? '11' : '9.5'}
                      fontWeight={isSelected ? '700' : '500'}
                      textAnchor={hub.svgCoords.x > KATNI_COORDS.x ? 'start' : 'end'}
                      className="transition-colors pointer-events-none drop-shadow"
                    >
                      {hub.name.split('/')[0].trim()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Quick legend footer */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 font-mono">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                Katni Central Operations Base
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 inline-block" />
                Selected Destination Node
              </span>
            </div>
            <div className="text-amber-400 font-medium">
              Click any terminal node to load metrics
            </div>
          </div>
        </div>

        {/* Corridor Telemetry Detail Card (Carbon & Gold) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950/90 border border-zinc-800 rounded-xl p-5 lg:p-6">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
                {activeHub.highlightTag}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono">
                {activeHub.region} Zone
              </span>
            </div>

            <h4 className="text-xl font-display font-bold text-white mb-1">
              Katni ➔ {activeHub.name}
            </h4>
            <p className="text-xs text-zinc-400 mb-5">
              Direct highway route connecting ATS Maihar Road hub with major trade and manufacturing clusters.
            </p>

            {/* Metric readout grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Road Distance</span>
                </div>
                <div className="text-2xl font-mono font-bold text-white tabular-nums">
                  {activeHub.distanceKm}{' '}
                  <span className="text-xs font-normal text-zinc-400">KM</span>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Transit Duration</span>
                </div>
                <div className="text-2xl font-mono font-bold text-amber-400 tabular-nums">
                  ~{activeHub.transitHours}{' '}
                  <span className="text-xs font-normal text-zinc-400">HRS</span>
                </div>
              </div>
            </div>

            {/* Highway and Commodities list */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-xs">
                <Truck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 font-medium">Primary Highway Corridor:</span>
                  <div className="text-zinc-200 font-mono font-semibold">{activeHub.majorHighway}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 font-medium">Primary Freight Commodities:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {activeHub.keyCommodities.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 font-medium">Origin Terminal:</span>
                  <div className="text-zinc-300">
                    ATS Registered Depot, Kailwara Kala, Maihar Road, Katni - 483501 (MP)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2 pt-4 border-t border-zinc-800">
            <button
              onClick={() => handleWhatsAppRouteInquiry(activeHub)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-lg transition-colors shadow-lg shadow-amber-950/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire This Route via WhatsApp</span>
            </button>

            {onSelectRouteForEstimator && (
              <button
                onClick={() => onSelectRouteForEstimator(activeHub)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs rounded-lg transition-colors border border-zinc-800"
              >
                <span>Calculate Precise Freight in Estimator</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
