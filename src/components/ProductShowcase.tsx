import React, { useState } from 'react';
import { 
  Sparkles, 
  Network, 
  FileText, 
  Shirt, 
  ArrowUpRight, 
  Check, 
  ChevronRight, 
  Play, 
  Cpu, 
  Layers, 
  ExternalLink,
  ShieldAlert,
  SlidersHorizontal
} from 'lucide-react';
import { PRODUCTS, AIProduct } from '../data/products';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface ProductShowcaseProps {
  currentLang: Language;
  onSelectProductForDeployments?: (productKey: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ 
  currentLang,
  onSelectProductForDeployments 
}) => {
  const [activeTab, setActiveTab] = useState<string>('spotlight-ai');
  const [simulatedPrompt, setSimulatedPrompt] = useState<string>('');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [activeDemoOutputIdx, setActiveDemoOutputIdx] = useState<number>(0);

  const t = UI_TRANSLATIONS.productsSection;
  const currentProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setActiveDemoOutputIdx((prev) => (prev === 0 ? 1 : 0));
    }, 700);
  };

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-emerald-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-violet-400" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5 text-pink-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="products" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow specific to product */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentProduct.bgGlow }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            <Layers className="w-4 h-4" />
            <span>{t.sectionTitle[currentLang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.sectionSubtitle[currentLang]}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.introText[currentLang]}
          </p>
        </div>

        {/* Interactive Segmented Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl max-w-4xl mx-auto mb-12 shadow-inner">
          {PRODUCTS.map((prod) => {
            const isActive = prod.id === activeTab;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => {
                  setActiveTab(prod.id);
                  setSimulatedPrompt('');
                  setActiveDemoOutputIdx(0);
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-md border border-slate-700/80'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }`}
                aria-pressed={isActive}
              >
                {getProductIcon(prod.iconName)}
                <span>{prod.name}</span>
                <span className="text-[10px] font-mono opacity-60 bg-slate-950/60 px-1.5 py-0.5 rounded">
                  {prod.deployments.length} nodes
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Product Showcase Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Product Blueprint & Features (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
              {/* Product Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      {currentProduct.category[currentLang]}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs text-slate-400">
                      {currentProduct.deployments.length} Active Deployments
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {currentProduct.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {currentProduct.tagline[currentLang]}
                  </p>
                </div>

                <a
                  href={currentProduct.primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
                >
                  <span>{t.viewLivePlatform[currentLang]}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentProduct.description[currentLang]}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 my-6 pt-2">
                {currentProduct.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 text-center">
                    <div className="text-lg sm:text-xl font-black text-white font-mono">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {m.label[currentLang]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Capabilities checklist */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Integrated AI Capabilities
                </h4>
                {currentProduct.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{cap[currentLang]}</span>
                  </div>
                ))}
              </div>

              {/* Core Benefits */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 grid sm:grid-cols-3 gap-4">
                {currentProduct.coreBenefits.map((b, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xs font-bold text-white">{b.title[currentLang]}</div>
                    <p className="text-[11px] text-slate-400 leading-normal">{b.desc[currentLang]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick mirror switch row */}
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="font-medium text-slate-300">
                Primary Host: <span className="font-mono text-emerald-400">{currentProduct.primaryUrl}</span>
              </span>
              <a
                href="#deployments"
                onClick={() => onSelectProductForDeployments?.(currentProduct.key)}
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold hover:underline"
              >
                <span>{t.allMirrors[currentLang]} ({currentProduct.deployments.length})</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Sandbox & Output Simulator (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wide uppercase">
                    {t.testInteractiveSandbox[currentLang]}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  AI Model: Active
                </span>
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="sandbox-input" 
                  className="block text-xs font-medium text-slate-300"
                >
                  Prompt & Scenario Simulator:
                </label>
                <div className="relative">
                  <input
                    id="sandbox-input"
                    type="text"
                    value={simulatedPrompt}
                    onChange={(e) => setSimulatedPrompt(e.target.value)}
                    placeholder={currentProduct.interactiveDemo.promptPlaceholder[currentLang]}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setSimulatedPrompt(currentProduct.interactiveDemo.promptPlaceholder[currentLang]);
                    }}
                    className="text-[11px] text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    Auto-fill sample scenario
                  </button>

                  <button
                    type="button"
                    onClick={handleRunSimulation}
                    disabled={isSimulating}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg text-slate-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-60 transition-all"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{isSimulating ? t.generating[currentLang] : t.tryPrompt[currentLang]}</span>
                  </button>
                </div>
              </div>

              {/* Simulator Output Preview Card */}
              <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-emerald-400">
                    {currentProduct.interactiveDemo.sampleOutputs[activeDemoOutputIdx]?.title[currentLang]}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {currentProduct.interactiveDemo.sampleOutputs[activeDemoOutputIdx]?.meta}
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-slate-200 bg-slate-900/80 p-3 rounded-xl border border-slate-800/60 leading-relaxed font-sans min-h-[72px] flex items-center">
                  {isSimulating ? (
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <div className="w-3.5 h-3.5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                      <span>{t.generating[currentLang]}</span>
                    </div>
                  ) : (
                    currentProduct.interactiveDemo.sampleOutputs[activeDemoOutputIdx]?.result[currentLang]
                  )}
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                  <span>Engine: PT DOMPET CLASSIFIED ADS AI Core</span>
                  <button
                    type="button"
                    onClick={() => setActiveDemoOutputIdx((prev) => (prev === 0 ? 1 : 0))}
                    className="text-emerald-400 hover:underline"
                  >
                    Switch Variant ({activeDemoOutputIdx + 1}/2)
                  </button>
                </div>
              </div>

              {/* Direct deployment launch buttons */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-300">
                  Immediate Deployment Access:
                </div>
                <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-1">
                  {currentProduct.deployments.slice(0, 4).map((dep) => (
                    <a
                      key={dep.id}
                      href={dep.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all group text-xs"
                    >
                      <div className="truncate mr-2">
                        <span className="font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
                          {dep.title}
                        </span>
                        <div className="text-[10px] text-slate-500 font-mono truncate">
                          {dep.url}
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
