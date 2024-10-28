'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TailwindResponsiveProps } from '@/lib/types/TypeTailwind';
import clsx from 'clsx';

const AnimatedList: React.FC<AnimatedResponsiveBoxProps> = ({ children, className = "", spacing = [], flexbox = ['flex', 'flex-col', 'gap-4', 'justify-center'], grid = [], sizing = [],}) => {

  const classNames = clsx(sizing, spacing, flexbox, grid, className);

  return (
    <motion.div
      className={classNames}
      variants={containerVariants}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedList;


interface AnimatedResponsiveBoxProps extends TailwindResponsiveProps {
  children: React.ReactNode;
  animate?: boolean;
}

// Variant Animation Container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

// Variant Animation Item
const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
    }
  }
};