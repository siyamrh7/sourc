// // ContactForm.jsx
// import React, { useState } from 'react';
// import styles from '../styles/ContactForm.module.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//     // Reset form or show success message
//   };

//   return (
//     <div className={styles.contactContainer} id='contact'>
//       <p className={styles.contactLabel}>Contact ons</p>
//       <h1 className={styles.contactTitle}>Bespreek je mogelijkheden met ons</h1>
//       <p className={styles.contactSubtitle}>We horen graag van je. Vul alsjeblieft dit formulier in.</p>
      
//       <form className={styles.contactForm} onSubmit={handleSubmit}>
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//             <label htmlFor="firstName">Voornaam</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               placeholder="First name"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className={styles.formGroup}>
//             <label htmlFor="lastName">Achternaam</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               placeholder="Last name"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
        
//         <div className={styles.formGroup}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="jij@bedrijf.nl"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className={styles.formGroup}>
//           <label htmlFor="message">Bericht</label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Laat ons een bericht achter..."
//             value={formData.message}
//             onChange={handleChange}
//             rows="5"
//             required
//           ></textarea>
//         </div>
        
//         <button type="submit" className={styles.submitButton}>
//           START MET SOURCEN
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Er is iets misgegaan. Probeer het later opnieuw.');
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: error.message });
    }
  };

  return (
    <div className={styles.contactContainer} id='contact'>
      <p className={styles.contactLabel}>Contact ons</p>
      <h1 className={styles.contactTitle}>Bespreek je mogelijkheden met ons</h1>
      <p className={styles.contactSubtitle}>We horen graag van je. Vul alsjeblieft dit formulier in.</p>
      
      {status.success && (
        <div className={styles.successMessage}>
          Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.
        </div>
      )}
      
      {status.error && (
        <div className={styles.errorMessage}>
          {status.error}
        </div>
      )}
      
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">Voornaam</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Achternaam</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jij@bedrijf.nl"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message">Bericht</label>
          <textarea
            id="message"
            name="message"
            placeholder="Laat ons een bericht achter..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={status.submitting}
        >
          {status.submitting ? 'BEZIG MET VERZENDEN...' : 'START MET SOURCEN'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;