import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CURTAIN_TEXTURE = '/curtain-texture.png'; // Make sure this path is correct

const CurtainOpener = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define the SVG clipping path variants
  const maskVariants = {
    closed: {
      // Represents the closed, vertically folded mask
      scaleX: 1,
      transition: { duration: 0.2 },
    },
    open: {
      // Represents the bunched up, revealed mask
      scaleX: 0,
      transition: { 
        duration: 3.5, 
        ease: [0.65, 0, 0.35, 1], // Custom slow-in, slow-out ease
      },
    },
  };

  // Define the texture movement to slide with the opening
  const textureVariants = {
    closed: { x: '0%', transition: { duration: 0.2 } },
    openLeft: { x: '-100%', transition: { duration: 3.5, ease: [0.65, 0, 0.35, 1] } },
    openRight: { x: '100%', transition: { duration: 3.5, ease: [0.65, 0, 0.35, 1] } },
  };

  const CurtainPanel = ({ isLeft, children }) => (
    <motion.div
      className={`curtain-panel ${isLeft ? 'left' : 'right'}`}
      style={{
        position: 'absolute',
        top: 0,
        [isLeft ? 'left' : 'right']: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none', // Allow clicks to pass through once opened
      }}
    >
      <motion.div
        className="curtain-texture"
        initial="closed"
        animate={isOpen ? (isLeft ? 'openLeft' : 'openRight') : 'closed'}
        variants={textureVariants}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${CURTAIN_TEXTURE})`,
          backgroundSize: 'cover',
          backgroundPosition: isLeft ? 'left' : 'right',
          boxShadow: '0 0 40px rgba(0,0,0,0.8)', // Deep shadow for the opening edge
        }}
      />
      {/* 3D Fold Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'repeating-linear-gradient(90deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0.4) 15px, rgba(0,0,0,0) 30px)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );

  return (
    <div 
      className="curtain-container" 
      onClick={() => setIsOpen(true)} // Opens on clicking the screen
      style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', cursor: isOpen ? 'default' : 'pointer' }}
    >
      {/* 1. The Real Content (Wedding Details) */}
      <div className="wedding-content" style={{ width: '100%', height: '100%' }}>
        {children}
      </div>

      {/* 2. AnimatePresence handles the 'reveal' animation */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="curtain-mask-container"
            key="curtain-mask"
            initial="closed"
            animate="closed"
            exit="open"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 10,
              overflow: 'hidden',
            }}
          >
            {/* 3. The Left and Right Curtains */}
            <CurtainPanel isLeft={true} />
            <CurtainPanel isLeft={false} />
            
            {/* 4. The SVG Clipping Path (Applied as a CSS Mask) */}
            <motion.svg 
              className="curtain-mask-svg"
              variants={maskVariants}
              initial="closed"
              animate={isOpen ? 'open' : 'closed'}
              style={{
                position: 'absolute',
                top: 0,
                left: isLeft ? '-100%' : '100%', // Position offscreen and slide in
                width: '100%',
                height: '100%',
                maskType: 'alpha', // Use alpha mask for complex shapes
              }}
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <defs>
                <clipPath id="curtain-clip-left">
                  {/* Dynamic SVG shape for the gathering effect */}
                  <motion.path 
                    d="M0,0 H50 V100 H0 Z" // Initial rectangle (closed)
                    variants={{
                      closed: { d: "M0,0 H50 V100 H0 Z" },
                      open: { d: "M0,0 C25,10 25,90 0,100 Z" } // Complex curve (gathered)
                    }}
                    transition={{ duration: 3.5, ease: [0.65, 0, 0.35, 1] }}
                  />
                </clipPath>
              </defs>
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurtainOpener;