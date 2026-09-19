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
      a: 'All Bin Irfan fragrances are formulated as Extrait de Parfum with approximately 30% to 35% pure perfume oil concentration. This is significantly richer and longer-lasting than standard Eau de Toilette (5-10%) or standard Eau de Parfum (15-20%).'
    },
    {
      q: 'How long do your fragrances project and last?',
      a: 'Because of our pure oil formulation, our perfumes average 12 to 16+ hours on skin, and frequently 24+ hours on fabrics and clothing. Richer compositions like Black Oud and Aventus Intense offer heavy sillage that commands the room.'
    },
    {
      q: 'Do you offer Cash on Delivery (COD) across Pakistan?',
      a: 'Yes, we provide Cash on Delivery across all cities, towns, and villages throughout Pakistan (Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, Quetta, and beyond). Orders typically arrive within 2 to 4 business days.'
    },
    {
      q: 'How do I place an order directly on WhatsApp?',
      a: 'You can tap any "Order on WhatsApp" button across our website. Our system automatically formats a pre-filled WhatsApp message containing your selected perfume name, size, quantity, and price, sending it straight to our official concierge (+92 316 9699892).'
    },
    {
      q: 'Are your impression fragrances identical to the original designer brands?',
      a: 'Our impression creations are independent artisanal formulations inspired by the olfactory profiles of beloved classic styles. We use our own high-potency oils and unique blending techniques. We are an independent Pakistani brand with no affiliation or sponsorship from third-party trademark owners.'
    },
    {
      q: 'How should I properly apply my fragrance for maximum longevity?',
      a: '1. Apply directly to warm pulse points (wrists, side of neck, behind ears, and chest).\n2. Do NOT rub your wrists together after spraying, as friction crushes the delicate top note molecules.\n3. Moisturize your skin with an unscented lotion or petroleum jelly prior to spraying to lock the fragrance oils onto the skin.'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold inline-flex items-center gap-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge & Guidance</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-cream uppercase tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-sm text-brand-cream/70 font-light">
          Everything you need to know about our formulations, nationwide delivery, and perfume mastery.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-brand-dark-card border border-brand-gold/20 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-brand-cream hover:text-brand-gold-light"
              >
                <span className="font-serif text-base sm:text-lg font-bold">
                  {faq.q}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-brand-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-gold/60 flex-shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-brand-cream/75 leading-relaxed font-light border-t border-brand-gold/10 pt-4 whitespace-pre-line">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Concierge Card */}
      <div className="p-8 rounded-3xl bg-brand-dark-surface border border-brand-gold/30 text-center space-y-4 shadow-luxury">
        <h3 className="font-serif text-xl font-bold text-brand-cream">
          Have an Unanswered Question?
        </h3>
        <p className="text-xs text-brand-cream/70 max-w-md mx-auto">
          Our fragrance concierge in Peshawar is available 7 days a week to assist you with scent recommendations.
        </p>
        <a
          href="https://wa.me/923169699892?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20have%20a%20question!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-900/40 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider hover:bg-emerald-800/50 transition-all shadow-md"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>Ask on WhatsApp (+92 316 9699892)</span>
        </a>
      </div>
    </div>
  );
};
