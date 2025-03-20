// Footer.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle subscription logic here
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email , firstName: 'Stay', lastName: 'Informed', message: 'Blijf op de hoogte' }),
      });
    
    // Reset form or show success message
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.logoSection}>
            <Link href="/" className={styles.logo}>
              sourc.
            </Link>
            
            <nav className={styles.footerNav}>
              <Link href="#over-ons" className={styles.navLink}>Over ons</Link>
              <Link href="#diensten" className={styles.navLink}>Diensten</Link>
              <Link href="#proces" className={styles.navLink}>Proces</Link>
              <Link href="#team" className={styles.navLink}>Team</Link>
            </nav>
          </div>
          
          <div className={styles.subscribeSection}>
            <p className={styles.subscribeLabel}>Blijf op de hoogte</p>
            <form onSubmit={handleSubmit} className={styles.subscribeForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Voeg uw e-mailadres toe.."
                required
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeButton}>
                Abboneer
              </button>
            </form>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© Sourc. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="#terms" className={styles.legalLink}>Terms</Link>
            <Link href="#privacy" className={styles.legalLink}>Privacy</Link>
            <Link href="#cookies" className={styles.legalLink}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;