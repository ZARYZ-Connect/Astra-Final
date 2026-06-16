import { useState, useEffect } from 'react';

export default function Footer({ currentPath, navigate }) {
  const [showBackTop, setShowBackTop] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, to) => {
    if (to.startsWith('#')) {
      const targetId = to.substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (to.includes('#')) {
      const [path, hash] = to.split('#');
      const cleanPath = path === 'products.html' ? '/products' : '/' + path.replace('.html', '');
      e.preventDefault();
      navigate(cleanPath);
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    e.preventDefault();
    const cleanTo = to === 'index.html' ? '/' : '/' + to.replace('.html', '');
    navigate(cleanTo);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    { icon: '🔐', label: 'Biometric\nTechnology' },
    { icon: '🛡️', label: 'Advanced\nSecurity' },
    { icon: '🔗', label: 'Seamless\nIntegration' },
    { icon: '🎧', label: '24/7\nSupport' },
  ];

  const products = [
    { label: 'Time Attendance', href: 'products.html#time-attendance' },
    { label: 'Access Controller', href: 'products.html#access-control' },
    { label: 'Smart Door Lock', href: 'products.html#smart-door-lock' },
    { label: 'Security Inspection', href: 'products.html#security-inspection' },
    { label: 'Smart Entrance', href: 'products.html#smart-entrance' },
    { label: 'Software', href: 'products.html#software' },
  ];

  const company = [
    { label: 'About Us', href: 'about.html' },
    { label: 'Solutions', href: 'solutions.html' },
    { label: 'Products', href: 'products.html' },
    { label: 'Contact Us', href: 'contact.html' },
  ];

  return (
    <>
      <footer className="ft-root">
        <div className="ft-container">

          {/* ─── main grid ─── */}
          <div className="ft-grid">

            {/* col 1 – brand */}
            <div className="ft-brand">
              <div className="ft-logo-row">
                <img
                  src="https://astratechnologies.in/wp-content/uploads/2025/11/astra-technologies.png"
                  alt="Astra Technologies"
                  className="ft-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="ft-logo-fallback">▲ ASTRA TECHNOLOGIES</span>
              </div>
              <p className="ft-tagline">Your Rightful Identity,<br />Securely Delivered.</p>
              <p className="ft-desc">India's leading provider of biometric identity and access control solutions. Empowering organizations with secure, smart &amp; seamless technology.</p>
              <div className="ft-features">
                {features.map((f) => (
                  <div className="ft-feat" key={f.label}>
                    <span className="ft-feat-icon">{f.icon}</span>
                    <span className="ft-feat-label">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* col 2 – products */}
            <div className="ft-col">
              <h4 className="ft-col-title">Products</h4>
              {products.map((p) => (
                <a key={p.label} href={p.href} className="ft-link" onClick={(e) => handleLinkClick(e, p.href)}>
                  <span>{p.label}</span>
                  <span className="ft-arrow">›</span>
                </a>
              ))}
            </div>

            {/* col 3 – company */}
            <div className="ft-col">
              <h4 className="ft-col-title">Company</h4>
              {company.map((c) => (
                <a key={c.label} href={c.href} className="ft-link" onClick={(e) => handleLinkClick(e, c.href)}>
                  <span>{c.label}</span>
                  <span className="ft-arrow">›</span>
                </a>
              ))}
            </div>

            {/* col 4 – get in touch */}
            <div className="ft-col">
              <h4 className="ft-col-title">Get In Touch</h4>
              <div className="ft-contact-list">
                <div className="ft-contact-item">
                  <span className="ft-contact-icon">📍</span>
                  <div>
                    <strong>Address</strong>
                    <span>no 72/A, 1st Floor, Chamundi Arcade, 29th Cross, 2nd Block Rajajinagar, Bangalore-560010</span>
                  </div>
                </div>
                <div className="ft-contact-item">
                  <span className="ft-contact-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+919483201072">+91 94832 01072</a>
                  </div>
                </div>
                <div className="ft-contact-item">
                  <span className="ft-contact-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:sales@astratechnologies.in">sales@astratechnologies.in</a>
                  </div>
                </div>
                <div className="ft-contact-item">
                  <span className="ft-contact-icon">🌐</span>
                  <div>
                    <strong>Website</strong>
                    <a href="https://astratechnologies.in" target="_blank" rel="noreferrer">www.astratechnologies.in</a>
                  </div>
                </div>
              </div>
            </div>

            {/* col 5 – stay connected */}
            <div className="ft-col">
              <h4 className="ft-col-title">Stay Connected</h4>
              <p className="ft-stay-desc">Follow us for updates, insights and innovations.</p>
              <div className="ft-socials">
                <a href="https://www.linkedin.com/company/astra-technologies" target="_blank" rel="noreferrer" className="ft-social" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <div className="ft-enquiry-box">
                <div className="ft-enquiry-header">
                  <span className="ft-enquiry-icon">📞</span>
                  <div>
                    <strong>Still Enquiry?</strong>
                    <span>We're just a call away — reach us anytime.</span>
                  </div>
                </div>
                <button
                  className="ft-enquiry-btn"
                  onClick={() => setShowPhonePopup(prev => !prev)}
                >
                  📲 Call Us Now
                </button>
                {showPhonePopup && (
                  <div className="ft-phone-popup">
                    <span className="ft-phone-label">Tap to dial</span>
                    <a href="tel:+919483201072" className="ft-phone-number">
                      +91 94832 01072
                    </a>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* ─── bottom bar ─── */}
          <div className="ft-bottom">
            <p>© {new Date().getFullYear()} Astra Technologies. All rights reserved.</p>
            <p className="ft-bottom-right">Designed & Built for Secure Futures.</p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button className={`back-top ${showBackTop ? 'show' : ''}`} id="backTop" aria-label="Back to top" onClick={handleBackToTop}>
        ↑
      </button>
    </>
  );
}
