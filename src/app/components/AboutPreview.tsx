import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from '../../assets/9df415058f0535f1d55f3e0d8992a67ce86b9f72.png';

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
            dangerouslySetInnerHTML={{ __html: "I made my first website when I was 9 and I've been hooked ever since. Now, after 10 years in growth/marketing I'm specialising in product management for all things 'public web'. Currently website manager at Allica Bank, the UK's fastest-growing firm (FT, 2025). We just raised a <u><a href='https://thenextweb.com/news/allica-bank-joins-the-fintech-unicorn-club-after-155m-series-d-round'>Series D</a></u>! 🦄 <br><br>I like to work fast. Trying to go faster with Claude / Figma / Grok / n8n." }}
          />
          
        </div>
      </div>
    </section>
  );
}
