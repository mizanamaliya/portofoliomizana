import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, [data-interactive="true"]')
        );
        setIsHoveringInteractive(isInteractive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-navy mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - (isHoveringInteractive ? 8 : 4),
          y: mousePosition.y - (isHoveringInteractive ? 8 : 4),
          width: isHoveringInteractive ? 16 : 8,
          height: isHoveringInteractive ? 16 : 8,
          backgroundColor: isHoveringInteractive ? '#C5F36B' : '#FFFFFF',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 450, mass: 0.1 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full border border-cobalt/40 hidden md:block"
        animate={{
          x: mousePosition.x - (isHoveringInteractive ? 24 : 18),
          y: mousePosition.y - (isHoveringInteractive ? 24 : 18),
          width: isHoveringInteractive ? 48 : 36,
          height: isHoveringInteractive ? 48 : 36,
          scale: isHoveringInteractive ? 1.25 : 1,
          borderColor: isHoveringInteractive ? '#C5F36B' : 'rgba(99, 120, 255, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </>
  );
};
