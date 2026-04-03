import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AboutPreview } from './components/AboutPreview';
import { LatestNotes } from './components/LatestNotes';
import { CallToAction } from './components/CallToAction';

export default function App() {
  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );
    const laptopPreloadElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-laptop-preload]')
    );

    if (revealElements.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobileViewport = window.matchMedia('(max-width: 767px)').matches;

    if (prefersReducedMotion) {
      revealElements.forEach((element) => {
        element.classList.add('is-visible');
      });
      return;
    }

    revealElements.forEach((element) => {
      const delay = element.dataset.revealDelay;

      if (delay) {
        element.style.setProperty('--reveal-delay', `${delay}ms`);
      }
    });

    const isLargeDesktopViewport = window.matchMedia(
      '(min-width: 1600px) and (min-height: 900px)'
    ).matches;
    const heroAnimationDurationMs = 1090;
    let observer: IntersectionObserver | null = null;
    let laptopPreloadTimeout: number | null = null;

    const setupRevealObserver = () => {
      if (isLargeDesktopViewport) {
        const preloadBoundary = window.innerHeight * 0.92;

        revealElements.forEach((element) => {
          const { top } = element.getBoundingClientRect();

          if (top <= preloadBoundary) {
            element.classList.add('is-visible');
          }
        });
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          });
        },
        {
          threshold: isMobileViewport ? 0.24 : 0.18,
          rootMargin: '0px 0px -10% 0px',
        }
      );

      revealElements.forEach((element) => {
        observer?.observe(element);
      });
    };

    if (!isMobileViewport && !isLargeDesktopViewport && laptopPreloadElements.length > 0) {
      laptopPreloadTimeout = window.setTimeout(() => {
        laptopPreloadElements.forEach((element) => {
          element.classList.add('is-visible');
        });
      }, heroAnimationDurationMs);
    }

    const revealSetupTimeout = isLargeDesktopViewport
      ? window.setTimeout(setupRevealObserver, heroAnimationDurationMs)
      : null;

    if (!isLargeDesktopViewport) {
      setupRevealObserver();
    }

    return () => {
      if (revealSetupTimeout !== null) {
        window.clearTimeout(revealSetupTimeout);
      }

      if (laptopPreloadTimeout !== null) {
        window.clearTimeout(laptopPreloadTimeout);
      }

      observer?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfa] text-neutral-950 transition-colors duration-300 dark:bg-[#050814] dark:text-[#f2f7ff]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-neutral-950 focus:px-4 focus:py-2 focus:text-white dark:focus:bg-[#78c8ff] dark:focus:text-[#071524]">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <Hero />
        </div>
        <FeaturedProjects />
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <AboutPreview />
          <LatestNotes />
          <CallToAction />
        </div>
      </main>
    </div>
  );
}
