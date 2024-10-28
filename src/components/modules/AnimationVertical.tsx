'use client';

import { motion } from 'framer-motion';

const AnimationVertical = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: -40, transition: { repeat: Infinity, delay: 1, duration: 1, ease: 'easeInOut', repeatType: 'reverse' } }}
      style={{ position: 'relative' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationVertical