import { useEffect, useRef, useState } from 'react';
import { ContactModal } from './ContactModal';

export function Navigation() {
  const [progress, setProgress] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      const docRect = document.documentElement.getBoundingClientRect();
      const scrolled = -docRect.top;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <>
    <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-neutral-800" role="navigation" aria-label="Main navigation">
      <div className="max-w-[1050px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="text-[16.12px] md:text-[16.34px] tracking-wide text-[#F5F3EF]">Hey, I'm Ed Turner 👋</div>
        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={() => setContactOpen(true)}
            className="font-mono text-[12px] md:text-[13px] uppercase tracking-wider text-neutral-300 hover:text-[#F5F3EF] border border-neutral-600 hover:border-neutral-400 rounded-lg px-4 py-2 transition-all focus:outline-none focus:text-[#F5F3EF] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-haspopup="dialog"
          >
            Contact
          </button>
        </div>
      </div>
      {/* Scroll progress bar aligned to content grid */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-[1050px] mx-auto px-6 md:px-12">
          <div className="h-px w-full relative">
            <div
              className="absolute top-0 left-0 h-full bg-white/50"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </nav>
    <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}