import React from 'react';
import { ShieldCheck, Server, Lock, Mail, Globe, MapPin, Building2, CheckCircle2, Cpu } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface CompanyProfileProps {
  currentLang: Language;
}

export const CompanyProfile: React.FC<CompanyProfileProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS.companyProfile;

  return (
    <section id="about" className="py-20 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            <Building2 className="w-4 h-4" />
            <span>{t.sectionTitle[currentLang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.sectionSubtitle[currentLang]}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Official corporate entity verification, domain registry, and technology architecture behind PT DOMPET CLASSIFIED ADS.
          </p>
        </div>

        {/* Corporate Details Matrix */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Identity & Legal Data (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Company Identity
                </span>
                <h3 className="text-xl font-black text-white">
                  {COMPANY_INFO.legalName}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start justify-between py-2 border-b border-slate-900">
                <span className="text-slate-400">{t.legalName[currentLang]}:</span>
                <span className="font-bold text-white text-right">{COMPANY_INFO.legalName}</span>
              </div>

              <div className="flex items-start justify-between py-2 border-b border-slate-900">
                <span className="text-slate-400">{t.domain[currentLang]}:</span>
                <span className="font-mono font-bold text-emerald-400 text-right">{COMPANY_INFO.domain}</span>
              </div>

              <div className="flex items-start justify-between py-2 border-b border-slate-900">
                <span className="text-slate-400">{t.email[currentLang]}:</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-mono text-cyan-400 hover:underline text-right"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start justify-between py-2 border-b border-slate-900">
                <span className="text-slate-400">{t.stage[currentLang]}:</span>
                <span className="font-semibold text-white text-right">
                  Early-Stage AI Startup / Venture Backed Architecture
                </span>
              </div>

              <div className="flex items-start justify-between py-2 border-b border-slate-900">
                <span className="text-slate-400">{t.headquarters[currentLang]}:</span>
                <span className="text-white text-right">{COMPANY_INFO.headquarters}</span>
              </div>

              <div className="flex items-start justify-between py-2">
                <span className="text-slate-400">{t.ecosystem[currentLang]}:</span>
                <span className="font-medium text-slate-200 text-right">
                  Spotlight AI · Ad-Net AI · Minutes AI · Mode AI
                </span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Verified corporate registration under Indonesian Law with global product syndication.
              </span>
            </div>
          </div>

          {/* Architecture & Engineering Standards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  System Architecture & Resilience
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Built for Enterprise-Grade High Availability
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  To guarantee uninterrupted operations for consumers and corporate partners, PT DOMPET CLASSIFIED ADS deploys a federated multi-cluster architecture spanning 38 synchronized edge endpoints.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Server className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Distributed Clusters
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Zero single-point-of-failure routing across Vibex Business domain infrastructure and Vercel edge networks.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Edge Intelligence
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sub-100ms model response latencies optimized for instant classifieds bidding, meeting synthesis, and apparel generation.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-violet-400">
                    <Lock className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Data Privacy (PDP Law)
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Strict adherence to Indonesian PDP Law (UU Perlindungan Data Pribadi) and ISO-standard cryptographic encryption.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-pink-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      99.9% Production SLA
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Guaranteed uptime with automated failover and automated self-healing containerized deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
