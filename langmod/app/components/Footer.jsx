// components/Footer.js
import React, { useState, useEffect } from 'react';
import '../styles/footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsVisible(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`animated-footer ${isVisible ? 'visible' : ''}`}>
      <div className="content">
        <p>&copy;2024 Predictive Pundits</p>
      </div>
    </footer>
  );
};

export default Footer;
