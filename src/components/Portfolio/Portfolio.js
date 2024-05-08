import React from 'react'
import { motion } from 'framer-motion'

function Portfolio() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100vw',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        duration:2
      },
    },
    exit: {
      opacity: 0,
      x: '100vw',
      transition: {
        ease: 'easeInOut',
        duration:2
      },
    },
  };
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      <h1>Portfolio</h1>
    </motion.div>
  )
}

export default Portfolio
