import './globals.css';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import Logo from './logo/Logo';

const inter = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Calendar | Sportradar',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className={styles.header}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/sportradar.jpg"
                alt="header"
                width={1440}
                height={589}
                className={styles.navigationImage}
              />
            </div>
            <div className={styles.navigationBar}>
              <div>
                <Logo />
              </div>
              <div>
                <div className={styles.navigationLinks}>
                  <Link href="https://investors.sportradar.com/">Overview</Link>
                  <Link href="/">Calendar</Link>
                </div>
              </div>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}