import React, { useState } from 'react';
import { PRODUCTION_AI_STUDIO_PROMPT } from '../data/logisticsData';
import { Copy, Check, Terminal, Cpu } from 'lucide-react';
import { copyToClipboard } from '../utils/safeHelpers';

export const AIStudioPromptSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'full' | 'quick'>('full');

  const quickPrompt = `You are the operations dispatcher for ATS (Ashima transport service), Katni MP. Proprietor: Ashima Pathak (+91 9009949723). Kailwara Kala, Maihar Road. Provide rapid truck freight estimates, multi-axle selection (10W/12W/14W), transit duration, and instant formatted WhatsApp booking quotes for Pan-India destinations.`;

  const promptToCopy = activeTab === 'full' ? PRODUCTION_AI_STUDIO_PROMPT : quickPrompt;

  const handleCopy = async () => {
    await copyToClipboard(promptToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-[#141518] to-zinc-950 border border-amber-500/25 rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-zinc-800/80 pb-5">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>Developer & AI Architecture Hub</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-display font-extrabold text-white tracking-tight">
            Production-Grade Google AI Studio Prompt
          </h3>
          <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
            Pre-configured system prompt template ready for immediate deployment into Gemini 2.5 / 1.5 Pro models inside Google AI Studio. Embedded with verified Katni logistics parameters.
          </p>
        </div>

        {/* Tab switch & Copy CTA */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs">
            <button
              onClick={() => setActiveTab('full')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === 'full'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Full Master Prompt
            </button>
            <button
              onClick={() => setActiveTab('quick')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === 'quick'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Quick Micro Prompt
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-amber-400 hover:text-amber-300 text-xs font-semibold rounded-lg border border-amber-500/30 transition-colors shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Prompt Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>One-Click Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Prompt Display Box */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-zinc-300">
              google_ai_studio_system_prompt.md
            </span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
            <span>Model: Gemini 2.5 Flash / Pro</span>
            <span>·</span>
            <span>UTF-8</span>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-4 lg:p-6 overflow-x-auto">
          <pre className="font-mono text-xs text-zinc-300 leading-relaxed whitespace-pre-wrap select-all">
            {promptToCopy}
          </pre>
        </div>
      </div>

      {/* Breakdown Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-xs text-zinc-400">
        <div className="bg-zinc-950/70 p-3.5 rounded-lg border border-zinc-800/80">
          <div className="font-semibold text-zinc-200 mb-1 flex items-center gap-1.5 font-display">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            1. Verified Entity Grounding
          </div>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Locked to Ashima Pathak, Kailwara Kala depot, and registered Katni contact channels.
          </p>
        </div>

        <div className="bg-zinc-950/70 p-3.5 rounded-lg border border-zinc-800/80">
          <div className="font-semibold text-zinc-200 mb-1 flex items-center gap-1.5 font-display">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            2. Strategic Road Nexus
          </div>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Leverages Katni’s central crossroads along NH-30, NH-43, and NH-44 for optimal routing.
          </p>
        </div>

        <div className="bg-zinc-950/70 p-3.5 rounded-lg border border-zinc-800/80">
          <div className="font-semibold text-zinc-200 mb-1 flex items-center gap-1.5 font-display">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            3. Instant Action Exporter
          </div>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Formats outputs directly into structured WhatsApp consignments ready for customer execution.
          </p>
        </div>
      </div>
    </div>
  );
};
