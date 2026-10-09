import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategoryPillsSection } from '../components/home/CategoryPillsSection';
import { BundlesShowcaseSection } from '../components/home/BundlesShowcaseSection';
import { BestSellersCarousel } from '../components/home/BestSellersCarousel';
import { BrandStatement } from '../components/home/BrandStatement';
import { FeaturedCollection } from '../components/home/FeaturedCollection';
import { PackagingShowcaseSection } from '../components/home/PackagingShowcaseSection';
import { WhyBinIrfan } from '../components/home/WhyBinIrfan';
import { CustomerReviews } from '../components/home/CustomerReviews';
import { InstagramSection } from '../components/home/InstagramSection';
import { SEOHead } from '../components/common/SEOHead';
import { getStoreSchema } from '../config/seo';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0">
      <SEOHead
        title="Bin Irfan Fragrances | Luxury Extrait De Parfum & Perfumes Rawalpindi, Pakistan"
        description="Official Bin Irfan Fragrances store. Handcrafted 35% Extrait de Parfum flacons, luxury perfume bundles, Same-Day Express Delivery in Rawalpindi & Islamabad on 100% Advance Payment, and fast nationwide shipping."
        canonicalPath="/"
        schema={getStoreSchema()}
      />
      <HeroSection />
      <CategoryPillsSection />
      <BundlesShowcaseSection />
      <BestSellersCarousel />
      <BrandStatement />
      <FeaturedCollection />
      <PackagingShowcaseSection />
      <WhyBinIrfan />
      <CustomerReviews />
      <InstagramSection />
    </div>
  );
};
