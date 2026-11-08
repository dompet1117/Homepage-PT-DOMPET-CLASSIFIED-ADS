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
  Volume2,
  CheckCircle2,
  Clock,
  Sliders,
  DollarSign,
  Palette,
  Maximize2
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
  
  // Interactive mini-states for each product's bespoke console:
  const [selectedRatio, setSelectedRatio] = useState<'1:1' | '16:9' | '9:16'>('16:9');
  const [selectedAdSegment, setSelectedAdSegment] = useState<string>('Industrial B2B');
  const [completedTasks, setCompletedTasks] = useState<Record<number, boolean>>({ 0: true });
  const [selectedColorway, setSelectedColorway] = useState<string>('Sand Drift');

  const t = UI_TRANSLATIONS.productsSection;
  const currentProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setActiveDemoOutputIdx((prev) => (prev === 0 ? 1 : 0));
    }, 600);
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

  const toggleTask = (index: number) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="products" className="py-28 bg-slate-950 relative overflow-hidden">
      {/* Background glow specific to product */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 opacity-60"
        style={{ backgroundColor: currentProduct.bgGlow }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-900/50">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[currentLang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
            {t.sectionSubtitle[currentLang]}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.introText[currentLang]}
          </p>
        </div>

        {/* Interactive Segmented Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl max-w-4xl mx-auto mb-14 shadow-2xl backdrop-blur-md">
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
                className={`flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-lg border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }`}
                aria-pressed={isActive}
              >
                {getProductIcon(prod.iconName)}
                <span>{prod.name}</span>
                <span className="text-[10px] font-mono opacity-70 bg-slate-950/80 px-2 py-0.5 rounded-full border border-slate-800">
                  {prod.deployments.length} nodes
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Product Showcase Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Product Blueprint & Features (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-7 sm:p-9 shadow-2xl">
              {/* Product Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                      {currentProduct.category[currentLang]}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs text-slate-400 font-mono">
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
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-md shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  <span>{t.viewLivePlatform[currentLang]}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {currentProduct.description[currentLang]}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 my-6 pt-2">
                {currentProduct.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-3.5 text-center">
                    <div className="text-lg sm:text-xl font-black text-white font-mono">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium mt-1">
                      {m.label[currentLang]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Capabilities checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Integrated AI Capabilities
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {currentProduct.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{cap[currentLang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Benefits */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 grid sm:grid-cols-3 gap-4">
                {currentProduct.coreBenefits.map((b, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xs font-bold text-white tracking-tight">{b.title[currentLang]}</div>
                    <p className="text-[11px] text-slate-400 leading-normal">{b.desc[currentLang]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick mirror switch row */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 backdrop-blur-sm">
              <span className="font-medium text-slate-300">
                Primary Cluster Host: <span className="font-mono text-emerald-400 font-bold">{currentProduct.primaryUrl}</span>
              </span>
              <a
                href="#deployments"
                onClick={() => onSelectProductForDeployments?.(currentProduct.key)}
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold hover:underline"
              >
                <span>{t.allMirrors[currentLang]} ({currentProduct.deployments.length})</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Product Terminal (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide uppercase font-mono ml-2">
                    {currentProduct.name} · Interactive Sandbox
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AI Engine Online</span>
                </div>
              </div>

              {/* Bespoke Interactive Preview Controls depending on product */}
              {currentProduct.key === 'spotlight' && (
                <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">Aspect Ratio & Studio Setup:</span>
                    <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-[11px]">
                      {(['16:9', '1:1', '9:16'] as const).map((ratio) => (
                        <button
                          key={ratio}
                          type="button"
                          onClick={() => setSelectedRatio(ratio)}
                          className={`px-2 py-0.5 rounded font-mono font-semibold transition-colors ${
                            selectedRatio === ratio ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {ratio}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Active Profile: 4K Commercial Grade HDR</span>
                    <span className="text-blue-400 font-mono">Depth Pass: Active</span>
                  </div>
                </div>
              )}

              {currentProduct.key === 'adnet' && (
                <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">Audience Intent Segment:</span>
                    <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-[11px]">
                      {['Industrial B2B', 'Retail Classifieds', 'SaaS Tech'].map((seg) => (
                        <button
                          key={seg}
                          type="button"
                          onClick={() => setSelectedAdSegment(seg)}
                          className={`px-2 py-0.5 rounded font-semibold transition-colors ${
                            selectedAdSegment === seg ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {seg}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Dynamic Bid Route: $1.28 eCPM</span>
                    <span className="text-emerald-400 font-mono font-semibold">Match Rate: 98.4%</span>
                  </div>
                </div>
              )}

              {currentProduct.key === 'minutes' && (
                <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-violet-400" />
                      <span>Live Diarization Feed (3 Speakers)</span>
                    </span>
                    <span className="text-[10px] font-mono text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded">
                      Transcribing: 00:42:18
                    </span>
                  </div>
                  <div className="flex gap-1 items-center h-4 py-1">
                    {[40, 70, 30, 90, 60, 85, 45, 95, 30, 65, 80, 50, 90, 75, 40].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-violet-500/60 rounded-full transition-all duration-300"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {currentProduct.key === 'mode' && (
                <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">Fabric Swatch & Colorway:</span>
                    <div className="flex items-center gap-1.5">
                      {['Sand Drift', 'Terracotta', 'Deep Sage', 'Midnight'].map((tone) => (
                        <button
                          key={tone}
                          type="button"
                          onClick={() => setSelectedColorway(tone)}
                          className={`text-[10px] px-2 py-0.5 rounded font-medium border ${
                            selectedColorway === tone
                              ? 'bg-pink-950 text-pink-300 border-pink-700'
                              : 'bg-slate-900 text-slate-400 border-slate-800'
                          }`}
                        >
                          {tone}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Prompt Simulation Input */}
              <div className="space-y-2">
                <label 
                  htmlFor="sandbox-input" 
                  className="block text-xs font-semibold text-slate-300"
                >
                  Scenario Context & Directive:
                </label>
                <div className="relative">
                  <input
                    id="sandbox-input"
                    type="text"
                    value={simulatedPrompt}
                    onChange={(e) => setSimulatedPrompt(e.target.value)}
                    placeholder={currentProduct.interactiveDemo.promptPlaceholder[currentLang]}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all font-mono"
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setSimulatedPrompt(currentProduct.interactiveDemo.promptPlaceholder[currentLang]);
                    }}
                    className="text-[11px] text-slate-400 hover:text-emerald-400 transition-colors underline underline-offset-2"
                  >
                    Auto-fill sample scenario
                  </button>

                  <button
                    type="button"
                    onClick={handleRunSimulation}
                    disabled={isSimulating}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl text-slate-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-60 transition-all shadow-md shadow-emerald-500/20 active:scale-95"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{isSimulating ? t.generating[currentLang] : t.tryPrompt[currentLang]}</span>
                  </button>
                </div>
              </div>

              {/* Simulator Output Preview Card */}
              <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-inner">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{currentProduct.interactiveDemo.sampleOutputs[activeDemoOutputIdx]?.title[currentLang]}</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded">
                    {currentProduct.interactiveDemo.sampleOutputs[activeDemoOutputIdx]?.meta}
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-slate-200 bg-slate-900/90 p-4 rounded-xl border border-slate-800/70 leading-relaxed font-sans min-h-[80px] flex items-center">
                  {isSimulating ? (
                    <div className="flex items-center gap-3 text-slate-400 text-xs">
                      <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                      <span>{t.generating[currentLang]}</span>
                    </div>
                  ) : (
                    currentProduct.interactiveDemo.sampleOutputs[activeDemoOutputIdx]?.result[currentLang]
                  )}
                </div>

                {/* If Minutes AI, show interactive action item checkboxes! */}
                {currentProduct.key === 'minutes' && !isSimulating && (
                  <div className="pt-2 space-y-2 border-t border-slate-900">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Extracted Action Items (Click to complete):
                    </span>
                    {[
                      'Sarah: Finalize vendor SLAs & security questionnaire',
                      'Budi: Consolidate classified ad inventory analytics',
                    ].map((task, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => toggleTask(idx)}
                        className="w-full flex items-center gap-2.5 text-xs text-left p-2 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800/60 transition-colors"
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                            completedTasks[idx]
                              ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                              : 'border-slate-700 bg-slate-950'
                          }`}
                        >
                          {completedTasks[idx] && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={completedTasks[idx] ? 'line-through text-slate-500' : 'text-slate-200'}>
                          {task}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                  <span className="font-mono">Engine: PT DOMPET CLASSIFIED ADS Core</span>
                  <button
                    type="button"
                    onClick={() => setActiveDemoOutputIdx((prev) => (prev === 0 ? 1 : 0))}
                    className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline"
                  >
                    Switch Variant ({activeDemoOutputIdx + 1}/2)
                  </button>
                </div>
              </div>

              {/* Direct deployment launch buttons */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300">
                    Immediate Production Node Access:
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Showing 4 of {currentProduct.deployments.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-1">
                  {currentProduct.deployments.slice(0, 4).map((dep) => (
                    <a
                      key={dep.id}
                      href={dep.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-950/80 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition-all group text-xs shadow-sm"
                    >
                      <div className="truncate mr-3">
                        <span className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
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
