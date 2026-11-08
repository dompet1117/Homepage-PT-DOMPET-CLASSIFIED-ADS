import React from 'react';
import { ArrowRight, Layers, Calculator, Cpu, Sparkles, Shield, Rocket, Network, FileText, Shirt } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS.hero;

  const quickPlatformLinks = [
    { name: 'Spotlight AI Studio', href: '#products', color: 'text-blue-400', icon: Sparkles },
    { name: 'Ad-Net AI Network', href: '#products', color: 'text-emerald-400', icon: Network },
    { name: 'Minutes AI', href: '#products', color: 'text-violet-400', icon: FileText },
    { name: 'Mode AI Studio', href: '#products', color: 'text-pink-400', icon: Shirt },
  ];

  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-emerald-500/15 via-teal-500/8 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid line background overlay with subtle vignette mask */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 70%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-7">
          {/* Executive Tagline & Kicker */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-xl backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-emerald-400 tracking-wider uppercase text-[11px]">
              STARTUP INITIATIVE
            </span>
            <span className="text-slate-700">·</span>
            <span className="font-mono text-slate-300 tracking-wide font-medium">{COMPANY_INFO.domain}</span>
          </div>

          {/* Main Headline with High-Contrast Hierarchy */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12]">
            {t.titlePrefix[currentLang]}{' '}
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 drop-shadow-sm">
              {t.titleHighlight[currentLang]}
            </span>
          </h1>

          {/* Subtitle / Mission Statement */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            {t.description[currentLang]}
          </p>

          {/* Core CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <span>{t.ctaPrimary[currentLang]}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#deployments"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>{t.ctaSecondary[currentLang]}</span>
            </a>

            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800/80 transition-all"
            >
              <Calculator className="w-4 h-4 text-teal-400" />
              <span>{t.ctaCalculator[currentLang]}</span>
            </a>
          </div>

          {/* Quick Platform Anchor Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {quickPlatformLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 text-xs text-slate-400 hover:text-white transition-all"
                >
                  <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Enterprise Badges */}
          <div className="pt-4 pb-2 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2 text-slate-300">
              <Rocket className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium">Indonesian Tech Startup</span>
            </span>
            <span className="text-slate-800">·</span>
            <span className="flex items-center gap-2 text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-medium">Edge AI Model Integration</span>
            </span>
            <span className="text-slate-800">·</span>
            <span className="flex items-center gap-2 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-medium">Multi-Cluster Redundancy</span>
            </span>
          </div>
        </div>

        {/* Live Metrics Matrix */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-b from-slate-900/70 to-slate-950/90 backdrop-blur-md border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 text-center transition-all duration-200 shadow-xl flex flex-col justify-center items-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-4xl font-black text-white tracking-tight flex items-center justify-center min-h-[48px]">
                {stat.value.includes('.') && !stat.value.includes('%') ? (
                  <span className="text-emerald-400 font-mono text-xs sm:text-sm lg:text-base font-bold px-1 select-all break-all sm:break-normal">
                    {stat.value}
                  </span>
                ) : (
                  <span className="text-emerald-400 font-mono group-hover:scale-105 transition-transform">
                    {stat.value}
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1.5 font-medium tracking-tight">
                {stat.label[currentLang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
