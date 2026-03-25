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
    client: 'Supporting £2bn of growth through CRO',
    subtitle: '2026',
    result: 'Allica Bank',
    cardSupportingText: '+55% CVR while scaling',
    description: 'Complete overhaul of the signup and onboarding experience for a B2B SaaS platform.',
    metrics: [
      { label: 'Conversion Rate', value: '55%+' },
      { label: 'More leads/yr', value: '~7k' },
      { label: 'Growth', value: '5x' },
    ],
    tags: ['Analytics', 'CRO', 'XFN Leadership'],
    detailedDescription: `The goal was to improve conversion rates while scaling digital acquisition (our largest channel) aggressively. This was ultimately in aid of driving new account balance growth for Allica's flagship product – our business current account. 
    
    I led testing of new UIs, conversion flows and trust signals; segmented heavily; and helped unlock major scale (e.g. £20m/month in balances from a single channel). All in, conversion rates increased by ~55%. This helped keep CAC under control, allowed us to continue scaling lead acquisition, and ultimately helped fuel 5x balance growth to over £2bn in under 2 years. 
    
    Allica was ranked fastest-growing company in UK, and the second fastest-growing in Europe (FT1000 2025). We also just raised a Series D round at $1.2bn valuation (2026), making Allica the UK's latest unicorn.`,
    deepDive: {
      title: 'Form Placement A/B Test',
      description: `Users clicking the CTA button were auto-scrolled to a lead gen form at the bottom of the page, interrupting their browsing experience (and our scroll-depth tracking reports). We knew 30–40% of high-intent traffic were clicking CTA buttons, so improving the experience was high priority. 
      
      So, we tested showing the form in a modal popup – overlaying the lead gen form on top of what the user was reading – allowing them to convert there or just click away and come back later. Result: +18% form submissions, rolled out site-wide.`,
      stat: { label: 'Form Submissions', value: '+18%' },
    },
  },
  {
    client: 'Rebuilding a bank\'s website in 4 months',
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
    detailedDescription: `The primary goal was to integrate a new visual brand identity into our 400-page site. We took the opportunity to hit 6 additional objectives:

• Migrate to latest HubSpot CMS → <strong>Done</strong>
• Reshape commercial offering around flagship product → <strong>organic conversion rate up 37%; sustained increase in lead volume</strong>
• Accelerate updates/maintenance via automation → <strong>Ops now 10–20x faster</strong>
• Achieve full WCAG accessibility → <strong>Issues reduced from ~30 to ~3 per page</strong>
• Conduct full on-page technical SEO audit → <strong>Done</strong>
• Secure full compliance/legal approval → <strong>Done</strong>

The strategy to launch in only 4 months revolved around a technical hack. We would prioritize rebuilding 21 high-traffic pages (accounting for ~80% site visits) and apply a 'transition theme' to all other pages (approx ~380) as a short-term fix. This theme would make them instantly look like the new brand (details below). 

Why was speed so important? To avoid maintaining two websites; to avoid sapping the team's bandwidth in such a fast-paced setup; to enable return to a single site ASAP.

Smooth off-peak rollout on call with ~35 stakeholders/testers, each assigned launch-critical tests. All passed within 30-min launch window.`,
    deepDive: {
      title: '\'Transition theme\' tech strategy',
      description: 'To quickly integrate the new visual brand identity across our 400-page site, I deprioritized ~380 low-traffic pages (which accounted for only 20% of site visits) to make the job more manageable. For those deprioritised pages, we cheated by creating a \'transition theme\'. This theme would override the old global CSS (e.g. fonts, colors, borders, border-radius, forms, etc) as well as some key HTML componenets (e.g. header navigation, footer), to make it look as if these pages \'match\' the new theme. Even though we didn\'t touch the content of those pages, they instantly appeared in the new look, delaying the need for full redesign/rewrite until long after launch. Edge cases were fixed with strong quality control checks (pre and post launch). This approach transformed our ability to launch the new site quickly– it only took 4 months start to finish.',
      stat: { label: 'Month rebuild', value: '4' },
    },
  },
  {
    client: '$0 to $100k/month on Shopify',
    subtitle: '2022',
    result: 'TAUR',
    cardSupportingText: '4x ROAS',
    description: 'Built an AI tool that generates marketing copy variations for A/B testing.',
    metrics: [
      { label: 'Monthly pre-orders', value: '£100k' },
      { label: 'ROAS', value: '4x' },
      
    ],
    tags: ['E-commerce', 'CRO', 'SEO', 'User acquisition'],
    detailedDescription: `As founding marketer lead at TAUR Technologies, I launched and scaled the e-commerce site for the world's first premium electric scooter brand. It ran at ~$100k/month worth of pre-orders during its peak, and ultimately drove $2m worth of pre-orders. 
    
    I managed full-stack development and all CRO work which, in conjunction with our ad agency, resulted in 4x ROAS. Also secured $600k+ via Kickstarter and was featured as <a href="https://www.youtube.com/watch?v=i_kxgC6oLZE" target="_blank" rel="noopener noreferrer">Project of the Day</a> twice.`,
  },
  {
    client: 'RSPCA website volunteering',
    subtitle: '2026',
    result: 'RSPCA',
    cardSupportingText: 'Regular campaign support',
    description: '',
    metrics: [],
    tags: ['Volunteer', 'Campaign support', 'Website management'],
    detailedDescription: `I provide ongoing volunteer website support to <a href="https://rspca-suffolkcentral.org.uk/" target="_blank" rel="noopener noreferrer">RSPCA Suffolk Central</a>, helping with campaigns, streamlining web ops and general website management where needed. 
    
    Case study coming soon.`,
  },
  {
    client: 'Building a portfolio with AI',
    subtitle: '2026',
    cardSupportingText: '10x faster dev',
    result: 'For Me',
    description: 'Designed in Figma, built with Codex—shipped in hours instead of weeks.',
    metrics: [
      { label: 'Faster Dev', value: '100x' },
      { label: 'Day build', value: '2' },
      
      
    ],
    tags: ['AI', 'Rapid Prototyping'],
    detailedDescription: `I wanted a portfolio site that showcased real work without spending weeks coding on some boilerplate template. So, I outlined the site in ChatGPT and Figma, then built it via Codex as a React + TypeScript + Vite site with Tailwind CSS and custom components. WCAG compliant. Hosted on Github. 
    
    The result? This site! It's a custom, performant website built in 2 days. The web development portion of that time was a tiny fraction. Development at this speed is mind-blowing, and in my opinion, the output quality is higher because I felt so free to explore design, writing and development on the fly.`,
  },
  {
    client: 'Tetris? 🕹️',
    subtitle: '2026',
    result: 'For you',
    cardSupportingText: 'AI-built launched a game in 4m:29s',
    description: '',
    metrics: [
      { label: 'Board', value: '10×20' },
      { label: 'Pieces', value: '7' },
      { label: 'Inputs', value: 'Keys + UI' },
    ],
    tags: ['AI', 'Rapid prototyping', 'Accessibility'],
    liveDemo: 'tetris',
    detailedDescription: `I don't know if this project was 100x or 1000x faster than coding by hand. Does it matter? I produced a lightweight, responsive, keyboard-friendly, accessible, browser-based Tetris in 4 minutes 29 seconds. I love it so much I left it unpolished.`,
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
            <p className="body-copy mt-5 text-neutral-700">
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
