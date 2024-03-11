"use client"

import { useCallback, useState } from "react";
import styles from "./layout.module.css";
import { MdMenu, MdEventRepeat, MdExtension, MdWavingHand } from "react-icons/md";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isNavMenuOpen, setIsNavMenuOpen] = useState<Boolean>(false);

  const onMenuNavItemClick = useCallback(() => {
    setIsNavMenuOpen(true);
  }, []);
  return (
    <>
      <div className={`${styles.navBar}`}>
        <div className={`${styles.deepfriedMarketIcon}`}>
          <div>Deepfried</div>
          <div>Market</div>
        </div>

        {isNavMenuOpen &&
              <>
                <div className={`${styles.darkenOverlay}`} onClick={() => setIsNavMenuOpen(false)}/>
                <div className={`${styles.navMenu}`}>
                  <div className={`${styles.menuSection}`}>
                    <div className={`${styles.menuItem}`}>
                      <MdWavingHand />
                      <div>Welcome back user!</div>
                    </div>
                    <br />
                  </div>
                </div>
              </>
            }

        <div className={`${styles.primaryNav}`}>
          <div className={`${styles.navItem}`} onClick={onMenuNavItemClick}>
            <MdMenu />
            <label>Menu</label>
          </div>

          <div className={`${styles.navItem}`}>
            <MdEventRepeat />
            <label>Buy it again</label>
          </div>

          <div className={`${styles.navItem}`}>
            <MdExtension />
            <label>Deals</label>
          </div>

          <div className={`${styles.navItem}`}>
            <MdExtension />
            <label>Autoship</label>
          </div>
        </div>

        <div className={`${styles.deepfriedMarketIcon}`}>
          <div>Search</div>
        </div>

        <div className={`${styles.deepfriedMarketIcon}`}>
          <div>Secondary nav</div>
        </div>
      </div>

      <div>
        {children}
      </div>
    </>

  )
}
