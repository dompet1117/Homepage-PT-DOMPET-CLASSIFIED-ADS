import React from 'react';
import { Zap, ShieldCheck, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS.footer;

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission Statement (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 flex items-center justify-center text-slate-950 font-black">
                <Zap className="w-5 h-5 text-slate-950 fill-current" />
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight">
                  {COMPANY_INFO.brandName}
                </span>
                <div className="text-[11px] font-mono text-emerald-400">
                  {COMPANY_INFO.domain}
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              PT DOMPET CLASSIFIED ADS is a technology startup dedicated to helping consumers and businesses maximize operational productivity with intelligent, AI-integrated platforms.
            </p>

            <div className="pt-1 flex flex-col gap-1 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white font-mono">
                  {COMPANY_INFO.email}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-teal-400" />
                <span className="text-slate-300 font-mono">https://{COMPANY_INFO.domain}</span>
              </span>
            </div>
          </div>

          {/* AI Platforms Column */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              {t.platforms[currentLang]}
            </h4>
            <ul className="space-y-2">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <a
                    href={prod.primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{prod.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              {t.quickLinks[currentLang]}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Company Profile
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-white transition-colors">
                  Vision & Mission
                </a>
              </li>
              <li>
                <a href="#deployments" className="hover:text-white transition-colors">
                  38 Live Deployments
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Productivity Calculator
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Business Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Governance & Trust Column */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              {t.legal[currentLang]}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Indonesian PDP Ready</span>
              </li>
              <li>
                <span>Enterprise SLA 99.9%</span>
              </li>
              <li>
                <span>Distributed Edge Clusters</span>
              </li>
              <li>
                <span>Venture Startup Architecture</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 PT DOMPET CLASSIFIED ADS. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-emerald-500">dompetclassifiedads.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
