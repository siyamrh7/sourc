// Testimonial.jsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/Testimonial.module.css';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Sourc. heeft onze toeleveringsketen volledig getransformeerd. Hun directe inkoopaanpak bespaarde ons 30% op kosten en verbeterde tegelijkertijd de productkwaliteit. Zeer aanbevolen!",
      author: "Mark L.",
      title: "Eigenaar van een retailbedrijf"
    },
    {
      id: 2,
      quote: "De professionele aanpak van Sourc. heeft ons geholpen om onze productieprocessen te optimaliseren. Hun expertise in sourcing heeft ons geholpen betere leveranciers te vinden tegen lagere kosten.",
      author: "Sarah M.",
      title: "Operations Manager"
    },
    {
      id: 3,
      quote: "Fantastische service! Sourc. heeft ons geholpen om onze supply chain te stroomlijnen en heeft ons duizenden euro's bespaard. Hun team is zeer professioneel en responsief.",
      author: "David K.",
      title: "CEO van een productiebedrijf"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', width: '100%' }}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Wat onze klanten zeggen</h2>
        
        {/* Desktop view - show all testimonials */}
        <div className={styles.desktopTestimonials}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={styles.star}>★</span>
                  ))}
                </div>
                
                <blockquote className={styles.quote}>
                  "{testimonial.quote}"
                </blockquote>
                
                <div className={styles.author}>
                  <p className={styles.authorName}>— {testimonial.author}</p>
                  <p className={styles.authorTitle}>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view - slider */}
        <div className={styles.mobileSlider}>
          <div 
            className={styles.sliderContainer}
            style={{ transform: `translateX(-${currentSlide * (100 / testimonials.length)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.slide}>
                <div className={styles.testimonialContent}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={styles.star}>★</span>
                    ))}
                  </div>
                  
                  <blockquote className={styles.quote}>
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className={styles.author}>
                    <p className={styles.authorName}>— {testimonial.author}</p>
                    <p className={styles.authorTitle}>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;