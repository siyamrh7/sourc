// SourcingHero.jsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/SourchingHero.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ContainerFeatures from './ContainerImage';




const SourcingHero = () => {
  const [imageSrc, setImageSrc] = useState("/images/Content.webp");
  const router= useRouter()
  const startButton=() => {
    router.push("#contact")
  }
  useEffect(() => {
    const handleResize = () => {
      setImageSrc(window.innerWidth <= 1024 ? "/images/Content3.webp" : "/images/Content.webp");
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
            <span className={styles.subHeading}>betrouwbare leveranciers</span>
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
            {/* <Image 
              src={imageSrc} 
              alt="Shipping containers on a cargo ship" 
              layout="responsive"
              height={100}
              width={100}
              objectFit="contain"
              className={styles.shippingImage}
              priority
              quality={100}
              
            /> */}
             {/* <Image 
              src="/images/content2.webp" 
              alt="Shipping containers on a cargo ship" 
              layout="fill"
              objectFit="contain"
              className={styles.shippingImage}
              priority
              quality={100}
        
            /> */}
          <ContainerFeatures/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcingHero;