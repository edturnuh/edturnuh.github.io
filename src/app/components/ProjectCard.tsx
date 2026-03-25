import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    subtitle: string;
    result: string;
    client: string;
    cardSupportingText: string;
  };
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-7 cursor-pointer transition-colors hover:bg-neutral-50 focus-within:ring-2 focus-within:ring-neutral-400"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View case study: ${project.client}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
          {project.subtitle}
        </span>
        <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500">
          {project.result}
        </span>
      </div>

      <h3 className="mt-6 text-[28px] leading-[1.15] tracking-[-0.03em] text-neutral-950 md:mt-6 md:text-[32px]">
        {project.client}
      </h3>

      <div className="mt-4 flex items-end justify-between gap-4">
        <p className="body-copy flex-1 text-neutral-700">
          {project.cardSupportingText}
        </p>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-neutral-300 bg-neutral-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-700">
          Open
          <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
