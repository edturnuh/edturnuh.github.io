const credibilityPoints = [
  '10 years in marketing / CRO / SEO',
  'Full-stack web developer',
  '...using AI for both 🚀',
];

export function Hero() {
  return (
    <section className="pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-4xl">
        <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 mb-6">
          Website Product Manager
        </p>
        <h1 className="max-w-4xl text-[42px] leading-[1.02] font-semibold tracking-[-0.04em] text-neutral-950 sm:text-[56px] md:text-[72px]">
          I run revenue-critical websites for high-growth companies
        </h1>
        <p className="body-copy max-w-3xl mt-6 text-neutral-700">
          Currently website manager at Allica Bank. I oversee the acquisition platform for a $1.2bn+ fintech generating 10,000+ B2B leads anually – now the fastest growing firm in the UK (Financial Times, 2025).
        </p>
        <ul className="mt-4 space-y-1.5">
          {credibilityPoints.map((point) => (
            <li key={point} className="body-copy flex gap-3 text-neutral-700">
              <span className="mt-[11px] h-px w-3 shrink-0 bg-neutral-500" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
