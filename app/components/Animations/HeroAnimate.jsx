'use client'
import { motion, useAnimation } from 'framer-motion';

export const HeroAnimate = ({ customDelay, children,customY,customX }) => {
  const mainControls = useAnimation();
  return (
    <div style={{ position: 'relative', width: 'fit-object' }}>
      <motion.div
        variants={{
          hidden: {
            x:customX,
            y:customY,
            opacity: 0,
          },
          visible: {
            x:0,
            y:0,
            opacity: 1,
            transition: { delay: 0.25 * customDelay, duration: 1 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        animate={mainControls}
        viewport={{ once: true }}>
        {children}
      </motion.div>
    </div>
  );
};
