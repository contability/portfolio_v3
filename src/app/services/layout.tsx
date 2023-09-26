// 'use client';

import NavigationHome from '@component/navigation/NavigationHome';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <NavigationHome />
      <body>{children}</body>
    </html>
  );
}
