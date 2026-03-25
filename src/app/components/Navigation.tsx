import { useState } from 'react';
import { ContactModal } from './ContactModal';

const navItems = [
  { href: '#projects', label: 'Selected Work' },
  { href: '#about', label: 'About' },
  { href: '#notes', label: 'Notes' },
];

export function Navigation() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-neutral-200 bg-[#fcfcfa]/95 backdrop-blur" role="navigation" aria-label="Main navigation">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between gap-6">
          <a href="#main-content" className="text-[15px] font-medium tracking-[0.01em] text-neutral-950">
            Edward Turner
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-[14px] text-neutral-600 hover:text-neutral-950">
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setContactOpen(true)}
            className="rounded-xl border border-neutral-300 px-4 py-2 text-[14px] text-neutral-950 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400"
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
