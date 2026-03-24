import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  project: {
    client: string;
    subtitle: string;
    result: string;
    cardBg: string;
    titleColor: string;
    labelColor: string;
    borderColor: string;
    glowColor: string;
    statGradient: string;
    tintColor: string;
    image: string;
  };
  style?: React.CSSProperties;
  onClick: () => void;
}

export function ProjectCard({ project, style, onClick }: ProjectCardProps) {
  return (
    <article
      data-project-card
      className={`group rounded-2xl overflow-hidden ${project.glowColor} cursor-pointer will-change-transform origin-top focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-black md:shadow-[0_-60px_150px_109px_rgba(0,0,0,0.252),0_-20px_60px_18px_rgba(0,0,0,0.126)]`}
      style={{
        backgroundColor: project.cardBg,
        ...style,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View case study: ${project.client} – ${project.subtitle}`}
    >
      {/* Top labels row: subtitle (left) + result (right) */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 md:px-6 md:pt-5 md:pb-3.5">
        <span
          className="font-mono text-[14.4px] md:text-[15.4px] uppercase tracking-wide leading-none"
          style={{ color: project.labelColor }}
        >
          {project.subtitle}
        </span>
        <span
          className="font-mono text-[13.2px] md:text-[14.3px] uppercase tracking-wider text-right leading-none"
          style={{ color: project.labelColor }}
        >
          {project.result}
        </span>
      </div>

      {/* Divider line */}
      <div className="mx-5 md:mx-6" style={{ borderTop: `1px solid ${project.labelColor}`, opacity: 0.3 }} />

      {/* Title + Arrow */}
      <div className="flex items-start justify-between pt-2.5 px-[24px] py-[8px]">
        <h3 className={`leading-[1.3] font-normal ${project.titleColor} text-[27.16px] md:text-[43.2px] tracking-[-0.01em]`}>
          {project.client}
        </h3>
        <span
          className="text-[27.2px] md:text-[36.9px] lg:text-[41.4px] font-bold transition-transform duration-250 ease-out group-hover:-rotate-45 inline-block"
          style={{ color: project.labelColor }}
        >
          →
        </span>
      </div>

      {/* Hero Image — no border radius */}
      <div className="relative mx-5 mb-4 md:mx-6 md:mb-6 overflow-hidden">
        <div className="aspect-[3/4] md:aspect-[1.8/1]">
          <ImageWithFallback
            src={project.image}
            alt={`${project.client} – ${project.subtitle} project preview`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </article>
  );
}