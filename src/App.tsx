import { useEffect } from 'react';
import './lib/i18n';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Specialty } from './sections/Specialty';
import { BrusselsAdvantage } from './sections/BrusselsAdvantage';
import { Method } from './sections/Method';
import { WhatWeDontDo } from './sections/WhatWeDontDo';
import { Pricing } from './sections/Pricing';
import { Storytelling } from './sections/Storytelling';
import { WhyAsimetria } from './sections/WhyAsimetria';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Specialty />
        <BrusselsAdvantage />
        <Method />
        <WhatWeDontDo />
        <Pricing />
        <Storytelling />
        <WhyAsimetria />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
