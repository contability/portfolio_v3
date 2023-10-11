// 'use client';

import AppLayout from '@component/layout/AppLayout';
import TransitionBackground from '@component/layout/TransitionBackground';
import NavigationHome from '@component/navigation/NavigationHome';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TransitionBackground theme="warm" />
      <AppLayout>
        <NavigationHome />
        {children}
      </AppLayout>
    </>
  );
}
