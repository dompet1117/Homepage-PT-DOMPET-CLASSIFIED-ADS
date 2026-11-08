export interface DeploymentMirror {
  id: string;
  url: string;
  hostType: 'vibex' | 'vercel';
  title: string;
  isPrimary?: boolean;
}

export interface AIProduct {
  id: string;
  key: 'spotlight' | 'adnet' | 'minutes' | 'mode';
  name: string;
  tagline: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  category: {
    en: string;
    id: string;
  };
  accentColor: string;
  gradient: string;
  bgGlow: string;
  iconName: string;
  metrics: {
    label: { en: string; id: string };
    value: string;
  }[];
  capabilities: {
    en: string;
    id: string;
  }[];
  coreBenefits: {
    title: { en: string; id: string };
    desc: { en: string; id: string };
  }[];
  primaryUrl: string;
  deployments: DeploymentMirror[];
  interactiveDemo: {
    type: 'spotlight' | 'adnet' | 'minutes' | 'mode';
    promptPlaceholder: { en: string; id: string };
    sampleOutputs: {
      title: { en: string; id: string };
      result: { en: string; id: string };
      meta: string;
    }[];
  };
}

export const PRODUCTS: AIProduct[] = [
  {
    id: 'spotlight-ai',
    key: 'spotlight',
    name: 'Spotlight AI Studio',
    tagline: {
      en: 'Next-Generation AI Visual & Brand Showcase Studio',
      id: 'Studio Visual & Etalase Brand Bertenaga AI Generasi Terbaru',
    },
    description: {
      en: 'A premier creative AI platform engineered to spotlight brands, products, and marketing narratives through high-impact visual intelligence, automated asset synthesis, and dynamic storefront showcases.',
      id: 'Platform AI kreatif unggulan yang dirancang untuk menonjolkan brand, produk, dan narasi pemasaran melalui kecerdasan visual berdampak tinggi, sintesis aset otomatis, dan etalase digital dinamis.',
    },
    category: {
      en: 'Visual AI & Brand Showcase',
      id: 'AI Visual & Etalase Brand',
    },
    accentColor: '#3B82F6',
    gradient: 'from-blue-600 to-indigo-600',
    bgGlow: 'rgba(59, 130, 246, 0.15)',
    iconName: 'Sparkles',
    metrics: [
      { label: { en: 'Visual Asset Speed', id: 'Kecepatan Sintesis Visual' }, value: '10x Faster' },
      { label: { en: 'Engagement Lift', id: 'Peningkatan Engagement' }, value: '+140%' },
      { label: { en: 'Live Mirrors', id: 'Mirror Aktif' }, value: '6 Endpoints' },
    ],
    capabilities: [
      { en: 'Automated Brand Asset & Banner Studio', id: 'Studio Pembuatan Aset Brand & Banner Otomatis' },
      { en: 'Dynamic Product Spotlight & Visual Enhancer', id: 'Penyorot Produk Dinamis & Peningkat Visual' },
      { en: 'Multi-Channel Social Showcase Formats', id: 'Format Showcase Multi-Saluran Media Sosial' },
      { en: 'One-Click Creative Scaling & Localization', id: 'Skalabilitas & Lokalisasi Kreatif Sekali Klik' },
    ],
    coreBenefits: [
      {
        title: { en: 'Hyper-Fast Creative Output', id: 'Output Kreatif Super Cepat' },
        desc: { en: 'Eliminate design bottlenecks and produce campaign-ready visuals in seconds.', id: 'Hilangkan kendala desain dan hasilkan visual siap kampanye dalam hitungan detik.' }
      },
      {
        title: { en: 'Brand Consistency at Scale', id: 'Konsistensi Brand Skala Besar' },
        desc: { en: 'Maintain cohesive visual identity across dozens of product launches.', id: 'Jaga identitas visual yang serasi di puluhan peluncuran produk.' }
      },
      {
        title: { en: 'Interactive Storefronts', id: 'Etalase Toko Interaktif' },
        desc: { en: 'Transform static listings into captivating, AI-augmented showcases.', id: 'Ubah katalog statis menjadi etalase menarik yang diperkaya AI.' }
      }
    ],
    primaryUrl: 'https://spotlightaistudio.vibex.business/',
    deployments: [
      { id: 'spotlight-1', url: 'https://spotlightaistudio.vibex.business/', hostType: 'vibex', title: 'Spotlight AI Studio (Main)', isPrimary: true },
      { id: 'spotlight-2', url: 'https://spotlight-ai-one.vercel.app/', hostType: 'vercel', title: 'Spotlight AI One (Vercel)' },
      { id: 'spotlight-3', url: 'https://spotlight.ai.vibex.business/', hostType: 'vibex', title: 'Spotlight AI (Direct Vibex)' },
      { id: 'spotlight-4', url: 'https://spotlight-ai-idvf.vercel.app/', hostType: 'vercel', title: 'Spotlight AI IDVF (Vercel)' },
      { id: 'spotlight-5', url: 'https://spotlightai.vibex.business/', hostType: 'vibex', title: 'SpotlightAI Vibex' },
      { id: 'spotlight-6', url: 'https://spotlight-ai-zst5.vercel.app/', hostType: 'vercel', title: 'Spotlight AI ZST5 (Vercel)' },
    ],
    interactiveDemo: {
      type: 'spotlight',
      promptPlaceholder: {
        en: 'e.g. Luxury organic coffee brand with morning mist aesthetic...',
        id: 'contoh: Brand kopi organik premium dengan estetika kabut pagi...',
      },
      sampleOutputs: [
        {
          title: { en: 'Hero Product Spotlight', id: 'Sorotan Produk Unggulan' },
          result: { en: 'Generated studio lighting, 4K depth pass, and automated product value badge highlighting single-origin altitude.', id: 'Pencahayaan studio otomatis, kedalaman 4K, dan badge nilai produk terpasang rapi.' },
          meta: 'Render Time: 1.4s · Resolution: 4K HDR'
        },
        {
          title: { en: 'Omni-Channel Ad Banner Set', id: 'Paket Banner Iklan Multi-Channel' },
          result: { en: 'Synthesized 6 responsive ratios (1:1, 9:16, 16:9, 4:5) with optimized high-contrast typography and focal points.', id: 'Sintesis 6 rasio responsif (1:1, 9:16, 16:9, 4:5) dengan tipografi kontras tinggi yang teroptimasi.' },
          meta: 'Export: PNG, WebP & SVG Vector Layer'
        }
      ]
    }
  },
  {
    id: 'ad-net-ai',
    key: 'adnet',
    name: 'Ad-Net AI — Advertising Network',
    tagline: {
      en: 'AI-Powered Classifieds & Precision Advertising Network',
      id: 'Jaringan Iklan Baris & Periklanan Presisi Bertenaga AI',
    },
    description: {
      en: 'The flagship ad network and classifieds intelligence infrastructure engineered by PT DOMPET CLASSIFIED ADS. Automatically matches high-intent buyers with verified sellers, optimizes dynamic classified ad placements, and multiplies publisher yield with predictive machine learning.',
      id: 'Infrastruktur periklanan dan kecerdasan iklan baris unggulan oleh PT DOMPET CLASSIFIED ADS. Secara cerdas mencocokkan pembeli berkeinginan tinggi dengan penjual terverifikasi, mengoptimalkan penempatan iklan baris dinamis, dan melipatgandakan hasil penayang iklan.',
    },
    category: {
      en: 'AdTech & Classifieds Ecosystem',
      id: 'AdTech & Ekosistem Iklan Baris',
    },
    accentColor: '#10B981',
    gradient: 'from-emerald-600 to-teal-700',
    bgGlow: 'rgba(16, 185, 129, 0.15)',
    iconName: 'Network',
    metrics: [
      { label: { en: 'Click-Through Rate', id: 'Tingkat Klik (CTR)' }, value: '3.8x Above Avg' },
      { label: { en: 'Publisher Yield', id: 'Hasil Penayang' }, value: '+68% ROI' },
      { label: { en: 'Active Network Mirrors', id: 'Mirror Jaringan Aktif' }, value: '18 Endpoints' },
    ],
    capabilities: [
      { en: 'Automated Classifieds Matching Engine', id: 'Mesin Pencocokan Iklan Baris Otomatis' },
      { en: 'Real-Time Bid & Dynamic Placement Optimization', id: 'Optimasi Bid Real-Time & Penempatan Dinamis' },
      { en: 'Fraud Prevention & Seller Verification Filter', id: 'Pencegahan Penipuan & Filter Verifikasi Penjual' },
      { en: 'Cross-Network Ad Syndication across Vibex & Partner Nodes', id: 'Sindikasi Iklan Lintas Jaringan di Node Vibex & Mitra' },
    ],
    coreBenefits: [
      {
        title: { en: 'Precision Targeting', id: 'Targeting Presisi' },
        desc: { en: 'Match classified listings with active purchasing queries using contextual intent AI.', id: 'Cocokkan listing iklan baris dengan niat beli aktif menggunakan AI kontekstual.' }
      },
      {
        title: { en: 'Automated Yield Optimization', id: 'Optimasi Hasil Otomatis' },
        desc: { en: 'Maximize revenue per impression through autonomous algorithmic bidding.', id: 'Maksimalkan pendapatan per impresi lewat penawaran algoritmik otonom.' }
      },
      {
        title: { en: 'Enterprise Classifieds Hub', id: 'Hub Iklan Baris Skala Korporat' },
        desc: { en: 'High-throughput architecture built for millions of concurrent classified impressions.', id: 'Arsitektur berkecepatan tinggi yang dirancang untuk jutaan impresi iklan baris serentak.' }
      }
    ],
    primaryUrl: 'https://ad-net.vibex.business/',
    deployments: [
      { id: 'adnet-1', url: 'https://ad.net-ai.vibex.business/', hostType: 'vibex', title: 'Ad.Net-AI Vibex' },
      { id: 'adnet-2', url: 'https://ad-net-ai-advertising-network-m9rk.vercel.app/', hostType: 'vercel', title: 'Ad-Net AI Network (m9rk Vercel)' },
      { id: 'adnet-3', url: 'https://ad-net-ai.vibex.business/', hostType: 'vibex', title: 'Ad-Net-AI Vibex' },
      { id: 'adnet-4', url: 'https://ad-net-ai-advertising-network-z14l.vercel.app/', hostType: 'vercel', title: 'Ad-Net AI Network (z14l Vercel)' },
      { id: 'adnet-5', url: 'https://ad.net.ai.vibex.business/', hostType: 'vibex', title: 'Ad.Net.AI Vibex' },
      { id: 'adnet-6', url: 'https://ad-net-ai-advertising-network-ny76-kohl.vercel.app/', hostType: 'vercel', title: 'Ad-Net AI Network (ny76 Vercel)' },
      { id: 'adnet-7', url: 'https://adnet-ai.vibex.business/', hostType: 'vibex', title: 'Adnet-AI Vibex' },
      { id: 'adnet-8', url: 'https://ad-net-ai-advertising-network-a26l.vercel.app/', hostType: 'vercel', title: 'Ad-Net AI Network (a26l Vercel)' },
      { id: 'adnet-9', url: 'https://adnet.ai.vibex.business/', hostType: 'vibex', title: 'Adnet.AI Vibex' },
      { id: 'adnet-10', url: 'https://ad-net-ai-advertising-network-78ac.vercel.app/', hostType: 'vercel', title: 'Ad-Net AI Network (78ac Vercel)' },
      { id: 'adnet-11', url: 'https://adnet.vibex.business/', hostType: 'vibex', title: 'Adnet Vibex' },
      { id: 'adnet-12', url: 'https://ad-net-ai-advertising-network-hbw6.vercel.app/', hostType: 'vercel', title: 'Ad-Net AI Network (hbw6 Vercel)' },
      { id: 'adnet-13', url: 'https://ad.net.vibex.business/', hostType: 'vibex', title: 'Ad.Net Vibex' },
      { id: 'adnet-14', url: 'https://ad-net-ai-advertising-network-k47l.vercel.app/', hostType: 'vercel', title: 'Ad-Net AI Network (k47l Vercel)' },
      { id: 'adnet-15', url: 'https://adnetai.vibex.business/', hostType: 'vibex', title: 'AdnetAI Vibex' },
      { id: 'adnet-16', url: 'https://ad-net-ai-advertising-network-ywo5.vercel.app/', hostType: 'vercel', title: 'Ad-Net AI Network (ywo5 Vercel)' },
      { id: 'adnet-17', url: 'https://ad-net.vibex.business/', hostType: 'vibex', title: 'Ad-Net Vibex (Main Network)', isPrimary: true },
      { id: 'adnet-18', url: 'https://ad-net-ai-advertising-network.vercel.app/', hostType: 'vercel', title: 'Ad-Net AI Network (Primary Vercel)' },
    ],
    interactiveDemo: {
      type: 'adnet',
      promptPlaceholder: {
        en: 'e.g. B2B SaaS classified placement for manufacturing ERP software...',
        id: 'contoh: Penempatan iklan baris B2B SaaS untuk software manufaktur...',
      },
      sampleOutputs: [
        {
          title: { en: 'Intelligent Audience Match & CPM Route', id: 'Pencocokan Audiens Cerdas & Rute CPM' },
          result: { en: 'Matched with 42,000 verified industrial procurement managers. Optimal bid recommendation: $1.28 eCPM (saving 34% vs search ad averages).', id: 'Cocok dengan 42.000 pengambil keputusan industri terverifikasi. Rekomendasi bid: hemat 34% dibanding rata-rata iklan pencarian.' },
          meta: 'Targeting Precision: 98.4% · Estimated CTR: 4.2%'
        },
        {
          title: { en: 'Dynamic Classified Copy Variations', id: 'Variasi Teks Iklan Baris Dinamis' },
          result: { en: 'Autogenerated 3 conversion-focused headlines optimized for high-intent B2B searchers with immediate trust proofing.', id: 'Membuat 3 variasi judul berkonversi tinggi dengan bukti kredibilitas terintegrasi.' },
          meta: 'Format: Classified Card, Sidebar Stream & Native Feed'
        }
      ]
    }
  },
  {
    id: 'minutes-ai',
    key: 'minutes',
    name: 'Minutes AI',
    tagline: {
      en: 'Executive Meeting Intelligence & Productivity Engine',
      id: 'Kecerdasan Rapat Eksekutif & Mesin Produktivitas Kerja',
    },
    description: {
      en: 'Eliminate hours lost to manual note-taking and missed action items. Minutes AI records, transcribes, separates speakers, and synthesizes executive minutes, boardroom decisions, and automated Jira/Trello action items in real-time.',
      id: 'Hilangkan waktu terbuang untuk mencatat manual dan tindak lanjut yang terlewat. Minutes AI mentranskripsikan, memisahkan pembicara, dan menyintesis notula rapat eksekutif, keputusan dewan, serta tugas otomatis secara langsung.',
    },
    category: {
      en: 'Meeting Intelligence & Corporate Speed',
      id: 'Kecerdasan Notula & Efisiensi Rapat',
    },
    accentColor: '#8B5CF6',
    gradient: 'from-violet-600 to-purple-700',
    bgGlow: 'rgba(139, 92, 246, 0.15)',
    iconName: 'FileText',
    metrics: [
      { label: { en: 'Note-Taking Time Saved', id: 'Waktu Notula Dihemat' }, value: '85% Savings' },
      { label: { en: 'Action Item Precision', id: 'Presisi Tindak Lanjut' }, value: '99.2%' },
      { label: { en: 'Active Deployment Mirrors', id: 'Mirror Aktif' }, value: '6 Endpoints' },
    ],
    capabilities: [
      { en: 'Multi-Speaker Diarization & Audio Processing', id: 'Pemisahan Pembicara & Pemrosesan Audio Otomatis' },
      { en: 'Executive Summary & Decision Matrix Extraction', id: 'Ringkasan Eksekutif & Matriks Keputusan Rapat' },
      { en: 'Automated Task Assignment & Follow-Up Reminders', id: 'Penetapan Tugas Otomatis & Pengingat Lanjutan' },
      { en: 'Multi-Lingual Transcription (Indonesian, English & 30+ languages)', id: 'Transkripsi Multi-Bahasa (Indonesia, Inggris & 30+ bahasa)' },
    ],
    coreBenefits: [
      {
        title: { en: 'Never Miss a Strategic Decision', id: 'Jangan Lewatkan Keputusan Strategis' },
        desc: { en: 'Searchable executive audit trail for all strategic syncs and client agreements.', id: 'Jejak audit eksekutif yang dapat dicari untuk semua rapat strategis dan kesepakatan klien.' }
      },
      {
        title: { en: 'Immediate Action Item Routing', id: 'Distribusi Tugas Langsung' },
        desc: { en: 'Instantly push deliverables to team leads with explicit deadlines and owners.', id: 'Kirim tanggung jawab tugas langsung ke tim terkait dengan tenggat waktu yang jelas.' }
      },
      {
        title: { en: '5-Minute Post-Meeting Brevity', id: 'Ringkasan Cepat 5 Menit' },
        desc: { en: 'Catch up on 60-minute boardroom sessions in concise 2-minute executive briefs.', id: 'Pahami rapat dewan 60 menit dalam ringkasan eksekutif 2 menit yang padat.' }
      }
    ],
    primaryUrl: 'https://minutes.ai.vibex.business/',
    deployments: [
      { id: 'minutes-1', url: 'https://minutes.ai.vibex.business/', hostType: 'vibex', title: 'Minutes.AI Vibex (Main)', isPrimary: true },
      { id: 'minutes-2', url: 'https://minutes-ai-gamma.vercel.app/', hostType: 'vercel', title: 'Minutes AI Gamma (Vercel)' },
      { id: 'minutes-3', url: 'https://minutes-ai.vibex.business/', hostType: 'vibex', title: 'Minutes-AI Vibex' },
      { id: 'minutes-4', url: 'https://minutes-ai-2kd8.vercel.app/', hostType: 'vercel', title: 'Minutes AI 2kd8 (Vercel)' },
      { id: 'minutes-5', url: 'https://minutesai.vibex.business/', hostType: 'vibex', title: 'MinutesAI Vibex' },
      { id: 'minutes-6', url: 'https://minutes-ai-sno7.vercel.app/', hostType: 'vercel', title: 'Minutes AI SNO7 (Vercel)' },
    ],
    interactiveDemo: {
      type: 'minutes',
      promptPlaceholder: {
        en: 'e.g. Q4 budget allocation meeting between Finance and Operations...',
        id: 'contoh: Rapat alokasi anggaran Q4 antara Divisi Keuangan dan Operasional...',
      },
      sampleOutputs: [
        {
          title: { en: 'Executive Minutes & Decisions Log', id: 'Notula Eksekutif & Log Keputusan' },
          result: { en: 'Approved $45k allocation for AI automation platform rollouts. Operational headcount frozen for Q1. Review date set for Dec 15.', id: 'Disetujui alokasi dana platform otomatisasi AI. Rekrutmen operasional dibekukan untuk Q1. Jadwal evaluasi ditetapkan tanggal 15 Des.' },
          meta: 'Confidence: 99.4% · 3 Action Items Extracted'
        },
        {
          title: { en: 'Direct Task Assignments', id: 'Penugasan Tugas Langsung' },
          result: { en: '1. Sarah: Finalize vendor SLAs by Friday. 2. Budi: Consolidate classified ad inventory analytics before next board review.', id: '1. Sarah: Finalisasi SLA vendor hari Jumat. 2. Budi: Konsolidasi analitik inventaris iklan baris sebelum rapat dewan berikutnya.' },
          meta: 'Export format: PDF, Notion, Slack & Email'
        }
      ]
    }
  },
  {
    id: 'mode-ai',
    key: 'mode',
    name: 'Mode AI / Mode AI Studio',
    tagline: {
      en: 'Professional AI Fashion & Apparel Design Studio',
      id: 'Studio Desain Fashion & Busana Profesional Bertenaga AI',
    },
    description: {
      en: 'Empowering fashion brands, garment manufacturers, and independent designers with generative fashion engineering. Create bespoke apparel mockups, preview 3D textiles, predict seasonal silhouettes, and compress design-to-production cycles from weeks to minutes.',
      id: 'Memberdayakan brand fashion, manufaktur garmen, dan desainer independen dengan rekayasa fashion generatif. Buat mockup busana kustom, pratinjau tekstil 3D, prediksi tren musiman, dan pangkas siklus desain-ke-produksi dari hitungan minggu menjadi menit.',
    },
    category: {
      en: 'Generative Fashion & Apparel CAD',
      id: 'Fashion Generatif & CAD Busana',
    },
    accentColor: '#EC4899',
    gradient: 'from-pink-600 to-rose-600',
    bgGlow: 'rgba(236, 72, 153, 0.15)',
    iconName: 'Shirt',
    metrics: [
      { label: { en: 'Sample Turnaround', id: 'Waktu Prototipe Sampel' }, value: '92% Quicker' },
      { label: { en: 'Material Waste Reduction', id: 'Pengurangan Sampah Kain' }, value: '-45% Waste' },
      { label: { en: 'Active Design Mirrors', id: 'Mirror Desain Aktif' }, value: '8 Endpoints' },
    ],
    capabilities: [
      { en: 'Generative Fashion Mockups & Photorealistic Models', id: 'Mockup Fashion Generatif & Model Fotorealistik' },
      { en: 'Batik & Modern Textile Pattern Synthesizer', id: 'Sintesis Pola Batik & Tekstil Kontemporer' },
      { en: 'Technical Flat & Spec Sheet Generation for Factories', id: 'Pembuatan Pola Datar & Lembar Spesifikasi Teknis Pabrik' },
      { en: 'Seasonal Color Palette & Runway Trend Forecaster', id: 'Peramalan Tren Warna Musiman & Palet Fashion Dunia' },
    ],
    coreBenefits: [
      {
        title: { en: 'Accelerate Collection Prototyping', id: 'Akselerasi Prototipe Koleksi' },
        desc: { en: 'Test 50 new silhouettes and print variants before cutting a single yard of fabric.', id: 'Uji 50 siluet baru dan varian motif sebelum memotong satu meter kain pun.' }
      },
      {
        title: { en: 'Seamless Factory Handoff', id: 'Transisi Lancar ke Pabrik Garmen' },
        desc: { en: 'Export clean tech packs with measurements, stitch specs, and material callouts.', id: 'Ekspor tech pack lengkap dengan ukuran, instruksi jahitan, dan spesifikasi material.' }
      },
      {
        title: { en: 'Indonesian Heritage & Modern Blend', id: 'Paduan Warisan Nusantara & Modern' },
        desc: { en: 'Synthesize traditional Indonesian motifs with modern streetwear and formal wear cuts.', id: 'Padukan motif warisan budaya nusantara dengan potongan streetwear dan formal modern.' }
      }
    ],
    primaryUrl: 'https://modeai.vibex.business/',
    deployments: [
      { id: 'mode-1', url: 'https://modeai.vibex.business/', hostType: 'vibex', title: 'ModeAI Vibex (Main)', isPrimary: true },
      { id: 'mode-2', url: 'https://mode-ai-professional-fashion-desain-xi.vercel.app/', hostType: 'vercel', title: 'Mode AI Fashion Desain (xi Vercel)' },
      { id: 'mode-3', url: 'https://mode-ai.vibex.business/', hostType: 'vibex', title: 'Mode-AI Vibex' },
      { id: 'mode-4', url: 'https://mode-ai-professional-fashion-desain-tau.vercel.app/', hostType: 'vercel', title: 'Mode AI Fashion Desain (tau Vercel)' },
      { id: 'mode-5', url: 'https://modeaistudio.vibex.business/', hostType: 'vibex', title: 'ModeAI Studio Vibex' },
      { id: 'mode-6', url: 'https://mode-ai-professional-fashion-desain.vercel.app/', hostType: 'vercel', title: 'Mode AI Fashion Desain (Primary Vercel)' },
      { id: 'mode-7', url: 'https://mode.ai.vibex.business/', hostType: 'vibex', title: 'Mode.AI Vibex' },
      { id: 'mode-8', url: 'https://mode-ai-professional-fashion-desain-three.vercel.app/', hostType: 'vercel', title: 'Mode AI Fashion Desain (Three Vercel)' },
    ],
    interactiveDemo: {
      type: 'mode',
      promptPlaceholder: {
        en: 'e.g. Modern minimalist oversized linen blazer with subtle geometric accents...',
        id: 'contoh: Blazer linen oversized minimalis modern dengan aksen geometris halus...',
      },
      sampleOutputs: [
        {
          title: { en: 'Generated Apparel Tech Pack', id: 'Tech Pack Busana Terbuat' },
          result: { en: 'Breathable organic linen structure, notched lapels, relaxed drop-shoulder cut, dual welt pockets, and sustainable horn button details.', id: 'Struktur linen organik sejuk, kerah notched lapel, potongan bahu jatuh santai, saku welt ganda, dan kancing tanduk ramah lingkungan.' },
          meta: 'Resolution: 300 DPI Vector + 3D Render View'
        },
        {
          title: { en: 'Colorway & Fabric Variation', id: 'Variasi Warna & Bahan' },
          result: { en: 'Rendered in 4 seasonal tones: Sand Drift, Terracotta Rust, Deep Sage, and Midnight Indigo with high-fidelity weave texture.', id: 'Disajikan dalam 4 nuansa musiman: Sand Drift, Terracotta Rust, Deep Sage, dan Midnight Indigo dengan tekstur tenun realistis.' },
          meta: 'Factory Specification: Conforms to ISO Garment Standards'
        }
      ]
    }
  }
];

export const COMPANY_INFO = {
  legalName: 'PT DOMPET CLASSIFIED ADS',
  brandName: 'PT DOMPET CLASSIFIED ADS',
  domain: 'dompetclassifiedads.com',
  officialUrl: 'https://dompetclassifiedads.com',
  email: 'indonesia.dompet@gmail.com',
  type: 'Tech Startup / AI Platforms Developer',
  founded: '2025',
  headquarters: 'Indonesia',
  mission: {
    en: 'To help consumers and businesses enhance their business productivity by launching productivity platform products—integrated with AI—designed to simplify and accelerate their business operations.',
    id: 'Membangun perusahaan yang membantu konsumen meningkatkan produktivitas bisnis mereka dengan meluncurkan produk platform produktivitas—terintegrasi dengan AI—yang dirancang untuk menyederhanakan dan mempercepat operasional bisnis mereka.'
  },
  vision: {
    en: 'To be the leading AI productivity ecosystem that transforms everyday business operations into autonomous, frictionless, and high-velocity engines of economic prosperity.',
    id: 'Menjadi ekosistem produktivitas AI terdepan yang mentransformasikan operasional bisnis sehari-hari menjadi mesin pertumbuhan ekonomi yang otonom, efisien, dan berkecepatan tinggi.'
  },
  coreValues: [
    {
      title: { en: 'Frictionless Acceleration', id: 'Akselerasi Tanpa Hambatan' },
      desc: { en: 'Building software that removes delays, bottlenecks, and complexity from daily workflows.', id: 'Membangun perangkat lunak yang menghilangkan penundaan, kendala, dan kerumitan dari alur kerja harian.' }
    },
    {
      title: { en: 'Pragmatic AI Integration', id: 'Integrasi AI Pragmatis' },
      desc: { en: 'AI designed for real enterprise outcomes, measurable ROI, and intuitive user delight.', id: 'AI yang dirancang untuk hasil nyata bisnis, ROI terukur, dan kemudahan bagi pengguna.' }
    },
    {
      title: { en: 'Consumer-Centric Speed', id: 'Kecepatan Berpusat pada Konsumen' },
      desc: { en: 'Putting business users first with reliable, high-availability deployments.', id: 'Mengutamakan pengguna bisnis dengan ketersediaan sistem yang andal dan deployment berkinerja tinggi.' }
    },
    {
      title: { en: 'Data Integrity & Trust', id: 'Integritas Data & Kepercayaan' },
      desc: { en: 'Enterprise-grade privacy protections and secure architectural standards.', id: 'Perlindungan privasi berstandar korporat dan standar arsitektur yang aman.' }
    }
  ],
  stats: [
    { label: { en: 'Flagship Platforms', id: 'Platform Unggulan' }, value: '4' },
    { label: { en: 'Live Deployment Nodes', id: 'Node Deployment Aktif' }, value: '38' },
    { label: { en: 'Domain Authority', id: 'Otoritas Domain' }, value: 'dompetclassifiedads.com' },
    { label: { en: 'Operational Availability', id: 'Ketersediaan Sistem' }, value: '99.9%' },
  ]
};
