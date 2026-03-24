import { useState } from 'react';
import { ContactModal } from './ContactModal';
import { Linkedin } from 'lucide-react';

export function CallToAction() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-20 md:py-28 border-t border-neutral-800">
        <div className="max-w-[620px]">
          <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-wider text-neutral-400 mb-5">
            Next step
          </p>
          <h2 className="text-[32px] md:text-[40px] leading-[1.2] text-[#F5F3EF] mb-4">
            Got a problem worth solving?
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.7] text-neutral-400 mb-8">
            I'm always happy to connect with great people / projects, including pro bono work. If you think I could add value, do get in touch.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black text-[14px] md:text-[15px] transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Get in touch
              <span aria-hidden="true">→</span>
            </button>
            <a
              href="https://www.linkedin.com/in/ed-turner/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 text-[#F5F3EF] text-[14px] md:text-[15px] border border-white/10 transition-all hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
        <footer className="mt-24 pt-8 border-t border-neutral-800">
          <div className="flex flex-col gap-6">
            <p className="font-mono text-[12px] uppercase tracking-wider text-neutral-400">
              &copy; 2026 Edward Turner
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {/* WCAG Accessible */}
              <span className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wider text-neutral-400">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" stroke="none" />
                  <path d="M9.5 10h5M12 10v7" />
                  <path d="M10 14l2 3 2-3" />
                </svg>
                WCAG 2.1
              </span>
              {/* Built with React */}
              <span className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wider text-neutral-400">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
                </svg>
                React
              </span>
              {/* TypeScript */}
              <span className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wider text-neutral-400">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <text x="12" y="16.5" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="monospace" fontWeight="bold">TS</text>
                </svg>
                TypeScript
              </span>
              {/* SSL Secure */}
              <span className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wider text-neutral-400">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                SSL Secure
              </span>
              {/* GitHub */}
              <span className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wider text-neutral-400">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </span>
              {/* Performance */}
              
              {/* Responsive */}
              
            </div>
          </div>
        </footer>
      </section>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}