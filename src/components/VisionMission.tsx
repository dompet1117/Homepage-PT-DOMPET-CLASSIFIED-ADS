import React from 'react';
import { Target, Compass, CheckCircle2, Shield, Zap, Sparkles, TrendingUp, Layers, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface VisionMissionProps {
  currentLang: Language;
}

export const VisionMission: React.FC<VisionMissionProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS.visionMission;

  return (
    <section id="vision" className="py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-900/50">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[currentLang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
            {t.sectionSubtitle[currentLang]}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            The core strategic philosophy propelling PT DOMPET CLASSIFIED ADS as a startup building the next era of business speed.
          </p>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card (Highlighted) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950 border-2 border-emerald-500/30 p-8 sm:p-10 shadow-2xl shadow-emerald-950/30 hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-emerald-400 tracking-wider uppercase font-mono">
                  {t.missionBadge[currentLang]}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Purpose & Strategic Mandate
                </h3>
              </div>
            </div>

            <blockquote className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed border-l-2 border-emerald-400 pl-5 py-2 italic bg-slate-950/60 rounded-r-2xl shadow-inner">
              "{t.missionText[currentLang]}"
            </blockquote>

            <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3.5">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Launching specialized, AI-integrated productivity platforms tailored for business workflows.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Radically simplifying complex operations to liberate human creativity and business strategy.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Accelerating everyday output across marketing, advertising, executive meetings, and creative fashion CAD.</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 shadow-xl hover:border-slate-700 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-inner">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-cyan-400 tracking-wider uppercase font-mono">
                  {t.visionBadge[currentLang]}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Long-Term Horizon & Scale
                </h3>
              </div>
            </div>

            <blockquote className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed border-l-2 border-cyan-400 pl-5 py-2 italic bg-slate-950/60 rounded-r-2xl shadow-inner">
              "{t.visionText[currentLang]}"
            </blockquote>

            <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3.5">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Pioneering seamless synergy between human decision-makers and autonomous AI agents.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Scaling high-availability multi-node software networks for micro-enterprises and conglomerates.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Establishing dompetclassifiedads.com as the definitive hub for AI-accelerated business growth.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Core Operational Pillars */}
        <div className="pt-6">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {t.pillarsTitle[currentLang]}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/90 rounded-2xl p-6 hover:bg-slate-900/80 transition-all duration-200 shadow-sm"
              >
                <div className="text-xs font-mono font-bold text-emerald-400 mb-2.5">
                  0{idx + 1}. PILLAR
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {pillar.title[currentLang]}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {pillar.desc[currentLang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
