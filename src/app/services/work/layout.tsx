// 'use client';

import NavigationHome from '@component/navigation/NavigationHome';
import { monoPalette } from '@styles/theme';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavigationHome colorPalette={monoPalette} />
        {children}
      </body>
    </html>
  );
}
