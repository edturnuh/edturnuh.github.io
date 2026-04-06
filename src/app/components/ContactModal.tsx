import { useEffect, useRef, useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { useScopedReveal } from '../useScopedReveal';
import { getCurrentTheme, trackEvent } from '../lib/analytics';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  openSource: 'nav' | 'contact_section';
}

export function ContactModal({ isOpen, onClose, openSource }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);
  const email = 'edward_turner@hotmail.co.uk';

  useScopedReveal(isOpen, modalRef);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      trackEvent('contact_modal_open', {
        open_source: openSource,
        theme: getCurrentTheme(),
      });
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else {
      document.body.style.overflow = 'unset';
      previousFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, openSource]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    const modal = modalRef.current;
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      trackEvent('email_copy_click', {
        link_type: 'email',
        contact_method: 'copy',
        open_source: openSource,
        theme: getCurrentTheme(),
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      trackEvent('email_copy_click', {
        link_type: 'email',
        contact_method: 'copy',
        open_source: openSource,
        theme: getCurrentTheme(),
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4 dark:bg-[#02050d]/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-desc"
    >
      <div
        ref={modalRef}
        className="animate-fade-in w-full max-w-md rounded-2xl border border-neutral-200 bg-[#fcfcfa] shadow-xl dark:border-[#8cb4ff]/15 dark:bg-[#050814]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 dark:border-[#8cb4ff]/15">
          <span className="page-enter page-enter-delay-1 font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 dark:text-[#95abd3]">Contact</span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="page-enter page-enter-delay-2 rounded-lg p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:text-[#95abd3] dark:hover:bg-[#091021] dark:hover:text-[#f2f7ff] dark:focus:ring-[#78c8ff]/25"
            aria-label="Close contact dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-6">
          <h2
            id="contact-modal-title"
            className="reveal-on-scroll text-[28px] leading-[1.1] tracking-[-0.03em] text-neutral-950 dark:text-[#f2f7ff]"
            data-reveal
            data-reveal-delay={40}
          >
            Get in touch
          </h2>
          <p
            id="contact-modal-desc"
            className="reveal-on-scroll mt-3 text-[16px] leading-[1.7] text-neutral-700 dark:text-[#cddcf5]"
            data-reveal
            data-reveal-delay={90}
          >
            Connect on{' '}
            <a
              href="https://www.linkedin.com/in/ed-turner/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent('linkedin_click', {
                  link_type: 'linkedin',
                  open_source: 'contact_modal',
                  theme: getCurrentTheme(),
                })
              }
              className="underline underline-offset-4"
            >
              LinkedIn
            </a>{' '}
            or email me directly.
          </p>

          <div
            className="reveal-on-scroll mt-6 flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4 dark:border-[#8cb4ff]/15 dark:bg-[#091021]"
            data-reveal
            data-reveal-delay={140}
          >
            <a
              href={`mailto:${email}`}
              onClick={() =>
                trackEvent('email_click', {
                  link_type: 'email',
                  contact_method: 'mailto',
                  open_source: openSource,
                  theme: getCurrentTheme(),
                })
              }
              className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[15px] text-neutral-950 dark:text-[#f2f7ff]"
            >
              {email}
            </a>
            <button
              onClick={handleCopy}
              className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:text-[#95abd3] dark:hover:bg-[#0b1629] dark:hover:text-[#78c8ff] dark:focus:ring-[#78c8ff]/25"
              aria-label={copied ? 'Email address copied' : 'Copy email address to clipboard'}
              aria-live="polite"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
