import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { TetrisGame } from './TetrisGame';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    client: string;
    subtitle: string;
    result: string;
    description: string;
    metrics: { label: string; value: string }[];
    tags: string[];
    detailedDescription: string;
    liveDemo?: 'tetris';
    deepDive?: {
      title: string;
      description: string;
      stat?: { label: string; value: string };
    };
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

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
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
        <div
          ref={modalRef}
          className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-[#fcfcfa] shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 md:px-8">
            <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
              {project.subtitle}
            </p>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-[14px] text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              aria-label="Close case study"
            >
              <span className="font-mono uppercase tracking-[0.12em]">Close</span>
              <X size={18} aria-hidden="true" />
            </button>
          </div>

        <div className="overflow-y-auto px-6 py-6 md:px-8 md:py-8">
          {project.liveDemo !== 'tetris' && (
            <div className="max-w-3xl">
              <h2 id="case-study-title" className="text-[34px] leading-[1.08] tracking-[-0.03em] text-neutral-950 md:text-[42px]">
                {project.client}
              </h2>
            </div>
          )}

          {project.liveDemo === 'tetris' ? (
            <section
              aria-labelledby="case-study-title"
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
            >
              <h2 id="case-study-title" className="sr-only">
                {project.client}
              </h2>
              <div className="h-[360px] md:h-[440px]">
                <TetrisGame />
              </div>
            </section>
          ) : (
            <div className="mt-6 grid grid-cols-3 gap-2 md:mt-8 md:gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-neutral-200 bg-white px-3 py-3 md:rounded-xl md:p-4">
                  <div className="text-[24px] leading-none font-semibold tracking-[-0.03em] text-neutral-950 md:text-[28px]">
                    {metric.value}
                  </div>
                  <div className="mt-1.5 text-[10px] leading-[1.35] uppercase tracking-[0.08em] text-neutral-500 md:mt-2 md:text-[13px] md:tracking-[0.12em]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <section className="mt-5 rounded-xl border border-neutral-200 bg-white p-5 md:mt-8 md:p-6">
            <h3 className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
              Overview
            </h3>
            <p className="mt-4 whitespace-pre-line text-[15px] leading-[1.8] text-neutral-700">
              {project.detailedDescription}
            </p>
          </section>

          {project.deepDive && (
            <section className="mt-4 rounded-xl border border-neutral-200 bg-white p-5 md:p-6">
              <h3 className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
                Deep Dive
              </h3>
              <h4 className="mt-3 text-[24px] leading-[1.2] tracking-[-0.02em] text-neutral-950">
                {project.deepDive.title}
              </h4>
              <p className="mt-3 whitespace-pre-line text-[15px] leading-[1.8] text-neutral-700">
                {project.deepDive.description}
              </p>

              {project.deepDive.stat && (
                <div className="mt-5 rounded-lg border border-neutral-200 bg-[#fafaf8] px-4 py-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                    {project.deepDive.stat.label}
                  </div>
                  <div className="mt-2 text-[26px] leading-none font-semibold tracking-[-0.03em] text-neutral-950">
                    {project.deepDive.stat.value}
                  </div>
                </div>
              )}
            </section>
          )}

          <div className="mt-8 border-t border-neutral-200 pt-6">
            <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 mb-3">
              Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[12px] text-neutral-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
