const notes = [
  {
    title: 'Notes',
    summary: 'Short observations on building high-performing websites, CRO, and acquisition systems.',
  },
  {
    title: 'Topics',
    summary: 'Likely themes: landing page experimentation, SEO operating models, and the mechanics behind revenue-critical public websites.',
  },
];

export function LatestNotes() {
  return (
    <section id="notes" className="py-16 md:py-20 border-t border-neutral-200">
      <div className="max-w-3xl">
        <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 mb-5">
          Notes
        </p>
        <h2 className="text-[32px] leading-[1.1] tracking-[-0.03em] text-neutral-950 md:text-[40px]">
          Running websites in the age of AI
        </h2>
        <p className="mt-5 text-[17px] leading-[1.8] text-neutral-700">
          Short observations on building high-performing websites, CRO, and acquisition systems.
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
