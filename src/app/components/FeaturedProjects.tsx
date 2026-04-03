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
    client: 'Driving CRO within a £1.6bn growth story',
    subtitle: '2026',
    result: 'Allica Bank',
    cardSupportingText: '+55% CVR while scaling',
    description: 'Complete overhaul of the signup and onboarding experience for a B2B SaaS platform.',
    metrics: [
      { label: 'CVR (PAID)', value: '+55%' },
      { label: 'More leads/yr', value: '~7k' },
      { label: 'Growth', value: '5x' },
    ],
    tags: ['Analytics', 'CRO', 'XFN Leadership'],
    detailedDescription: `I was tasked with increasing conversion while we aggressively scaled digital acquisition, Allica’s biggest growth channel. My goal was simple: turn more traffic into leads (or MQLs, strictly speaking) for our business current account and help drive balance growth on the bank’s flagship product.
    
    I led testing of new UIs, conversion flows and trust signals; segmented heavily; and helped unlock major scale (e.g. £20m/month in balances from a single channel). All in, conversion rates increased by ~55%. This helped keep CAC under control, allowed us to continue scaling lead generation, and ultimately helped fuel 5x balance growth to over £2bn in under 2 years. 
    
    Allica was ranked fastest-growing company in UK, and the second fastest-growing in Europe (FT1000 2025). We also just raised a Series D round at $1.2bn valuation (2026), making Allica the UK's latest unicorn.`,
    deepDive: {
      title: 'Form Placement A/B Test',
      description: `Users clicking the CTA button were auto-scrolled to a lead gen form at the bottom of the page, interrupting their browsing experience (and our scroll-depth tracking reports). We knew 30–40% of high-intent traffic were clicking CTA buttons, which made improving the experience a high priority. 
      
      So, we tested showing the form in a modal popup – overlaying the lead gen form on top of what the user was reading – allowing them to convert there or just click away and come back later. Result: +18% form submissions, rolled out site-wide.`,
      stat: { label: 'Form Submissions', value: '+18%' },
    },
  },
  {
    client: 'Rebuilding a bank\'s website into a scalable growth asset',
    subtitle: '2025',
    result: 'Allica Bank',
    cardSupportingText: 'Rapid 4-month rebuild',
    description: 'Rebuilt marketing site.',

    metrics: [
      { label: 'Organic CVR', value: '+37%' },
      { label: 'Faster ops', value: '10x' },
      { label: 'WCAG issues', value: '-90%' },
    ],
    tags: ['Hubspot', 'Brand', 'CRO', 'Ops', 'WCAG', 'SEO'],
    detailedDescription: `We needed to roll out a new brand across our 400-page website, but the real opportunity was to make the site scale more easily and perform better. I leveraged the project to deliver a step-change in quality, performance, scalability and compliance:

• Migrate to latest HubSpot CMS → <strong>Done</strong>
• Reshape website offering around flagship product → <strong>Organic conversion rate up 37% with a sustained increase in lead volume</strong>
• Accelerate updates/maintenance via automation → <strong>Regular operations now 10–20x faster</strong>
• Transform accessibility → <strong>WCAG issues reduced from ~30 to ~3 per page</strong>
• Conduct full on-page technical SEO audit → <strong>Done</strong>
• Full audit and sign off from compliance/legal team → <strong>Done</strong>

...in only 4 months. 

Our ability to launch so quickly revolved around a technical hack. We would prioritize rebuilding 21 high-traffic pages (accounting for ~80% site visits) and apply a 'transition theme' to all other pages (approx ~380) as a short-term fix. This theme would make them instantly look like the new brand (details below). 

Why was speed so important? To avoid maintaining two websites; to avoid sapping the team's bandwidth in such a fast-paced setup; to enable return to a single site ASAP.

Smooth off-peak rollout on call with ~35 stakeholders/testers, each assigned launch-critical tests. All passed within 30-min launch window.`,
    deepDive: {
      title: '\'Transition theme\' tech strategy',
      description: 'To quickly integrate the new visual brand identity across our 400-page site, I deprioritized ~380 low-traffic pages (which accounted for only 20% of site visits) to make the job more manageable. For those deprioritised pages, we cheated by creating a \'transition theme\'. This theme would override the old global CSS (e.g. fonts, colors, borders, border-radius, forms, etc) as well as some key HTML componenets (e.g. header navigation, footer), to make it look as if these pages \'match\' the new theme. Even though we didn\'t touch the content of those pages, they instantly appeared in the new look, delaying the need for full redesign/rewrite until long after launch. Edge cases were fixed with strong quality control checks (pre and post launch). This approach transformed our ability to launch the new site quickly– it only took 4 months start to finish.',
      stat: { label: 'Month rebuild', value: '4' },
    },
  },
  {
    client: 'From zero to $100k/month on Shopify',
    subtitle: '2022',
    result: 'TAUR',
    cardSupportingText: '4x blended ROAS',
    description: 'Built an AI tool that generates marketing copy variations for A/B testing.',
    metrics: [
      { label: 'Monthly', value: '$100k' },
      { label: 'ROAS', value: '4x' },
      
    ],
    tags: ['E-commerce', 'CRO', 'SEO', 'User acquisition'],
    detailedDescription: `As founding marketer lead at TAUR Technologies, I launched and scaled the e-commerce site for the world's first premium electric scooter brand. It ran at ~$100k/month worth of pre-orders during its peak, and ultimately drove $2m worth of pre-orders. 
    
    I managed full-stack development and all CRO work which, alongside our ad performance optimisation, resulted in 4x blended ROAS. Also secured $600k+ via Kickstarter and was featured as <a href="https://www.youtube.com/watch?v=i_kxgC6oLZE" target="_blank" rel="noopener noreferrer">Project of the Day</a> twice.`,
  },
  {
    client: 'Scaling campaign operations for the RSPCA',
    subtitle: '2026',
    result: 'RSPCA',
    cardSupportingText: 'Charity work',
    description: '',
    metrics: [],
    tags: ['AI', 'Wordpress'],
    detailedDescription: `Case study coming soon.
    
    As a volunteer, I provide ongoing support to <a href="https://rspca-suffolkcentral.org.uk/" target="_blank" rel="noopener noreferrer">RSPCA Suffolk Central</a>, helping with campaigns, web operations and general website issues as needed.`,
  },
  {
    client: '🕹️ Launching a playable game in 4 mins 29 seconds',
    subtitle: '2026',
    result: 'For you',
    cardSupportingText: 'Game of Tetris?',
    description: '',
    metrics: [
      { label: 'Board', value: '10×20' },
      { label: 'Pieces', value: '7' },
      { label: 'Inputs', value: 'Keys + UI' },
    ],
    tags: ['AI', 'Rapid prototyping', 'Accessibility'],
    liveDemo: 'tetris',
    detailedDescription: `I don't know if this AI project was 100x or 1000x faster than coding by hand... but does it matter? I launched a lightweight, responsive, keyboard-friendly, accessible, browser-based Tetris game in 4 minutes and 29 seconds. I love it so much I left it unpolished.`,
  },
  {
    client: 'Coding a fully custom website 1000x faster with AI',
    subtitle: '2026',
    cardSupportingText: 'AI-native dev workflow',
    result: 'For Me',
    description: 'Designed in Figma, built with Codex—shipped in hours instead of weeks.',
    metrics: [
      { label: 'Faster Dev', value: '1000x' },
      { label: 'Day build', value: '2' },
      
      
    ],
    tags: ['AI', 'Rapid Prototyping'],
    detailedDescription: `I wanted a portfolio site that showcased real work without spending weeks coding on some boilerplate template. So, I outlined the site in ChatGPT and Figma, then built it via Codex as a React + TypeScript + Vite site with Tailwind CSS and custom components. WCAG compliant. Hosted on Github. 
    
    The result? This site! A custom, performant website built in 2 days. 
    
    The web development portion of the 2 days was a tiny fraction. Coding at this speed is mind-blowing, and in my opinion, resulted in higher output quality because I felt so free to explore design, writing and development on the fly. 
    
    For example, the dark mode function (in the navigation bar) took about 30s to code, which meant I could spend 20 minutes enjoying choosing the color pallette that felt right for me. Give it a try!`,
  },
];

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
