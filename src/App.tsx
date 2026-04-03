/**
 * App — Lenis + fond parallax + sections motion.
 */

import AdvancedMotionBackground from './components/AdvancedMotionBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/sections/ServicesSection';
import ProcessusSection from './components/sections/ProcessusSection';
import PourquoiBackyardSection from './components/sections/PourquoiBackyardSection';
import TarifsSection from './components/sections/TarifsSection';
import ContactFooterSection from './components/sections/ContactFooterSection';
import { SmoothScrollProvider } from './context/SmoothScrollContext';

export default function App() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-backyard-bg text-white relative isolate">
        <AdvancedMotionBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <ServicesSection />
            <ProcessusSection />
            <PourquoiBackyardSection />
            <TarifsSection />
            <ContactFooterSection />
          </main>
        </div>
      </div>
    </SmoothScrollProvider>
  );
}
