import type { Metadata } from "next";
import { Inter, Silkscreen } from "next/font/google";
import "./globals.css";

import styles from './layout.module.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome!",
  description: "Justin Kyle Torres' portfolio website",
};

const silkscreen = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className={`${styles.topnav} ${silkscreen.className}`} id="myTopnav">
        <div className={`${styles.leftHeader}`}>
          <div>Justin Kyle Torres</div>
        </div>
        <div className={`${styles.rightHeader}`}>
          <a href="https://www.linkedin.com/in/justin-torres/" target="_blank">LinkedIn</a>
          <a href="/justinkyletorres2024_resume.pdf" target="_blank">Resume</a>
          <a href="https://github.com/im-deepfriedwater" target="_blank">Github</a>
        </div>
      </div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
