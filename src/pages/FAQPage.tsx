import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Frequently Asked Questions | Bin Irfan Fragrance";
  }, []);

  const faqs = [
    {
      q: 'What is the concentration of Bin Irfan Fragrances?',
      a: 'All Bin Irfan fragrances are formulated as Extrait de Parfum with approximately 30% to 35% pure French perfume oil concentration. This is significantly richer and longer-lasting than standard Eau de Toilette (5-10%) or standard Eau de Parfum (15-20%).'
    },
    {
      q: 'How long do your fragrances project and last?',
      a: 'Because of our high pure-oil formulation, our perfumes average 12 to 16+ hours on skin, and frequently 24+ hours on fabrics and clothing. Richer compositions like Royal Trio and Aventus Intense offer heavy sillage that commands the room without being synthetic.'
    },
    {
      q: 'Do you offer Cash on Delivery (COD) across Pakistan?',
      a: 'Yes! We provide Cash on Delivery across all cities, towns, and villages throughout Pakistan (Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, Quetta, and beyond). Orders typically arrive within 2 to 4 business days.'
    },
    {
      q: 'How do I place an order directly on WhatsApp?',
      a: 'You can tap any "Order on WhatsApp" button across our website. Our system automatically formats a pre-filled WhatsApp message containing your selected perfume name, size, quantity, and price, sending it straight to our official concierge (+92 321 5186400).'
    },
    {
      q: 'What is included in the Explorer Discovery Kit?',
      a: 'The Explorer Discovery Kit includes 5 distinct 10ml travel spray atomizers packed in a presentation slide box. It allows you to test 5 of our most acclaimed fragrances before committing to full 50ml or 100ml bottles.'
    },
    {
      q: 'How should I properly apply my fragrance for maximum longevity?',
      a: '1. Apply directly to warm pulse points (wrists, side of neck, behind ears, and collarbone).\n2. Do NOT rub your wrists together after spraying, as friction crushes the delicate top note molecules.\n3. Moisturize your skin with an unscented lotion or petroleum jelly prior to spraying to lock the fragrance oils onto the skin.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-light-bg py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-2">
          <HelpCircle className="w-3.5 h-3.5 text-brand-blue-600" />
          <span>Knowledge & Guidance</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-slate-900 tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-sm text-brand-slate-600 font-light">
          Everything you need to know about our 35% Extrait formulations, nationwide delivery, and bundles.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-brand-slate-900 hover:text-brand-blue-700 transition-colors"
              >
                <span className="font-serif text-base sm:text-lg font-bold">
                  {faq.q}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-brand-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-slate-400 flex-shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-brand-slate-600 leading-relaxed font-light border-t border-brand-slate-100 pt-4 whitespace-pre-line">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Concierge Card */}
      <div className="p-8 rounded-3xl bg-white border border-brand-slate-200/80 text-center space-y-4 shadow-soft">
        <h3 className="font-serif text-xl font-bold text-brand-slate-900">
          Have an Unanswered Question?
        </h3>
        <p className="text-xs text-brand-slate-500 max-w-md mx-auto">
          Our fragrance concierge in Peshawar is available 7 days a week to assist you with scent recommendations and custom orders.
        </p>
        <a
          href="https://wa.me/923215186400?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20have%20a%20question!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Ask on WhatsApp (+92 321 5186400)</span>
        </a>
      </div>
    </div>
  );
};
