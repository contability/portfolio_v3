// 'use client';

import NavigationHome from '@component/navigation/NavigationHome';
import { palette } from '@styles/theme';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavigationHome colorPalette={palette} />
        {children}
      </body>
    </html>
  );
}
