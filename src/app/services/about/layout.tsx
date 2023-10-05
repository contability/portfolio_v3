import NavigationHome from '@component/navigation/NavigationHome';
import { palette } from '@styles/theme';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className=" scrollbar-hide">
      <body>
        <NavigationHome theme="warm" />
        {children}
      </body>
    </html>
  );
}
