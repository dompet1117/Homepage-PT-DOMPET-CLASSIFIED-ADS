import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { calculateProductivity, formatCurrency, ProductivityInputs } from '../utils/calculator';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface ProductivityCalculatorProps {
  currentLang: Language;
}

export const ProductivityCalculator: React.FC<ProductivityCalculatorProps> = ({ currentLang }) => {
  const [inputs, setInputs] = useState<ProductivityInputs>({
    teamSize: 15,
    meetingsPerWeek: 16,
    monthlyAdBudget: 3500,
    designHoursPerWeek: 20,
  });

  const [currencyMode, setCurrencyMode] = useState<'USD' | 'IDR'>(currentLang === 'id' ? 'IDR' : 'USD');

  const t = UI_TRANSLATIONS.calculatorSection;

  const results = useMemo(() => {
    return calculateProductivity(inputs);
  }, [inputs]);

  const applyPreset = (preset: 'startup' | 'growth' | 'enterprise') => {
    if (preset === 'startup') {
      setInputs({ teamSize: 5, meetingsPerWeek: 8, monthlyAdBudget: 1200, designHoursPerWeek: 10 });
    } else if (preset === 'growth') {
      setInputs({ teamSize: 25, meetingsPerWeek: 20, monthlyAdBudget: 6000, designHoursPerWeek: 25 });
    } else {
      setInputs({ teamSize: 80, meetingsPerWeek: 35, monthlyAdBudget: 18000, designHoursPerWeek: 50 });
    }
  };

  return (
    <section id="calculator" className="py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-900/50">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[currentLang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
            {t.sectionSubtitle[currentLang]}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.intro[currentLang]}
          </p>
        </div>

        {/* Calculator Main Interface */}
        <div className="bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-7 sm:p-10 shadow-2xl max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-center backdrop-blur-md">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  Quick Presets:
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => applyPreset('startup')}
                    className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                  >
                    Startup
                  </button>
                  <button
                    type="button"
                    onClick={() => applyPreset('growth')}
                    className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                  >
                    Growth
                  </button>
                  <button
                    type="button"
                    onClick={() => applyPreset('enterprise')}
                    className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                  >
                    Enterprise
                  </button>
                </div>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                <span className="text-slate-500 text-[10px] px-2 font-mono">CURRENCY:</span>
                <button
                  type="button"
                  onClick={() => setCurrencyMode('USD')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    currencyMode === 'USD'
                      ? 'bg-emerald-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrencyMode('IDR')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    currencyMode === 'IDR'
                      ? 'bg-emerald-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  IDR (Rp)
                </button>
              </div>
            </div>

            {/* Slider 1: Team Size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="team-size" className="font-bold text-slate-200">
                  {t.teamSizeLabel[currentLang]}
                </label>
                <span className="font-mono font-bold text-emerald-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 shadow-inner">
                  {inputs.teamSize} members
                </span>
              </div>
              <input
                id="team-size"
                type="range"
                min="1"
                max="150"
                step="1"
                value={inputs.teamSize}
                onChange={(e) => setInputs({ ...inputs, teamSize: Number(e.target.value) })}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            {/* Slider 2: Meetings per week */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="meetings-per-week" className="font-bold text-slate-200">
                  {t.meetingsLabel[currentLang]}
                </label>
                <span className="font-mono font-bold text-violet-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 shadow-inner">
                  {inputs.meetingsPerWeek} mtgs/wk
                </span>
              </div>
              <input
                id="meetings-per-week"
                type="range"
                min="0"
                max="40"
                step="1"
                value={inputs.meetingsPerWeek}
                onChange={(e) => setInputs({ ...inputs, meetingsPerWeek: Number(e.target.value) })}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-violet-400"
              />
              <span className="text-[11px] text-slate-400 block font-normal">
                Optimized by Minutes AI (automated transcription & executive decisions routing)
              </span>
            </div>

            {/* Slider 3: Ad Budget */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="ad-budget" className="font-bold text-slate-200">
                  {t.adBudgetLabel[currentLang]}
                </label>
                <span className="font-mono font-bold text-emerald-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 shadow-inner">
                  ${inputs.monthlyAdBudget.toLocaleString()} / mo
                </span>
              </div>
              <input
                id="ad-budget"
                type="range"
                min="0"
                max="25000"
                step="250"
                value={inputs.monthlyAdBudget}
                onChange={(e) => setInputs({ ...inputs, monthlyAdBudget: Number(e.target.value) })}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <span className="text-[11px] text-slate-400 block font-normal">
                Optimized by Ad-Net AI (automated classifieds matching & dynamic bid syndication)
              </span>
            </div>

            {/* Slider 4: Design Hours */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="design-hours" className="font-bold text-slate-200">
                  {t.designHoursLabel[currentLang]}
                </label>
                <span className="font-mono font-bold text-pink-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 shadow-inner">
                  {inputs.designHoursPerWeek} hrs/wk
                </span>
              </div>
              <input
                id="design-hours"
                type="range"
                min="0"
                max="60"
                step="1"
                value={inputs.designHoursPerWeek}
                onChange={(e) => setInputs({ ...inputs, designHoursPerWeek: Number(e.target.value) })}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-400"
              />
              <span className="text-[11px] text-slate-400 block font-normal">
                Accelerated by Spotlight AI & Mode AI (automated apparel CAD & visual assets)
              </span>
            </div>
          </div>

          {/* Results Summary Scorecard (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-7 sm:p-9 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-bl-full pointer-events-none" />

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                Projected Acceleration
              </span>
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-950 bg-emerald-400 px-3 py-1 rounded-full shadow-md shadow-emerald-500/20">
                <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{results.productivityMultiplier}</span>
              </div>
            </div>

            {/* Big Headline Stat */}
            <div className="space-y-1">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                {t.hoursSavedMonthly[currentLang]}
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                <span>{results.hoursSavedMonthly}</span>
                <span className="text-base font-sans font-medium text-slate-400">hours / mo</span>
              </div>
            </div>

            {/* Financial Lift Card */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3.5">
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  {t.totalImpactMonthly[currentLang]}
                </div>
                <div className="text-3xl font-black text-emerald-400 font-mono tracking-tight mt-0.5">
                  {currencyMode === 'IDR'
                    ? formatCurrency(results.totalFinancialImpactMonthlyUSD, 'id')
                    : formatCurrency(results.totalFinancialImpactMonthlyUSD, 'en')}
                </div>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800/90 space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-200">
                  <span className="font-medium">{t.annualizedImpact[currentLang]}:</span>
                  <span className="font-mono font-bold text-white text-sm">
                    {currencyMode === 'IDR'
                      ? formatCurrency(results.annualizedImpactUSD, 'id')
                      : formatCurrency(results.annualizedImpactUSD, 'en')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-400 text-[11px] pt-1 border-t border-slate-800">
                  <span>Ad Budget Efficiency Uplift:</span>
                  <span className="font-mono font-bold text-emerald-400">+{results.adEfficiencyLiftPercent}% ROI</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-xl shadow-emerald-500/25 active:scale-95"
              >
                <span>Deploy Across Your Organization</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
