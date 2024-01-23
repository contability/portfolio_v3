import NextTopLoader from 'nextjs-toploader';
import Providers from '../../lib/providers';
import './global.css';
import { palette } from '@styles/theme';

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
  return (
    <html lang="en" translate="no">
      <body>
        <NextTopLoader
          color={palette.LINE}
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={500}
          shadow={`0 0 10px ${palette.LINE},0 0 5px ${palette.LINE}`}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
