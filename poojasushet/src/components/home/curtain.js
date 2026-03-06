import React from 'react';
import { motion } from 'framer-motion';

const CurtainRaisser = () => {
  // Animation variants for the curtains
  const leftCurtain = {
    initial: { x: 0 },
    animate: { 
      x: "-100%", 
      transition: { delay: 1, duration: 2, ease: [0.45, 0, 0.55, 1] } 
    }
  };

  const rightCurtain = {
    initial: { x: 0 },
    animate: { 
      x: "100%", 
      transition: { delay: 1, duration: 2, ease: [0.45, 0, 0.55, 1] } 
    }
  };

  const logoFade = {
    initial: { opacity: 1 },
    animate: { 
      opacity: 0, 
      transition: { delay: 0.5, duration: 0.5 } 
    }
  };

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex overflow-hidden">
      {/* Left Curtain */}
      <motion.div 
        variants={leftCurtain}
        initial="initial"
        animate="animate"
        className="relative w-1/2 h-full bg-[#4a0404] border-r border-[#d4af37]/30 flex items-center justify-end"

        style={{ backgroundColor: '#4a0404' }}
      >
        {/* Subtle Texture/Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/padded-light.png')]" />
        
        <motion.div variants={logoFade} className="pr-4 text-[#d4af37] text-6xl font-serif italic">
          S
        </motion.div>
      </motion.div>

      {/* Right Curtain */}
      <motion.div 
        variants={rightCurtain}
        initial="initial"
        animate="animate"
        className="relative w-1/2 h-full bg-[#4a0404] border-l border-[#d4af37]/30 flex items-center justify-start"
        style={{ backgroundColor: '#4a0404' }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/padded-light.png')]" />
        
        <motion.div variants={logoFade} className="pl-4 text-[#d4af37] text-6xl font-serif italic">
          P
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CurtainRaisser;