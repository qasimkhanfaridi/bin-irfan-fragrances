import { GuideArticle } from '../data/guides';
import { SITE_URL } from './prerenderMeta';

export const getArticleSchema = (guide: GuideArticle) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: guide.title,
  description: guide.description,
  datePublished: guide.published,
  dateModified: guide.published,
  author: {
    '@type': 'Organization',
    name: 'Bin Irfan Fragrances',
    url: SITE_URL
  },
  publisher: {
    '@type': 'Organization',
    name: 'Bin Irfan Fragrances',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/brand/logo.jpg`
    }
  },
  mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
  image: `${SITE_URL}/brand/logo.jpg`
});
