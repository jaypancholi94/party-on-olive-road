'use client';

import Image from 'next/image';
import { useInvitee } from '@/context/invites-provider';

import { Aboveground } from '@/components/Aboveground';
import { Footer } from '@/components/footer';

const HomeLayout = () => {
  const { invitee } = useInvitee();
  console.log({ invitee });

  return (
    <>
      <Aboveground />

      <div style={{ height: '100vh', zIndex: 10 }}>Block 1</div>
      <div style={{ height: '100vh', zIndex: 10 }}>Block 2</div>
      <div style={{ height: '100vh', zIndex: 10 }}>Block 3</div>
      <div style={{ height: '100vh', zIndex: 10 }}>Block 4</div>
      <Footer />
    </>
  );
};
export { HomeLayout };
