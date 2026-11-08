import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  ExternalLink, 
  Copy, 
  Check, 
  Search, 
  Filter, 
  Sparkles, 
  Network, 
  FileText, 
  Shirt, 
  CheckCircle,
  Globe
} from 'lucide-react';
import { PRODUCTS, DeploymentMirror } from '../data/products';
import { Language, UI_TRANSLATIONS } from '../data/translations';

interface DeploymentsDirectoryProps {
  currentLang: Language;
  selectedProductFilter?: string;
  onFilterChange?: (filter: string) => void;
}

interface EnrichedDeployment extends DeploymentMirror {
  productKey: string;
  productName: string;
  accentColor: string;
}

export const DeploymentsDirectory: React.FC<DeploymentsDirectoryProps> = ({
  currentLang,
  selectedProductFilter = 'all',
  onFilterChange,
}) => {
  const [activeProductFilter, setActiveProductFilter] = useState<string>(selectedProductFilter);
  const [activeHostFilter, setActiveHostFilter] = useState<'all' | 'vibex' | 'vercel'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  React.useEffect(() => {
    if (selectedProductFilter) {
      setActiveProductFilter(selectedProductFilter);
    }
  }, [selectedProductFilter]);

  const t = UI_TRANSLATIONS.directorySection;

  // Flatten all deployments with product parent info
  const allEnrichedDeployments: EnrichedDeployment[] = useMemo(() => {
    return PRODUCTS.flatMap((prod) =>
      prod.deployments.map((dep) => ({
        ...dep,
        productKey: prod.key,
        productName: prod.name,
        accentColor: prod.accentColor,
      }))
    );
  }, []);

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const filteredDeployments = useMemo(() => {
    return allEnrichedDeployments.filter((item) => {
      // Product filter
      if (activeProductFilter !== 'all' && item.productKey !== activeProductFilter) {
        return false;
      }
      // Host filter
      if (activeHostFilter !== 'all' && item.hostType !== activeHostFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesUrl = item.url.toLowerCase().includes(query);
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesProduct = item.productName.toLowerCase().includes(query);
        if (!matchesUrl && !matchesTitle && !matchesProduct) {
          return false;
        }
      }
      return true;
    });
  }, [allEnrichedDeployments, activeProductFilter, activeHostFilter, searchQuery]);

  const handleProductFilterClick = (key: string) => {
    setActiveProductFilter(key);
    onFilterChange?.(key);
  };

  const getProductIcon = (key: string) => {
    switch (key) {
      case 'spotlight':
        return <Sparkles className="w-3.5 h-3.5 text-blue-400" />;
      case 'adnet':
        return <Network className="w-3.5 h-3.5 text-emerald-400" />;
      case 'minutes':
        return <FileText className="w-3.5 h-3.5 text-violet-400" />;
      case 'mode':
        return <Shirt className="w-3.5 h-3.5 text-pink-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <section id="deployments" className="py-24 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            <Globe className="w-4 h-4" />
            <span>{t.sectionTitle[currentLang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.sectionSubtitle[currentLang]}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.intro[currentLang]}
          </p>
        </div>

        {/* Filters and Search Toolbar */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 mb-8 space-y-4 shadow-xl">
          {/* Top row: Platform filters */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter platforms">
              <button
                type="button"
                onClick={() => handleProductFilterClick('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeProductFilter === 'all'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {t.filterAll[currentLang]}
              </button>
              <button
                type="button"
                onClick={() => handleProductFilterClick('spotlight')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeProductFilter === 'spotlight'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span>{t.filterSpotlight[currentLang]}</span>
              </button>
              <button
                type="button"
                onClick={() => handleProductFilterClick('adnet')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeProductFilter === 'adnet'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Network className="w-3 h-3 text-emerald-400" />
                <span>{t.filterAdNet[currentLang]}</span>
              </button>
              <button
                type="button"
                onClick={() => handleProductFilterClick('minutes')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeProductFilter === 'minutes'
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <FileText className="w-3 h-3 text-violet-400" />
                <span>{t.filterMinutes[currentLang]}</span>
              </button>
              <button
                type="button"
                onClick={() => handleProductFilterClick('mode')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeProductFilter === 'mode'
                    ? 'bg-pink-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Shirt className="w-3 h-3 text-pink-400" />
                <span>{t.filterMode[currentLang]}</span>
              </button>
            </div>

            {/* Host type segmented filter */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
              <span className="text-[11px] text-slate-500 px-2 font-mono">HOST:</span>
              <button
                type="button"
                onClick={() => setActiveHostFilter('all')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeHostFilter === 'all'
                    ? 'bg-slate-800 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setActiveHostFilter('vibex')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeHostFilter === 'vibex'
                    ? 'bg-slate-800 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Vibex
              </button>
              <button
                type="button"
                onClick={() => setActiveHostFilter('vercel')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeHostFilter === 'vercel'
                    ? 'bg-slate-800 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Vercel
              </button>
            </div>
          </div>

          {/* Bottom row: Search bar and result counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder[currentLang]}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-2 self-end sm:self-auto">
              <span>Showing:</span>
              <span className="font-mono font-bold text-white bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                {filteredDeployments.length} / 38
              </span>
              <span>nodes active</span>
            </div>
          </div>
        </div>

        {/* Deployments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDeployments.map((dep) => (
            <div
              key={dep.id}
              className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-4 sm:p-5 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                    {getProductIcon(dep.productKey)}
                    <span>{dep.productName}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        dep.hostType === 'vibex'
                          ? 'bg-blue-950/60 text-blue-400 border-blue-900/60'
                          : 'bg-emerald-950/60 text-emerald-400 border-emerald-900/60'
                      }`}
                    >
                      {dep.hostType.toUpperCase()}
                    </span>
                    {dep.isPrimary && (
                      <span className="text-[10px] font-semibold bg-emerald-500 text-slate-950 px-1.5 py-0.5 rounded">
                        MAIN
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {dep.title}
                  </h4>
                  <div className="text-[11px] font-mono text-slate-400 truncate mt-1 bg-slate-900/90 px-2.5 py-1.5 rounded-lg border border-slate-800/80">
                    {dep.url}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy(dep.id, dep.url)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all"
                  aria-label={`Copy link for ${dep.title}`}
                >
                  {copiedId === dep.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">{t.copied[currentLang]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.copyLink[currentLang]}</span>
                    </>
                  )}
                </button>

                <a
                  href={dep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-sm"
                >
                  <span>{t.openLink[currentLang]}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredDeployments.length === 0 && (
          <div className="text-center py-16 bg-slate-950/40 rounded-3xl border border-slate-800/80">
            <p className="text-sm text-slate-400">
              No deployments matched your current search filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveProductFilter('all');
                setActiveHostFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-emerald-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
