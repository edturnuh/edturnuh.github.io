import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    subtitle: string;
    result: string;
    client: string;
    cardSupportingText: string;
  };
  revealDelay?: number;
  onClick: () => void;
}

export function ProjectCard({ project, revealDelay = 0, onClick }: ProjectCardProps) {
  return (
    <article
      className="group reveal-on-scroll cursor-pointer rounded-2xl border border-neutral-200 bg-white p-6 transition-colors duration-300 hover:border-neutral-300 hover:bg-neutral-50 focus-within:border-neutral-300 focus-within:ring-2 focus-within:ring-neutral-400 dark:border-[#8cb4ff]/15 dark:bg-[#091021] dark:hover:border-[#78c8ff]/35 dark:hover:bg-[#0d1830] dark:focus-within:border-[#78c8ff]/35 dark:focus-within:ring-[#78c8ff]/25 md:p-7"
      onClick={onClick}
      role="button"
      tabIndex={0}
      data-reveal
      data-reveal-delay={revealDelay}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View case study: ${project.client}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 dark:text-[#95abd3]">
          {project.subtitle} | {project.result}
        </span>
        <div className="flex items-center gap-3">
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-neutral-300 bg-neutral-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-700 transition-colors duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white group-focus-within:border-neutral-950 group-focus-within:bg-neutral-950 group-focus-within:text-white dark:border-[#8cb4ff]/18 dark:bg-[#0b1629] dark:text-[#cddcf5] dark:group-hover:border-[#78c8ff] dark:group-hover:bg-[#78c8ff] dark:group-hover:text-[#071524] dark:group-focus-within:border-[#78c8ff] dark:group-focus-within:bg-[#78c8ff] dark:group-focus-within:text-[#071524]">
            Open
            <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        </div>
      </div>

      <h3 className="mt-6 text-[28px] leading-[1.15] tracking-[-0.03em] text-neutral-950 dark:text-[#f2f7ff] md:mt-6 md:text-[30px]">
        {project.client}
      </h3>

      <p className="body-copy mt-4 text-neutral-700 dark:text-[#cddcf5]">
        {project.cardSupportingText}
      </p>
    </article>
  );
}
