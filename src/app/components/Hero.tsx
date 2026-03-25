const credibilityPoints = [
  '10 years in marketing',
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
        <p className="max-w-3xl mt-6 text-[18px] leading-[1.7] text-neutral-700 md:text-[20px]">
          Currently website manager at Allica Bank – generating 10,000+ high-value B2B leads annually and supporting rapid growth. Allica is the fastest growing firm in the UK (FT, 2025), now valued at $1.2bn (2026).
        </p>
        <ul className="mt-4 space-y-2">
          {credibilityPoints.map((point) => (
            <li key={point} className="flex gap-3 text-[18px] leading-[1.7] text-neutral-700 md:text-[20px]">
              <span className="mt-[14px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
