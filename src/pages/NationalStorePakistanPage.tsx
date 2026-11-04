import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Package, 
  CreditCard,
  PhoneCall,
  Clock,
  Award,
  Layers
} from 'lucide-react';
import { getSiteUrl } from '../config/seo';

export const NationalStorePakistanPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const siteUrl = getSiteUrl();

  const nationalFaqs = [
    {
      question: "Why choose Bin Irfan Fragrances over imported retail perfumes in Pakistan?",
      answer: "Most imported retail designer perfumes sold in Pakistan are Eau de Toilette (5–10% oil) or standard Eau de Parfum (12–15% oil) which break down rapidly in Pakistan's intense heat and humidity. Bin Irfan handcrafts 35% Extrait De Parfum with dense base notes (Assam agarwood, ambergris, birch smoke, Madagascar vanilla) providing 14 to 18 hours of continuous longevity."
    },
    {
      question: "Which courier services do you use for nationwide delivery across Pakistan?",
      answer: "We partner with Pakistan's premier courier networks including TCS, Leopard Courier, and PostEx to ensure safe, tracked, insured transit across Karachi, Lahore, Faisalabad, Multan, Peshawar, Quetta, Gujranwala, Sialkot, and over 150 cities and towns."
    },
    {
      question: "How long does courier delivery take to Karachi, Lahore, and other cities?",
      answer: "Standard nationwide courier transit takes 2 to 3 business days following payment verification. Once dispatched from our Rawalpindi studio, you receive an automated tracking code to monitor your package in real-time."
    },
    {
      question: "What is your payment policy for online perfume orders?",
      answer: "To ensure operational sustainability, high-purity batch freshness, and zero transit tampering, Bin Irfan operates strictly on 100% advance payment via Bank Transfer, EasyPaisa, JazzCash, or Raast. We do not offer Cash on Delivery."
    },
    {
      question: "What if a perfume bottle is damaged during courier transit?",
      answer: "Every flacon is encased in custom crush-resistant shock-absorbing luxury packaging. In the rare event of transit damage, we provide a 100% immediate free replacement upon receiving an unboxing photo/video proof within 24 hours of package arrival."
    }
  ];

  const nationwideCities = [
    { name: 'Lahore & Punjab', time: '1–2 Days', coverage: 'Lahore, Faisalabad, Gujranwala, Sialkot, Multan, Bahawalpur, Sargodha' },
    { name: 'Karachi & Sindh', time: '2–3 Days', coverage: 'Karachi Central, Clifton, DHA, Gulshan, Hyderabad, Sukkur, Larkana' },
    { name: 'Khyber Pakhtunkhwa', time: '1–2 Days', coverage: 'Peshawar, Abbottabad, Mardan, Swat, Haripur, Kohat, D.I. Khan' },
    { name: 'Balochistan & Gilgit', time: '3–4 Days', coverage: 'Quetta, Gwadar, Turbat, Gilgit, Skardu, Hunza, Mirpur AJK' }
  ];

  // Structured Data
  const onlineStoreSchema = {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    name: 'Bin Irfan Fragrances Online Store Pakistan',
    url: `${siteUrl}/online-perfume-store-pakistan`,
    description: 'Pakistan premier online boutique for handcrafted 35% Extrait de Parfum flacons and discovery sets.',
    telephone: '+923165312301',
    currenciesAccepted: 'PKR',
    paymentAccepted: 'Bank Transfer, EasyPaisa, JazzCash, Raast',
    priceRange: 'PKR 1,500 - PKR 10,500',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dhoke Chiragh Deen',
      addressLocality: 'Rawalpindi',
      addressRegion: 'Punjab',
      postalCode: '46000',
      addressCountry: 'PK'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: nationalFaqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Buy Perfumes Online in Pakistan | 35% Extrait De Parfum — Bin Irfan"
        description="Shop Pakistan's highest-concentration 35% Extrait De Parfum perfumes online. Featuring Black Oud, Creed Aventus, Sauvage, and Baccarat Rouge. Express insured courier delivery nationwide."
        keywords="buy perfume online Pakistan, best online perfume store Pakistan, luxury perfumes Pakistan, long lasting perfumes in Pakistan, mens perfumes Pakistan, extrait de parfum Pakistan, perfume prices in Pakistan"
        canonicalPath="/online-perfume-store-pakistan"
        schema={[onlineStoreSchema, faqSchema]}
      />

      <div className="bg-brand-light-bg min-h-screen pb-20">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-brand-blue-soft/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-brand-blue-dark transition-colors font-medium">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link to="/shop" className="hover:text-brand-blue-dark transition-colors font-medium">Shop</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-brand-blue-dark font-semibold">Buy Perfume Online Pakistan</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white via-brand-blue-soft/20 to-brand-light-bg py-12 md:py-16 border-b border-brand-blue-soft/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue-soft text-brand-blue-dark border border-brand-blue-light/60 mb-4">
                <Award className="w-3.5 h-3.5 text-brand-gold" />
                <span>Pakistan's Artisanal Extrait De Parfum Fragrance House</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight mb-4">
                Buy Long-Lasting Luxury Perfumes Online in Pakistan
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-medium mb-6">
                Engineered with 35% pure fragrance oil for 14 to 18 hours of undeniable projection in Pakistan's climate. Dispatched securely nationwide with full tracking.
              </p>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                <p>
                  Finding genuine, long-lasting luxury perfumes in Pakistan without paying exorbitant import markups or risking counterfeit watered-down bottles has long been a frustration for fragrance lovers. Bin Irfan Fragrances was founded to solve this dilemma: we source premium essential absolutes from Grasse and Assam, compounding them at an uncompromising 35% concentration right in our Rawalpindi laboratory.
                </p>
                <p>
                  From Karachi's coastal humidity to Lahore's dry summers and Islamabad's crisp winters, our Extrait flacons hold their true olfactory structure without turning sour or fading into skin scents.
                </p>
              </div>

              {/* Value Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-white rounded-xl border border-brand-blue-soft shadow-xs text-center">
                  <Sparkles className="w-4 h-4 text-brand-gold mx-auto mb-1.5" />
                  <span className="text-xs font-bold text-slate-900 block">35% Extrait Oil</span>
                  <span className="text-[10px] text-slate-500">Industry Peak</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-blue-soft shadow-xs text-center">
                  <Clock className="w-4 h-4 text-brand-blue mx-auto mb-1.5" />
                  <span className="text-xs font-bold text-slate-900 block">14–18 Hours</span>
                  <span className="text-[10px] text-slate-500">Subcontinental Hold</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-blue-soft shadow-xs text-center">
                  <Truck className="w-4 h-4 text-emerald-600 mx-auto mb-1.5" />
                  <span className="text-xs font-bold text-slate-900 block">2–3 Days</span>
                  <span className="text-[10px] text-slate-500">Tracked Courier</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-blue-soft shadow-xs text-center">
                  <ShieldCheck className="w-4 h-4 text-blue-600 mx-auto mb-1.5" />
                  <span className="text-xs font-bold text-slate-900 block">Breakage Cover</span>
                  <span className="text-[10px] text-slate-500">Free Replacement</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* National Catalogue */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                All Available Perfumes Online in Pakistan
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Authentic prices in PKR. 100% advance payment via Bank Transfer, JazzCash, EasyPaisa, or Raast.
              </p>
            </div>
            <Link
              to="/collections"
              className="text-xs font-semibold text-brand-blue-dark hover:text-brand-blue transition-colors flex items-center gap-1"
            >
              <span>Explore Sets</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Nationwide Transit Coverage */}
        <section className="bg-white py-14 border-y border-brand-blue-soft/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark">Courier Network</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                Nationwide Transit Timelines &amp; Coverage
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Every bottle is packed with multi-layer shock absorption and handed over to TCS, Leopard, or PostEx within 24 hours of payment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {nationwideCities.map((c, i) => (
                <div key={i} className="p-5 rounded-2xl bg-brand-light-bg border border-brand-blue-soft/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-bold text-slate-900">{c.name}</h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-blue-soft text-brand-blue-dark">
                        {c.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">{c.coverage}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Tracked Doorstep Delivery</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* National FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark">Customer Guidance</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
              Buying Perfumes Online in Pakistan — FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {nationalFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-brand-blue-soft/80 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-slate-900 hover:text-brand-blue-dark transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-blue-dark' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
