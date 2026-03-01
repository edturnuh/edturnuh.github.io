const notes = [
  {
    title: 'Building fast: lessons from shipping 12 projects in 6 months',
    summary: 'Why velocity beats perfection when you\'re learning what works.',
    date: 'Feb 18, 2026',
  },
  {
    title: 'The growth experiment framework I use for every project',
    summary: 'A simple system for hypothesis-driven product development.',
    date: 'Feb 3, 2026',
  },
  {
    title: 'Why I switched from designer to developer-marketer',
    summary: 'On technical literacy and owning your product decisions.',
    date: 'Jan 22, 2026',
  },
];

export function LatestNotes() {
  return (
    <section id="notes" className="py-16 border-t border-neutral-800">
      <div className="mb-12">
        <h2 className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.12em] text-neutral-500">
          Latest Notes
        </h2>
      </div>
      <div className="space-y-8">
        {notes.map((note, index) => (
          <article key={index}>
            <a
              href="#"
              className="block group hover:bg-white/5 -mx-6 px-6 md:-mx-12 md:px-12 py-4 rounded-lg transition-colors border border-transparent hover:border-white/10 focus:outline-none focus:border-blue-500 focus:bg-white/5"
            >
              <h3 className="text-[18px] text-white mb-2 group-hover:text-blue-400 transition-colors">
                {note.title}
              </h3>
              <p className="text-[15px] text-neutral-400 mb-2 leading-[1.6]">
                {note.summary}
              </p>
              <time className="font-mono text-[12px] text-neutral-500 uppercase tracking-wider" dateTime={note.date}>
                {note.date}
              </time>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}