import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TetrisGame } from './TetrisGame';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    client: string;
    subtitle: string;
    result: string;
    description: string;
    tags: string[];
    statGradient: string;
    image: string;
    detailedDescription: string;
    images: string[];
    metrics: { label: string; value: string }[];
    deepDive?: {
      title: string;
      description: string;
      image?: string;
      stat?: { label: string; value: string };
    };
    cardBg: string;
    titleColor: string;
    labelColor: string;
    tintColor: string;
    modalResult?: string;
    modalResultLabel?: string;
    liveDemo?: 'tetris';
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Track scroll progress inside the modal's scrollable area
  useEffect(() => {
    const el = scrollRef.current;
    if (!isOpen || !el) return;
    let raf = 0;
    const tick = () => {
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  if (!isOpen) return null;

  // Subtle accent color derived from card identity, used sparingly
  const accentMap: Record<string, string> = {
    '#eb3500': '#ff6b4a',   // warm red → softer coral
    '#ffffff': '#6b8aff',   // white card → soft blue
    '#373737': '#7ddfaa',   // dark card → soft mint
  };
  const accent = accentMap[project.cardBg] || '#888888';

  /**
   * Extracts a YouTube video ID from various URL formats.
   * Returns null if the URL is not a YouTube link.
   */
  function getYouTubeId(url: string): string | null {
    const patterns = [
      /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl animate-scale-in bg-[#141414] border border-white/[0.06]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top labels row — sticky subtitle + close */}
        <div className="sticky top-0 z-10 flex flex-col bg-[#141414] rounded-t-2xl">
          <div className="flex items-center justify-between px-5 pt-4 pb-3 md:px-8 md:pt-6 md:pb-4">
            <span
              className="font-mono text-[14.4px] md:text-[14px] uppercase tracking-wide text-neutral-400"
            >
              {project.subtitle}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg transition-colors text-neutral-400 hover:text-[#F5F3EF] hover:bg-white/5"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
          {/* Scroll progress bar */}
          <div className="px-5 md:px-8">
            <div className="h-px w-full relative bg-white/[0.07]">
              <div
                className="absolute top-0 left-0 h-full bg-white/50 transition-none"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div ref={scrollRef} className="overflow-y-auto flex-1">
          {/* Title */}
          <div className="px-5 pt-3.5 pb-3 md:px-8 md:pt-5 md:pb-4">
            <h2
              id="modal-title"
              className="text-[28px] md:text-[38px] lg:text-[42px] leading-[1.15] font-normal text-[#F5F3EF] md:max-w-[85%]"
            >
              {project.client}
            </h2>
          </div>

          {/* Hero media — image by default, or live playable demo when available */}
          <div className="relative mx-5 md:mx-8 overflow-hidden">
            <div className="aspect-[1.8/1] md:aspect-[2.25/1] 2xl:aspect-[1.8/1]">
              {project.liveDemo === 'tetris' ? (
                <TetrisGame />
              ) : (
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.client} – ${project.subtitle}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {project.liveDemo !== 'tetris' && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            )}
            {/* Result stat overlay — bottom-right */}
            {project.modalResult && project.liveDemo !== 'tetris' && (
              <div className="absolute bottom-4 right-4 md:bottom-5 md:right-6 2xl:bottom-6 text-right">
                <div
                  className="text-[36px] md:text-[48px] font-bold leading-none"
                  style={{ color: accent }}
                >
                  {project.modalResult}
                </div>
                {project.modalResultLabel && (
                  <div className="font-mono text-[12px] md:text-[12px] uppercase tracking-wider text-[#F5F3EF]/70 mt-1">
                    {project.modalResultLabel}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Divider line */}
          <div className="mx-5 mt-5 md:mx-8 md:mt-6 border-t border-white/[0.07]" />

          {/* Description section */}
          <div className="px-5 pt-4 md:px-8 md:pt-5">
            <span
              className="font-mono text-[13.2px] md:text-[13px] uppercase tracking-wider block mb-3 text-neutral-400"
            >
              <strong>Epic</strong> | Overview
            </span>
            <p className="leading-[1.7] text-neutral-300 text-[16px] whitespace-pre-line">
              {project.detailedDescription}
            </p>
          </div>

          {/* Divider line */}
          <div className="mx-5 mt-5 md:mx-8 md:mt-6 border-t border-white/[0.07]" />

          {/* Metrics */}
          <div className="px-5 pt-4 pb-2 md:px-8 md:pt-5 md:pb-3">
            <span
              className="font-mono text-[13.2px] md:text-[13px] uppercase tracking-wider block mb-4 text-neutral-400"
            >
              Key Results
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {project.metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-4 bg-white/[0.03] border border-white/[0.07] ${index === 0 ? 'hidden md:block' : ''}`}
                >
                  <div
                    className="text-[22px] md:text-[26px] font-bold mb-1 text-[#F5F3EF]"
                  >
                    {metric.value}
                  </div>
                  <div
                    className="font-mono text-[12px] md:text-[11px] uppercase tracking-wider text-neutral-400"
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider line */}
          <div className="mx-5 mt-4 md:mx-8 md:mt-5 border-t border-white/[0.07]" />

          {/* Deep Dive — optional detailed case study of a specific example */}
          {project.deepDive && (
            <>
              <div className="px-5 pt-4 md:px-8 md:pt-5">
                <span
                  className="font-mono text-[13.2px] md:text-[13px] uppercase tracking-wider block mb-4 text-neutral-400"
                >
                  <strong>Story</strong> | Deep Dive
                </span>

                <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] overflow-hidden">
                  {/* Deep dive header */}
                  <div className="px-5 pt-5 pb-4 md:px-6">
                    <h3
                      className="text-[20px] md:text-[24px] leading-[1.25] text-[#F5F3EF] mb-3"
                      style={{ color: accent }}
                    >
                      {project.deepDive.title}
                    </h3>
                    <p className="text-[15px] md:text-[16px] leading-[1.7] text-neutral-400 whitespace-pre-line">
                      {project.deepDive.description}
                    </p>
                  </div>

                  {/* Deep dive image with overlaid stat */}
                  {project.deepDive.image && (
                    <div className="px-5 pb-5 md:px-6">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-[2/1]">
                          <ImageWithFallback
                            src={project.deepDive.image}
                            alt={`${project.deepDive.title} – visual`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Dark gradient overlay for legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                        {/* Stat overlay — bottom-right, large and bold */}
                        {project.deepDive.stat && (
                          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-right">
                            <div
                              className="text-[36px] md:text-[48px] font-bold leading-none"
                              style={{ color: accent }}
                            >
                              {project.deepDive.stat.value}
                            </div>
                            <div className="font-mono text-[12px] md:text-[12px] uppercase tracking-wider text-[#F5F3EF]/70 mt-1">
                              {project.deepDive.stat.label}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Stat fallback when no image */}
                  {!project.deepDive.image && project.deepDive.stat && (
                    <div className="px-5 pb-5 md:px-6">
                      <div className="flex flex-col gap-0.5">
                        <span
                          className="text-[36px] md:text-[48px] font-bold leading-none"
                          style={{ color: accent }}
                        >
                          {project.deepDive.stat.value}
                        </span>
                        <span className="font-mono text-[10px] md:text-[12px] uppercase tracking-wider text-neutral-400 mt-1">
                          {project.deepDive.stat.label}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Divider line after deep dive */}
              <div className="mx-5 mt-5 md:mx-8 md:mt-6 border-t border-white/[0.07]" />
            </>
          )}

          {/* Gallery */}
          <div className="px-5 pt-4 md:px-8 md:pt-5">
            <span
              className="font-mono text-[13.2px] md:text-[13px] uppercase tracking-wider block mb-4 text-neutral-400"
            >
              Gallery
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {project.images.map((item, index) => {
                const ytId = getYouTubeId(item);
                if (ytId) {
                  return (
                    <div key={index} className="relative overflow-hidden aspect-video bg-black">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${ytId}`}
                        title={`${project.client} video ${index + 1}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  );
                }
                return (
                  <div key={index} className="relative overflow-hidden">
                    <ImageWithFallback
                      src={item}
                      alt={`${project.client} screenshot ${index + 1}`}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider line */}
          <div className="mx-5 mt-5 md:mx-8 md:mt-6 border-t border-white/[0.07]" />

          {/* Tags */}
          <div className="px-5 pt-4 pb-6 md:px-8 md:pt-5 md:pb-8">
            <span
              className="font-mono text-[13.2px] md:text-[13px] uppercase tracking-wider block mb-3 text-neutral-400"
            >
              Tags
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-md text-neutral-400 bg-white/[0.04] border border-white/[0.07]"
                >
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
