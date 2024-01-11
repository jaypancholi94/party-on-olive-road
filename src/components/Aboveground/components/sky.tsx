'use client';

import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInvitee } from '@/context/invites-provider';
import { Clouds } from '.';

const Sky = () => {
  const controls = useAnimation();
  const [scrollYPosition, setScrollYPosition] = useState<number>(0);
  const { invitee } = useInvitee();
  // console.log({ invitee });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (scrollYPosition >= 0 && scrollYPosition <= 25) {
      controls.start('morning');
      // console.log(scrollYPosition, 'morning');
    } else if (scrollYPosition > 25 && scrollYPosition <= 50) {
      controls.start('afternoon');
      // console.log(scrollYPosition, 'afternoon');
    } else if (scrollYPosition > 50 && scrollYPosition <= 75) {
      controls.start('evening');
      // console.log(scrollYPosition, 'evening');
    } else if (scrollYPosition > 75 && scrollYPosition <= 100) {
      controls.start('night');
      // console.log(scrollYPosition, 'night');
    }
  }, [scrollYPosition]);

  useMotionValueEvent(scrollYProgress, 'change', async (latest) => {
    // console.log({ latest, ne: Math.round(latest * 100) });
    /* const num = latest;
    const numWhole = Math.round(latest * 100);
    console.log({ num, numWhole }); */

    setScrollYPosition(Math.round(latest * 100));
    /* if (latest >= 0 && latest <= 0.25) {
      await controls.start('morning');
    } else if (latest > 0.25 && latest <= 0.5) {
      await controls.start('afternoon');
    } else if (latest > 0.5 && latest <= 0.75) {
      await controls.start('evening');
    } else if (latest > 0.75 && latest <= 1) {
      await controls.start('night');
    } */
  });

  const skyVariants = {
    morning: {
      background: 'linear-gradient(to bottom, #5899c1 0%, #94dfff 100%)',
      transition: { ease: 'easeInOut', duration: 0.8 },
    },
    afternoon: {
      background: 'linear-gradient(to bottom,  #fdc352 0%,#e8ed92 100%)',
      transition: { ease: 'easeInOut', duration: 0.8 },
    },
    evening: {
      background: 'linear-gradient(to bottom, #eab0d1 0% ,#8583be 100%)',
      transition: { ease: 'easeInOut', duration: 0.8 },
    },
    night: {
      background: 'linear-gradient(to bottom,  #040b3c 0%,#233072 100%)',
      transition: { ease: 'easeInOut', duration: 0.8 },
    },
  };

  return (
    <motion.div
      variants={skyVariants}
      initial={'morning'}
      style={{
        width: '100%',
        height: '100%',
        color: 'white',
        position: 'fixed',
      }}
      animate={controls}
    />
  );
};

export default Sky;
