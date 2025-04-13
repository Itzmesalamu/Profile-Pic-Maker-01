import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Profile Pic Maker ',
  description:
    'Frame your profile with the colors of Palestine. Let your profile picture speak volumes for peace and justice. #IStandWithPalestine',
  metadataBase: new URL('https://isupportpalestine.netlify.app'),
  openGraph: {
    title: 'Profile Pic Maker ',
    description: 'Create your Palestine profile picture to show your support',
    siteName: 'Profile Pic Maker ',
    images: '/social-card.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
