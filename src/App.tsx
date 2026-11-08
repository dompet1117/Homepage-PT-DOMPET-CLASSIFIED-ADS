import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisionMission } from './components/VisionMission';
import { ProductShowcase } from './components/ProductShowcase';
import { DeploymentsDirectory } from './components/DeploymentsDirectory';
import { ProductivityCalculator } from './components/ProductivityCalculator';
import { CompanyProfile } from './components/CompanyProfile';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Language } from './data/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [directoryFilter, setDirectoryFilter] = useState<string>('all');

  const handleSelectProductForDeployments = (productKey: string) => {
    setDirectoryFilter(productKey);
    const element = document.getElementById('deployments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Global Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero & Value Proposition */}
        <Hero currentLang={currentLang} />

        {/* 2. Vision & Mission (Prompt Key Requirement 2) */}
        <VisionMission currentLang={currentLang} />

        {/* 3. Product Suites (Spotlight AI, Ad-Net AI, Minutes AI, Mode AI) */}
        <ProductShowcase
          currentLang={currentLang}
          onSelectProductForDeployments={handleSelectProductForDeployments}
        />

        {/* 4. Complete Directory of all 38 Live Deployments & Mirrors (Prompt Key Requirement 3) */}
        <DeploymentsDirectory
          currentLang={currentLang}
          selectedProductFilter={directoryFilter}
          onFilterChange={setDirectoryFilter}
        />

        {/* 5. Interactive Productivity & ROI Calculator */}
        <ProductivityCalculator currentLang={currentLang} />

        {/* 6. Company Profile & Legal Registration (PT DOMPET CLASSIFIED ADS, dompetclassifiedads.com) */}
        <CompanyProfile currentLang={currentLang} />

        {/* 7. Business Inquiries, Enterprise Trials & Partnership Form */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Corporate Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}
