// 'use client';

import Providers from '../../lib/providers';
import './global.css';
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "FURIUM's portfolio",
  description: "FURIUM's portfolio v3.0",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const layout = children?.layout ?? 'default';
  // console.log(layout);

  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
