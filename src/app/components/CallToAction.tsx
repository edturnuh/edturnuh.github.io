import { useState } from 'react';
import { ContactModal } from './ContactModal';

export function CallToAction() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section id="contact" className="scroll-mt-24 border-t border-neutral-200 pt-16 pb-8 dark:border-[#8cb4ff]/15 md:py-20">
        <div className="reveal-on-scroll overflow-hidden rounded-[28px] border border-neutral-200 bg-white dark:border-[#8cb4ff]/15 dark:bg-[#091021]" data-reveal>
          <div className="border-b border-neutral-200 px-6 py-4 dark:border-[#8cb4ff]/15 md:px-8">
            <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 dark:text-[#95abd3]">
              Contact
            </p>
          </div>

          <div className="grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)] md:gap-10 md:px-8 md:py-10">
            <div className="max-w-3xl">
              <h2 className="text-[36px] leading-[1.02] tracking-[-0.04em] text-neutral-950 dark:text-[#f2f7ff] md:text-[52px]">
                Open to new roles in website management
              </h2>
              <p className="body-copy mt-5 text-neutral-700 dark:text-[#cddcf5]">
                Full time or fractional, I'm keen to connect with great people and projects. Pro bono welcome. Let's get on a call.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-[#fafaf8] p-5 dark:border-[#8cb4ff]/15 dark:bg-[#0b1629] md:p-6">
              <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 dark:text-[#95abd3]">
                Next Step
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <button
                  onClick={() => setContactOpen(true)}
                  className="cursor-pointer rounded-xl bg-neutral-950 px-5 py-3 text-[15px] text-white transition-colors duration-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-[#78c8ff] dark:text-[#071524] dark:hover:bg-[#95d7ff] dark:focus:ring-[#78c8ff]/30"
                >
                  Contact
                </button>
                <a
                  href="https://www.linkedin.com/in/ed-turner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-xl border border-neutral-300 bg-white px-5 py-3 text-center text-[15px] text-neutral-900 transition-colors duration-200 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:border-[#8cb4ff]/18 dark:bg-[#091021] dark:text-[#f2f7ff] dark:hover:bg-[#0d1830] dark:focus:ring-[#78c8ff]/25"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 border-t border-neutral-200 pt-6 dark:border-[#8cb4ff]/15">
          <p className="text-[13px] text-neutral-500 dark:text-[#95abd3]">© 2026 Edward Turner</p>
        </footer>
      </section>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
