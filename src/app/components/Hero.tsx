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
    <section className="px-[0px] pt-[30px] md:pt-[151px] pb-[18px] md:pb-[98px]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="leading-[1.15] font-normal text-white mb-6 max-w-[720px] md:max-w-full text-[32px] md:text-[85px]"
      >
        Marketing Website <br />
        <span className="inline-block relative min-h-[1.15em] overflow-hidden align-top" style={{ display: 'inline-block', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: HERO_ANIMATION.transitionDuration / 1000, ease: 'easeInOut' }}
              style={{ display: 'inline-block', position: 'relative' }}
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
        className="leading-[1.6] max-w-[600px] text-[16px] text-[#d4d4d4]"
      >
        Self-taught web developer with a 10 year career in growth marketing. Now specialized in product management for all things <strong>public web</strong>. B2B/B2C. Growth, Marketing, Ops & Dev.
      </motion.p>
    </section>
  );
}