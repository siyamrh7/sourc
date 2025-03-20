// Navbar.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          sourc.
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
          <div className={styles.navLinks}>
            <Link href="#over-ons" className={styles.navLink} onClick={closeMenu}>
              Over ons
            </Link>
            <Link href="#diensten" className={styles.navLink} onClick={closeMenu}>
              Diensten
            </Link>
            <Link href="#proces" className={styles.navLink} onClick={closeMenu}>
              Proces
            </Link>
            <Link href="#team" className={styles.navLink} onClick={closeMenu}>
              Team
            </Link>
          </div>
          
          <Link href="#contact" className={styles.ctaButton} onClick={closeMenu}>
            START MET SOURCEN
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;