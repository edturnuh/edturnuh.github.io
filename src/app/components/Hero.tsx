import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ROTATING_TEXT, HERO_ANIMATION } from '../config/hero';

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_TEXT.length);
    }, HERO_ANIMATION.displayDuration + HERO_ANIMATION.transitionDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-[30px] md:pt-[97px] 2xl:pt-[130px] pb-[18px] md:pb-[15px] 2xl:pb-[65px]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="leading-[1.265] md:leading-[90px] font-normal text-[#F5F3EF] mb-6 max-w-[720px] md:max-w-full text-[32px] md:text-[85px]"
      >
        <span className="font-semibold">Marketing Web</span> <br />
        <span className="inline-block relative min-h-[1.15em] overflow-hidden align-top whitespace-nowrap" style={{ display: 'inline-block', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: HERO_ANIMATION.transitionDuration / 1000, ease: 'easeInOut' }}
              style={{ display: 'inline-block', position: 'relative' }}
              className="whitespace-nowrap"
            >
              {ROTATING_TEXT[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="leading-[1.6] md:max-w-[600px] md:pt-[5px] text-[16px] text-[#d4d4d4]"
      >I combine a 10 year growth/marketing career with being a self-taught developer. Currently at Allica Bank (Series D, 2026). Now documenting work in this portfolio :)


      </motion.p>
    </section>
  );
}