import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuickLaunch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = UI_TRANSLATIONS.nav;

  const navLinks = [
    { href: '#about', label: t.about[currentLang] },
    { href: '#vision', label: t.vision[currentLang] },
    { href: '#products', label: t.products[currentLang] },
    { href: '#deployments', label: t.deployments[currentLang] },
    { href: '#calculator', label: t.calculator[currentLang] },
    { href: '#contact', label: t.contact[currentLang] },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-slate-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-slate-950 fill-current" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base tracking-tight group-hover:text-emerald-400 transition-colors">
                  {COMPANY_INFO.brandName}
                </span>
                <span className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 rounded">
                  Startup
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 tracking-wider">
                {COMPANY_INFO.domain}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" aria-hidden="true" />
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
                  currentLang === 'en'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-label="Switch language to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('id')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
                  currentLang === 'id'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-label="Ganti bahasa ke Bahasa Indonesia"
              >
                ID
              </button>
            </div>

            {/* Launch CTA */}
            <a
              href="#products"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <span>{t.launchButton[currentLang]}</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => onLanguageChange(currentLang === 'en' ? 'id' : 'en')}
              className="px-2.5 py-1 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-md"
              aria-label="Toggle language"
            >
              {currentLang.toUpperCase()}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-900 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 text-xs font-bold rounded-lg text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300"
            >
              {t.launchButton[currentLang]}
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Domain: {COMPANY_INFO.domain}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
