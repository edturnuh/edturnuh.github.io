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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-[1120px]"
      >
        <h1 className="mb-6 text-[34px] leading-[1.02] font-medium tracking-[-0.05em] text-[#F5F3EF] sm:text-[46px] md:text-[68px] lg:text-[82px] 2xl:text-[96px]">
          <span>Website product manager helping brilliant brands </span>
          <span className="relative inline-flex min-h-[1.1em] min-w-[7.5ch] align-top text-[#F5F3EF]">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: HERO_ANIMATION.transitionDuration / 1000, ease: 'easeInOut' }}
                className="absolute inset-0 whitespace-normal break-words"
              >
                {ROTATING_TEXT[currentIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="invisible whitespace-normal break-words">
              optimise performance
            </span>
          </span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="max-w-[630px] text-[16px] leading-[1.7] text-[#d4d4d4] md:pt-[5px] md:text-[17px]"
      >
        I combine a 10 year growth/marketing career with being a self-taught developer. Currently at Allica Bank (Series D, 2026). Now documenting work in this portfolio :)
      </motion.p>
    </section>
  );
}
