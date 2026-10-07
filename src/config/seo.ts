import { Product } from '../types/product';

export const getSiteUrl = (): string => {
  if (typeof window !== 'undefined' && window.location.origin) {
    return window.location.origin;
  }
  return (import.meta as any).env?.VITE_SITE_URL || 'https://binirfanfragrances.com';
};

export const DEFAULT_SEO = {
  siteName: 'Bin Irfan Fragrances',
  title: 'Bin Irfan Fragrances | Handcrafted 35% Extrait De Parfum & Perfumes Rawalpindi',
  description: 'Official Bin Irfan Fragrances atelier located at Dhoke Chiragh Deen, Rawalpindi. Handcrafted 35% Extrait de Parfum flacons, luxury perfume bundles, 14+ hour long-lasting projection, and nationwide Cash on Delivery (COD).',
  keywords: 'Bin Irfan Fragrances, perfume shop Rawalpindi, perfumes in Rawalpindi, Dhoke Chiragh Deen perfume, buy perfume Pakistan, Black Oud perfume, Extrait de Parfum Pakistan, long lasting perfumes Rawalpindi, Islamabad fragrance, designer impressions Pakistan, cash on delivery perfume, best fragrance for men, luxury women perfume, order perfume online',
  defaultImage: '/brand/logo.jpg',
  storeAddress: {
    streetAddress: 'H3X9+8X4, Dhoke Chiragh Deen',
    addressLocality: 'Rawalpindi',
    addressRegion: 'Punjab',
    postalCode: '46000',
    addressCountry: 'PK'
  },
  contact: {
    phone: '+92 321 5186400',
    whatsapp: '+92 321 5186400',
    email: 'sulaiman234p@gmail.com'
  },
  social: [
    'https://www.instagram.com/binirfanfragrances/',
    'https://wa.me/923215186400'
  ]
};

/**
 * Generates Schema.org Store and Organization structured data
 * Optimizes Google Knowledge Graph and Local Map / Rich Snippets for e-commerce orders
 */
export const getStoreSchema = (siteUrl = getSiteUrl()) => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'PerfumeStore',
        '@id': `${siteUrl}/#store`,
        name: 'Bin Irfan Fragrances',
        alternateName: [
          'Bin Irfan Fragrances',
          'Bin Irfan Perfumes Rawalpindi',
          'بن عرفان پرفیومز'
        ],
        disambiguatingDescription: 'Bin Irfan Fragrances is an independent artisanal luxury perfume atelier in Dhoke Chiragh Deen, Rawalpindi, specializing exclusively in 35% Extrait De Parfum flacons and royal attars. Not affiliated with Bin Irfan clothing or garments in Satellite Town.',
        url: siteUrl,
        logo: `${siteUrl}/brand/logo.jpg`,
        image: `${siteUrl}/brand/logo.jpg`,
        description: DEFAULT_SEO.description,
        telephone: DEFAULT_SEO.contact.phone,
        email: DEFAULT_SEO.contact.email,
        priceRange: 'PKR 2,450 - PKR 8,500',
        currenciesAccepted: 'PKR',
        paymentAccepted: 'Cash on Delivery, Bank Transfer, EasyPaisa, JazzCash',
        address: {
          '@type': 'PostalAddress',
          streetAddress: DEFAULT_SEO.storeAddress.streetAddress,
          addressLocality: DEFAULT_SEO.storeAddress.addressLocality,
          addressRegion: DEFAULT_SEO.storeAddress.addressRegion,
          postalCode: DEFAULT_SEO.storeAddress.postalCode,
          addressCountry: DEFAULT_SEO.storeAddress.addressCountry
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.5983,
          longitude: 73.0699
        },
        hasMap: 'https://maps.google.com/?q=H3X9%2B8X4+Rawalpindi',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            opens: '10:00',
            closes: '22:00'
          }
        ],
        sameAs: DEFAULT_SEO.social,
        potentialAction: [
          {
            '@type': 'OrderAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${siteUrl}/shop`,
              inLanguage: 'en-PK',
              actionPlatform: [
                'http://schema.org/DesktopWebPlatform',
                'http://schema.org/MobileWebPlatform'
              ]
            },
            deliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModeDirectDownload'
          },
          {
            '@type': 'SearchAction',
            target: `${siteUrl}/shop?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Bin Irfan Fragrance',
        description: DEFAULT_SEO.description,
        publisher: {
          '@id': `${siteUrl}/#store`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/shop?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };
};

/**
 * Generates Schema.org Product structured data with Offer & Review schemas
 * directly driving rich snippets (Price, InStock, Stars) in Google Search
 */
export const getProductSchema = (product: Product, siteUrl = getSiteUrl()) => {
  const minPrice = Math.min(...product.variants.map(v => v.pricePKR));
  const maxPrice = Math.max(...product.variants.map(v => v.pricePKR));
  const fullImageUrl = product.image.startsWith('http') ? product.image : `${siteUrl}${product.image}`;
  const productUrl = `${siteUrl}/product/${product.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: `${product.name} — Extrait De Parfum`,
    alternateName: product.arabicName ? `${product.name} (${product.arabicName})` : product.name,
    description: product.description || product.shortDescription,
    image: [fullImageUrl],
    sku: product.variants[0]?.sku || `BIF-${product.id.toUpperCase()}`,
    mpn: `BIF-${product.id}`,
    brand: {
      '@type': 'Brand',
      name: 'Bin Irfan Fragrance'
    },
    category: product.category === 'bundle' ? 'Perfume Gift Set & Bundle' : 'Extrait De Parfum Perfume',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewsCount.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'PKR',
      lowPrice: minPrice,
      highPrice: maxPrice,
      offerCount: product.variants.length,
      offers: product.variants.map(variant => ({
        '@type': 'Offer',
        price: variant.pricePKR,
        priceCurrency: 'PKR',
        priceValidUntil: '2027-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        url: productUrl,
        seller: {
          '@type': 'Organization',
          name: 'Bin Irfan Fragrance'
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: 0,
            currency: 'PKR'
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'PK'
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 0,
              maxValue: 1,
              unitCode: 'DAY'
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 2,
              maxValue: 4,
              unitCode: 'DAY'
            }
          }
        }
      }))
    }
  };
};

/**
 * Generates Schema.org Order Tracking & Service schema
 */
export const getOrderTrackingSchema = (siteUrl = getSiteUrl()) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/track-order#service`,
    name: 'Bin Irfan Fragrance Order Tracking & Courier Status Concierge',
    serviceType: 'Courier Dispatch and Delivery Tracking',
    provider: {
      '@type': 'Organization',
      name: 'Bin Irfan Fragrance',
      url: siteUrl,
      telephone: DEFAULT_SEO.contact.phone
    },
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan'
    },
    termsOfService: `${siteUrl}/policies/shipping`,
    description: 'Track your Bin Irfan Fragrance parcel delivery and Cash on Delivery courier status across Pakistan with real-time updates and direct WhatsApp support.'
  };
};
