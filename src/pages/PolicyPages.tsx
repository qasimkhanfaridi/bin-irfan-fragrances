import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, FileText, ChevronRight } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

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
            At <strong>Bin Irfan Fragrances</strong>, every artisanal perfume flacon and bundle is packaged in custom protective cushioning to ensure pristine arrival at your doorstep anywhere in Pakistan.
          </p>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Delivery Timelines</h3>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Rawalpindi &amp; Islamabad:</strong> <strong>Same-Day Express Delivery</strong> for orders confirmed before 5:00 PM via local express rider.</li>
            <li><strong>Lahore, Peshawar, Faisalabad &amp; Gujranwala:</strong> 2 – 3 business days via express courier.</li>
            <li><strong>Karachi, Multan &amp; Sindh:</strong> 2 – 3 business days.</li>
            <li><strong>Balochistan, KPK remote &amp; Gilgit-Baltistan:</strong> 3 – 5 business days.</li>
          </ul>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Payment Policy (100% Advance Payment)</h3>
          <p>
            Bin Irfan Fragrances operates strictly on an <strong>Advance Payment</strong> basis (Bank Transfer, EasyPaisa, JazzCash, or Raast). We <strong>do not offer Cash on Delivery (COD)</strong>. Advance payment allows us to reserve genuine flacons, prevent transit refusal, and deploy immediate same-day local riders in Rawalpindi &amp; Islamabad.
          </p>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Shipping Charges</h3>
          <p>
            Complimentary <strong>Free Shipping</strong> is provided nationwide on all orders totaling <strong>Rs. 5,000</strong> or higher. For orders under Rs. 5,000, a flat standard courier fee of Rs. 250 applies.
          </p>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Courier &amp; Express Partners</h3>
          <p>
            We utilize dedicated local express riders for Rawalpindi &amp; Islamabad same-day deliveries and trusted courier partners (TCS, Leopards, Trax) for nationwide tracking and delivery.
          </p>
        </div>
      )
    },
    returns: {
      title: 'Returns & Exchange Policy',
      icon: RotateCcw,
      content: (
        <div className="space-y-5 text-xs sm:text-sm text-brand-slate-600 leading-relaxed font-light">
          <p>
            At <strong>Bin Irfan Fragrances</strong>, customer satisfaction and transparency are at the core of our artisanal atelier. We accept returns and exchanges for both <strong>defective and non-defective</strong> products to provide complete peace of mind.
          </p>

          {/* Quick Compliance Summary Card for Google Merchant Center & Customers */}
          <div className="p-4 rounded-2xl bg-brand-light-bg border border-brand-blue-soft shadow-xs text-xs space-y-2">
            <h4 className="font-serif text-sm font-bold text-brand-slate-900 flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-brand-blue-dark" />
              <span>Return Policy Summary (Pakistan)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-slate-700">
              <div><strong>Country Covered:</strong> Pakistan</div>
              <div><strong>Returns Accepted:</strong> Defective and Non-Defective products</div>
              <div><strong>Exchanges Accepted:</strong> Yes, full product exchanges supported</div>
              <div><strong>Item Condition:</strong> New and slightly used (tested)</div>
              <div><strong>Return Window:</strong> 1 to 7 days from delivery date</div>
              <div><strong>Return Method:</strong> By mail / tracked courier to atelier</div>
              <div><strong>Return Shipping Fee:</strong> Customer responsibility (Free for transit damaged items)</div>
              <div><strong>Restocking Fees:</strong> No cost (0% restocking fee)</div>
              <div><strong>Refund Processing Time:</strong> 3 business days following inspection</div>
            </div>
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-brand-slate-900 pt-2">1. Return Window &amp; Condition</h3>
          <p>
            Customers may initiate a return or exchange within <strong>1 day</strong> of delivery receipt (and up to 7 days). We accept items in <strong>new or slightly used (test sprayed)</strong> condition with original caps, boxes, and packaging intact.
          </p>

          <h3 className="font-serif text-base sm:text-lg font-bold text-brand-slate-900 pt-2">2. Defective, Damaged or Incorrect Products</h3>
          <p>
            If a flacon arrives damaged in transit, leaking, or with an atomizer defect, contact our WhatsApp concierge (+92 321 5186400 / +92 316 5312301) with a photo/video within 24 hours. We dispatch an immediate 100% free replacement at zero cost to you.
          </p>

          <h3 className="font-serif text-base sm:text-lg font-bold text-brand-slate-900 pt-2">3. Non-Defective Products &amp; Exchanges</h3>
          <p>
            If you ordered a fragrance and wish to return or exchange it for a different scent family, you may return the bottle by mail. Return shipping is the customer's responsibility. There are <strong>no restocking fees</strong> charged.
          </p>

          <h3 className="font-serif text-base sm:text-lg font-bold text-brand-slate-900 pt-2">4. Return Method (By Mail / Courier)</h3>
          <p>
            Securely repackage the flacon in its original protective packaging and dispatch via your preferred courier service (TCS, Leopard, PostEx, or Trax) to our flagship studio:
          </p>
          <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 font-mono">
            <strong>Bin Irfan Fragrances Atelier</strong><br />
            Dhoke Chiragh Deen, Rawalpindi 46000, Punjab, Pakistan<br />
            Phone / WhatsApp: +92 321 5186400 / +92 316 5312301
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-brand-slate-900 pt-2">5. Refund Processing Time</h3>
          <p>
            Once your returned parcel is received and inspected at our atelier, your refund will be processed within <strong>3 business days</strong> via your original payment channel (Bank Transfer, EasyPaisa, JazzCash, or Raast).
          </p>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      icon: ShieldCheck,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-brand-slate-600 leading-relaxed font-light">
          <p>
            Bin Irfan Fragrances is dedicated to preserving the privacy and security of our clients.
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
            Welcome to the official digital boutique of <strong>Bin Irfan Fragrances</strong>. By accessing this website or placing orders via our digital portal or WhatsApp concierge (+92 321 5186400), you agree to these terms.
          </p>
          <h3 className="font-serif text-lg font-bold text-brand-slate-900 pt-2">Artisanal Formulation Disclaimer</h3>
          <p>
            Fragrance impression references are provided strictly to assist perfume enthusiasts with scent styles and olfactory profiles. Bin Irfan Fragrances is an independent Pakistani perfumery and has no affiliation with or authorization from original international trademark holders.
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

  const policySeo: Record<string, { description: string }> = {
    shipping: {
      description:
        'Same-day delivery Rawalpindi & Islamabad. Nationwide courier 2–3 days. Free shipping over Rs. 5,000. Advance payment only at Bin Irfan Fragrances.'
    },
    returns: {
      description: 'Exchange within 7 days for damaged or incorrect Bin Irfan Fragrances orders.'
    },
    privacy: {
      description: 'How Bin Irfan Fragrances collects and uses customer contact and order information.'
    },
    terms: {
      description: 'Terms for ordering handcrafted perfumes from Bin Irfan Fragrances Pakistan.'
    }
  };

  const seoKey = type && policySeo[type] ? type : 'shipping';

  return (
    <div className="min-h-screen bg-brand-light-bg py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      <SEOHead
        title={currentPolicy.title}
        description={policySeo[seoKey].description}
        canonicalPath={`/policies/${seoKey}`}
      />
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
