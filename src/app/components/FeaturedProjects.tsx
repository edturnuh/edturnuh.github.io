import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import imgImage1 from "figma:asset/e36e214886c9798d7ecd4e0bc01379d32f57587c.png";
import imgImage2 from "figma:asset/cb03a2b08a1d307250c5e359e10e28fa18685edd.png";
import imgImage3 from "figma:asset/f1aee0b8181b32715025f2bef3c3a6632d78683a.png";

const projects = [
  {
    client: 'Rebuilding a $1.2bn bank’s website in 4 months',
    subtitle: '2025',
    result: 'Allica Bank',
    modalResult: '37%',
    modalResultLabel: 'Organic CVR uplift',
    cardBg: '#eb3500',
    titleColor: 'text-black',
    labelColor: 'rgba(0,0,0,0.75)',
    borderColor: 'border-[rgba(173,70,255,0.2)]',
    glowColor: 'shadow-[0px_25px_50px_-12px_rgba(173,70,255,0.1)]',
    statGradient: 'from-[#b62800] to-[#c03901]',
    tintColor: 'rgba(173,70,255,0.15)',
    image: imgImage1,
    description: 'Rebuilt marketing site.',
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
    images: [imgImage1, imgImage1],
    metrics: [
      { label: 'Organic CVR uplift', value: '37%' },
      
      { label: 'Faster operations', value: '10x' },
      { label: 'WCAG issue reduction', value: '90%' },
    ],
    deepDive: {
      title: '\'Transition theme\' tech strategy',
      description: 'To quickly integrate the new visual brand identity across our 400-page site, I deprioritized ~380 low-traffic pages (only 20% of site visits). For those pages, we deployed a "transition theme", overhauling global elements/CSS, matching header nav/footer, tweaking fonts/sizes/colors/borders, plus rules to hide old assets. Routing HTML through the new theme resulted in an instant new look, delaying full redesign/rewrite til post-launch. Pre-launch: we made occasional HTML tweaks. Post-launch: Reviewed all again and fixed urgents immediately. This really sped up the launch of the new site– only 4 months start to finish.',
      image: imgImage1,
      stat: { label: 'Rapid rebuild', value: '4-month' },
    },
  },
  {
    client: 'Unlocking scale through 55% conversion uplift',
    subtitle: '2026',
    result: 'Allica Bank',
    cardBg: '#ffffff',
    titleColor: 'text-[#010293]',
    labelColor: 'rgba(1,2,147,0.55)',
    borderColor: 'border-[rgba(43,127,255,0.2)]',
    glowColor: 'shadow-[0px_25px_50px_-12px_rgba(43,127,255,0.1)]',
    statGradient: 'from-[#2b7fff] to-[#00b8db]',
    tintColor: 'rgba(43,127,255,0.15)',
    image: imgImage2,
    description: 'Complete overhaul of the signup and onboarding experience for a B2B SaaS platform.',
    tags: ['Analytics', 'CRO', 'XFN Leadership'],
    detailedDescription: `Improving conversion rates while scaling aggressively drove Allica's flagship business current account growth. We tested new UIs, conversion flows and trust signals; segmented heavily; unlocked major scale (e.g. £20m/month in balances from a single channel). Reducing CAC helped fuel 5x balance growth in under 2 years. Allica ranked #1 fastest-growing company in UK (FT1000 2025), and we just raised our Series D at $1.2bn valuation (2026).`,
    images: [imgImage2, imgImage2],
    metrics: [
      { label: 'Conversion Rate', value: '55%+' },
      { label: 'More leads/yr', value: '~7,000' },
      { label: 'Growth', value: '5x' },
    ],
    deepDive: {
      title: 'Form Placement A/B Test',
      description: `Users clicking the CTA were auto-scrolled to page bottom, disrupting their experience and our scroll-depth tracking. With 30–40% of high-intent traffic hitting the button, we embedded the form in a modal popup instead. Result: +18% form submissions, rolled out site-wide.`,
      image: imgImage2,
      stat: { label: 'Form Submissions', value: '+18%' },
    },
  },
  {
    client: 'Launching a £100k/month Shopify store',
    subtitle: '2022',
    result: 'TAUR',
    cardBg: '#373737',
    titleColor: 'text-[#b0ffca]',
    labelColor: 'rgba(176,255,202,0.55)',
    borderColor: 'border-[rgba(0,188,125,0.2)]',
    glowColor: 'shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.1)]',
    statGradient: 'from-[#00bc7d] to-[#00c950]',
    tintColor: 'rgba(0,188,125,0.15)',
    image: imgImage3,
    description: 'Built an AI tool that generates marketing copy variations for A/B testing.',
    tags: ['AI/ML', 'API Design', 'Product'],
    detailedDescription: 'As founding marketer lead at TAUR Technologies, I built and optimized the e-commerce site from scratch for the world\'s first premium electric scooter brand. Achieving $100k/month worth of pre-orders during its peak – and $2m worth of pre-orders overall. I managed full-stack development, A/B testing, and a unique \'Virtual Showroom\' to help position TAUR as the industry\'s first mainstream desirable electric scooter. Also secured $600k+ via Kickstarter and media coverage in Wired, TechCrunch, Fast Company, BBC, and TNW. ',
    images: [imgImage3, imgImage3],
    metrics: [
      { label: 'Monthly pre-orders', value: '£100k' },
      { label: 'ROAS', value: '4x' },
      { label: 'Time Saved', value: '85%' },
    ],
    deepDive: {
      title: 'Referral Loop Viral Mechanic',
      description: 'Designed a double-sided referral program that rewarded both the referrer and the new user with extended trial days. We A/B tested incentive tiers and share-channel placement (in-app modal vs. post-checkout screen) across 8k users. The post-checkout variant with a 14-day bonus drove the strongest viral coefficient.',
      image: imgImage3,
      stat: { label: 'Viral Coefficient', value: '1.4×' },
    },
  },
  {
    client: 'Can you build a portfolio site with AI?',
    subtitle: '2026',
    result: 'Me',
    cardBg: '#fd0',
    titleColor: 'text-[#3d3b54]',
    labelColor: 'rgba(61,59,84,0.7)',
    borderColor: 'border-[rgba(61,59,84,0.2)]',
    glowColor: 'shadow-[0px_25px_50px_-12px_rgba(255,221,0,0.15)]',
    statGradient: 'from-[#3d3b54] to-[#5a5770]',
    tintColor: 'rgba(61,59,84,0.1)',
    image: imgImage1,
    description: 'Designed in Figma, built with Claude—shipped in hours instead of weeks.',
    tags: ['AI', 'Design Systems', 'Rapid Prototyping'],
    detailedDescription: `I wanted a portfolio that showcased real work without spending weeks coding from scratch. Figma let me design pixel-perfect layouts with component variants, auto-layout, and a proper design system. Claude took those designs and generated production-ready React code with sticky scroll effects, modals, accessibility features, and responsive layouts. The result? A polished, performant site built in a fraction of the time traditional development would take—proof that AI can supercharge the entire design-to-code workflow.`,
    images: [imgImage1, imgImage1],
    metrics: [
      { label: 'Build Time', value: '~6 hrs' },
      { label: 'Components', value: '8+' },
      { label: 'Code Quality', value: 'A+' },
    ],
    deepDive: {
      title: 'AI-Powered Design-to-Code Pipeline',
      description: 'Traditional portfolio builds can take weeks of design iteration, component building, and responsive testing. By pairing Figma\'s design tooling with Claude\'s code generation, I compressed that timeline dramatically. Figma handled the visual system and component architecture; Claude translated it into clean React with proper state management, animations, and accessibility. The workflow felt like pair programming with an expert frontend dev.',
      image: imgImage1,
      stat: { label: 'Time Saved', value: '90%+' },
    },
  },
];

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="pt-8 md:pt-12 pb-10 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-10 md:mb-16"></div>
          
          {/* Pure CSS sticky stacking - smooth on all devices */}
          <div className="relative">
            {projects.map((project, index) => (
              <div
                key={index}
                className="sticky mb-4 md:mb-6 2xl:top-[230px]"
                style={{
                  top: `${130}px`,
                  zIndex: index + 1,
                }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
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