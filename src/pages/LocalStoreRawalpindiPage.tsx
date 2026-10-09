import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Truck, Sparkles, Navigation, CheckCircle2, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { SEOHead } from '../components/common/SEOHead';
import { getSiteUrl } from '../config/seo';
import { GoogleReviewCTA } from '../components/common/GoogleReviewCTA';

export const LocalStoreRawalpindiPage: React.FC = () => {
  const siteUrl = getSiteUrl();
  const rawalpindiFavorites = PRODUCTS.filter(p => ['black-oud', 'creed-aventus', 'dunhill-desire', 'paradise', 'sauvage-dior', 'royal-trio-bundle'].includes(p.id));

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'PerfumeStore',
    '@id': `${siteUrl}/perfume-shop-rawalpindi#localstore`,
    name: 'Bin Irfan Fragrances — Rawalpindi Studio',
    image: `${siteUrl}/brand/logo.jpg`,
    telephone: '+92 321 5186400',
    email: 'sulaiman234p@gmail.com',
    url: `${siteUrl}/perfume-shop-rawalpindi`,
    priceRange: 'PKR 2,450 - PKR 8,500',
    currenciesAccepted: 'PKR',
    paymentAccepted: 'Bank Transfer, EasyPaisa, JazzCash, Raast (Advance Payment Only)',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'H3X9+8X4, Dhoke Chiragh Deen',
      addressLocality: 'Rawalpindi',
      addressRegion: 'Punjab',
      postalCode: '46000',
      addressCountry: 'PK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5983,
      longitude: 73.0699
    },
    hasMap: 'https://maps.google.com/?cid=4711070535657308662',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '23:30'
      }
    ],
    sameAs: [
      'https://maps.google.com/?cid=4711070535657308662',
      'https://www.facebook.com/bin.irfan.fragrance/',
      'https://www.instagram.com/binirfanfragrances/',
      'https://wa.me/923215186400'
    ],
    areaServed: [
      { '@type': 'City', name: 'Rawalpindi' },
      { '@type': 'City', name: 'Islamabad' }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-light-bg text-brand-slate-900">
      <SEOHead
        title="Perfume Shop in Rawalpindi | Same-Day Delivery in Rawalpindi & Islamabad"
        description="Official Bin Irfan Fragrances studio in Dhoke Chiragh Deen, Rawalpindi (Plus Code H3X9+8X4). 35% Extrait De Parfum flacons, Same-Day Express Delivery across Rawalpindi & Islamabad on 100% Advance Payment."
        keywords="perfume shop in Rawalpindi, perfumes in Rawalpindi, same day perfume delivery Rawalpindi, same day delivery Islamabad, best perfumes in Rawalpindi, Dhoke Chiragh Deen perfume, Bin Irfan Fragrances Rawalpindi, advance payment perfumes Islamabad Rawalpindi"
        canonicalPath="/perfume-shop-rawalpindi"
        schema={localBusinessSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-brand-slate-900 text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-brand-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue-900/40 via-brand-slate-900/90 to-brand-slate-900 pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-semibold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            <span>Rawalpindi Studio • Dhoke Chiragh Deen</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Luxury Fragrances &amp; Flacons <br />
            <span className="text-brand-gold italic">in Rawalpindi &amp; Islamabad</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Welcome to the official fragrance studio of <strong>Bin Irfan Fragrances</strong>. We craft long-lasting 35% Extrait De Parfum flacons formulated to project effortlessly in Pakistan's weather, with same-day order dispatch across Rawalpindi &amp; Islamabad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/923215186400?text=Assalam-o-Alaikum%20Bin%20Irfan%20Fragrances%2C%20I%20am%20in%20Rawalpindi%2FIslamabad%20and%20would%20like%20to%20order%20perfumes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge (+92 321 5186400)</span>
            </a>

            <a
              href="https://maps.google.com/?cid=4711070535657308662"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all backdrop-blur-sm"
            >
              <Navigation className="w-4 h-4 text-brand-gold" />
              <span>Get Studio Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Brand Identity / Anti-Confusion Notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl border border-brand-slate-200 p-5 sm:p-6 shadow-soft flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-blue-50 border border-brand-blue-200 flex items-center justify-center flex-shrink-0 text-brand-blue-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-brand-slate-600">
            <div className="font-bold text-brand-slate-900 text-sm flex items-center gap-2">
              <span>Authentic Bin Irfan Fragrances Identity</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Official Scent Atelier</span>
            </div>
            <p>
              Bin Irfan Fragrances is an independent luxury perfume atelier headquartered at <strong>Dhoke Chiragh Deen, Rawalpindi</strong>. We specialize exclusively in perfumes and attars. We are not connected or affiliated with any garments or clothing outlets in Satellite Town / Commercial Market.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <GoogleReviewCTA />
        <p className="text-center text-xs text-brand-slate-500 mt-4">
          New here? Read our{' '}
          <Link to="/guides/same-day-perfume-delivery-rawalpindi-islamabad" className="text-brand-blue-700 font-semibold hover:underline">
            same-day delivery guide
          </Link>
          .
        </p>
      </section>

      {/* Studio Location & Map Embed */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-slate-900">
            Studio Details &amp; Google Maps
          </h2>
          <p className="text-sm text-brand-slate-500 max-w-xl mx-auto">
            Locate our atelier using the Google Maps Plus Code or connect directly with our concierge team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Studio Info Card */}
          <div className="lg:col-span-1 bg-white rounded-2xl border border-brand-slate-200 p-6 shadow-soft space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate-900">Physical Location</h4>
                  <p className="text-sm text-brand-slate-700 mt-1 font-medium">H3X9+8X4, Dhoke Chiragh Deen</p>
                  <p className="text-xs text-brand-slate-500">Rawalpindi, Punjab 46000, Pakistan</p>
                  <p className="text-[11px] text-brand-blue-700 mt-1 font-mono font-semibold">Plus Code: H3X9+8X4 Rawalpindi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate-900">Visiting &amp; Consultation Hours</h4>
                  <p className="text-sm text-brand-slate-700 mt-1">Monday – Sunday</p>
                  <p className="text-xs text-brand-slate-500">10:00 AM – 10:00 PM</p>
                  <p className="text-[11px] text-amber-700 mt-1">Private olfactory consultations available by appointment on WhatsApp.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate-900">Direct Concierge</h4>
                  <p className="text-sm font-semibold text-brand-slate-900 mt-1">+92 321 5186400</p>
                  <p className="text-xs text-brand-slate-500">Instant response via WhatsApp</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=H3X9%2B8X4+Rawalpindi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-brand-slate-900 hover:bg-brand-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-brand-gold" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-2 h-[350px] lg:h-auto rounded-2xl overflow-hidden border border-brand-slate-200 shadow-soft relative bg-slate-100">
            <iframe
              title="Bin Irfan Fragrances Studio Rawalpindi Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=33.5983,73.0699&z=15&output=embed"
              className="w-full h-full min-h-[350px]"
            />
          </div>
        </div>
      </section>

      {/* Rawalpindi & Islamabad Express Delivery Coverage */}
      <section className="bg-white py-16 border-y border-brand-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-brand-blue-600 text-xs font-bold uppercase tracking-wider">
              <Truck className="w-4 h-4" />
              <span>Express Twin-Cities Delivery</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-slate-900">
              Same-Day Express Delivery in Rawalpindi &amp; Islamabad
            </h2>
            <p className="text-sm text-brand-slate-500 max-w-2xl mx-auto">
              Enjoy lightning-fast same-day express rider dispatch directly from our local Rawalpindi studio to your doorstep for orders placed before 5:00 PM on 100% advance payment. Free delivery on orders over ₨ 5,000.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rawalpindi Sectors */}
            <div className="p-6 rounded-2xl bg-brand-light-bg border border-brand-slate-200 space-y-3">
              <h3 className="font-serif text-lg font-bold text-brand-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-blue-600" />
                Rawalpindi Delivery Areas
              </h3>
              <p className="text-xs text-brand-slate-600 leading-relaxed">
                Same-day / next-day delivery across:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'Dhoke Chiragh Deen',
                  'Saddar',
                  'Chaklala Scheme 3',
                  'Bahria Town Phase 1–8',
                  'DHA Phase 1 & 2',
                  'Askari (All Phases)',
                  'Westridge',
                  'Satellite Town',
                  'Gulraiz',
                  'Peshawar Road',
                  'Adyala Road'
                ].map(area => (
                  <span key={area} className="text-xs bg-white px-2.5 py-1 rounded-lg border border-brand-slate-200 text-brand-slate-700">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Islamabad Sectors */}
            <div className="p-6 rounded-2xl bg-brand-light-bg border border-brand-slate-200 space-y-3">
              <h3 className="font-serif text-lg font-bold text-brand-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                Islamabad Delivery Areas
              </h3>
              <p className="text-xs text-brand-slate-600 leading-relaxed">
                Swift 24-hour courier transit across:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'Blue Area',
                  'Sector F-6 & F-7',
                  'Sector F-8 & F-10',
                  'Sector F-11 & E-11',
                  'Sector G-11 & G-13',
                  'Sector I-8 & I-9',
                  'Bahria Enclave',
                  'DHA Islamabad',
                  'Gulberg Greens',
                  'PWD & Soan Gardens'
                ].map(area => (
                  <span key={area} className="text-xs bg-white px-2.5 py-1 rounded-lg border border-brand-slate-200 text-brand-slate-700">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Perfumes in Rawalpindi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-600">Local Bestsellers</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-slate-900 mt-1">
              Popular Fragrances in Rawalpindi
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-bold uppercase tracking-wider text-brand-blue-600 hover:text-brand-blue-800 flex items-center gap-1 group"
          >
            <span>View Full 14-Flacon Catalog</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {rawalpindiFavorites.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Local FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-6">
        <h2 className="font-serif text-2xl font-bold text-center text-brand-slate-900">
          Frequently Asked Questions — Rawalpindi Perfume Buyers
        </h2>

        <div className="space-y-4 pt-4">
          <div className="p-5 rounded-2xl bg-white border border-brand-slate-200 shadow-soft">
            <h4 className="font-serif font-bold text-brand-slate-900 text-sm">
              Can I visit the Bin Irfan studio in Dhoke Chiragh Deen to test fragrances?
            </h4>
            <p className="text-xs text-brand-slate-600 mt-2 leading-relaxed">
              Yes, visitors are welcome. Due to bespoke blending batches, we recommend sending a quick WhatsApp message to <a href="https://wa.me/923215186400" className="text-brand-blue-600 font-semibold underline">+92 321 5186400</a> before visiting so our concierge can ensure tester strips and flacons are prepared for you.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-brand-slate-200 shadow-soft">
            <h4 className="font-serif font-bold text-brand-slate-900 text-sm">
              Do you offer Cash on Delivery (COD) in Rawalpindi or Islamabad?
            </h4>
            <p className="text-xs text-brand-slate-600 mt-2 leading-relaxed">
              No. Bin Irfan Fragrances operates strictly on 100% Advance Payment (Bank Transfer, EasyPaisa, JazzCash, or Raast). Advance payment ensures authentic orders and enables instant routing via local express riders without courier delays.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-brand-slate-200 shadow-soft">
            <h4 className="font-serif font-bold text-brand-slate-900 text-sm">
              How long does local delivery take within Rawalpindi &amp; Islamabad?
            </h4>
            <p className="text-xs text-brand-slate-600 mt-2 leading-relaxed">
              We offer Same-Day Express Delivery! If you confirm your order and send your advance payment screenshot before 5:00 PM, our dedicated rider delivers your luxury flacons to your doorstep that very evening.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalStoreRawalpindiPage;
