import AppLayout from '@component/layout/AppLayout';
import TransitionBackground from '@component/layout/TransitionBackground';
import NavigationBar from '@component/layout/NavigationBar';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TransitionBackground theme="dark" />
      <AppLayout>
        <NavigationBar />
        {children}
      </AppLayout>
    </>
  );
}
