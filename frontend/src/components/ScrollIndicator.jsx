import { useState, useEffect } from 'react';

export default function ScrollIndicator({ threshold = 100, targetId = 'productsContent' }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const handleScrollClick = () => {
    const targetEl = document.getElementById(targetId) || document.querySelector('.products-layout') || document.querySelector('main');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: 380, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`scroll-indicator-overlay ${isVisible ? 'visible' : 'hidden'}`}
      aria-hidden={!isVisible}
    >
      <button 
        className="scroll-hint-btn" 
        onClick={handleScrollClick}
        aria-label="Scroll down to view products"
      >
        <span className="scroll-hint-text">Scroll Down</span>
        <div className="scroll-hint-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
    </div>
  );
}
