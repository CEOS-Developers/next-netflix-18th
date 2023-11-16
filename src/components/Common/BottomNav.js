"use client";
import React from "react";
import HomeLogo from "public/assets/images/icon/home.svg";
import SearchLogo from "public/assets/images/icon/search.svg";
import CommingLogo from "public/assets/images/icon/coming-soon.svg";
import DownloadLogo from "public/assets/images/icon/downloads.svg";
import MoreLogo from "public/assets/images/icon/more.svg";
import indicator from "public/assets/images/indicator.png";
import Image from "next/image";
import styles from "./BottomNav.module.css";
import { usePathname, useRouter } from "next/navigation";
function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem} onClick={() => router.push("/home")}>
          <HomeLogo stroke={pathname === "/home" ? "#FFF" : "#8C8787"} />
          <div
            className={[
              styles.menuText,
              pathname === "/home" ? styles.white : "",
            ].join(" ")}
          >
            Home
          </div>
        </li>
        <li className={styles.menuItem} onClick={() => router.push("/search")}>
          <SearchLogo stroke={pathname === "/search" ? "#FFF" : "#8C8787"} />
          <div
            className={[
              styles.menuText,
              pathname === "/search" ? styles.white : "",
            ].join(" ")}
          >
            Search
          </div>
        </li>
        <li className={styles.menuItem}>
          <CommingLogo fill={pathname === "/coming" ? "#FFF" : "#8C8787"} />
          <div className={styles.menuText}>Coming Soon</div>
        </li>
        <li className={styles.menuItem}>
          <DownloadLogo fill={pathname === "/download" ? "#FFF" : "#8C8787"} />
          <div className={styles.menuText}>Download</div>
        </li>
        <li className={styles.menuItem}>
          <MoreLogo fill={pathname === "/more" ? "#FFF" : "#8C8787"} />
          <div className={styles.menuText}>More</div>
        </li>
      </ul>
      <Image src={indicator} alt={"home-indicator"} width={"100%"} />
    </nav>
  );
}

export default BottomNav;
