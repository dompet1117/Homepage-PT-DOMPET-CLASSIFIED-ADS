import React from 'react';
import { ArrowRight, Layers, ExternalLink, Calculator, Cpu, Sparkles, Shield, Rocket } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS.hero;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background ambient mesh glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid line background overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Subtle Tagline / Status Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400">STARTUP INITIATIVE</span>
            <span className="text-slate-600">·</span>
            <span className="font-mono text-slate-300">{COMPANY_INFO.domain}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
            {t.titlePrefix[currentLang]}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              {t.titleHighlight[currentLang]}
            </span>
          </h1>

          {/* Subtitle / Mission Statement */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {t.description[currentLang]}
          </p>

          {/* Core CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <span>{t.ctaPrimary[currentLang]}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#deployments"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
            >
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>{t.ctaSecondary[currentLang]}</span>
            </a>

            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800/80 transition-all"
            >
              <Calculator className="w-4 h-4 text-teal-400" />
              <span>{t.ctaCalculator[currentLang]}</span>
            </a>
          </div>

          {/* Startup Badges / Proof Points */}
          <div className="pt-6 pb-2 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Rocket className="w-3.5 h-3.5 text-emerald-400" />
              <span>Indonesian Tech Startup</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-teal-400" />
              <span>Edge AI Integration</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Multi-Cluster Redundancy</span>
            </span>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-5 text-center hover:border-slate-700/80 transition-all flex flex-col justify-center items-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight flex items-center justify-center min-h-[44px]">
                {stat.value.includes('.') && !stat.value.includes('%') ? (
                  <span className="text-emerald-400 font-mono text-xs sm:text-sm lg:text-base font-bold px-1 select-all break-all sm:break-normal">
                    {stat.value}
                  </span>
                ) : (
                  <span className="text-emerald-400 font-mono">{stat.value}</span>
                )}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                {stat.label[currentLang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
