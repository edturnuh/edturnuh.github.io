import profileImage from '../../assets/9df415058f0535f1d55f3e0d8992a67ce86b9f72.png';

export function AboutPreview() {
  return (
    <section id="about" className="py-16 md:py-20 border-t border-neutral-200">
      <div className="grid gap-8 md:grid-cols-[120px_minmax(0,1fr)] md:gap-10">
        <div>
          <img
            src={profileImage}
            alt="Edward Turner"
            className="h-24 w-24 rounded-2xl object-cover border border-neutral-200"
          />
        </div>
        <div className="max-w-3xl">
          <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 mb-5">
            Welcome
          </p>
          <h2 className="text-[32px] leading-[1.1] tracking-[-0.03em] text-neutral-950 md:text-[40px]">
            About me
          </h2>
          <div className="mt-6 space-y-4 text-[17px] leading-[1.8] text-neutral-700">
            <p>I’m a website product leader with 10+ years’ experience owning and scaling high-impact public platforms.</p>
            <p>My background spans marketing and engineering, allowing me to operate across strategy, execution, and technical delivery.</p>
            <p>I like to work fast. AI is making me much faster.

</p>
          </div>
        </div>
      </div>
    </section>
  );
}
