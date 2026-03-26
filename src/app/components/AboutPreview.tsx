import profileImage from '../../assets/9df415058f0535f1d55f3e0d8992a67ce86b9f72.png';

export function AboutPreview() {
  return (
    <section id="about" className="reveal-on-scroll scroll-mt-24 py-16 md:py-20 border-t border-neutral-200" data-reveal>
      <div className="grid gap-8 md:grid-cols-[120px_minmax(0,1fr)] md:gap-10">
        <div>
          <img
            src={profileImage}
            alt="Edward Turner"
            className="h-24 w-24 rounded-2xl object-cover border border-neutral-200 transition-transform duration-500"
          />
        </div>
        <div className="max-w-3xl">
          <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 mb-5">
            About
          </p>
          <h2 className="text-[36px] leading-[1.02] tracking-[-0.04em] text-neutral-950 md:text-[52px]">
            Hi, I'm Ed
          </h2>
          <div className="body-copy mt-6 space-y-4 text-neutral-700">
            <p>I made my first website when I was 9 and I've been hooked ever since. After 8 years in growth marketing and digital acquisition – where I was always 'the website guy' as well – I decided to specialise. I'm now in my 3rd year as website manager / web product manager for high-impact public platforms.</p>
            <p>I like to work fast. AI is changing the game.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
