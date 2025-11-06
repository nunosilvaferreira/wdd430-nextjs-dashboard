import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import './ui/global.css';

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'Next.js Learn Dashboard Tutorial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}