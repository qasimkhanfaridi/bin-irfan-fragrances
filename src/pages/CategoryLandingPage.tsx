import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { SEOHead } from '../components/common/SEOHead';
import { ChevronRight, ChevronDown, Sparkles, ShieldCheck, Truck, Clock, ArrowRight, BookOpen, MapPin } from 'lucide-react';
import { getSiteUrl } from '../config/seo';

interface CategoryLandingPageProps {
  slugOverride?: string;
}

export const CategoryLandingPage: React.FC<CategoryLandingPageProps> = ({ slugOverride }) => {
  const { categorySlug: paramSlug } = useParams<{ categorySlug: string }>();
  const activeSlug = slugOverride || paramSlug;
  const category = CATEGORIES.find(c => c.slug === activeSlug);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!category) {
    return <Navigate to="/shop" replace />;
  }

  const categoryProducts = PRODUCTS.filter(category.filterFn);
  const siteUrl = getSiteUrl();

  // Generate ItemList JSON-LD Schema
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: category.name,
    description: category.metaDescription,
    url: `${siteUrl}/${category.slug}`,
    numberOfItems: categoryProducts.length,
    itemListElement: categoryProducts.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        url: `${siteUrl}/product/${product.id}`,
        image: product.image.startsWith('http') ? product.image : `${siteUrl}${product.image}`,
        description: product.description,
        brand: {
          '@type': 'Brand',
          name: 'Bin Irfan Fragrances'
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'PKR',
          price: Math.min(...product.variants.map(v => v.pricePKR)),
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Bin Irfan Fragrances'
          }
        }
      }
    }))
  };

  // Generate FAQPage JSON-LD Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: category.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Collections',
        item: `${siteUrl}/collections`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `${siteUrl}/${category.slug}`
      }
    ]
  };

  const relatedCategories = CATEGORIES.filter(c => category.relatedCategorySlugs.includes(c.slug));

  return (
    <>
      <SEOHead
        title={category.metaTitle}
        description={category.metaDescription}
        keywords={category.keywords}
        canonicalPath={`/${category.slug}`}
        schema={[itemListSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="bg-brand-light-bg min-h-screen pb-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-brand-blue-soft/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-brand-blue-dark transition-colors font-medium">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link to="/collections" className="hover:text-brand-blue-dark transition-colors font-medium">Collections</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-brand-blue-dark font-semibold">{category.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Banner & Rich Semantic Content */}
        <section className="bg-gradient-to-b from-white via-brand-blue-soft/20 to-brand-light-bg py-12 md:py-16 border-b border-brand-blue-soft/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue-soft text-brand-blue-dark border border-brand-blue-light/60 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>35% Extrait De Parfum Concentration</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight mb-4">
                {category.h1}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-medium mb-6">
                {category.tagline}
              </p>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {category.introParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Express Delivery & Authenticity Callout */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-brand-blue-soft shadow-xs text-xs">
                  <Clock className="w-4 h-4 text-brand-blue-dark shrink-0" />
                  <span className="text-slate-700 font-medium">Same-Day RWP &amp; ISB Delivery</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-brand-blue-soft shadow-xs text-xs">
                  <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-slate-700 font-medium">14-18 Hour Guaranteed Longevity</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-brand-blue-soft shadow-xs text-xs">
                  <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Nationwide Pakistan Courier</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                Explore {category.name} ({categoryProducts.length})
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Prices shown in Pakistani Rupee (PKR). 100% advance payment via Bank Transfer, JazzCash, EasyPaisa, or Raast.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue-dark hover:text-brand-blue transition-colors self-start sm:self-auto"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <p className="text-slate-600 text-sm">No products found in this category at this moment.</p>
              <Link to="/shop" className="mt-4 inline-block px-5 py-2.5 bg-brand-blue text-white rounded-xl text-xs font-semibold">
                Explore All Perfumes
              </Link>
            </div>
          )}
        </section>

        {/* Comprehensive Buying Guide Section (Critical for SEO & AI Overviews) */}
        <section className="bg-white py-14 border-y border-brand-blue-soft/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue-soft text-brand-blue-dark mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Fragrance Concierge Guide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-6">
              {category.buyingGuideHeading}
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              {category.buyingGuideParagraphs.map((guide, idx) => (
                <p key={idx}>{guide}</p>
              ))}
            </div>

            {/* Studio & Delivery Cross-Links */}
            <div className="mt-10 p-6 rounded-2xl bg-brand-light-bg border border-brand-blue-soft/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Visiting or Ordering in the Twin Cities?</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Experience flacons at our Rawalpindi Studio in Dhoke Chiragh Deen, or enjoy same-day express rider delivery across Islamabad.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  to="/perfume-shop-rawalpindi"
                  className="px-3.5 py-2 text-xs font-semibold text-brand-blue-dark bg-white border border-brand-blue-soft rounded-xl hover:bg-brand-blue-soft transition-colors"
                >
                  Rawalpindi Studio
                </Link>
                <Link
                  to="/perfume-delivery-islamabad"
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-brand-blue-dark rounded-xl hover:bg-brand-blue transition-colors"
                >
                  Islamabad Delivery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Category Specific FAQs (Critical for FAQPage Rich Snippets) */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark">Frequently Asked Questions</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
              Everything You Need to Know About {category.name}
            </h2>
          </div>

          <div className="space-y-3">
            {category.faqs.map((faq, index) => {
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

        {/* Related Categories Navigation (Internal Linking Architecture) */}
        {relatedCategories.length > 0 && (
          <section className="bg-slate-50 py-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-6">
                Related Perfume Collections
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {relatedCategories.map(rel => (
                  <Link
                    key={rel.slug}
                    to={`/${rel.slug}`}
                    className="group p-4 bg-white rounded-2xl border border-slate-200 hover:border-brand-blue/50 hover:shadow-luxury-hover transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue-dark transition-colors">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {rel.tagline}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-blue-dark mt-4 group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};
