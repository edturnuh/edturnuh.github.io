import { ImageWithFallback } from './figma/ImageWithFallback';
const profileImage = '/profile.jpeg';

export function AboutPreview() {
  return (
    <section id="about" className="py-16 border-t border-neutral-800">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Edward Turner - Product Builder and Growth Marketer"
            className="w-24 h-24 md:w-[125px] md:h-[125px] rounded-full object-cover ring-2 ring-white/10"
          />
        </div>
        <div className="flex-1">
          <h2 className="sr-only">About Edward Turner</h2>
          <p
            className="text-[16px] leading-[1.7] text-neutral-300 mb-4"
            dangerouslySetInnerHTML={{ __html: "I made my first website when I was 9. I've been hooked on the internet ever since. Now, after 10 years in marketing and growth, I'm focussed on website product management. <br><br>Currently leading the public marketing site of <strong>Allica Bank</strong> – the UK's #1 fastest-growing firm (<u><a href='https://www.ft.com/content/cb3e317e-e3cc-4e4a-a506-b755b2f94bb1'>FT1000, 2025</a></u>). And check out our <u><a href='https://thenextweb.com/news/allica-bank-joins-the-fintech-unicorn-club-after-155m-series-d-round'>Series D</a></u> (2026)! 🎉 <br><br>I measure what matters, navigate trade-offs, and move fast. Very fast (with Claude, Figma, Gemini, Grok). Would love to connect/collab :)" }}
          />

        </div>
      </div>
    </section>
  );
}
