import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSiteUrl, DEFAULT_SEO } from '../../config/seo';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonicalPath?: string;
  type?: 'website' | 'product' | 'article';
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  image = DEFAULT_SEO.defaultImage,
  canonicalPath,
  type = 'website',
  schema
}) => {
  const location = useLocation();
  const siteUrl = getSiteUrl();

  const formattedTitle = title
    ? `${title} | Bin Irfan Fragrance`
    : DEFAULT_SEO.title;

  const currentPath = canonicalPath !== undefined ? canonicalPath : location.pathname;
  const canonicalUrl = `${siteUrl}${currentPath === '/' ? '' : currentPath}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  useEffect(() => {
    // 1. Update document title
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMeta = (nameOrProp: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${nameOrProp}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameOrProp, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('name', 'author', 'Bin Irfan Fragrance');

    // 3. Open Graph
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', fullImageUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', DEFAULT_SEO.siteName);
    setMeta('property', 'og:locale', 'en_PK');

    // 4. Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullImageUrl);

    // 5. Canonical link tag
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Structured Data (with BreadcrumbList for Organic Rich Snippets)
    const breadcrumbList = {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': siteUrl
        },
        ...(currentPath !== '/' ? [
          {
            '@type': 'ListItem',
            'position': 2,
            'name': title || 'Page',
            'item': canonicalUrl
          }
        ] : [])
      ]
    };

    let finalSchema: any = null;
    if (schema) {
      if (Array.isArray(schema)) {
        finalSchema = {
          '@context': 'https://schema.org',
          '@graph': [...schema, breadcrumbList]
        };
      } else if (schema['@graph']) {
        finalSchema = {
          ...schema,
          '@graph': [...schema['@graph'], breadcrumbList]
        };
      } else {
        finalSchema = {
          '@context': 'https://schema.org',
          '@graph': [schema, breadcrumbList]
        };
      }
    } else {
      finalSchema = {
        '@context': 'https://schema.org',
        '@graph': [breadcrumbList]
      };
    }

    let scriptTag = document.getElementById('schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(finalSchema, null, 2);

  }, [formattedTitle, description, keywords, canonicalUrl, fullImageUrl, type, schema]);

  return null;
};
