import { useState } from 'react';
import { ContactModal } from './ContactModal';

export function CallToAction() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-16 md:py-20 border-t border-neutral-200">
        <div className="max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
          <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 mb-4">
            Contact
          </p>
          <h2 className="text-[30px] md:text-[36px] leading-[1.1] tracking-[-0.03em] text-neutral-950">
            Open to senior website product and public web roles
          </h2>
          <p className="mt-4 text-[17px] leading-[1.8] text-neutral-700">
            If you’re hiring for a role spanning growth, execution, and technical delivery, I’d be happy to speak.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => setContactOpen(true)}
              className="rounded-xl bg-neutral-950 px-5 py-3 text-[15px] text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              Contact
            </button>
            <a
              href="https://www.linkedin.com/in/ed-turner/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-neutral-300 px-5 py-3 text-[15px] text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <footer className="mt-12 border-t border-neutral-200 pt-6">
          <p className="text-[13px] text-neutral-500">© 2026 Edward Turner</p>
        </footer>
      </section>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
