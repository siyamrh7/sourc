// SourcingHero.jsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/SourchingHero.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SourcingHero = () => {
  const [imageSrc, setImageSrc] = useState("/images/content.webp");
  const router= useRouter()
  const startButton=() => {
    router.push("#contact")
  }
  useEffect(() => {
    const handleResize = () => {
      setImageSrc(window.innerWidth <= 1024 ? "/images/content2.webp" : "/images/content.webp");
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className={styles.heroContainer}>
      <div className={styles.backgroundOverlay}>
        <div className={styles.chineseCharacters}></div>
      </div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h1 className={styles.mainHeading}>
          Jouw shortcut naar -   
            <span className={styles.subHeading}>kostenbesparing &</span>
            <span className={styles.subHeading}>betrouwbare, leveranciers</span>
          </h1>
          
          <p className={styles.description}>
            Wij omzeilen tussenpersonen en leveren<br />
            hoogwaardige producten tegen onverslaanbare<br />
            prijzen.
          </p>
          
          <button className={styles.ctaButton} onClick={startButton}>
            START MET SOURCEN
          </button>
        </div>
       
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image 
              src={imageSrc} 
              alt="Shipping containers on a cargo ship" 
              layout="fill"
              objectFit="contain"
              className={styles.shippingImage}
              priority
              quality={100}
        
            />
             {/* <Image 
              src="/images/content2.webp" 
              alt="Shipping containers on a cargo ship" 
              layout="fill"
              objectFit="contain"
              className={styles.shippingImage}
              priority
              quality={100}
        
            /> */}
            {/* <div className={styles.featuresContainer}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🏆</span>
                <span className={styles.featureText}>Kwaliteitsgarantie waarop je kunt vertrouwen</span>
              </div>
              
              <div className={`${styles.feature} ${styles.chinaFeature}`}>
                <span className={styles.featureIcon}>🇨🇳</span>
                <span className={styles.featureText}>Lokale experts in China voor naadloze sourcing.</span>
              </div>
              
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🚀</span>
                <span className={styles.featureText}>Sneller, slimmer en risicolos importeren</span>
              </div>
              
              <div className={`${styles.feature} ${styles.endToEndFeature}`}>
                <span className={styles.featureIcon}>➡️</span>
                <span className={styles.featureText}>End-to-end sourcing, vereenvoudigd</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcingHero;