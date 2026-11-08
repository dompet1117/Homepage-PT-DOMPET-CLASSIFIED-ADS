import React from 'react';
import { Target, Compass, CheckCircle2, Shield, Zap, Sparkles, TrendingUp, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface VisionMissionProps {
  currentLang: Language;
}

export const VisionMission: React.FC<VisionMissionProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS.visionMission;

  return (
    <section id="vision" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            <Compass className="w-4 h-4" />
            <span>{t.sectionTitle[currentLang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.sectionSubtitle[currentLang]}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            The core philosophy propelling PT DOMPET CLASSIFIED ADS as a startup building the next era of business speed.
          </p>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card (Highlighted as key prompt focus) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950 border-2 border-emerald-500/30 p-8 sm:p-10 shadow-xl shadow-emerald-950/20 hover:border-emerald-500/50 transition-all group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
                  {t.missionBadge[currentLang]}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Purpose & Commitment
                </h3>
              </div>
            </div>

            <blockquote className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed border-l-2 border-emerald-400 pl-4 py-1 italic bg-slate-900/40 rounded-r-lg">
              "{t.missionText[currentLang]}"
            </blockquote>

            <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-3">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Launching specialized, AI-integrated productivity platforms tailored for business workflows.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Radically simplifying complex operations to liberate human creativity and strategy.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Accelerating everyday output across marketing, advertising, meetings, and creative design.</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 shadow-lg hover:border-slate-700 transition-all group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">
                  {t.visionBadge[currentLang]}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Long-Term Horizon
                </h3>
              </div>
            </div>

            <blockquote className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed border-l-2 border-cyan-400 pl-4 py-1 italic bg-slate-900/40 rounded-r-lg">
              "{t.visionText[currentLang]}"
            </blockquote>

            <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-3">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Pioneering seamless synergy between human decision-makers and autonomous AI agents.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Scaling high-availability multi-node software networks for micro-enterprises and conglomerates.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Establishing dompetclassifiedads.com as the definitive hub for AI-accelerated business growth.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Core Operational Pillars */}
        <div className="pt-4">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {t.pillarsTitle[currentLang]}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:bg-slate-900/70 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-emerald-400 mb-2">
                  0{idx + 1}. PILLAR
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {pillar.title[currentLang]}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
