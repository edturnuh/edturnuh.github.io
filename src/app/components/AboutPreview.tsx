import profileImage from '../../assets/9df415058f0535f1d55f3e0d8992a67ce86b9f72.png';

export function AboutPreview() {
  return (
    <section id="about" className="reveal-on-scroll scroll-mt-24 border-t border-neutral-200 py-16 dark:border-[#8cb4ff]/15 md:py-20" data-reveal>
      <div className="grid gap-8 md:grid-cols-[120px_minmax(0,1fr)] md:gap-10">
        <div>
          <img
            src={profileImage}
            alt="Edward Turner"
            className="h-24 w-24 rounded-2xl border border-neutral-200 object-cover transition-transform duration-500 dark:border-[#8cb4ff]/15"
          />
        </div>
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 dark:text-[#95abd3]">
            About
          </p>
          <h2 className="text-[36px] leading-[1.02] tracking-[-0.04em] text-neutral-950 dark:text-[#f2f7ff] md:text-[52px]">
            Hi, I'm Ed
          </h2>
          <div className="body-copy mt-6 space-y-4 text-neutral-700 dark:text-[#cddcf5]">
            <p>I made my first website when I was 9 and I've been hooked ever since. After spending 8 years in marketing and digital acquisition (where I was always 'the website guy' as well) I decided to go back to my roots. I'm now in my third year as a specialised website manager / web product manager.</p>
            <p>I like to work fast. AI is changing the game.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
