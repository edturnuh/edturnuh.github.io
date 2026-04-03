export type ThemeMode = 'light' | 'dark';

const THEME_OVERRIDE_KEY = 'theme-override';
const NIGHT_START_HOUR = 19;
const DAY_START_HOUR = 7;

function isNightTime(date: Date) {
  const hour = date.getHours();
  return hour >= NIGHT_START_HOUR || hour < DAY_START_HOUR;
}

export function getDefaultTheme(date: Date = new Date()): ThemeMode {
  return isNightTime(date) ? 'dark' : 'light';
}

export function getStoredThemeOverride(): ThemeMode | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedValue = window.sessionStorage.getItem(THEME_OVERRIDE_KEY);
  return storedValue === 'light' || storedValue === 'dark' ? storedValue : null;
}

export function getPreferredTheme(): ThemeMode {
  return getStoredThemeOverride() ?? getDefaultTheme();
}

export function applyTheme(theme: ThemeMode) {
  if (typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.dataset.theme = theme;

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute('content', theme === 'dark' ? '#050814' : '#fcfcfa');
  }
}

export function setThemeOverride(theme: ThemeMode) {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.setItem(THEME_OVERRIDE_KEY, theme);
  applyTheme(theme);
}
