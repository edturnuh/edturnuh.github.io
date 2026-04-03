const credibilityPoints = [
  '10 years in marketing / CRO / SEO',
  'Full-stack web developer',
  '...using AI for both 🚀',
];

export function Hero() {
  return (
    <section className="pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-4xl">
        <p className="page-enter page-enter-delay-2 mb-6 font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 dark:text-[#95abd3]">
          Website Product Manager
        </p>
        <h1 className="page-enter page-enter-delay-3 max-w-4xl text-[42px] leading-[1.02] font-semibold tracking-[-0.04em] text-neutral-950 dark:text-[#f2f7ff] sm:text-[56px] md:text-[72px]">
          I run revenue-critical websites for high-growth companies
        </h1>
        <p className="page-enter page-enter-delay-4 body-copy mt-6 max-w-3xl text-neutral-700 dark:text-[#cddcf5]">
          Currently website manager at Allica Bank; I oversee the acquisition platform for a $1.2bn fintech, generating ~20,000 B2B leads annually. We're the fastest-growing firm in the UK (FT, 2025) and just raised a Series-D (2026). As for my background...
        </p>
        <ul className="mt-4 space-y-1.5">
          {credibilityPoints.map((point) => (
            <li key={point} className="page-enter page-enter-stagger body-copy flex gap-3 text-neutral-700 dark:text-[#cddcf5]">
              <span className="mt-[11px] h-px w-3 shrink-0 bg-neutral-500 dark:bg-[#95abd3]" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
