import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Building, User, Sparkles, ExternalLink, Shield } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productInterest: 'all',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const t = UI_TRANSLATIONS.contactSection;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate immediate backend receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            <Mail className="w-4 h-4" />
            <span>{t.sectionTitle[currentLang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.sectionSubtitle[currentLang]}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.intro[currentLang]}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Direct Communication
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Official Channels
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Our founders and enterprise integration engineers actively review all partnership, procurement, and investment proposals.
              </p>
            </div>

            <div className="space-y-4 pt-2 text-xs sm:text-sm">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  Primary Corporate Inbox
                </span>
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-mono text-emerald-400 hover:underline font-semibold"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  Registered Web Domain
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-white font-semibold">
                    {COMPANY_INFO.domain}
                  </span>
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">
                  Operations Hub
                </span>
                <p className="text-slate-300">
                  {COMPANY_INFO.headquarters}
                </p>
              </div>
            </div>

            <div className="p-4 bg-emerald-950/30 border border-emerald-900/60 rounded-2xl text-xs text-emerald-300/90 leading-relaxed">
              <span className="font-bold text-emerald-300">Fast Response Guarantee:</span> Inquiries regarding enterprise licensing for Spotlight AI, Ad-Net AI syndication, Minutes AI, or Mode AI receive priority dispatch within 24 business hours.
            </div>
          </div>

          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t.successMsg[currentLang]}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      productInterest: 'all',
                      message: '',
                    });
                  }}
                  className="mt-4 px-5 py-2.5 text-xs font-bold rounded-xl text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-rose-950/60 border border-rose-800 rounded-xl text-xs text-rose-300">
                    {errorMessage}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300">
                      {t.fullName[currentLang]} *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300">
                      {t.emailAddress[currentLang]} *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-300">
                      {t.companyName[currentLang]}
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-product" className="block text-xs font-semibold text-slate-300">
                      {t.productInterest[currentLang]}
                    </label>
                    <select
                      id="contact-product"
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      <option value="all">{t.interestAll[currentLang]}</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300">
                    {t.message[currentLang]} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your business goals, scale, or platform requirements..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md shadow-emerald-500/20 disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Submitting...' : t.submitBtn[currentLang]}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
