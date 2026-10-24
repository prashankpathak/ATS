import React, { useState, useEffect } from 'react';
import {
  COMMONLY_BOOKED_CITIES,
  TRUCK_TYPES,
  CARGO_TYPES,
  ATS_CONTACT,
  RouteHub,
} from '../data/logisticsData';
import { Calculator, Truck, Send, PhoneCall, RefreshCw, CheckCircle2 } from 'lucide-react';

interface FreightEstimatorProps {
  initialDestination?: RouteHub | null;
}

export const FreightEstimator: React.FC<FreightEstimatorProps> = ({ initialDestination }) => {
  const [origin, setOrigin] = useState<string>('Katni (Hub HQ)');
  const [destination, setDestination] = useState<string>('Delhi NCR');
  const [customDestination, setCustomDestination] = useState<string>('');
  const [selectedTruckId, setSelectedTruckId] = useState<string>(TRUCK_TYPES[1].id);
  const [cargoType, setCargoType] = useState<string>(CARGO_TYPES[0]);
  const [cargoWeightTons, setCargoWeightTons] = useState<number>(24);
  const [selectedPhone, setSelectedPhone] = useState<string>(ATS_CONTACT.phones[0].number);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (initialDestination) {
      const match = COMMONLY_BOOKED_CITIES.find(
        (c) =>
          c.city.toLowerCase().includes(initialDestination.id) ||
          initialDestination.name.toLowerCase().includes(c.city.toLowerCase())
      );
      if (match) {
        setDestination(match.city);
        setCustomDestination('');
      } else {
        setDestination('Other');
        setCustomDestination(initialDestination.name);
      }
    }
  }, [initialDestination]);

  const getCalculatedDistance = (): number => {
    const origObj = COMMONLY_BOOKED_CITIES.find((c) => c.city === origin);
    const destObj = COMMONLY_BOOKED_CITIES.find((c) => c.city === destination);

    if (destination === 'Other') {
      return 850;
    }

    if (!origObj || !destObj) return 750;

    if (origObj.city === 'Katni (Hub HQ)') {
      return destObj.kmFromKatni;
    }
    if (destObj.city === 'Katni (Hub HQ)') {
      return origObj.kmFromKatni;
    }

    const d1 = origObj.kmFromKatni;
    const d2 = destObj.kmFromKatni;
    return Math.round(Math.abs(d1 - d2) * 0.7 + (d1 + d2) * 0.35);
  };

  const distanceKm = getCalculatedDistance();
  const selectedTruck = TRUCK_TYPES.find((t) => t.id === selectedTruckId) || TRUCK_TYPES[0];

  const estimatedHours = Math.round(distanceKm / 42) + 2;
  const estimatedDays = (estimatedHours / 24).toFixed(1);

  const rawCost = Math.max(selectedTruck.minFare, distanceKm * selectedTruck.baseRatePerKm);
  const minCost = Math.round(rawCost * 0.95);
  const maxCost = Math.round(rawCost * 1.08);

  const formattedMinCost = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(minCost);

  const formattedMaxCost = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(maxCost);

  const finalDestinationName = destination === 'Other' && customDestination ? customDestination : destination;

  const quoteSummaryText = `*FREIGHT QUOTATION INQUIRY - ATS LOGISTICS*
----------------------------------------
*Origin:* ${origin}
*Destination:* ${finalDestinationName}
*Highway Distance:* ~${distanceKm} KM
*Vehicle Requested:* ${selectedTruck.label}
*Cargo Type:* ${cargoType}
*Payload:* ${cargoWeightTons} Metric Tons
*Estimated Transit:* ~${estimatedHours} Hours (~${estimatedDays} Days)
*Indicative Base Freight:* ${formattedMinCost} - ${formattedMaxCost}

*Proprietor Incharge:* Ashima Pathak
*ATS Central Depot:* Kailwara Kala, Maihar Road, Katni - 483501 (MP)
Please confirm vehicle availability and final spot tariff.`;

  const handleWhatsAppBooking = () => {
    const encoded = encodeURIComponent(quoteSummaryText);
    window.open(`https://wa.me/91${selectedPhone}?text=${encoded}`, '_blank');
  };

  const handleCopyEstimate = () => {
    navigator.clipboard.writeText(quoteSummaryText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-[#141518] to-zinc-950 border border-amber-500/25 rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-zinc-800/80 pb-5">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Executive Freight & Transit Estimation Engine</span>
          </div>
          <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">
            Highway Freight & Transit Calculator
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Calculate accurate road distances, transit hours, and budget ranges from Katni Central Hub or major interstate terminals.
          </p>
        </div>

        {/* Dispatch Phone selector */}
        <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 p-1.5 rounded-lg text-xs">
          <span className="text-zinc-400 font-mono">Dispatch Line:</span>
          <select
            value={selectedPhone}
            onChange={(e) => setSelectedPhone(e.target.value)}
            className="bg-zinc-900 text-amber-400 font-mono font-semibold border-none focus:ring-1 focus:ring-amber-500 rounded px-2 py-1 cursor-pointer"
          >
            {ATS_CONTACT.phones.map((p) => (
              <option key={p.number} value={p.number}>
                {p.formatted} {p.isPrimary ? '(Ashima Pathak)' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Controls */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Origin Terminal
              </label>
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
              >
                {COMMONLY_BOOKED_CITIES.map((c) => (
                  <option key={c.city} value={c.city}>
                    {c.city} ({c.state})
                  </option>
                ))}
              </select>
              <span className="text-[11px] text-zinc-500 mt-1 block">
                Primary Depot at Kailwara Kala, Katni
              </span>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Destination Hub
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
              >
                {COMMONLY_BOOKED_CITIES.filter((c) => c.city !== origin).map((c) => (
                  <option key={c.city} value={c.city}>
                    {c.city} ({c.state})
                  </option>
                ))}
                <option value="Other">Other Custom Destination...</option>
              </select>

              {destination === 'Other' && (
                <input
                  type="text"
                  placeholder="Enter custom city/plant name..."
                  value={customDestination}
                  onChange={(e) => setCustomDestination(e.target.value)}
                  className="mt-2 w-full bg-zinc-950 border border-amber-500/50 rounded-lg px-3 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400"
                />
              )}
            </div>
          </div>

          {/* Truck Fleet Selector */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Multi-Axle Fleet Classification
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TRUCK_TYPES.map((truck) => {
                const isSelected = selectedTruckId === truck.id;
                return (
                  <button
                    key={truck.id}
                    type="button"
                    onClick={() => setSelectedTruckId(truck.id)}
                    className={`flex items-start gap-2.5 p-2.5 text-left rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-400 text-white shadow-sm'
                        : 'bg-zinc-950/70 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                    }`}
                  >
                    <Truck
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isSelected ? 'text-amber-400' : 'text-zinc-600'
                      }`}
                    />
                    <div>
                      <div className="text-xs font-semibold">{truck.label}</div>
                      <div className="text-[11px] font-mono text-zinc-500">
                        Base: ₹{truck.baseRatePerKm}/km | Min: ₹{truck.minFare.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cargo Classification & Payload */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Cargo Classification
              </label>
              <select
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
              >
                {CARGO_TYPES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-zinc-300">
                  Approx. Payload (Metric Tons)
                </label>
                <span className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                  {cargoWeightTons} MT
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={cargoWeightTons}
                onChange={(e) => setCargoWeightTons(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                <span>5 MT</span>
                <span>20 MT</span>
                <span>30 MT</span>
                <span>40 MT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Estimation Output Card */}
        <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Route Calculation
              </span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                ALL INDIA PERMIT VERIFIED
              </span>
            </div>

            <div className="mb-4">
              <div className="text-xs text-zinc-500 mb-0.5">Route Plan</div>
              <div className="text-base font-bold text-white font-display">
                {origin} ➔ {finalDestinationName}
              </div>
            </div>

            {/* Metric Readout Columns */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                <div className="text-[11px] text-zinc-500 font-mono">Distance</div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">
                  {distanceKm}{' '}
                  <span className="text-xs font-normal text-zinc-500">KM</span>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                <div className="text-[11px] text-zinc-500 font-mono">Transit Time</div>
                <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                  ~{estimatedHours}{' '}
                  <span className="text-xs font-normal text-zinc-500">HRS</span>
                </div>
              </div>
            </div>

            {/* Indicative Tariff Box */}
            <div className="bg-gradient-to-r from-amber-500/15 to-amber-600/5 border border-amber-500/30 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between text-xs text-amber-300 font-medium mb-1">
                <span>Indicative Baseline Freight Range:</span>
                <span className="text-[11px] font-mono text-amber-400 font-bold">Spot Tariff</span>
              </div>
              <div className="text-2xl lg:text-3xl font-mono font-extrabold text-amber-400 tabular-nums">
                {formattedMinCost} - {formattedMaxCost}
              </div>
              <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
                Estimate includes driver bhatta, normal highway tolls, and direct door delivery. Final rate tailored to loading point access and diesel spot index.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-zinc-400 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>GST E-Way Bill & Bilty Consignment Note provided</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>GPS fleet tracking & direct driver phone coordination</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-3 border-t border-zinc-800">
            <button
              onClick={handleWhatsAppBooking}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm rounded-lg transition-colors shadow-lg shadow-amber-950/50"
            >
              <Send className="w-4 h-4" />
              <span>Export & Book via WhatsApp</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopyEstimate}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium rounded-lg border border-zinc-800 transition-colors"
              >
                {isCopied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copy Quotation</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${selectedPhone}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-zinc-900 hover:bg-zinc-800 text-amber-400 hover:text-amber-300 text-xs font-medium rounded-lg border border-zinc-800 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Dispatch Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
