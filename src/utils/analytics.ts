declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export const isAnalyticsEnabled = (): boolean =>
  typeof GA_ID === 'string' && GA_ID.length > 0 && GA_ID.startsWith('G-');

export function initAnalytics(): void {
  if (!isAnalyticsEnabled() || typeof document === 'undefined') return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });
}

export function trackPageView(path: string, title?: string): void {
  if (!isAnalyticsEnabled() || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href
  });
}

export function trackEvent(action: string, params?: Record<string, string | number | boolean>): void {
  if (!isAnalyticsEnabled() || !window.gtag) return;
  window.gtag('event', action, params);
}

/** Google Maps listing — customers tap Reviews → write a review */
export const GOOGLE_REVIEW_URL = 'https://maps.google.com/?cid=4711070535657308662';
