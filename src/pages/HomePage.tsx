import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { BrandStatement } from '../components/home/BrandStatement';
import { FeaturedCollection } from '../components/home/FeaturedCollection';
import { BestSellersCarousel } from '../components/home/BestSellersCarousel';
import { WhyBinIrfan } from '../components/home/WhyBinIrfan';
import { PackagingShowcaseSection } from '../components/home/PackagingShowcaseSection';
import { CustomerReviews } from '../components/home/CustomerReviews';
import { InstagramSection } from '../components/home/InstagramSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Bin Irfan Fragrance | Artisanal Luxury Perfumes & Royal Attars";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0">
      <HeroSection />
      <BrandStatement />
      <BestSellersCarousel />
      <FeaturedCollection />
      <PackagingShowcaseSection />
      <WhyBinIrfan />
      <CustomerReviews />
      <InstagramSection />
    </div>
  );
};
