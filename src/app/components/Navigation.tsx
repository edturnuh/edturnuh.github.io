import { useEffect, useState } from 'react';
import { ContactModal } from './ContactModal';

const navItems = [
  { href: '#projects', label: 'Selected Work' },
  { href: '#about', label: 'About' },
  { href: '#notes', label: 'Notes' },
];

export function Navigation() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');

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

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-neutral-200 bg-[#fcfcfa]/95 backdrop-blur" role="navigation" aria-label="Main navigation">
        <div className="page-enter page-enter-delay-1 max-w-[1120px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between gap-6">
          <a
            href="#top"
            className="text-[15px] font-medium tracking-[0.01em] text-neutral-950 transition-colors duration-200 hover:text-neutral-700"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Ed Turner
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[14px] underline-offset-4 transition-colors duration-200 hover:text-neutral-950 ${
                  activeHref === item.href ? 'text-neutral-950 underline' : 'text-neutral-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setContactOpen(true)}
            className="cursor-pointer rounded-xl border border-neutral-300 px-4 py-2 text-[14px] text-neutral-950 transition-colors duration-200 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            aria-haspopup="dialog"
          >
            Contact
          </button>
        </div>
      </nav>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
