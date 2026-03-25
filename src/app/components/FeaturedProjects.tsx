import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

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

const projects: Project[] = [
  {
    client: 'Supporting £2bn of growth with CRO',
    subtitle: '2026',
    result: 'Allica Bank',
    cardSupportingText: '+55% CVR uplift while scaling',
    description: 'Complete overhaul of the signup and onboarding experience for a B2B SaaS platform.',
    metrics: [
      { label: 'Conversion Rate', value: '55%+' },
      { label: 'More leads/yr', value: '~7k' },
      { label: 'Growth', value: '5x' },
    ],
    tags: ['Analytics', 'CRO', 'XFN Leadership'],
    detailedDescription: `Improving conversion rates while scaling aggressively drove Allica's flagship business current account growth. We tested new UIs, conversion flows and trust signals; segmented heavily; unlocked major scale (e.g. £20m/month in balances from a single channel). Reducing CAC helped fuel 5x balance growth in under 2 years. Allica ranked #1 fastest-growing company in UK (FT1000 2025), and we just raised our Series D at $1.2bn valuation (2026).`,
    deepDive: {
      title: 'Form Placement A/B Test',
      description: `Users clicking the CTA were auto-scrolled to page bottom, disrupting their experience and our scroll-depth tracking. With 30–40% of high-intent traffic hitting the button, we embedded the form in a modal popup instead. Result: +18% form submissions, rolled out site-wide.`,
      stat: { label: 'Form Submissions', value: '+18%' },
    },
  },
  {
    client: 'Rebuilding a bank website in 4 months',
    subtitle: '2025',
    result: 'Allica Bank',
    cardSupportingText: '+37% organic CVR',
    description: 'Rebuilt marketing site.',

    metrics: [
      { label: 'Organic CVR uplift', value: '37%' },
      { label: 'Faster operations', value: '10x' },
      { label: 'WCAG issues', value: '-90%' },
    ],
    tags: ['Brand', 'CRO', 'Ops', 'WCAG', 'SEO'],
    detailedDescription: `The goal was to integrate a new visual brand identity into our 400-page site. We took the opportunity to hit 6 additional objectives:

• Migrate to latest HubSpot CMS → Done.
• Reshape commercial offering around flagship product → organic conversion rate up 37%; sustained increase in lead volume.
• Accelerate updates/maintenance via automation → Ops now 10–20x faster.
• Achieve full WCAG accessibility → Issues reduced from ~30 to ~3 per page.
• Conduct full on-page technical SEO audit → Done.
• Secure full compliance/legal approval → Done.

The strategy to launch in only 4 months revolved around a technical hack. We would prioritize rebuilding 21 high-traffic pages (accounting for ~80% site visits) and apply a 'transition theme' to all other pages (approx ~380) as a short-term fix. This theme would make them instantly look like the new brand (details below). 

And why was speed so important? To avoid maintaining two websites; to avoid sapping the team's bandwidth in such a fast-paced setup; to enable return to a single site ASAP.

Smooth off-peak rollout on call with ~35 stakeholders/testers, each assigned bank-critical tests. All passed within 30-min launch window.`,
    deepDive: {
      title: '\'Transition theme\' tech strategy',
      description: 'To quickly integrate the new visual brand identity across our 400-page site, I deprioritized ~380 low-traffic pages (only 20% of site visits). For those pages, we deployed a "transition theme", overhauling global elements/CSS, matching header nav/footer, tweaking fonts/sizes/colors/borders, plus rules to hide old assets. Routing HTML through the new theme resulted in an instant new look, delaying full redesign/rewrite til post-launch. Pre-launch: we made occasional HTML tweaks. Post-launch: Reviewed all again and fixed urgents immediately. This really sped up the launch of the new site– only 4 months start to finish.',
      stat: { label: 'Rapid rebuild', value: '4-month' },
    },
  },
  {
    client: 'Selling £100k/month on Shopify',
    subtitle: '2022',
    result: 'TAUR',
    cardSupportingText: '4x ROAS',
    description: 'Built an AI tool that generates marketing copy variations for A/B testing.',
    metrics: [
      { label: 'Monthly pre-orders', value: '£100k' },
      { label: 'ROAS', value: '4x' },
      
    ],
    tags: ['AI/ML', 'API Design', 'Product'],
    detailedDescription: 'As founding marketer lead at TAUR Technologies, I scaled the e-commerce site from scratch for the world\'s first premium electric scooter brand. Achieving $100k/month worth of pre-orders during its peak – and $2m worth of pre-orders overall. I managed full-stack development, A/B testing, and a unique \'Virtual Showroom\' to help position TAUR as the industry\'s first mainstream desirable electric scooter. Also secured $600k+ via Kickstarter and was featured as \'Project of the Day\' twice.',
  },
  {
    client: 'Building a portfolio with AI',
    subtitle: '2026',
    cardSupportingText: '10x faster dev',
    result: 'For Me',
    description: 'Designed in Figma, built with Claude—shipped in hours instead of weeks.',
    metrics: [
      { label: 'Faster Dev', value: '10x' },
      { label: 'Day build', value: '2' },
      
      
    ],
    tags: ['AI', 'Design Systems', 'Rapid Prototyping'],
    detailedDescription: `I wanted a portfolio that showcased real work without spending weeks coding from scratch. Figma let me design pixel-perfect layouts with component variants, auto-layout, and a proper design system. Claude took those designs and generated production-ready React code with sticky scroll effects, modals, accessibility features, and responsive layouts. The result? A polished, performant site built in a fraction of the time traditional development would take—proof that AI can supercharge the entire design-to-code workflow.`,
  },
  {
    client: 'Play Tetris 🕹️',
    subtitle: '2026',
    result: 'For you',
    cardSupportingText: 'AI project made in 4m29s',
    description: 'Designed and built an accessible browser Tetris with a polished in-case-study playable demo.',
    metrics: [
      { label: 'Board', value: '10×20' },
      { label: 'Pieces', value: '7' },
      { label: 'Inputs', value: 'Keys + UI' },
    ],
    tags: ['Frontend', 'Accessibility', 'Game Design', 'Interaction'],
    liveDemo: 'tetris',
    detailedDescription: `I built a browser Tetris directly into the case study so people could play something immediately instead of just reading about it. It’s lightweight, responsive, keyboard-friendly, accessible, and intentionally simple enough to feel polished rather than gimmicky.`,
  },
];

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="scroll-mt-24 py-16 md:py-20 border-t border-neutral-200">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 mb-5">
              Case Studies
            </p>
            <h2 className="text-[36px] leading-[1.02] tracking-[-0.04em] text-neutral-950 md:text-[52px]">
              Selected work
            </h2>
            <p className="mt-5 text-[18px] leading-[1.7] text-neutral-700 md:text-[20px]">
              I've just started documenting work in this portfolio; major commercial projects as well as personal stuff.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.client}
                project={project}
                onClick={() => setSelectedProject(project)}
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
