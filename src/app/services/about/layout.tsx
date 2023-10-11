import AppLayout from '@component/layout/AppLayout';
import TransitionBackground from '@component/layout/TransitionBackground';
import NavigationHome from '@component/navigation/NavigationHome';
import { palette } from '@styles/theme';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TransitionBackground theme="dark" />
      <AppLayout>
        <NavigationHome theme="warm" />
        {children}
      </AppLayout>
    </>
  );
}
