import { useEffect, useRef, useState } from 'react';
import { X, Copy, Check } from 'lucide-react';

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

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else {
      document.body.style.overflow = 'unset';
      previousFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-desc"
    >
      <div
        ref={modalRef}
        className="w-full max-w-md rounded-2xl border border-neutral-200 bg-[#fcfcfa] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">Contact</span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            aria-label="Close contact dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-6">
          <h2 id="contact-modal-title" className="text-[28px] leading-[1.1] tracking-[-0.03em] text-neutral-950">
            Get in touch
          </h2>
          <p id="contact-modal-desc" className="mt-3 text-[16px] leading-[1.7] text-neutral-700">
            Connect on{' '}
            <a
              href="https://www.linkedin.com/in/ed-turner/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              LinkedIn
            </a>{' '}
            or email me directly.
          </p>

          <div className="mt-6 flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4">
            <a
              href={`mailto:${email}`}
              className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[15px] text-neutral-950"
            >
              {email}
            </a>
            <button
              onClick={handleCopy}
              className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-400"
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
