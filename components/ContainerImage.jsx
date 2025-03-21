// ContainerFeatures.jsx
import React from 'react';
import styles from '../styles/ContainerImage.module.css';
import Image from 'next/image';

const ContainerFeatures = () => {
  return (
    <div className={styles.imageContainer}>
      <Image 
        height={600}
        width={600}
        src="/images/container.webp" 
        alt="Container ship with shipping containers" 
        className={styles.image}
      />

      <div className={styles.featuresOverlay} >
      <div className={`${styles.featureItem} ${styles.topFirstFeature}`}>
          <Image height={30} width={30} src="/icons/award.png" alt="Quality icon" className={styles.featureIcon} />
          <span className={styles.featureText}>Kwaliteitsgarantie waarop je kunt vertrouwen</span>
        </div>
        
        <div className={`${styles.featureItem} ${styles.topSecondFeature}`}>
          <Image height={30} width={30} src="/icons/image.png" alt="China flag" className={styles.featureIcon} />
          <span className={styles.featureText}>Lokale experts in China voor naadloze sourcing</span>
        </div>
        
        {/* Commented out as in your original code
        <div className={styles.arrowContainer}>
          <img src="/icons/switch.png" alt="Arrow down" className={styles.arrowIcon} />
        </div>
        */}
        
        <div className={`${styles.featureItem} ${styles.bottomFirstFeature}`}>
          <Image height={30} width={30} src="/icons/rocket.png" alt="Rocket icon" className={styles.featureIcon} />
          <span className={styles.featureText}>Sneller, slimmer en risicoloos importeren</span>
        </div>
        
        <div className={`${styles.featureItem} ${styles.bottomSecondFeature}`}>
          <Image height={30} width={30} src="/icons/switch.png" alt="Sync icon" className={styles.featureIcon} />
          <span className={styles.featureText}>End-to-end sourcing, vereenvoudigd</span>
        </div>
      </div>
    </div>
  );
};

export default ContainerFeatures;