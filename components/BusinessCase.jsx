// BusinessCase.jsx
import React from 'react';
import styles from '../styles/BusinessCase.module.css';
import Image from 'next/image';

const BusinessCase = () => {
  return (
    <div className={styles.container} id='diensten'>
      <h1 className={styles.title}>Business case study</h1>
      
      <div className={styles.caseCard}>
        <div className={styles.headerSection}>
          <div className={styles.logoContainer}>
            <h2 className={styles.logo} style={{ color: '#000000',fontStyle: 'italic' }}>FIT PREPS</h2>
          </div>
          <div className={styles.savingsTag}>
            <p>Besparing per jaar - €152.000</p>
          </div>
        </div>
        
        <p className={styles.description}>
          Fit Preps gebruikte suikerrietbakjes voor hun maaltijd bereidingen, maar betaalde maar liefst €0,24 per bakje. 
          Deze hoge kosten drukten aanzienlijk op hun marges. Ze zochten een manier om hun inkoopkosten drastisch te verlagen 
          zonder concessies te doen aan de kwaliteit.
        </p>
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.leftSection}>
          <div className={styles.sectionItem}>
            <div className={styles.iconContainer}>
              <div className={styles.diamondIcon}>
                <span>◆</span>
              </div>
            </div>
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>Onze aanpak</h3>
              <p className={styles.sectionText}>
                Sourc. ging direct aan de slag. Dankzij ons netwerk in China vonden we 
                een betrouwbare leverancier die bakjes van dezelfde kwaliteit kon
                produceren. Inclusief transportkosten konden we de bakjes aanbieden
                voor slechts €0,05 per stuk.
              </p>
            </div>
          </div>
          
          <div className={styles.sectionItem}>
            <div className={styles.iconContainer}>
              <div className={styles.chartIcon}>
                <span>📊</span>
              </div>
            </div>
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>Onderzoek</h3>
              <p className={styles.sectionText}>
                Door over te stappen naar deze leverancier heeft Fit Preps een enorme
                kostenbesparing van 79,17% per bakje gerealiseerd. Op jaarbasis, bij
                een inkoop van 800.000 bakjes, betekent dit een totale besparing van
                maar liefst €152.000.
              </p>
            </div>
          </div>
          
          <div className={styles.sectionItem}>
            <div className={styles.iconContainer}>
              <div className={styles.starIcon}>
                <span>★</span>
              </div>
            </div>
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>Resultaat</h3>
              <p className={styles.sectionText}>
                Tevreden klanten & ruimte voor groei.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.rightSection}>
          <div className={styles.imageContainer}>
            <Image 
              src="/images/Content-1.webp"
              alt="Fit Preps meal with packaging" 
              width={500} 
              height={600} 
              layout="responsive"
              className={styles.mealImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCase;