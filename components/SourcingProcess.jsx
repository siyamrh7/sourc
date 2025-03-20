// SourcingProcess.jsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/SourcingProcess.module.css';
import { useRouter } from 'next/router';

const SourcingProcess = () => {
   const router= useRouter()
    const startButton=() => {
      router.push("#contact")
    }
  return (
    <div className={styles.container} id='proces'>
      <h1 className={styles.title}>Ons proces</h1>
      
      <div className={styles.processContainer}>
        <div className={styles.imagesContainer}>
            <Image height={600} width={600} layout='responsive' src="/images/Contents.webp" alt="Sourcing process" className={styles.image} objectFit="contain"/>
          {/* <div className={styles.topImages}>
            <div className={styles.imageWrapper}>
              <Image
                src="/woman-working.jpg"
                alt="Woman working at desk"
                width={250}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/chinese-flag.jpg"
                alt="Chinese flag"
                width={250}
                height={250}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.bottomImages}>
            <div className={styles.imageWrapper}>
              <Image
                src="/chinese-temple.jpg"
                alt="Chinese temple roof"
                width={250}
                height={180}
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/factory.jpg"
                alt="Industrial factory"
                width={250}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/shipping-port.jpg"
                alt="Shipping containers at port"
                width={250}
                height={180}
                className={styles.image}
              />
            </div>
          </div> */}
        </div>
        
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Introductie & behoefteanalyse</h3>
              <p className={styles.stepDescription}>
                We beginnen met het analyseren van jouw bedrijfsbehoeften om de beste 
                sourcingstrategie te bepalen. Deze stap zorgt ervoor dat we onze 
                inspanningen afstemmen op jouw specifieke wensen en doelstellingen.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Productonderzoek & sourcing</h3>
              <p className={styles.stepDescription}>
                Ons onderzoeksteam zoekt en beoordeelt de beste fabrikanten die aan 
                jouw criteria voldoen. Bij het selectieproces geven we prioriteit aan 
                efficiëntie, productkwaliteit en betrouwbaarheid.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Kwaliteitscontrole & productie van samples</h3>
              <p className={styles.stepDescription}>
                Voordat we een bestelling definitief maken, verkrijgen en inspecteren we 
                productmonsters grondig. Dit garandeert dat ze voldoen aan jouw 
                specificaties en kwaliteitseisen.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Kwaliteitscontrole op locatie</h3>
              <p className={styles.stepDescription}>
                Onze lokale teams bezoeken fabrieken om het productieproces te 
                bewaken, naleving te verifiëren en consistente kwaliteitscontrole tijdens de 
                productie te garanderen.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Logisitiek & levering</h3>
              <p className={styles.stepDescription}>
                Wij beheren het volledige logistieke proces, inclusief transport, 
                douaneafhandeling en de uiteindelijke levering op jouw locatie. Dit 
                minimaliseert risico's en voorkomt onverwachte vertragingen of kosten.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>6</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Herbestellingen & opvolging</h3>
              <p className={styles.stepDescription}>
                Wij bieden continue ondersteuning om herbestellingen te stroomlijnen, de 
                efficiëntie van de toeleveringsketens te waarborgen en eventuele 
                uitdagingen bij toekomstige zendingen op te lossen.
              </p>
            </div>
          </div>
          
          <div className={styles.ctaContainer}>
            <button className={styles.ctaButton} onClick={startButton}>START MET SOURCEN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcingProcess;