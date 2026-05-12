import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 24);
      cursorY.set(e.clientY - 24);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* The large circular lens that turns things B&W and feels "large" */}
      <motion.div
        className="fixed top-0 left-0 w-48 h-48 rounded-full pointer-events-none z-[9999] border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.05)]"
        style={{
          x: mousePos.x - 96,
          y: mousePos.y - 96,
          backdropFilter: 'grayscale(0.6) contrast(1.1) brightness(1.05)',
          scale: isHovering ? 1.4 : 1,
          transition: { type: 'spring', damping: 30, stiffness: 200 }
        }}
      >
        {/* Subtle inner ring */}
        <div className="w-[98%] h-[98%] rounded-full border border-white/5" />
      </motion.div>

      {/* Hover state cursor (when on links) */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full pointer-events-none z-[9998] border-2 border-primary flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          x: mousePos.x - 48, 
          y: mousePos.y - 48,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <span className="text-[10px] font-bold uppercase tracking-tighter text-primary">View</span>
      </motion.div>
    </>
  );
};

export default Cursor;
