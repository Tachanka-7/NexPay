import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './provider';
import ClientWrapper from './ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wallet',
  description: 'Simple wallet app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}){
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </Providers>
      </body>
    </html>
  );
}
