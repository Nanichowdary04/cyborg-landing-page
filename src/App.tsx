import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTechnology } from './components/AboutTechnology';
import { CyberneticCapabilities } from './components/CyberneticCapabilities';
import { EngineeringResearch } from './components/EngineeringResearch';
import { TelemetrySection } from './components/TelemetrySection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { TelemetryModal } from './components/TelemetryModal';

export const App: React.FC = () => {
  const [specsModalOpen, setSpecsModalOpen] = useState(false);

  const handleContactClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F8FAFC] selection:bg-[#FF4800] selection:text-black font-sans relative overflow-x-hidden">
      {/* Subtle Noise Texture for Physical Film Realism */}
      <div className="fixed inset-0 pointer-events-none z-40 noise-bg opacity-30" />

      {/* Navigation Header */}
      <Navbar
        onContactClick={handleContactClick}
        onOpenSpecs={() => setSpecsModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onContactClick={handleContactClick}
          onScrollDown={handleScrollDown}
        />

        {/* 1. Substrate Architecture */}
        <AboutTechnology />

        {/* 2. Cybernetic Capabilities */}
        <CyberneticCapabilities />

        {/* 3. Engineering & 4. Research */}
        <EngineeringResearch onOpenSpecsModal={() => setSpecsModalOpen(true)} />

        {/* 5. Telemetry Concepts */}
        <TelemetrySection />

        {/* 6. Contact / Commission Desk */}
        <ContactCTA />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Full Telemetry Spec Drawer / Modal */}
      <TelemetryModal
        isOpen={specsModalOpen}
        onClose={() => setSpecsModalOpen(false)}
      />
    </div>
  );
};

export default App;
