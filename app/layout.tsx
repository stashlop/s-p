import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'S&P Sunny Club | Stock up. Level up.', description: 'Discover S&P retailer rewards, explore healthcare and wellness ranges, and join the Sunny Club.', icons: { icon: '/icon.svg' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
