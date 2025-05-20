import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo from '../../assets/ob.png';

const AnimatedLogo = () => {
  const [revealed, setRevealed] = useState(false);
  const controls = useAnimation();

  // Static styles don't need useMemo
  const backgroundStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform',
  };

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        rotateY: [0, 360],
        opacity: [0, 1],
        transition: {
          duration: 1.5,
          ease: 'easeOut',
        },
      });
      setRevealed(true);
      controls.start({
        scale: [1, 1.05, 1],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      });
    };

    const timeout = setTimeout(sequence, 100);
    return () => clearTimeout(timeout);
  }, [controls]);

  return (
    <div className="w-[300px] h-[400px] relative flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={controls}
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
