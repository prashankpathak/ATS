import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { HighwayMarquee } from './components/HighwayMarquee';
import { InteractiveIndiaMap } from './components/InteractiveIndiaMap';
import { FleetShowcase } from './components/FleetShowcase';
import { FreightEstimator } from './components/FreightEstimator';
import { ContactDesk } from './components/ContactDesk';
import { AIStudioPromptSection } from './components/AIStudioPromptSection';
import { Footer } from './components/Footer';
import { RouteHub } from './data/logisticsData';

export default function App() {
  const [selectedHubForEstimator, setSelectedHubForEstimator] = useState<RouteHub | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectRouteFromMap = (hub: RouteHub) => {
    setSelectedHubForEstimator(hub);
    const estimatorEl = document.getElementById('freight-estimator');
    if (estimatorEl) {
      estimatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-zinc-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* 3-Zone Sticky Top Bar with Indian Tricolor Line */}
      <TopBar onNavigate={handleNavigate} />

      <main className="flex-1">
        {/* Hero Section */}
        <div id="hero">
          <HeroSection
            onExploreMap={() => handleNavigate('route-map')}
            onOpenEstimator={() => handleNavigate('freight-estimator')}
            onContactDesk={() => handleNavigate('contact-desk')}
          />
        </div>

        {/* Continuous Moving Highway Truck Marquee Banner across India */}
        <HighwayMarquee />

        {/* Main Content Sections with Balanced Whitespace Rhythm */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
          {/* Section 1: Interactive India Route Map & Katni Central Nerve Junction */}
          <section id="route-map" className="scroll-mt-24">
            <InteractiveIndiaMap onSelectRouteForEstimator={handleSelectRouteFromMap} />
          </section>

          {/* Section 2: Fleet & Authentic Photo Showcase */}
          <section id="fleet-showcase" className="scroll-mt-24">
            <FleetShowcase />
          </section>

          {/* Section 3: Instant Freight Estimator & Calculator */}
          <section id="freight-estimator" className="scroll-mt-24">
            <FreightEstimator initialDestination={selectedHubForEstimator} />
          </section>

          {/* Section 4: Direct Proprietor & Contact Desk */}
          <section id="contact-desk" className="scroll-mt-24">
            <ContactDesk />
          </section>

          {/* Section 5: Dedicated Google AI Studio Prompt Section */}
          <section id="ai-prompt" className="scroll-mt-24">
            <AIStudioPromptSection />
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
