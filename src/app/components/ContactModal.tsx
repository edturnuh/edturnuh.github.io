import { useEffect, useRef } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

  const email = 'edward_turner@hotmail.co.uk';

  // Lock body scroll & store previous focus
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      // Focus close button on open
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else {
      document.body.style.overflow = 'unset';
      // Restore focus when closing
      previousFocusRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Focus trap
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
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-desc"
    >
      <div
        ref={modalRef}
        className="rounded-2xl max-w-md w-full shadow-2xl animate-scale-in bg-[#141414] border border-white/[0.06] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 md:px-8 md:pt-6 md:pb-5 border-b border-white/[0.07]">
          <span className="font-mono text-[12px] md:text-[13px] uppercase tracking-wider text-neutral-500">
            Get in touch
          </span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1.5 rounded-lg transition-colors text-neutral-500 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#141414]"
            aria-label="Close contact dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pt-6 pb-8 md:px-8 md:pt-8 md:pb-10">
          <h2
            id="contact-modal-title"
            className="text-[24px] md:text-[28px] leading-[1.2] text-white mb-3"
          >
            Let's have a chat.
          </h2>
          <p
            id="contact-modal-desc"
            className="text-[15px] md:text-[16px] leading-[1.7] text-neutral-400 mb-6"
          >
            If you have a project in mind, let's connect on {' '}
            <a
              href="https://www.linkedin.com/in/ed-turner/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded"
            >
              LinkedIn
            </a> – or drop me an email.
          </p>

          {/* Email address with copy icon */}
          <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-4">
            <a
              href={`mailto:${email}`}
              className="flex-1 text-[15px] md:text-[16px] text-white select-all break-all hover:underline focus:outline-none focus:underline"
              aria-label={`Send email to ${email}`}
            >
              {email}
            </a>
            <button
              onClick={handleCopy}
              className="shrink-0 p-2 rounded-lg transition-colors text-neutral-500 hover:text-white hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#141414]"
              aria-label={copied ? 'Email address copied' : 'Copy email address to clipboard'}
              aria-live="polite"
            >
              {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}