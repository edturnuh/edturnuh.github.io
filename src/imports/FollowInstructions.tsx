import clsx from "clsx";
import imgImageWithFallback from "figma:asset/a428376d9c7141fcc6a50336dc3c39057a7d4ecc.png";
import imgImageWithFallback1 from "figma:asset/ff06f620aa70feb3fc00cb191bf1cc2cec8c5e20.png";
import imgImage1 from "figma:asset/844713ad5df9fdadf4b095de061286ec2c75319c.png";
import imgImage2 from "figma:asset/9f91f321674b8646d1b8b94d1dd750f0a601f73e.png";
import imgImage3 from "figma:asset/1d39590100ec3e8f2a69c7e9a9a2c86250dbc486.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[24px] left-[49px] top-[52px] w-[742px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#a1a1a1] text-[15px] top-[-1px]">{children}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[570px] left-0 rounded-[14px] top-0 w-[1254px]">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}
type ImageWithFallbackImageProps = {
  additionalClassNames?: string;
};

function ImageWithFallbackImage({ additionalClassNames = "" }: ImageWithFallbackImageProps) {
  return (
    <div className={clsx("absolute h-[570px] w-[1254px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}
type PTextProps = {
  text: string;
};

function PText({ text }: PTextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type TimeTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TimeText({ text, additionalClassNames = "" }: TimeTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[16px] items-start left-[49px] top-[90px]", additionalClassNames)}>
      <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.6px] uppercase">{text}</p>
    </div>
  );
}
type HTextProps = {
  text: string;
};

function HText({ text }: HTextProps) {
  return (
    <div className="absolute h-[27px] left-[49px] top-[17px] w-[742px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[18px] text-white top-px">{text}</p>
    </div>
  );
}
type ATextProps = {
  text: string;
  additionalClassNames?: string;
};

function AText({ text, additionalClassNames = "" }: ATextProps) {
  return (
    <div className={clsx("h-[27.5px] relative rounded-[4px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] text-[#a1a1a1] text-[13px] top-[4px] tracking-[0.65px] uppercase">{text}</p>
      </div>
    </div>
  );
}

export default function FollowInstructions() {
  return (
    <div className="bg-white relative size-full" data-name="Follow Instructions">
      <div className="absolute bg-white content-stretch flex flex-col h-[1029px] items-start left-0 top-0 w-[1419px]" data-name="Body">
        <div className="bg-black content-stretch flex flex-col h-[4631.672px] items-start relative shrink-0 w-full" data-name="div">
          <div className="h-[76.5px] relative shrink-0 w-full" data-name="nav">
            <div aria-hidden="true" className="absolute border-[#262626] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col items-start pb-px px-[289.5px] relative size-full">
              <div className="h-[75.5px] relative shrink-0 w-full" data-name="div">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[48px] relative size-full">
                    <div className="h-[25.5px] relative shrink-0 w-[119.438px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.5px] left-0 not-italic text-[17px] text-white top-0">Ed Turner</p>
                      </div>
                    </div>
                    <div className="h-[27.5px] relative shrink-0 w-[371.266px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
                        <AText text="Projects" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                        <AText text="Notes" additionalClassNames="shrink-0 w-[58.25px]" />
                        <AText text="About" additionalClassNames="shrink-0 w-[58.25px]" />
                        <AText text="Contact" additionalClassNames="shrink-0 w-[75.156px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[4555.172px] relative shrink-0 w-full" data-name="main">
            <div className="absolute h-[444.891px] left-[337.5px] top-0 w-[744px]" data-name="section">
              <div className="absolute h-[179.391px] left-0 top-[88px] w-[720px]" data-name="motion.h1">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[59.8px] left-0 not-italic text-[52px] text-white top-[-1px] w-[706px] whitespace-pre-wrap">{`Hey, I'm Ed Turner. I manage high-performing websites and growth experiments.`}</p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[16px] h-[85.5px] items-start left-0 top-[299.39px] w-[620px]" data-name="motion.div">
                <div className="h-[19.5px] relative shrink-0 w-full" data-name="p">
                  <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#bdbdbd] text-[13px] top-0 tracking-[0.65px] uppercase">{`Let's analyze yourS:`}</p>
                </div>
                <div className="content-stretch flex gap-[12px] h-[50px] items-start relative shrink-0 w-full" data-name="div">
                  <div className="bg-[rgba(255,255,255,0.05)] flex-[1_0_0] h-[50px] min-h-px min-w-px relative rounded-[10px]" data-name="input">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] py-[12px] relative size-full">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#737373] text-[16px]">your-site.com</p>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  </div>
                  <div className="bg-gradient-to-r from-[#2b7fff] h-[50px] opacity-50 relative rounded-[10px] shrink-0 to-[#00b8db] w-[99.797px]" data-name="button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[50px] not-italic text-[16px] text-center text-white top-[12px]">Next</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col h-[2668.063px] items-start left-0 pt-[113px] px-[9.5px] top-[444.89px] w-[1419px]" data-name="section">
              <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t inset-0 pointer-events-none" />
              <div className="h-[2443.063px] relative shrink-0 w-full" data-name="div">
                <div className="content-stretch flex flex-col gap-[80px] items-start px-[48px] relative size-full">
                  <div className="h-[106px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute h-[18px] left-0 top-0 w-[1304px]" data-name="h2">
                      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#737373] text-[12px] top-0 tracking-[1.44px] uppercase">Selected Projects</p>
                    </div>
                    <div className="absolute h-[72px] left-0 top-[34px] w-[600px]" data-name="p">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-0 not-italic text-[24px] text-white top-[-1px] w-[593px] whitespace-pre-wrap">{`Solving for conversion rates, organic traffic, web operations, accessibility, brand + more. `}</p>
                    </div>
                  </div>
                  <div className="h-[2257.063px] shrink-0 w-full" data-name="Container" />
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col h-[1442.219px] items-start left-[289.5px] px-[48px] top-[3112.95px] w-[840px]" data-name="div">
              <div className="content-stretch flex flex-col gap-[48px] h-[634px] items-start pt-[65px] relative shrink-0 w-full" data-name="section">
                <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t inset-0 pointer-events-none" />
                <div className="h-[18px] relative shrink-0 w-full" data-name="h2">
                  <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#737373] text-[12px] top-0 tracking-[1.44px] uppercase">Latest Notes</p>
                </div>
                <div className="content-stretch flex flex-col gap-[32px] h-[439px] items-start px-[-48px] relative shrink-0 w-full" data-name="div">
                  <div className="h-[125px] relative rounded-[10px] shrink-0 w-full" data-name="a">
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    <HText text="Building fast: lessons from shipping 12 projects in 6 months" />
                    <Wrapper>{`Why velocity beats perfection when you're learning what works.`}</Wrapper>
                    <TimeText text="Feb 18, 2026" additionalClassNames="w-[93.609px]" />
                  </div>
                  <div className="h-[125px] relative rounded-[10px] shrink-0 w-full" data-name="a">
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    <HText text="The growth experiment framework I use for every project" />
                    <PText text="A simple system for hypothesis-driven product development." />
                    <TimeText text="Feb 3, 2026" additionalClassNames="w-[85.813px]" />
                  </div>
                  <div className="h-[125px] relative rounded-[10px] shrink-0 w-full" data-name="a">
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    <HText text="Why I switched from designer to developer-marketer" />
                    <PText text="On technical literacy and owning your product decisions." />
                    <TimeText text="Jan 22, 2026" additionalClassNames="w-[93.609px]" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[311.438px] items-start pt-[65px] relative shrink-0 w-full" data-name="section">
                <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[48px] h-[182.438px] items-start relative shrink-0 w-full" data-name="div">
                  <div className="relative rounded-[33554400px] shadow-[0px_0px_0px_2px_rgba(255,255,255,0.1)] shrink-0 size-[96px]" data-name="ImageWithFallback">
                    <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[33554400px]">
                      <div className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[33554400px]" />
                      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[33554400px] size-full" src={imgImageWithFallback} />
                    </div>
                  </div>
                  <div className="flex-[1_0_0] h-[182.438px] min-h-px min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute h-[135.938px] left-0 top-0 w-[600px]" data-name="p">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27.2px] left-0 not-italic text-[#d4d4d4] text-[16px] top-[-1px] w-[580px] whitespace-pre-wrap">{`I\'m a product-minded builder who blends marketing, development, and experimentation. I\'ve spent the last few years working across growth teams, startups, and side projects — shipping everything from landing pages to full-stack tools. I believe in learning by building, measuring what matters, and moving fast without breaking things (usually).`}</p>
                      </div>
                      <div className="absolute h-[30.5px] left-0 rounded-[4px] top-[151.94px] w-[110px]" data-name="a">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-[8px] not-italic text-[#51a2ff] text-[15px] top-[2px]">Read more →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[496.781px] relative shrink-0 w-full" data-name="section">
                <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t inset-0 pointer-events-none" />
                <div className="absolute content-stretch flex flex-col gap-[24px] h-[156.781px] items-start left-0 top-[97px] w-[620px]" data-name="div">
                  <div className="h-[100.781px] relative shrink-0 w-full" data-name="h2">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[50.4px] left-0 not-italic text-[42px] text-white top-0 w-[437px] whitespace-pre-wrap">{`Let\'s build something interesting.`}</p>
                  </div>
                  <div className="content-stretch flex gap-[16px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[32px] relative rounded-[4px] shrink-0 w-[189.281px]" data-name="a">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[8px] not-italic text-[#51a2ff] text-[16px] top-[3px]">edward@example.com</p>
                      </div>
                    </div>
                    <div className="h-[24px] relative shrink-0 w-[9px]" data-name="span">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#404040] text-[16px] top-[-1px]">•</p>
                      </div>
                    </div>
                    <div className="h-[32px] relative rounded-[4px] shrink-0 w-[126.25px]" data-name="a">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] py-[4px] relative size-full">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#a1a1a1] text-[16px]">Get in touch →</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[51px] items-start left-0 pt-[33px] top-[349.78px] w-[744px]" data-name="footer">
                  <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t inset-0 pointer-events-none" />
                  <div className="h-[18px] relative shrink-0 w-full" data-name="p">
                    <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#525252] text-[12px] top-0 tracking-[0.6px] uppercase">© 2026 Edward Turner. Built with care and coffee.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#eb3500] border border-[rgba(173,70,255,0.2)] border-solid h-[699px] left-[58px] overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(173,70,255,0.1)] top-[820px] w-[1304px]" data-name="article">
        <div className="absolute content-stretch flex h-[88px] items-end justify-between left-[0.5px] pb-[24px] px-[40px] top-[11.61px] w-[1302px]" data-name="div">
          <div className="flex-[1_0_0] h-[73.688px] min-h-px min-w-px relative" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute h-[43.688px] left-0 top-[30px] w-[1051.25px]" data-name="h3">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[38px] text-black top-[-1px]">
                  <span className="font-['Inter:Bold',sans-serif] font-bold leading-[43.7px]">Allica Bank</span>
                  <span className="leading-[43.7px]">{` – Transformation`}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#b62800] h-[31.5px] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#c03901] w-[158.75px]" data-name="span">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[19.5px] left-[23px] text-[13px] text-white top-[6px] tracking-[0.65px] uppercase">4-MONTH BUILD</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[570px] left-[24px] overflow-clip rounded-[14px] top-[99.69px] w-[1254px]" data-name="div">
          <ImageWithFallbackImage additionalClassNames="left-0 top-0" />
          <div className="absolute bg-[rgba(173,70,255,0.15)] h-[570px] left-0 top-0 w-[1254px]" data-name="Container" />
          <div className="absolute bg-[rgba(255,255,255,0)] h-[570px] left-0 rounded-[14px] top-0 w-[1254px]" data-name="Container">
            <div className="-translate-x-1/2 absolute h-[996px] left-[calc(50%-0.5px)] top-[-192.08px] w-[1438px]" data-name="image 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(255,255,255,0.1)]" />
          </div>
        </div>
      </div>
      <div className="absolute bg-white border border-[rgba(43,127,255,0.2)] border-solid h-[698px] left-[58px] overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(43,127,255,0.1)] top-[1586px] w-[1304px]" data-name="article">
        <div className="absolute content-stretch flex h-[129.688px] items-end justify-between left-0 pb-[24px] px-[40px] top-[-30px] w-[1302px]" data-name="div">
          <div className="flex-[1_0_0] h-[73.688px] min-h-px min-w-px relative" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute h-[43.688px] left-0 top-[30px] w-[1085.047px]" data-name="h3">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#010293] text-[38px] top-[-1px]">
                  <span className="font-['Inter:Bold',sans-serif] font-bold leading-[43.7px]">Allica Bank</span>
                  <span className="leading-[43.7px]">{` – Conversion`}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#2b7fff] h-[31.5px] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#00b8db] w-[124.953px]" data-name="span">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[19.5px] left-[17px] text-[13px] text-white top-[6px] tracking-[0.65px] uppercase">55%+ UPLIFT</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[570px] left-[24px] overflow-clip rounded-[14px] top-[99.69px] w-[1254px]" data-name="div">
          <ImageWithFallbackImage additionalClassNames="left-0 top-0" />
          <div className="absolute bg-[rgba(43,127,255,0.15)] h-[570px] left-0 top-0 w-[1254px]" data-name="Container" />
          <Container />
          <div className="absolute h-[1010px] left-[-45.5px] top-[-119.77px] w-[1346px]" data-name="image 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#373737] border border-[rgba(0,188,125,0.2)] border-solid h-[705px] left-[58px] overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.1)] top-[2352px] w-[1304px]" data-name="article">
        <div className="absolute content-stretch flex h-[129.688px] items-end justify-between left-0 pb-[24px] px-[40px] top-[-28px] w-[1302px]" data-name="div">
          <div className="flex-[1_0_0] h-[73.688px] min-h-px min-w-px relative" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute h-[43.688px] left-0 top-[30px] w-[1017.438px]" data-name="h3">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#b0ffca] text-[38px] top-[-1px]">
                  <span className="font-['Inter:Bold',sans-serif] font-bold leading-[43.7px]">TAUR</span>
                  <span className="leading-[43.7px]">{` – Brand development`}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#00bc7d] h-[31.5px] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#00c950] w-[192.563px]" data-name="span">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[19.5px] left-[16px] text-[13px] text-white top-[6px] tracking-[0.65px] uppercase">1st place hackathon</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[570px] left-[24px] overflow-clip rounded-[14px] top-[107.69px] w-[1254px]" data-name="div">
          <ImageWithFallbackImage additionalClassNames="left-[-0.02px] top-[-0.01px]" />
          <div className="absolute bg-[rgba(0,188,125,0.15)] h-[570px] left-0 top-0 w-[1254px]" data-name="Container" />
          <Container />
          <div className="absolute h-[1040px] left-[-7.5px] top-[-178.45px] w-[1386px]" data-name="image 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
          </div>
        </div>
      </div>
    </div>
  );
}