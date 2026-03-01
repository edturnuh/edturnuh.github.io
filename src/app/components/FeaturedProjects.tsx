import { useState, useRef, useEffect, useCallback } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import imgImage1 from "figma:asset/844713ad5df9fdadf4b095de061286ec2c75319c.png";
import imgImage2 from "figma:asset/9f91f321674b8646d1b8b94d1dd750f0a601f73e.png";
import imgImage3 from "figma:asset/1d39590100ec3e8f2a69c7e9a9a2c86250dbc486.png";

const projects = [
  {
    client: 'Allica Bank',
    subtitle: 'Conversion Rate Optimisation',
    result: '55%+ uplift',
    cardBg: '#eb3500',
    titleColor: 'text-black',
    labelColor: 'rgba(0,0,0,0.75)',
    borderColor: 'border-[rgba(173,70,255,0.2)]',
    glowColor: 'shadow-[0px_25px_50px_-12px_rgba(173,70,255,0.1)]',
    statGradient: 'from-[#b62800] to-[#c03901]',
    tintColor: 'rgba(173,70,255,0.15)',
    image: imgImage1,
    description: 'Complete overhaul of the signup and onboarding experience for a B2B SaaS platform.',
    tags: ['Analytics', 'CRO', 'XFN Leadership'],
    detailedDescription: `Improving conversion rates while scaling aggressively drove Allica’s flagship business current account growth. We tested new UIs, conversion flows (details below), and social/trust signals; segmented heavily; unlocked major scale (e.g. £20m/month balances from one channel). These efforts helped fuel 5x balance growth in under two years. Allica ranked #1 fastest-growing company in UK (FT1000 2025), and we just raised our Series D at $1.2bn valuation (2026).`,
    images: [imgImage1, imgImage1],
    metrics: [
      { label: 'Conversion Rate', value: '55%+' },
      { label: 'More leads', value: '~7,000' },
      { label: 'Growth', value: '5x' },
    ],
    deepDive: {
      title: 'Form Placement A/B Test',
      description: `Users clicking the CTA were auto-scrolled to page bottom, disrupting their experience and our scroll-depth tracking. With 30–40% of high-intent traffic hitting the button, we embedded the form in a modal popup instead. Result: +18% form submissions, rolled out site-wide.`,
      image: imgImage1,
      stat: { label: 'Form Submissions', value: '+18%' },
    },
  },
  {
    client: 'Allica Bank',
    subtitle: 'Full-scale transformation',
    result: '55%+ uplift',
    cardBg: '#ffffff',
    titleColor: 'text-[#010293]',
    labelColor: 'rgba(1,2,147,0.55)',
    borderColor: 'border-[rgba(43,127,255,0.2)]',
    glowColor: 'shadow-[0px_25px_50px_-12px_rgba(43,127,255,0.1)]',
    statGradient: 'from-[#2b7fff] to-[#00b8db]',
    tintColor: 'rgba(43,127,255,0.15)',
    image: imgImage2,
    description: 'Rebuilt marketing site from scratch with modern tooling.',
    tags: ['Next.js', 'Performance', 'SEO'],
    detailedDescription: 'Speed challenge: rebuild the entire marketing site in 3 days with cutting-edge performance optimization. Implemented static site generation, image optimization, code splitting, and aggressive caching. Used modern web vitals monitoring and achieved perfect 100 scores across all Lighthouse metrics.',
    images: [imgImage2, imgImage2],
    metrics: [
      { label: 'Lighthouse Score', value: '100' },
      { label: 'Load Time', value: '0.8s' },
      { label: 'SEO Ranking', value: '+156%' },
    ],
    deepDive: {
      title: 'Hero Banner Personalisation Engine',
      description: 'Built a rules-based personalisation layer that swaps hero content based on UTM source, returning-visitor status, and industry segment. We tested 6 audience cohorts over 3 weeks, measuring engagement through scroll depth and CTA clicks. Returning SME visitors saw the biggest lift when greeted with sector-specific messaging.',
      image: imgImage2,
      stat: { label: 'Hero CTR Uplift', value: '+27%' },
    },
  },
  {
    client: 'TAUR',
    subtitle: 'Growth',
    result: '1st place hackathon',
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
    detailedDescription: 'Won first place at a 48-hour hackathon by building an AI-powered content generator for marketing teams. The tool uses GPT-4 to generate multiple variations of headlines, body copy, and CTAs optimized for different audiences.',
    images: [imgImage3, imgImage3],
    metrics: [
      { label: 'Hackathon Rank', value: '1st' },
      { label: 'Copy Variations', value: '1000+' },
      { label: 'Time Saved', value: '85%' },
    ],
    deepDive: {
      title: 'Referral Loop Viral Mechanic',
      description: 'Designed a double-sided referral program that rewarded both the referrer and the new user with extended trial days. We A/B tested incentive tiers and share-channel placement (in-app modal vs. post-checkout screen) across 8k users. The post-checkout variant with a 14-day bonus drove the strongest viral coefficient.',
      image: imgImage3,
      stat: { label: 'Viral Coefficient', value: '1.4×' },
    },
  },
];

// Where each card pins to on screen (viewport px from top)
const PIN_TOP = 130;
// How much of each buried card peeks out
const CARD_PEEK = 24;
// Max upward drift (px) — cards slowly creep up under the nav as you scroll
const MAX_DRIFT = 50;

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const [measuredCardHeight, setMeasuredCardHeight] = useState(420);

  // Scroll room per card — how much scroll each card "consumes" before the next one arrives
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const scrollRoom = isMobile ? measuredCardHeight * 1.8 : measuredCardHeight * 1.5;
  // Total height of the scroll container
  const totalHeight = (projects.length - 1) * scrollRoom + measuredCardHeight;

  const updateCards = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      rafRef.current = requestAnimationFrame(updateCards);
      return;
    }

    // getBoundingClientRect works in iframe where window.scrollY doesn't
    const containerRect = container.getBoundingClientRect();
    // How far the container top has scrolled above the viewport
    const scrolled = -containerRect.top;

    cardRefs.current.forEach((cardEl, i) => {
      if (!cardEl) return;

      // Where this card naturally sits within the tall container
      const naturalOffset = i * scrollRoom;
      // The viewport Y where this card should pin
      const pinViewportY = PIN_TOP + i * CARD_PEEK;

      const pinnedOffset = scrolled + pinViewportY;

      const computedTop = Math.max(naturalOffset, pinnedOffset);

      const maxTop = totalHeight - measuredCardHeight;
      const finalTop = Math.min(computedTop, maxTop);

      // Upward drift: once a card is pinned, it slowly creeps upward
      // as the user continues scrolling, sliding under the nav
      const isPinned = pinnedOffset >= naturalOffset;
      let drift = 0;
      if (isPinned) {
        // How long this card has been pinned (in scroll px)
        const pinnedFor = scrolled - (naturalOffset - pinViewportY);
        // Drift is a fraction of total scroll room, capped at MAX_DRIFT
        drift = Math.min(pinnedFor * 0.08, MAX_DRIFT);
      }

      cardEl.style.top = `${finalTop - drift}px`;

      // Parallax: scale when a card is buried by subsequent cards
      if (i < projects.length - 1) {
        const nextPinViewportY = PIN_TOP + (i + 1) * CARD_PEEK;
        const nextNaturalOffset = (i + 1) * scrollRoom;
        const nextPinnedOffset = scrolled + nextPinViewportY;
        const nextFinalTop = Math.max(nextNaturalOffset, nextPinnedOffset);

        const gap = nextFinalTop - finalTop;
        const progress = Math.max(0, Math.min(1 - gap / scrollRoom, 1));

        const scale = 1 - progress * 0.05;
        cardEl.style.transform = `scale(${scale})`;
      } else {
        cardEl.style.transform = 'scale(1)';
      }
    });

    rafRef.current = requestAnimationFrame(updateCards);
  }, [scrollRoom, totalHeight, measuredCardHeight]);

  // Measure the first card's height
  useEffect(() => {
    const measure = () => {
      const first = cardRefs.current[0];
      if (first) {
        const h = first.offsetHeight;
        if (h > 0) setMeasuredCardHeight(h);
      }
    };
    // Measure after a short delay so images have laid out
    const timer = setTimeout(measure, 200);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measure);
    };
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(updateCards);
    return () => cancelAnimationFrame(rafRef.current);
  }, [updateCards]);

  return (
    <>
      <section id="projects" className="pt-8 md:pt-12 pb-10 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-10 md:mb-16">
            
            
          </div>

          {/* Tall scroll container */}
          <div
            ref={containerRef}
            className="relative"
            style={{ height: `${totalHeight}px` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="absolute left-0 right-0 will-change-transform origin-top"
                style={{
                  top: `${index * scrollRoom}px`,
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