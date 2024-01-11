'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { Invitee } from '@/constants/invitees';

interface InviteeProviderProps {
  children: ReactNode;
}

interface InviteeContextProps {
  invitee: Invitee | null; // Updated to include user profile
  storeInvitee: (invitee: Invitee) => void;
}

const InviteeContext = createContext<InviteeContextProps | null>(null);

export const InviteesProvider = ({ children }: InviteeProviderProps) => {
  const [invitee, setInvitee] = useState<Invitee | null>(null);
  useEffect(() => {
    const storedInvitee = localStorage.getItem('invitee');
    if (storedInvitee) {
      setInvitee(JSON.parse(storedInvitee));
    }
  }, []);

  const storeInvitee = (invitee: Invitee) => {
    setInvitee(invitee);
    localStorage.setItem('invitee', JSON.stringify(invitee));
  };

  return (
    <InviteeContext.Provider value={{ invitee, storeInvitee }}>
      {children}
    </InviteeContext.Provider>
  );
};

export const useInvitee = () => {
  const context = useContext(InviteeContext);
  if (!context) {
    throw new Error('useInvitee must be used within a InviteeProvider');
  }
  return context;
};
