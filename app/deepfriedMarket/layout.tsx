'use client'

import Ticker from "@/components/Ticker/Ticker";
import styles from "./layout.module.css";

const msgs = [
  <label>Limted offer: Get a <b>free redirect</b> here! <a href="/">See here</a></label>,
  <label>Shipping powered by our local family pomeranians.</label>,
  <label>My cats helped me build this, but only by existing.</label>
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: "100vh"}}>
        <div className={`${styles.promoBar}`}>
          <Ticker msgs={msgs} delay={10000}/>
        </div>
        {children}
      </body>
    </html>
  )
}
