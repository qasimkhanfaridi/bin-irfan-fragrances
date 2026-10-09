import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronRight, Clock } from 'lucide-react';
import { getGuideBySlug, GUIDES } from '../data/guides';
import { PRODUCTS } from '../data/products';
import { SEOHead } from '../components/common/SEOHead';
import { getArticleSchema } from '../config/guideSchema';
import { ProductCard } from '../components/common/ProductCard';

export const GuideArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuideBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!guide) {
    return <Navigate to="/guides" replace />;
  }

  const relatedProducts = (guide.relatedProductSlugs ?? [])
    .map(id => PRODUCTS.find(p => p.id === id || p.slug === id))
    .filter(Boolean)
    .slice(0, 3);

  const relatedGuides = (guide.relatedGuideSlugs ?? [])
    .map(s => GUIDES.find(g => g.slug === s))
    .filter(Boolean);

  return (
    <article className="min-h-screen bg-brand-light-bg py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <SEOHead
        title={guide.title}
        description={guide.description}
        keywords={guide.keywords}
        canonicalPath={`/guides/${guide.slug}`}
        type="article"
        schema={getArticleSchema(guide)}
      />
      <nav className="flex items-center gap-2 text-xs text-brand-slate-500 mb-8 flex-wrap">
        <Link to="/" className="hover:text-brand-blue-600">
          Home
        </Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/guides" className="hover:text-brand-blue-600">
          Guides
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-brand-slate-800 font-medium line-clamp-1">{guide.title}</span>
      </nav>
      <header className="space-y-3 mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-slate-900 leading-tight">{guide.title}</h1>
        <p className="text-sm text-brand-slate-600">{guide.description}</p>
        <p className="text-xs text-brand-slate-500 inline-flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {guide.readMinutes} min read · Updated {guide.published}
        </p>
      </header>
      <div className="prose prose-slate max-w-none space-y-10">
        {guide.sections.map(section => (
          <section key={section.heading}>
            <h2 className="font-serif text-xl font-bold text-brand-slate-900 mb-3">{section.heading}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-brand-slate-700 leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
      {relatedProducts.length > 0 && (
        <section className="mt-14 pt-10 border-t border-brand-slate-200">
          <h2 className="font-serif text-xl font-bold text-brand-slate-900 mb-6">Recommended fragrances</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedProducts.map(p => p && <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
      {relatedGuides.length > 0 && (
        <section className="mt-10">
          <h2 className="font-serif text-lg font-bold text-brand-slate-900 mb-4">Related guides</h2>
          <ul className="space-y-2 text-sm">
            {relatedGuides.map(g => g && (
              <li key={g.slug}>
                <Link to={`/guides/${g.slug}`} className="text-brand-blue-700 hover:underline font-medium">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <div className="mt-12 p-6 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 text-center space-y-3">
        <p className="text-sm text-brand-slate-800">Ready to order? Same-day delivery in Rawalpindi &amp; Islamabad.</p>
        <Link
          to="/shop"
          className="inline-block px-6 py-2.5 rounded-xl bg-brand-blue-600 text-white text-xs font-bold uppercase tracking-wider"
        >
          Shop all perfumes
        </Link>
      </div>
    </article>
  );
};
