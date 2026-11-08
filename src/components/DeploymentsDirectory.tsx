import React, { useState, useMemo, useEffect } from 'react';
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
  Globe,
  LayoutGrid,
  Table as TableIcon,
  ShieldCheck,
  Server
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
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
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
    <section id="deployments" className="py-28 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-900/50">
            <Globe className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[currentLang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
            {t.sectionSubtitle[currentLang]}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.intro[currentLang]}
          </p>
        </div>

        {/* Live Infrastructure Telemetry Header */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-8 text-xs font-mono">
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 flex items-center justify-between">
            <span className="text-slate-400">Total Deployment Nodes:</span>
            <span className="text-emerald-400 font-bold font-mono">38 / 38 Online</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 flex items-center justify-between">
            <span className="text-slate-400">Vibex Network Hub:</span>
            <span className="text-blue-400 font-bold font-mono">20 Endpoints</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 flex items-center justify-between">
            <span className="text-slate-400">Vercel Edge Mirrors:</span>
            <span className="text-emerald-400 font-bold font-mono">18 Endpoints</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 flex items-center justify-between">
            <span className="text-slate-400">Cluster Status:</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              100% Operational
            </span>
          </div>
        </div>

        {/* Filters and Search Toolbar */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 mb-8 space-y-4 shadow-2xl backdrop-blur-md">
          {/* Top row: Platform filters & View mode switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter platforms">
              <button
                type="button"
                onClick={() => handleProductFilterClick('all')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                  activeProductFilter === 'all'
                    ? 'bg-emerald-400 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {t.filterAll[currentLang]}
              </button>
              <button
                type="button"
                onClick={() => handleProductFilterClick('spotlight')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
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
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
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
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
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
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                  activeProductFilter === 'mode'
                    ? 'bg-pink-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Shirt className="w-3 h-3 text-pink-400" />
                <span>{t.filterMode[currentLang]}</span>
              </button>
            </div>

            {/* Right side controls: Host type & View toggle */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                <span className="text-[10px] text-slate-500 px-2 font-mono">HOST:</span>
                <button
                  type="button"
                  onClick={() => setActiveHostFilter('all')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    activeHostFilter === 'all'
                      ? 'bg-slate-800 text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setActiveHostFilter('vibex')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    activeHostFilter === 'vibex'
                      ? 'bg-slate-800 text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Vibex
                </button>
                <button
                  type="button"
                  onClick={() => setActiveHostFilter('vercel')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    activeHostFilter === 'vercel'
                      ? 'bg-slate-800 text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Vercel
                </button>
              </div>

              {/* View Switcher: Grid vs Table */}
              <div className="hidden sm:flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-white'
                  }`}
                  aria-label="Grid View"
                  title="Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'table' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-white'
                  }`}
                  aria-label="Table View"
                  title="Console Table View"
                >
                  <TableIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Search bar & active counters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder[currentLang]}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono"
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

            <div className="text-xs text-slate-400 flex items-center gap-2 self-end sm:self-auto font-mono">
              <span>Nodes:</span>
              <span className="font-bold text-white bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                {filteredDeployments.length} / 38
              </span>
              <span>online</span>
            </div>
          </div>
        </div>

        {/* View Mode 1: Rich Cards Grid */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDeployments.map((dep) => (
              <div
                key={dep.id}
                className="bg-slate-950/80 border border-slate-800/90 hover:border-slate-700 rounded-2xl p-5 transition-all duration-150 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                      {getProductIcon(dep.productKey)}
                      <span>{dep.productName}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${
                          dep.hostType === 'vibex'
                            ? 'bg-blue-950/60 text-blue-400 border-blue-900/60'
                            : 'bg-emerald-950/60 text-emerald-400 border-emerald-900/60'
                        }`}
                      >
                        {dep.hostType.toUpperCase()}
                      </span>
                      {dep.isPrimary && (
                        <span className="text-[10px] font-bold bg-emerald-400 text-slate-950 px-2 py-0.5 rounded-md">
                          MAIN
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {dep.title}
                    </h4>
                    <div className="text-[11px] font-mono text-slate-400 truncate mt-1 bg-slate-900/90 px-3 py-2 rounded-xl border border-slate-800/80 select-all">
                      {dep.url}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-3.5 border-t border-slate-900 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(dep.id, dep.url)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all active:scale-95"
                    aria-label={`Copy link for ${dep.title}`}
                  >
                    {copiedId === dep.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">{t.copied[currentLang]}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>{t.copyLink[currentLang]}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={dep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md shadow-emerald-500/10 active:scale-95"
                  >
                    <span>{t.openLink[currentLang]}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* View Mode 2: High-Density Console Table View */
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900/90 text-slate-400 uppercase tracking-wider border-b border-slate-800 text-[11px]">
                  <tr>
                    <th scope="col" className="py-3.5 px-5">Platform</th>
                    <th scope="col" className="py-3.5 px-5">Deployment Node</th>
                    <th scope="col" className="py-3.5 px-5">Cluster Provider</th>
                    <th scope="col" className="py-3.5 px-5">Endpoint URL</th>
                    <th scope="col" className="py-3.5 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900">
                  {filteredDeployments.map((dep) => (
                    <tr key={dep.id} className="hover:bg-slate-900/50 transition-colors">
                      <td className="py-3 px-5 font-sans font-bold text-slate-200 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {getProductIcon(dep.productKey)}
                          <span>{dep.productName}</span>
                        </div>
                      </td>
                      <td className="py-3 px-5 text-white font-sans font-semibold whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span>{dep.title}</span>
                          {dep.isPrimary && (
                            <span className="text-[10px] bg-emerald-400 text-slate-950 px-1.5 py-0.5 rounded font-bold">
                              MAIN
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-5 whitespace-nowrap">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold border ${
                            dep.hostType === 'vibex'
                              ? 'bg-blue-950/60 text-blue-400 border-blue-900/60'
                              : 'bg-emerald-950/60 text-emerald-400 border-emerald-900/60'
                          }`}
                        >
                          {dep.hostType.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3 px-5 text-slate-400 truncate max-w-xs font-mono select-all">
                        {dep.url}
                      </td>
                      <td className="py-3 px-5 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleCopy(dep.id, dep.url)}
                            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
                            title="Copy URL"
                          >
                            {copiedId === dep.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <a
                            href={dep.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filteredDeployments.length === 0 && (
          <div className="text-center py-16 bg-slate-950/60 rounded-3xl border border-slate-800/80">
            <p className="text-sm text-slate-400 font-medium">
              No deployment nodes matched your search criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveProductFilter('all');
                setActiveHostFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-emerald-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
