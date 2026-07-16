import content from '../content/generatedContent.json';

const notes = content.notes;

export function LatestNotes() {
  return (
    <section id="notes" className="scroll-mt-24 border-t border-neutral-200 py-16 dark:border-[#8cb4ff]/15 md:py-20">
      <div className="reveal-on-scroll max-w-3xl" data-reveal>
        <p className="mb-5 font-mono text-[13px] uppercase tracking-[0.16em] text-neutral-500 dark:text-[#95abd3]">
          Opinion
        </p>
        <h2 className="text-[36px] leading-[1.02] tracking-[-0.04em] text-neutral-950 dark:text-[#f2f7ff] md:text-[52px]">
          Notes on AI
        </h2>
        <p className="body-copy mt-5 text-neutral-700 dark:text-[#cddcf5]">
          <strong>24th March, 2026: </strong><br class="mobile-break-only" />Nothing will be the same again 🤯
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {notes.map((note, index) => (
          <article
            key={note.title}
            className="reveal-on-scroll rounded-2xl border border-neutral-200 bg-white p-6 dark:border-[#8cb4ff]/15 dark:bg-[#091021]"
            data-reveal
            data-reveal-delay={index * 55}
          >
            <h3 className="text-[20px] leading-[1.3] text-neutral-950 dark:text-[#f2f7ff]">{note.title}</h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-neutral-600 dark:text-[#cddcf5]">{note.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
