import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { 
  Truck, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  PhoneCall, 
  CreditCard,
  Building,
  Navigation
} from 'lucide-react';
import { getSiteUrl } from '../config/seo';

export const IslamabadDeliveryPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const siteUrl = getSiteUrl();

  const featuredPerfumes = PRODUCTS.filter(p => p.isBestSeller || p.id === 'black-oud' || p.id === 'creed-aventus' || p.id === 'baccarat-rouge');

  const islamabadSectors = [
    { zone: 'Sector F & Blue Area', areas: 'F-6, F-7, F-8, F-10, F-11, E-7, Blue Area Business District' },
    { zone: 'Sector G & Diplomatic Enclave', areas: 'G-6, G-7, G-8, G-9, G-10, G-11, G-13, G-14, Diplomatic Enclave' },
    { zone: 'Sector H & Educational City', areas: 'H-8, H-9, H-10, H-11, H-12 (NUST Campus), H-13' },
    { zone: 'Sector I & Commercial Hubs', areas: 'I-8 (Markaz & Residential), I-9, I-10, I-11' },
    { zone: 'Suburbs & Gated Enclaves', areas: 'Bahria Town (Phase 1–8), DHA Phase 2 & DHA Valley, Gulberg Greens, Chak Shahzad, Bani Gala' }
  ];

  const deliveryFaqs = [
    {
      question: "How fast is perfume delivery in Islamabad?",
      answer: "Orders confirmed before 5:00 PM with verified advance payment are dispatched via dedicated express twin-cities rider and delivered the very same evening across central Islamabad sectors (F, G, H, I, and Blue Area). For southern suburbs like Bahria Town and DHA-2, delivery is completed within 3 to 5 hours of payment confirmation."
    },
    {
      question: "Do you have a physical perfume shop located inside Islamabad?",
      answer: "Our main physical studio and blending laboratory is located at Dhoke Chiragh Deen, Rawalpindi 46000 (just 15–20 minutes from Blue Area and Islamabad Highway). Islamabad clients frequently order online or via WhatsApp for immediate courier delivery, or visit our Rawalpindi Studio in person to experience the full 35% Extrait collection."
    },
    {
      question: "Is Cash on Delivery (COD) available for Islamabad perfume orders?",
      answer: "No. Bin Irfan Fragrances operates under a strict 100% advance payment policy for both twin-cities deliveries and nationwide shipping. You can safely complete payment via Bank Transfer (Meezan / HBL / Alfalah), EasyPaisa, JazzCash, or Raast instant QR transfer."
    },
    {
      question: "What fragrance concentration do you deliver?",
      answer: "All Bin Irfan perfumes are handcrafted Extrait De Parfum with an industry-leading 35% fragrance oil concentration. They are formulated to withstand Pakistan's heat and climate, providing 14 to 18 hours of continuous presence."
    },
    {
      question: "Can I test perfumes before purchasing in Islamabad?",
      answer: "We offer the Explorer Discovery Kit (5 x 5ml spray vials) which lets you sample five distinct olfactory families in the comfort of your home. Alternatively, you are welcome to visit our Dhoke Chiragh Deen studio in Rawalpindi for complimentary olfactory consultations."
    }
  ];

  // Schema.org Structured Data
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'DeliveryService',
    name: 'Bin Irfan Fragrances Same-Day Islamabad Delivery',
    provider: {
      '@type': 'PerfumeStore',
      name: 'Bin Irfan Fragrances',
      telephone: '+923165312301',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dhoke Chiragh Deen',
        addressLocality: 'Rawalpindi',
        addressRegion: 'Punjab',
        postalCode: '46000',
        addressCountry: 'PK'
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'Islamabad'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '35% Extrait De Parfum Express Delivery',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Same-Day Express Rider Perfume Delivery Islamabad'
          }
        }
      ]
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: deliveryFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Same-Day Perfume Delivery in Islamabad | 35% Extrait — Bin Irfan Fragrances"
        description="Order handcrafted 35% Extrait de Parfum with same-day express rider delivery across Islamabad (Sectors F, G, H, I, Blue Area, Bahria, DHA). Dispatched from our Dhoke Chiragh Deen studio."
        keywords="perfume delivery Islamabad, buy perfume online Islamabad, best perfume shop Islamabad, luxury perfumes Islamabad, same day fragrance delivery Islamabad, mens perfume Islamabad"
        canonicalPath="/perfume-delivery-islamabad"
        schema={[serviceSchema, faqSchema]}
      />

      <div className="bg-brand-light-bg min-h-screen pb-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-brand-blue-soft/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-brand-blue-dark transition-colors font-medium">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link to="/perfume-shop-rawalpindi" className="hover:text-brand-blue-dark transition-colors font-medium">Rawalpindi Studio</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-brand-blue-dark font-semibold">Islamabad Delivery</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white via-brand-blue-soft/30 to-brand-light-bg py-12 md:py-16 border-b border-brand-blue-soft/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Same-Day Express Rider Delivery Across Islamabad</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight mb-4">
                  Luxury 35% Extrait De Parfum Delivered to Your Doorstep in Islamabad
                </h1>
                <p className="text-base sm:text-lg text-slate-600 font-medium mb-6">
                  Experience artisanal, 14–18 hour longevity fragrances formulated for the capital's discerning tastemakers. Express twin-cities dispatch from our Dhoke Chiragh Deen studio.
                </p>

                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-amber-900 mb-6 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Transparent Studio Notice:</strong> Our physical flagship studio is located right across the twin-city border at <em>Dhoke Chiragh Deen, Rawalpindi 46000</em>. For clients across Islamabad, we offer seamless same-day rider dispatch upon verified advance payment.
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/923215186400?text=Hello%20Bin%20Irfan%20Fragrances,%20I%20would%20like%20to%20place%20an%20express%20Islamabad%20perfume%20delivery%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>WhatsApp Express Order (+92 321 5186400)</span>
                  </a>
                  <Link
                    to="/shop"
                    className="px-6 py-3 bg-brand-blue-dark hover:bg-brand-blue text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
                  >
                    <span>Browse All Perfumes</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Delivery Stats Card */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-blue-soft/80 shadow-luxury-card">
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-brand-blue-dark" />
                    <span>Islamabad Delivery Protocol</span>
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                      <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block">Same-Day Cut-Off: 5:00 PM PKT</strong>
                        <span className="text-slate-500">Orders verified before 5:00 PM are delivered the same evening.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                      <CreditCard className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block">100% Advance Payment Policy</strong>
                        <span className="text-slate-500">Bank Transfer, EasyPaisa, JazzCash, or Raast. No COD.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block">35% Extrait Oil Formulation</strong>
                        <span className="text-slate-500">Guaranteed 14–18 hour projection in subcontinental weather.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Navigation className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block">Studio Distance: ~18 Minutes</strong>
                        <span className="text-slate-500">Dhoke Chiragh Deen, RWP to Islamabad Zero Point / Blue Area.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Islamabad Sector Coverage Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark">Comprehensive Coverage</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
              Islamabad Delivery Zones &amp; Sectors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our dedicated twin-cities express riders cover all residential, commercial, and diplomatic enclaves in Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {islamabadSectors.map((sec, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-brand-blue-soft shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-4 h-4 text-brand-blue-dark" />
                    <h3 className="text-sm font-bold text-slate-900">{sec.zone}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{sec.areas}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
                  <span>Same-Day Express Active</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Fragrances for Islamabad Clients */}
        <section className="bg-white py-14 border-y border-brand-blue-soft/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Capital Favorites</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                  Most Requested Fragrances in Islamabad
                </h2>
              </div>
              <Link to="/shop" className="text-xs font-semibold text-brand-blue-dark hover:text-brand-blue flex items-center gap-1">
                <span>View All</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
              {featuredPerfumes.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Delivery FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark">Twin-Cities Logistics</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
              Islamabad Perfume Delivery FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {deliveryFaqs.map((faq, index) => {
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

        {/* Studio Visit CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-brand-blue-dark rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-luxury-card">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Visit Us In Person</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-2 mb-4">
                Prefer to Test Fragrances in Person? Visit Our Rawalpindi Studio
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 mb-6 leading-relaxed">
                Located at Dhoke Chiragh Deen, Rawalpindi 46000—just off Murree Road. Experience private olfactory trials, consult with our fragrance specialists, and select your custom signature extrait.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/perfume-shop-rawalpindi"
                  className="px-5 py-2.5 bg-brand-gold text-slate-900 rounded-xl text-xs font-bold hover:bg-amber-400 transition-colors"
                >
                  View Studio Location &amp; Hours
                </Link>
                <Link
                  to="/collections"
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition-colors border border-white/20"
                >
                  Explore All Collections
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
