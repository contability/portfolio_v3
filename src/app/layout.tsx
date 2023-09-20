import './global.css';

export const metadata = {
  title: "FURIUM's portfolio",
  description: "FURIUM's portfolio v3.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
