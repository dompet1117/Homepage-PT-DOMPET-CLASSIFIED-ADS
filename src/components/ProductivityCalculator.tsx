import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Sparkles, ArrowRight } from 'lucide-react';
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

  return (
    <section id="calculator" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            <Calculator className="w-4 h-4" />
            <span>{t.sectionTitle[currentLang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.sectionSubtitle[currentLang]}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.intro[currentLang]}
          </p>
        </div>

        {/* Calculator Main Interface */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Operating Parameters
              </span>
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
                <span className="text-slate-500 text-[10px] px-1.5 font-mono">CURRENCY:</span>
                <button
                  type="button"
                  onClick={() => setCurrencyMode('USD')}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    currencyMode === 'USD'
                      ? 'bg-emerald-500 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrencyMode('IDR')}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    currencyMode === 'IDR'
                      ? 'bg-emerald-500 text-slate-950'
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
                <label htmlFor="team-size" className="font-semibold text-slate-200">
                  {t.teamSizeLabel[currentLang]}
                </label>
                <span className="font-mono font-bold text-emerald-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
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
                className="w-full accent-emerald-400 cursor-pointer"
              />
            </div>

            {/* Slider 2: Meetings per week */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="meetings-per-week" className="font-semibold text-slate-200">
                  {t.meetingsLabel[currentLang]}
                </label>
                <span className="font-mono font-bold text-violet-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
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
                className="w-full accent-violet-400 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500">
                Optimized by Minutes AI (automated transcription & action item extraction)
              </span>
            </div>

            {/* Slider 3: Ad Budget */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="ad-budget" className="font-semibold text-slate-200">
                  {t.adBudgetLabel[currentLang]}
                </label>
                <span className="font-mono font-bold text-emerald-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
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
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500">
                Optimized by Ad-Net AI (automated classifieds matching & dynamic bid syndication)
              </span>
            </div>

            {/* Slider 4: Design Hours */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="design-hours" className="font-semibold text-slate-200">
                  {t.designHoursLabel[currentLang]}
                </label>
                <span className="font-mono font-bold text-pink-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
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
                className="w-full accent-pink-400 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500">
                Accelerated by Spotlight AI & Mode AI (automated apparel CAD & visual assets)
              </span>
            </div>
          </div>

          {/* Results Summary Scorecard (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-bl-full pointer-events-none" />

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                Projected Acceleration
              </span>
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-950 bg-emerald-400 px-2.5 py-0.5 rounded-full">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{results.productivityMultiplier}</span>
              </div>
            </div>

            {/* Big Headline Stat */}
            <div className="space-y-1">
              <div className="text-xs text-slate-400 font-medium">
                {t.hoursSavedMonthly[currentLang]}
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                <span>{results.hoursSavedMonthly}</span>
                <span className="text-base font-sans font-medium text-slate-400">hours / mo</span>
              </div>
            </div>

            {/* Financial Lift */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <div>
                <div className="text-xs text-slate-400 font-medium">
                  {t.totalImpactMonthly[currentLang]}
                </div>
                <div className="text-2xl font-bold text-emerald-400 font-mono">
                  {currencyMode === 'IDR'
                    ? formatCurrency(results.totalFinancialImpactMonthlyUSD, 'id')
                    : formatCurrency(results.totalFinancialImpactMonthlyUSD, 'en')}
                </div>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>{t.annualizedImpact[currentLang]}:</span>
                  <span className="font-mono font-bold text-white">
                    {currencyMode === 'IDR'
                      ? formatCurrency(results.annualizedImpactUSD, 'id')
                      : formatCurrency(results.annualizedImpactUSD, 'en')}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Ad Budget Efficiency Uplift:</span>
                  <span className="font-mono text-emerald-400">+{results.adEfficiencyLiftPercent}%</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Deploy Across Your Organization</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
