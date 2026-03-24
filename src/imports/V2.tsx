import clsx from "clsx";
import imgImageWithFallback from "figma:asset/844713ad5df9fdadf4b095de061286ec2c75319c.png";
import imgImageWithFallback1 from "figma:asset/9f91f321674b8646d1b8b94d1dd750f0a601f73e.png";
import imgImageWithFallback2 from "figma:asset/1d39590100ec3e8f2a69c7e9a9a2c86250dbc486.png";
import imgImageWithFallback3 from "figma:asset/a428376d9c7141fcc6a50336dc3c39057a7d4ecc.png";
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper3 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</Wrapper3>;
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper3 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper3>;
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[24px] left-[49px] top-[52px] w-[742px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#a1a1a1] text-[15px] top-[-1px]">{children}</p>
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
type SpanTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanText({ text, additionalClassNames = "" }: SpanTextProps) {
  return (
    <Wrapper3 additionalClassNames={clsx("bg-gradient-to-b h-[31.5px] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0", additionalClassNames)}>
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[19.5px] left-[24px] text-[13px] text-white top-[6px] tracking-[0.65px] uppercase">{text}</p>
    </Wrapper3>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[697.766px] left-0 rounded-[14px] top-0 w-[1256px]">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

export default function V() {
  return (
    <div className="bg-white relative size-full" data-name="v2">
      <div className="absolute bg-white content-stretch flex flex-col h-[1029px] items-start left-0 top-0 w-[1419px]" data-name="Body">
        <div className="bg-black h-[4839.281px] relative shrink-0 w-full" data-name="main">
          <div className="absolute h-[414.563px] left-[337.5px] top-[76.5px] w-[744px]" data-name="section">
            <div className="absolute h-[179.391px] left-0 top-[60px] w-[720px]" data-name="motion.h1">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[59.8px] left-0 not-italic text-[52px] text-white top-[-1px] w-[706px] whitespace-pre-wrap">{`Hey, I'm Ed Turner. I manage high-performing websites and growth experiments.`}</p>
            </div>
            <div className="absolute h-[91.172px] left-0 top-[263.39px] w-[600px]" data-name="motion.p">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.4px] left-0 not-italic text-[#a0a0a0] text-[19px] top-[-1px] w-[594px] whitespace-pre-wrap">Combining strategy and technical execution, I help ambitious teams boost growth, streamline operations, and manage full-scale web transformation projects.</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col h-[2906px] items-start left-0 pt-[79px] px-[9.5px] top-[491.06px] w-[1419px]" data-name="section">
            <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t inset-0 pointer-events-none" />
            <div className="h-[2681px] relative shrink-0 w-full" data-name="div">
              <div className="content-stretch flex flex-col items-start px-[48px] relative size-full">
                <div className="content-stretch flex flex-col gap-[59.547px] h-[2583px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#eb3500] h-[821.453px] overflow-clip relative rounded-[16px] shadow-[0px_-60px_150px_60px_rgba(0,0,0,0.3),0px_-20px_60px_10px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="article">
                    <div className="absolute content-stretch flex h-[43.688px] items-end justify-between left-[40px] top-[40px] w-[1224px]" data-name="div">
                      <div className="h-[43.688px] shrink-0 w-[522.5px]" data-name="h3" />
                    </div>
                    <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[43.7px] left-[24.5px] text-[14px] text-[rgba(0,0,0,0.75)] top-[13.94px] uppercase w-[154px] whitespace-pre-wrap">Transformation</p>
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[49.7px] left-[25px] not-italic text-[38px] text-black top-[75px]">Allica Bank</p>
                    <p className="-translate-x-full absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[19.5px] left-[1280.5px] text-[13px] text-[rgba(0,0,0,0.75)] text-right top-[25.94px] tracking-[0.65px] uppercase w-[395px] whitespace-pre-wrap">4-month build</p>
                    <div className="absolute h-[662px] left-[24.5px] overflow-clip top-[135.94px] w-[1256px]" data-name="div">
                      <div className="absolute h-[697.766px] left-0 top-0 w-[1256px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                      </div>
                      <div className="absolute bg-[rgba(173,70,255,0.15)] h-[697.766px] left-0 top-0 w-[1256px]" data-name="Container" />
                      <Container />
                    </div>
                    <div className="absolute h-0 left-[24.5px] top-[53.94px] w-[1256px]">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1256 1">
                          <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="1256" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white h-[821.453px] overflow-clip relative rounded-[16px] shadow-[0px_-60px_150px_60px_rgba(0,0,0,0.3),0px_-20px_60px_10px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="article">
                    <div className="absolute content-stretch flex h-[43.688px] items-end justify-between left-[40px] top-[32px] w-[1224px]" data-name="div">
                      <Wrapper1 additionalClassNames="h-[43.688px] w-[452.313px]">
                        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#010293] text-[0px] text-[38px] top-[-1px]">
                          <span className="leading-[43.7px]">Allica Bank</span>
                          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[43.7px]">{` – Conversion`}</span>
                        </p>
                      </Wrapper1>
                      <SpanText text="55%+ uplift" additionalClassNames="from-[#2b7fff] to-[#00b8db] w-[140.953px]" />
                    </div>
                    <div className="absolute h-[697.766px] left-[24px] overflow-clip rounded-[14px] top-[99.69px] w-[1256px]" data-name="div">
                      <div className="absolute h-[697.766px] left-0 top-0 w-[1256px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
                      </div>
                      <div className="absolute bg-[rgba(43,127,255,0.15)] h-[697.766px] left-0 top-0 w-[1256px]" data-name="Container" />
                      <Container />
                    </div>
                  </div>
                  <div className="bg-[#373737] h-[821.453px] overflow-clip relative rounded-[16px] shadow-[0px_-60px_150px_60px_rgba(0,0,0,0.3),0px_-20px_60px_10px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="article">
                    <div className="absolute content-stretch flex h-[43.688px] items-end justify-between left-[40px] top-[32px] w-[1224px]" data-name="div">
                      <Wrapper1 additionalClassNames="h-[43.688px] w-[495.578px]">
                        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#b0ffca] text-[0px] text-[38px] top-[-1px]">
                          <span className="leading-[43.7px]">TAUR</span>
                          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[43.7px]">{` – Brand development`}</span>
                        </p>
                      </Wrapper1>
                      <SpanText text="1st place hackathon" additionalClassNames="from-[#00bc7d] to-[#00c950] w-[208.563px]" />
                    </div>
                    <div className="absolute h-[697.766px] left-[24px] overflow-clip rounded-[14px] top-[99.69px] w-[1256px]" data-name="div">
                      <div className="absolute h-[697.766px] left-0 top-0 w-[1256px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
                      </div>
                      <div className="absolute bg-[rgba(0,188,125,0.15)] h-[697.766px] left-0 top-0 w-[1256px]" data-name="Container" />
                      <Container />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col h-[1442.219px] items-start left-[289.5px] px-[48px] top-[3397.06px] w-[840px]" data-name="div">
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
                    <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[33554400px] size-full" src={imgImageWithFallback3} />
                  </div>
                </div>
                <Wrapper2 additionalClassNames="h-[182.438px]">
                  <div className="absolute h-[135.938px] left-0 top-0 w-[600px]" data-name="p">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27.2px] left-0 not-italic text-[#d4d4d4] text-[16px] top-[-1px] w-[580px] whitespace-pre-wrap">{`I\'m a product-minded builder who blends marketing, development, and experimentation. I\'ve spent the last few years working across growth teams, startups, and side projects — shipping everything from landing pages to full-stack tools. I believe in learning by building, measuring what matters, and moving fast without breaking things (usually).`}</p>
                  </div>
                  <div className="absolute h-[30.5px] left-0 rounded-[4px] top-[151.94px] w-[110.969px]" data-name="a">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-[8px] not-italic text-[#51a2ff] text-[15px] top-[2px]">Read more →</p>
                  </div>
                </Wrapper2>
              </div>
            </div>
            <div className="h-[496.781px] relative shrink-0 w-full" data-name="section">
              <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t inset-0 pointer-events-none" />
              <div className="absolute content-stretch flex flex-col gap-[24px] h-[156.781px] items-start left-0 top-[97px] w-[620px]" data-name="div">
                <div className="h-[100.781px] relative shrink-0 w-full" data-name="h2">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[50.4px] left-0 not-italic text-[42px] text-white top-0 w-[437px] whitespace-pre-wrap">{`Let\'s build something interesting.`}</p>
                </div>
                <div className="content-stretch flex gap-[16px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
                  <Wrapper1 additionalClassNames="h-[32px] rounded-[4px] w-[189.281px]">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[8px] not-italic text-[#51a2ff] text-[16px] top-[3px]">edward@example.com</p>
                  </Wrapper1>
                  <Wrapper1 additionalClassNames="h-[24px] w-[9px]">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#404040] text-[16px] top-[-1px]">•</p>
                  </Wrapper1>
                  <div className="h-[32px] relative rounded-[4px] shrink-0 w-[127.344px]" data-name="a">
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
      <div className="absolute bg-[rgba(0,0,0,0.9)] content-stretch flex flex-col h-[76.5px] items-start left-0 pb-px px-[289.5px] top-0 w-[1419px]" data-name="nav">
        <div aria-hidden="true" className="absolute border-[#262626] border-b border-solid inset-0 pointer-events-none" />
        <div className="h-[75.5px] relative shrink-0 w-full" data-name="div">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[48px] relative size-full">
              <Wrapper1 additionalClassNames="h-[25.5px] w-[78.953px]">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.5px] left-0 not-italic text-[17px] text-white top-0">Ed Turner</p>
              </Wrapper1>
              <div className="h-[27.5px] relative shrink-0 w-[75.156px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                  <Wrapper2 additionalClassNames="h-[27.5px] rounded-[4px]">
                    <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] text-[#a1a1a1] text-[13px] top-[4px] tracking-[0.65px] uppercase">Contact</p>
                  </Wrapper2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}