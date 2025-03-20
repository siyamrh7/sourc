// UniqueFeatures.jsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/UniqueFeatures.module.css';
import { useRouter } from 'next/router';

const UniqueFeatures = () => {
     const router= useRouter()
      const startButton=() => {
        router.push("#contact")
      }
  const features = [
    {
      id: 1,
      image: '/images/image-1.webp',
      title: 'Directe toegang tot de bron',
      description: 'Wij kopen direct bij de bron, elimineren tussenhandelaren en verlagen de prijzen.'
    },
    {
      id: 2,
      image: '/images/tower.webp',
      title: 'Lokale expertise met Chinese teamleden',
      description: 'Ons lokale team in China zorgt voor vlotte communicatie en onderhandelingen.'
    },
    {
      id: 3,
      image: '/images/image-2.webp',
      title: 'Kwaliteitscontrole op locatie',
      description: 'Regelmatige fabriekbezoeken stellen ons in staat om de productie te inspecteren en topkwaliteit te garanderen.'
    },
    {
      id: 4,
      image: '/images/image-3.webp',
      title: 'Efficiënte en veilige logistiek',
      description: 'Ons sterke logistieke netwerk zorgt voor tijdige en veilige levering, terwijl onverwachte kosten of vertragingen worden voorkomen.'
    }
  ];

  return (
    <section className={styles.uniqueSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Wat ons uniek maakt?</h2>
        
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className={styles.featureImage}
                  quality={100}
                />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton} onClick={startButton}>START MET SOURCEN</button>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;