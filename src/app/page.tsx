import { HomeLayout } from '@/components/layout';
import { InviteesProvider } from '@/context/invites-provider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between snap-y snap-mandatory">
      <InviteesProvider>
        <HomeLayout />
      </InviteesProvider>
    </main>
  );
}
