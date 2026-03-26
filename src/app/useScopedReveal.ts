import { RefObject, useEffect } from 'react';

export function useScopedReveal(
  isActive: boolean,
  scopeRef: RefObject<HTMLElement | null>,
  rootRef?: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!isActive || !scopeRef.current) {
      return;
    }

    const revealElements = Array.from(
      scopeRef.current.querySelectorAll<HTMLElement>('[data-reveal]')
    );

    if (revealElements.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    revealElements.forEach((element) => {
      const delay = element.dataset.revealDelay;

      if (delay) {
        element.style.setProperty('--reveal-delay', `${delay}ms`);
      }
    });

    if (prefersReducedMotion) {
      revealElements.forEach((element) => {
        element.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        root: rootRef?.current ?? null,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [isActive, rootRef, scopeRef]);
}
