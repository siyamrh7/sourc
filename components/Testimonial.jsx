// Testimonial.jsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Testimonial.module.css';

const Testimonial = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa' ,width: '100%'}}>

    <div className={styles.container}>
      <div className={styles.testimonialCard}>
        <div className={styles.imageContainer}>
          <Image 
            src="/images/image-4.webp" 
            alt="Mark L." 
            width={300} 
            height={300} 
            className={styles.testimonialImage}
          />
        </div>
        
        <div className={styles.testimonialContent}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <span key={index} className={styles.star}>★</span>
            ))}
          </div>
          
          <blockquote className={styles.quote}>
            "Sourc. heeft onze toeleveringsketen volledig getransformeerd. Hun directe inkoopaanpak bespaarde ons 30% op kosten en verbeterde tegelijkertijd de productkwaliteit. Zeer aanbevolen!"
          </blockquote>
          
          <div className={styles.author}>
            <p className={styles.authorName}>— Mark L.</p>
            <p className={styles.authorTitle}>Eigenaar van een retailbedrijf</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;