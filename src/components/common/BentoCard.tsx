import React, { useRef, useState, useEffect } from 'react';
import { motion, HTMLMotionProps, useMotionValue, useSpring } from 'motion/react';

interface BentoCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  magnetic?: boolean;
  maxMagneticOffset?: number;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(99, 102, 241, 0.12)',
  magnetic = true,
  maxMagneticOffset = 5,
  style,
  whileHover,
  whileTap,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Framer Motion values for magnetic displacement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for magnetic pull and release
  const springConfig = { damping: 22, stiffness: 260, mass: 0.4 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    // Detect touch device to disable cursor-following effects cleanly
    if (typeof window !== 'undefined') {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePos({ x: mouseX, y: mouseY });

    if (magnetic) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const pullX = ((mouseX - centerX) / centerX) * maxMagneticOffset;
      const pullY = ((mouseY - centerY) / centerY) * maxMagneticOffset;
      x.set(pullX);
      y.set(pullY);
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        x: isTouchDevice || !magnetic ? 0 : springX,
        y: isTouchDevice || !magnetic ? 0 : springY,
        ...style,
      }}
      whileHover={
        isTouchDevice
          ? undefined
          : {
              scale: 1.014,
              transition: { type: 'spring', stiffness: 380, damping: 24 },
              ...whileHover,
            }
      }
      whileTap={
        whileTap ?? {
          scale: 0.99,
          transition: { duration: 0.15 },
        }
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl bg-[#0D1117] border border-white/[0.08] overflow-hidden transition-colors transition-shadow duration-300 ${
        isHovered
          ? 'border-white/[0.2] shadow-2xl shadow-indigo-950/30'
          : 'shadow-md shadow-black/30'
      } ${className}`}
      {...props}
    >
      {/* Subtle cursor-following radial spotlight for desktop */}
      {!isTouchDevice && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 -z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`,
          }}
        />
      )}

      {/* Card Body */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
};
