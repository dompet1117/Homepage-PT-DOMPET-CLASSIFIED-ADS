import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight, Zap, Shield, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ['about', 'vision', 'products', 'deployments', 'calculator', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = UI_TRANSLATIONS.nav;

  const navLinks = [
    { href: '#about', id: 'about', label: t.about[currentLang] },
    { href: '#vision', id: 'vision', label: t.vision[currentLang] },
    { href: '#products', id: 'products', label: t.products[currentLang] },
    { href: '#deployments', id: 'deployments', label: t.deployments[currentLang] },
    { href: '#calculator', id: 'calculator', label: t.calculator[currentLang] },
    { href: '#contact', id: 'contact', label: t.contact[currentLang] },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-slate-950/80 py-3'
          : 'bg-transparent border-b border-slate-800/30 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl"
            aria-label={`${COMPANY_INFO.brandName} - Homepage`}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 flex items-center justify-center text-slate-950 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
                <Zap className="w-5 h-5 text-slate-950 fill-current" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-slate-950"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base tracking-tight group-hover:text-emerald-400 transition-colors">
                  {COMPANY_INFO.brandName}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 rounded-md tracking-wider uppercase">
                  Startup
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 tracking-wide">
                {COMPANY_INFO.domain}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/50 border border-slate-800/60 rounded-full px-3 py-1.5 backdrop-blur-md" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-150 ${
                    isActive
                      ? 'bg-slate-800 text-emerald-400 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-full p-1 shadow-inner">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-2 mr-1" aria-hidden="true" />
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  currentLang === 'en'
                    ? 'bg-emerald-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-label="Switch language to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('id')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  currentLang === 'id'
                    ? 'bg-emerald-400 text-slate-950 shadow-sm'
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
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
              className="px-2.5 py-1 text-xs font-bold text-emerald-400 bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Toggle language"
            >
              {currentLang.toUpperCase()}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-900 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-3 text-xs font-bold rounded-xl text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300"
            >
              {t.launchButton[currentLang]}
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Domain: {COMPANY_INFO.domain}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
