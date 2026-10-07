import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, FileText, ChevronRight } from 'lucide-react';

export const PolicyPages: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const policies = {
    shipping: {
      title: 'Shipping & Delivery Policy',
      icon: Truck,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-brand-slate-600 leading-relaxed font-light">
          <p>
            At <strong>Bin Irfan Fragrance</strong>, every artisanal perfume flacon and bundle is packaged in custom protective cushioning to ensure pristine arrival at your doorstep anywhere in Pakistan.
          </p>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Delivery Timelines</h3>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Rawalpindi & Islamabad:</strong> 1 – 2 business days.</li>
            <li><strong>Lahore, Peshawar, Faisalabad & Gujranwala:</strong> 2 – 3 business days.</li>
            <li><strong>Karachi, Multan & Sindh:</strong> 2 – 4 business days.</li>
            <li><strong>Balochistan, KPK remote & Gilgit-Baltistan:</strong> 3 – 5 business days.</li>
          </ul>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Shipping Charges</h3>
          <p>
            Complimentary <strong>Free Shipping</strong> is provided nationwide on all orders totaling <strong>₨ 5,000</strong> or higher. For orders under ₨ 5,000, a flat standard courier fee of ₨ 250 applies.
          </p>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Courier Partners</h3>
          <p>
            We partner with reliable courier services (TCS, Leopards, M&P, Trax) offering door-to-door tracking and Cash on Delivery (COD).
          </p>
        </div>
      )
    },
    returns: {
      title: 'Returns & Exchange Policy',
      icon: RotateCcw,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-brand-slate-600 leading-relaxed font-light">
          <p>
            We take immense pride in our pure Extrait de Parfum formulations. If your product arrives damaged, defective, or incorrect, we offer a hassle-free exchange within <strong>7 days</strong> of delivery.
          </p>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Exchange Eligibility</h3>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>The item must be reported within 7 days of receiving the package.</li>
            <li>Due to hygiene and the volatile nature of luxury fragrance oils, opened or heavily sprayed bottles cannot be returned for a cash refund unless proven defective by our quality team.</li>
            <li>To initiate an exchange, simply message our boutique on WhatsApp at +92 321 5186400 with a photo/video of the issue.</li>
          </ul>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      icon: ShieldCheck,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-brand-slate-600 leading-relaxed font-light">
          <p>
            Bin Irfan Fragrance is dedicated to preserving the privacy and security of our clients.
          </p>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Information Collected</h3>
          <p>
            We collect basic contact information (name, delivery address, phone number, and optional email) strictly for dispatching your orders and providing delivery updates.
          </p>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Data Protection</h3>
          <p>
            We do not sell, rent, or trade your personal information to third-party marketing entities. Your data is strictly shared with delivery couriers for parcel fulfillment.
          </p>
        </div>
      )
    },
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-brand-slate-600 leading-relaxed font-light">
          <p>
            Welcome to the official digital boutique of <strong>Bin Irfan Fragrance</strong>. By accessing this website or placing orders via our digital portal or WhatsApp concierge (+92 321 5186400), you agree to these terms.
          </p>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Artisanal Formulation Disclaimer</h3>
          <p>
            Fragrance impression references are provided strictly to assist perfume enthusiasts with scent styles and olfactory profiles. Bin Irfan Fragrance is an independent Pakistani perfumery and has no affiliation with or authorization from original international trademark holders.
          </p>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Pricing & Availability</h3>
          <p>
            Prices are listed in Pakistani Rupees (PKR) and are subject to adjustment without prior notice based on raw oil sourcing.
          </p>
        </div>
      )
    }
  };

  const currentPolicy = policies[type as keyof typeof policies] || policies.shipping;
  const Icon = currentPolicy.icon;

  return (
    <div className="min-h-screen bg-brand-light-bg py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      
      {/* Policy Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-brand-slate-200 pb-4">
        {[
          { key: 'shipping', label: 'Shipping & Delivery' },
          { key: 'returns', label: 'Returns & Exchange' },
          { key: 'privacy', label: 'Privacy Policy' },
          { key: 'terms', label: 'Terms & Conditions' }
        ].map(tab => (
          <Link
            key={tab.key}
            to={`/policies/${tab.key}`}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
              type === tab.key
                ? 'bg-brand-blue-600 text-white shadow-sm'
                : 'bg-white text-brand-slate-600 border border-brand-slate-200 hover:text-brand-slate-900'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Main Content Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-brand-slate-200/80 space-y-6 shadow-soft">
        <div className="flex items-center gap-3 pb-4 border-b border-brand-slate-100">
          <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-200 flex items-center justify-center text-brand-blue-600">
            <Icon className="w-5 h-5" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-brand-slate-900">
            {currentPolicy.title}
          </h1>
        </div>

        {currentPolicy.content}
      </div>
    </div>
  );
};
