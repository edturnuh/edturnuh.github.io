export type AnalyticsEventName =
  | 'contact_cta_click'
  | 'contact_modal_open'
  | 'email_click'
  | 'email_copy_click'
  | 'linkedin_click'
  | 'project_card_click'
  | 'project_modal_open'
  | 'tetris_start'
  | 'tetris_engaged'
  | 'tetris_game_over'
  | 'theme_toggle'
  | 'scroll_depth';

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function hasAnalytics() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

export function getCurrentTheme() {
  if (typeof document === 'undefined') {
    return 'light';
  }

  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (!hasAnalytics()) {
    return;
  }

  window.gtag?.('event', eventName, params);
}
