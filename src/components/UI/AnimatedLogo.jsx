import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo from '../../assets/ob.png';

const AnimatedLogo = () => {
  const [revealed, setRevealed] = useState(false);
  const crystalControls = useAnimation();

  // Memoize the initial animation sequence
  const startRevealAnimation = useMemo(() => ({
    rotateY: [0, 360],
    scale: [1, 1],
    opacity: [0, 1],
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  }), []);

  // Memoize the continuous animation sequence with reduced complexity
  const continuousAnimation = useMemo(() => ({
    scale: [1, 1.05, 1],
    opacity: [1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }), []);

  // Memoize background styles
  const backgroundStyle = useMemo(() => ({
    width: '100%',
    height: '100%',
    backgroundImage: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform',
  }), []);

  const startReveal = useCallback(async () => {
    await crystalControls.start(startRevealAnimation);
    setRevealed(true);
    crystalControls.start(continuousAnimation);
  }, [crystalControls, startRevealAnimation, continuousAnimation]);

  useEffect(() => {
    const timeoutId = setTimeout(startReveal, 100);
    return () => clearTimeout(timeoutId);
  }, [startReveal]);

  return (
    <div className="w-[300px] h-[400px] relative flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={crystalControls}
        style={backgroundStyle}
        className="absolute inset-0"
      />

      {revealed && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent)',
            willChange: 'transform, opacity',
          }}
        />
      )}
    </div>
  );
};

export default React.memo(AnimatedLogo);