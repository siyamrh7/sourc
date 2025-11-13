// SourcingTeam.jsx
import React from 'react';
import styles from '../styles/SourcingTeam.module.css';
import Image from 'next/image';

const SourcingTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Boy Hardenberg',
      position: 'Finance',
      image: '/images/team/boy.jpeg',
      backgroundColor: '#F7BA0A'
    },
    // {
    //   id: 2,
    //   name: 'Abdellah Dira',
    //   position: 'Sales',
    //   image: '/images/team/appie.jpeg',
    //   backgroundColor: '#8B4D39'
    // },
    {
      id: 3,
      name: 'Ray Drisdale',
      position: 'Sourcing / Product ontwikkelaar',
      image: '/images/team/ray.jpeg',
      backgroundColor: '#F7BA0A'
    },
    {
      id: 4,
      name: 'Ferdi Caglayan',
      position: 'Sales',
      image: '/images/team/ferdi.jpeg',
      backgroundColor: '#4A4A4A'
    },
    // {
    //   id: 5,
    //   name: 'Yousef Malah',
    //   position: 'Sales',
    //   image: '/images/team/yousef.jpeg',
    //   backgroundColor: '#C5D6E5'
    // },
    {
      id: 6,
      name: 'Siyam Rahman',
      position: 'IT Manager',
      image: '/images/team/siyam.png',
      backgroundColor: '#4A4A4A'
    },
    {
      id: 7,
      name: 'Jacky',
      position: 'Product ontwikkelaar',
      image: '/images/team/boss.webp',
      backgroundColor: '#4A4A4A'
    },
    {
      id: 8,
      name: 'Jessy',
      position: 'Logistiek',
      image: '/images/team/beautiful.webp',
      backgroundColor: '#8B4D39'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa', width: '100%' }} id='team'>
      {/* <p style={{
        fontSize: '20vw', fontWeight: 'bold', background: "linear-gradient(180deg, #EDEDED 20.52%, #F9FAFB 91.94%)"
        , color: 'white', opacity: '0.7'
      }}>
        更大的利润
      </p> */}
      <div className={styles.container}>
        <h1 className={styles.title}>Jouw betrouwbare sourcing specialisten</h1>
        <p className={styles.subtitle}>
          Maak kennis met de specialisten die sourcing in China moeiteloos maken – met diepgaande
          branchekennis, lokale expertise en sterke relaties met leveranciers om de beste resultaten te leveren.
        </p>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard} style={{ backgroundColor: member.backgroundColor }}>
              <div className={styles.memberImage}>
                <Image src={member.image} height={500} width={300} alt={member.name}  quality={100} />
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
             {/* {teamMembers.slice(3, 6).map((member) => (
            <div key={member.id} className={styles.teamCard} style={{ backgroundColor: member.backgroundColor }}>
              <div className={styles.memberImage}>
                <Image src={member.image} height={500} width={300} alt={member.name}  quality={100} />
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))} */}
          {/* {teamMembers.map((member) => (
          <div key={member.id} className={styles.teamCard} style={{ backgroundColor: member.backgroundColor }}>
            <div className={styles.memberImage}>
              <img src={member.image} alt={member.name} />
            </div>
            <div className={styles.memberInfo}>
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))} */}
        </div>
      </div>
 

    </div>
  );
};

export default SourcingTeam;