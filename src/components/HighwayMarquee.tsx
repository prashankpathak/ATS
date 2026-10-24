import React from 'react';
import { Navigation, Clock } from 'lucide-react';

export const HighwayMarquee: React.FC = () => {
  const marqueeItems = [
    {
      code: 'NH-30',
      route: 'Katni ➔ Raipur / Bilaspur Belt',
      distance: '310 KM',
      time: '7 Hours',
      type: 'Mineral & Steel Freight',
    },
    {
      code: 'NH-44',
      route: 'Katni ➔ Delhi NCR Industrial Belt',
      distance: '785 KM',
      time: '18 Hours',
      type: 'FTL Express Carrier',
    },
    {
      code: 'NH-30/EXPR',
      route: 'Katni ➔ Mumbai / JNPT Container Port',
      distance: '985 KM',
      time: '22 Hours',
      type: 'EXIM Port Cargo',
    },
    {
      code: 'NH-43/19',
      route: 'Katni ➔ Kolkata / Haldia Maritime Port',
      distance: '890 KM',
      time: '20 Hours',
      type: 'Heavy Engineering Haul',
    },
    {
      code: 'NH-44/S',
      route: 'Katni ➔ Bengaluru / Chennai Southern Zone',
      distance: '1,380 KM',
      time: '30 Hours',
      type: 'Automotive & Precision Freight',
    },
    {
      code: 'NH-27/EW',
      route: 'Katni ➔ Guwahati / North-East Arterial',
      distance: '1,210 KM',
      time: '28 Hours',
      type: 'All-Weather Container',
    },
    {
      code: 'NH-47',
      route: 'Katni ➔ Ahmedabad / Mundra Port Hub',
      distance: '940 KM',
      time: '21 Hours',
      type: 'Chemical & Ceramics Haul',
    },
  ];

  return (
    <div className="w-full bg-zinc-950 border-y border-zinc-800/80 py-3 overflow-hidden select-none relative">
      {/* Edge gradient fades for seamless infinite scroll look */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-6">
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-800 px-4 py-2 rounded-lg shrink-0 hover:border-amber-500/40 transition-colors"
          >
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs rounded">
              <Navigation className="w-3 h-3 text-amber-400" />
              <span>{item.code}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-white whitespace-nowrap">
                {item.route}
              </span>
              <span className="text-zinc-600 text-xs font-mono">|</span>
              <span className="text-xs font-mono text-amber-400 tabular-nums font-medium whitespace-nowrap">
                {item.distance}
              </span>
              <span className="text-zinc-600 text-xs font-mono">·</span>
              <span className="text-[11px] font-mono text-zinc-400 whitespace-nowrap flex items-center gap-1">
                <Clock className="w-3 h-3 text-zinc-500" />
                {item.time}
              </span>
            </div>

            <div className="text-[11px] text-zinc-400 border-l border-zinc-800 pl-3 hidden sm:inline whitespace-nowrap">
              {item.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
