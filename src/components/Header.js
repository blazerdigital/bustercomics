// src/components/Header.js

// Mark this component as a Client Component
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.menuWrapper}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <div className={styles.leftMenu}>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/comics" className={styles.navLink}>Comics</Link>
          </div>
          <div className={styles.center}>
            <Link href="/">
              <div className={styles.logoContainer}>
                <Image src="/Logo.svg" alt="Buster Comics Logo" layout="fill" objectFit="contain" />
              </div>
            </Link>
          </div>
          <div className={styles.rightMenu}>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
