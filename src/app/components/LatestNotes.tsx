const notes = [
  {
    title: 'The future of web',
    summary: 'AI has made building a good web page accessible to almost anyone. At the same time, personal agents (e.g. Openclaw) now visit sites on our behalf anyway. Most sites will become agent-first (AEO/GEO) and/or replaced by corporate agents. Luxury brands may retain human-first websites to signal status.',
  },
  {
    title: 'Tools / Tech',
    summary: 'I\'m sorry (not sorry) that I\'ll never hand-code again. I\'m absolutely blown away by Codex, Figma and OpenClaw. Getting heavily into JS also. Also, who knew that adding the prompt "make it WCAG accessible" could keep AI so on track?',
  },
  {
    title: 'Website management',
    summary: 'Building a \'good\' website just isn\'t difficult anymore. The value is in the system that iterates and delivers outcomes. I believe product managers and ICs will merge.',
  },
  {
    title: 'Collabs',
    summary: 'AI-driven development is the easy bit now. If you need a hand to build something cool – let alone making it successful – I’d love to connect. Pro bono work welcome :)',
  }
  
];

export function LatestNotes() {
  return (
    <section id="notes" className="scroll-mt-24 py-16 md:py-20 border-t border-neutral-200">
      <div className="max-w-3xl">
        <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 mb-5">
          Opinion
        </p>
        <h2 className="text-[36px] leading-[1.02] tracking-[-0.04em] text-neutral-950 md:text-[52px]">
          Notes on AI
        </h2>
        <p className="body-copy mt-5 text-neutral-700">
          <strong>24th March, 2026: </strong><br class="mobile-break-only" />Nothing will be the same again 🤯
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {notes.map((note) => (
          <article key={note.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-[20px] leading-[1.3] text-neutral-950">{note.title}</h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-neutral-600">{note.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
