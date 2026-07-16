import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { getCurrentTheme, trackEvent } from '../lib/analytics';
import content from '../content/generatedContent.json';

type Project = {
  client: string;
  subtitle: string;
  result: string;
  cardSupportingText: string;
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

const projects = content.projects as Project[];

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="scroll-mt-24 border-t border-neutral-200 py-16 dark:border-[#8cb4ff]/15 md:py-20">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p
              className="reveal-on-scroll mb-5 font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 dark:text-[#95abd3]"
              data-reveal
              data-laptop-preload
            >
              Case Studies
            </p>
            <div className="reveal-on-scroll" data-reveal>
              <h2 className="text-[36px] leading-[1.02] tracking-[-0.04em] text-neutral-950 dark:text-[#f2f7ff] md:text-[52px]">
              Selected work
              </h2>
              <p className="body-copy mt-5 text-neutral-700 dark:text-[#cddcf5]">
                I've just started documenting work in this portfolio; major B2B and B2C projects as well as personal stuff.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.client}
                project={project}
                revealDelay={index * 60}
                onClick={() => {
                  trackEvent('project_card_click', {
                    project_name: project.client,
                    project_client: project.result,
                    project_type: project.liveDemo === 'tetris' ? 'live_demo' : 'case_study',
                    theme: getCurrentTheme(),
                  });
                  setSelectedProject(project);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || projects[0]}
      />
    </>
  );
}
