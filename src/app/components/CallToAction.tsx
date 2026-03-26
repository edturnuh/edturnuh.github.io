import { useState } from 'react';
import { ContactModal } from './ContactModal';

export function CallToAction() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section id="contact" className="scroll-mt-24 border-t border-neutral-200 pt-16 pb-8 md:py-20">
        <div className="reveal-on-scroll overflow-hidden rounded-[28px] border border-neutral-200 bg-white" data-reveal>
          <div className="border-b border-neutral-200 px-6 py-4 md:px-8">
            <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
              Contact
            </p>
          </div>

          <div className="grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)] md:gap-10 md:px-8 md:py-10">
            <div className="max-w-3xl">
              <h2 className="text-[36px] leading-[1.02] tracking-[-0.04em] text-neutral-950 md:text-[52px]">
                Open to new roles in web management
              </h2>
              <p className="body-copy mt-5 text-neutral-700">
                I'm keen to connect with great people, projects and organisations (including on pro bono basis). If you think I could add value, do get in touch.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-[#fafaf8] p-5 md:p-6">
              <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
                Next Step
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <button
                  onClick={() => setContactOpen(true)}
                  className="cursor-pointer rounded-xl bg-neutral-950 px-5 py-3 text-[15px] text-white transition-colors duration-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                >
                  Contact
                </button>
                <a
                  href="https://www.linkedin.com/in/ed-turner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-xl border border-neutral-300 bg-white px-5 py-3 text-center text-[15px] text-neutral-900 transition-colors duration-200 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
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
