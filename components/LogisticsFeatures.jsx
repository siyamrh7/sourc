// LogisticsFeatures.jsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/LogisticsFeatures.module.css';

const LogisticsFeatures = () => {
  return (
    <section className={styles.featuresSection} id='over-ons'>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Naadloze sourcing & logistieke ondersteuning</h2>
          <p className={styles.subtitle}>Naadloze import met end-to-end ondersteuning</p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Naleving van regelgeving & ondersteuning bij papierwerk</h3>
                <p className={styles.featureDescription}>
                  Wij begeleiden je bij al het benodigde papierwerk en zorgen voor naleving van
                  lokale wetten en regelgeving.
                </p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Naadloze en veilige logistiek</h3>
                <p className={styles.featureDescription}>
                  Ons logistieke netwerk zorgt voor een veilige levering en voorkomt onverwachte
                  vertragingen of extra kosten.
                </p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>End-to-end supply chain beheer</h3>
                <p className={styles.featureDescription}>
                  Wij regelen alles, van product sourcing tot transport en douaneafhandeling.
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <Image
              src="/images/image.webp"
              alt="Logistics containers"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsFeatures;