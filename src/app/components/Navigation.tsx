import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ContactModal } from './ContactModal';
import { applyTheme, getPreferredTheme, setThemeOverride, type ThemeMode } from '../theme';
import { trackEvent } from '../lib/analytics';

const navItems = [
  { href: '#projects', label: 'Selected Work' },
  { href: '#about', label: 'About' },
  { href: '#notes', label: 'Notes' },
];

export function Navigation() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');
  const [theme, setTheme] = useState<ThemeMode>(() => getPreferredTheme());

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        href: item.href,
        element: document.querySelector(item.href) as HTMLElement | null,
      }))
      .filter((section): section is { href: string; element: HTMLElement } => section.element !== null);

    const contactSection = document.querySelector('#contact') as HTMLElement | null;

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const activationLine = scrollY + 240;
      const distanceFromBottom =
        document.documentElement.scrollHeight - (window.innerHeight + scrollY);

      if (distanceFromBottom < 250) {
        setActiveHref('');
        return;
      }

      if (activationLine < sections[0].element.offsetTop) {
        setActiveHref('');
        return;
      }

      if (contactSection && activationLine >= contactSection.offsetTop) {
        setActiveHref('');
        return;
      }

      let nextActiveHref = '';

      for (const section of sections) {
        if (activationLine >= section.element.offsetTop) {
          nextActiveHref = section.href;
        }
      }

      setActiveHref(nextActiveHref);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const isDarkMode = theme === 'dark';
  const nextTheme = isDarkMode ? 'light' : 'dark';
  const ThemeIcon = isDarkMode ? Sun : Moon;
  const themeLabel = isDarkMode ? 'Light' : 'Dark';
  const themeToggleClassName = isDarkMode
    ? 'cursor-pointer inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-[#8cb4ff]/18 bg-[#091021] px-3 py-2 text-[14px] text-[#f2f7ff] transition-all duration-200 hover:border-[#d6e8ff] hover:bg-[#f2f7ff] hover:text-[#071524] focus:outline-none focus:ring-2 focus:ring-[#78c8ff]/25'
    : 'cursor-pointer inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-neutral-300 bg-white px-3 py-2 text-[14px] text-neutral-950 transition-all duration-200 hover:border-[#78c8ff] hover:bg-[#091021] hover:text-[#f2f7ff] focus:outline-none focus:ring-2 focus:ring-[#78c8ff]/25';

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-neutral-200 bg-[#fcfcfa]/95 pt-[env(safe-area-inset-top)] backdrop-blur transition-colors duration-300 dark:border-[#8cb4ff]/15 dark:bg-[#050814]/95" role="navigation" aria-label="Main navigation">
        <div className="page-enter page-enter-delay-1 mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-6 py-5 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 md:px-12">
          <a
            href="#top"
            className="text-[15px] font-medium tracking-[0.01em] text-neutral-950 transition-colors duration-200 hover:text-neutral-700 dark:text-[#f2f7ff] dark:hover:text-[#78c8ff] md:justify-self-start"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Ed Turner
          </a>

          <div className="hidden items-center justify-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[14px] underline-offset-4 transition-colors duration-200 hover:text-neutral-950 dark:hover:text-[#f2f7ff] ${
                  activeHref === item.href ? 'text-neutral-950 underline dark:text-[#f2f7ff]' : 'text-neutral-600 dark:text-[#cddcf5]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center justify-self-end gap-2">
            <button
              onClick={() => {
                const previousTheme = theme;
                setTheme(nextTheme);
                setThemeOverride(nextTheme);
                trackEvent('theme_toggle', {
                  theme_from: previousTheme,
                  theme_to: nextTheme,
                  toggle_location: 'nav',
                });
              }}
              className={themeToggleClassName}
              aria-label={`Switch to ${nextTheme} mode`}
              aria-pressed={isDarkMode}
            >
              <ThemeIcon size={16} aria-hidden="true" />
              <span className="hidden text-[13px] font-medium tracking-[0.01em] md:inline">{themeLabel}</span>
            </button>

            <button
              onClick={() => {
                trackEvent('contact_cta_click', {
                  cta_location: 'nav',
                  page_section: 'navigation',
                  theme,
                });
                setContactOpen(true);
              }}
              className="cursor-pointer rounded-xl border border-neutral-300 px-4 py-2 text-[14px] text-neutral-950 transition-colors duration-200 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:border-[#8cb4ff]/18 dark:bg-[#091021] dark:text-[#f2f7ff] dark:hover:bg-[#0d1830] dark:focus:ring-[#78c8ff]/25"
              aria-haspopup="dialog"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} openSource="nav" />
    </>
  );
}
