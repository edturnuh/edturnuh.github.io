import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { TetrisGame } from './TetrisGame';
import { useScopedReveal } from '../useScopedReveal';

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
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useScopedReveal(isOpen, modalRef, scrollAreaRef);

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

  const renderRichText = (content: string) => {
    const lines = content.split('\n');
    const blocks: Array<
      | { type: 'paragraph'; html: string }
      | { type: 'list'; items: string[] }
    > = [];

    let paragraphBuffer: string[] = [];
    let listBuffer: string[] = [];

    const flushParagraph = () => {
      if (paragraphBuffer.length > 0) {
        blocks.push({ type: 'paragraph', html: paragraphBuffer.join('<br />') });
        paragraphBuffer = [];
      }
    };

    const flushList = () => {
      if (listBuffer.length > 0) {
        blocks.push({ type: 'list', items: listBuffer });
        listBuffer = [];
      }
    };

    for (const line of lines) {
      const trimmed = line.trim();

      if (!trimmed) {
        flushParagraph();
        flushList();
        continue;
      }

      if (trimmed.startsWith('• ')) {
        flushParagraph();
        listBuffer.push(trimmed.slice(2));
        continue;
      }

      flushList();
      paragraphBuffer.push(trimmed);
    }

    flushParagraph();
    flushList();

    return blocks.map((block, index) => {
      if (block.type === 'list') {
        return (
          <ul key={index} className="space-y-1.5">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} className="body-copy flex gap-3 text-neutral-700">
                <span className="mt-[11px] h-px w-3 shrink-0 bg-neutral-500" aria-hidden="true" />
                <span
                  className="[&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-neutral-950 hover:[&_a]:text-neutral-950"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>
        );
      }

      return (
        <p
          key={index}
          className="[&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-neutral-950 hover:[&_a]:text-neutral-950"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/35 p-3 pt-5 md:items-center md:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
        <div
          ref={modalRef}
          className="animate-fade-in flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-[#fcfcfa] shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 md:px-8">
            <p className="page-enter page-enter-delay-1 font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
              {project.subtitle}
            </p>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="page-enter page-enter-delay-2 inline-flex items-center gap-2 rounded-lg px-2 py-2 text-[14px] text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              aria-label="Close case study"
            >
              <span className="font-mono uppercase tracking-[0.12em]">Close</span>
              <X size={18} aria-hidden="true" />
            </button>
          </div>

        <div ref={scrollAreaRef} className="overflow-y-auto px-6 py-6 md:px-8 md:py-8">
          {project.liveDemo !== 'tetris' && (
            <div className="reveal-on-scroll max-w-3xl" data-reveal data-reveal-delay={40}>
              <h2 id="case-study-title" className="text-[34px] leading-[1.08] tracking-[-0.03em] text-neutral-950 md:text-[42px]">
                {project.client}
              </h2>
            </div>
          )}

          {project.liveDemo === 'tetris' && (
            <section
              aria-labelledby="case-study-title"
              className="reveal-on-scroll overflow-hidden rounded-xl border border-neutral-200 bg-white"
              data-reveal
              data-reveal-delay={40}
            >
              <h2 id="case-study-title" className="sr-only">
                {project.client}
              </h2>
              <div className="h-[360px] md:h-[440px]">
                <TetrisGame />
              </div>
            </section>
          )}

          <section
            className={`reveal-on-scroll rounded-xl border border-neutral-200 bg-white p-5 md:p-6 ${project.liveDemo === 'tetris' ? 'mt-5 md:mt-8' : 'mt-6 md:mt-8'}`}
            data-reveal
            data-reveal-delay={90}
          >
            <h3 className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
              Overview
            </h3>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.8] text-neutral-700">
              {renderRichText(project.detailedDescription)}
            </div>
          </section>

          {project.liveDemo !== 'tetris' && project.metrics.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-2 md:mt-5 md:gap-3">
              {project.metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="reveal-on-scroll rounded-lg border border-neutral-200 bg-white px-3 py-3 md:rounded-xl md:p-4"
                  data-reveal
                  data-reveal-delay={120 + index * 45}
                >
                  <div className="text-[24px] leading-none font-semibold tracking-[-0.03em] text-neutral-950 md:text-[28px]">
                    {metric.value}
                  </div>
                  <div className="mt-2 font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {project.deepDive && (
            <section
              className="reveal-on-scroll mt-4 rounded-xl border border-neutral-200 bg-white p-5 md:p-6"
              data-reveal
              data-reveal-delay={160}
            >
              <h3 className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
                Deep Dive
              </h3>
              <h4 className="mt-3 text-[24px] leading-[1.2] tracking-[-0.02em] text-neutral-950">
                {project.deepDive.title}
              </h4>
              <div className="mt-3 space-y-4 text-[15px] leading-[1.8] text-neutral-700">
                {renderRichText(project.deepDive.description)}
              </div>

              {project.deepDive.stat && (
                <div className="mt-5 rounded-lg border border-neutral-200 bg-[#fafaf8] px-4 py-3">
                  <div className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
                    {project.deepDive.stat.label}
                  </div>
                  <div className="mt-2 text-[26px] leading-none font-semibold tracking-[-0.03em] text-neutral-950">
                    {project.deepDive.stat.value}
                  </div>
                </div>
              )}
            </section>
          )}

          <div className="reveal-on-scroll mt-8 border-t border-neutral-200 pt-6" data-reveal data-reveal-delay={210}>
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
