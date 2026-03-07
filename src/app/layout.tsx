import './globals.scss';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/shared/PageTransition';

export const metadata: Metadata = {
  title: 'Antihero PR',
  description:
    'Modern PR for artists, heavy music, and campaigns that need impact.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <NextTopLoader color='#ffffff' showSpinner={false} height={2} />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
