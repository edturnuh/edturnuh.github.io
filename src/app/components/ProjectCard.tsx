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
      className={`group rounded-2xl overflow-hidden ${project.glowColor} cursor-pointer will-change-transform origin-top focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-black`}
      style={{
        backgroundColor: project.cardBg,
        boxShadow: '0 -60px 150px 109px rgba(0,0,0,0.252), 0 -20px 60px 18px rgba(0,0,0,0.126)',
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
          className="font-mono text-[12px] md:text-[15.4px] uppercase tracking-wide leading-none"
          style={{ color: project.labelColor }}
        >
          {project.subtitle}
        </span>
        <span
          className="font-mono text-[11px] md:text-[14.3px] uppercase tracking-wider text-right leading-none"
          style={{ color: project.labelColor }}
        >
          {project.result}
        </span>
      </div>

      {/* Divider line */}
      <div className="mx-5 md:mx-6" style={{ borderTop: `1px solid ${project.labelColor}`, opacity: 0.3 }} />

      {/* Title + Arrow */}
      <div className="flex items-center justify-between pt-3.5 px-[24px] py-[10px]">
        <h3 className={`leading-[1.3] font-bold ${project.titleColor} text-[35px] md:text-[48px]`}>
          {project.client}
        </h3>
        <span
          className="text-[34px] md:text-[41px] lg:text-[46px] font-bold transition-transform duration-250 ease-out group-hover:-rotate-45 inline-block"
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
            className="w-full h-full object-cover"
          />
        </div>
        {/* Color tint overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: project.tintColor }}
        />
      </div>
    </article>
  );
}