import { useState, useEffect, useRef } from 'react';

export default function Header({ currentPath, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target)) {
        setProductsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
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
      setMenuOpen(false);
      setProductsMenuOpen(false);
      return;
    }
    
    if (to.includes('#')) {
      const [path, hash] = to.split('#');
      const cleanPath = path === 'products.html' ? '/products' : '/' + path.replace('.html', '');
      e.preventDefault();
      navigate(cleanPath);
      setMenuOpen(false);
      setProductsMenuOpen(false);
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('product-search', { detail: hash }));
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    e.preventDefault();
    const cleanTo = to === 'index.html' ? '/' : '/' + to.replace('.html', '');
    navigate(cleanTo);
    setMenuOpen(false);
    setProductsMenuOpen(false);
  };

  const isActive = (pathName) => {
    const normPath = currentPath === '/' ? '/index.html' : currentPath;
    if (pathName === 'index.html' && (normPath === '/' || normPath === '/index.html')) return 'active';
    if (normPath.includes(pathName.replace('.html', ''))) return 'active';
    return '';
  };

  return (
    <>
      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <div className="mobile-menu-bg-glow"></div>
        <div className="mobile-menu-grid-pattern"></div>

        {/* Mobile Menu Header Bar */}
        <div className="mobile-menu-header">
          <a 
            href="index.html" 
            className="mobile-brand" 
            onClick={(e) => handleLinkClick(e, 'index.html')}
          >
            <img 
              src="https://astratechnologies.in/wp-content/uploads/2025/11/astra-technologies.png" 
              alt="Astra Technologies" 
              className="mobile-nav-logo" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                const txt = e.target.nextSibling;
                if (txt) txt.style.display = 'flex';
              }}
            />
            <div className="mobile-logo-text-fallback" style={{ display: 'none' }}>
              <span className="brand-primary">ASTRA</span>
              <span className="brand-sub">TECHNOLOGIES</span>
            </div>
          </a>

          <button 
            className="mobile-close-btn" 
            id="mobileClose" 
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Cards List */}
        <div className="mobile-nav-list">
          {/* Home */}
          <a 
            href="index.html" 
            className={`mobile-nav-card ${isActive('index.html')}`} 
            onClick={(e) => handleLinkClick(e, 'index.html')}
          >
            <div className="mobile-nav-card-left">
              <div className="mobile-nav-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <span className="mobile-nav-card-label">Home</span>
            </div>
            <div className="mobile-nav-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>

          {/* About Us */}
          <a 
            href="about.html" 
            className={`mobile-nav-card ${isActive('about.html')}`} 
            onClick={(e) => handleLinkClick(e, 'about.html')}
          >
            <div className="mobile-nav-card-left">
              <div className="mobile-nav-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span className="mobile-nav-card-label">About Us</span>
            </div>
            <div className="mobile-nav-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>

          {/* Products */}
          <a 
            href="products.html" 
            className={`mobile-nav-card ${isActive('products.html')}`} 
            onClick={(e) => handleLinkClick(e, 'products.html')}
          >
            <div className="mobile-nav-card-left">
              <div className="mobile-nav-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <span className="mobile-nav-card-label">Products</span>
            </div>
            <div className="mobile-nav-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>

          {/* Support */}
          <a 
            href="support.html" 
            className={`mobile-nav-card ${isActive('support.html')}`} 
            onClick={(e) => handleLinkClick(e, 'support.html')}
          >
            <div className="mobile-nav-card-left">
              <div className="mobile-nav-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <span className="mobile-nav-card-label">Support</span>
            </div>
            <div className="mobile-nav-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>

          {/* Contact Us */}
          <a 
            href="contact.html" 
            className={`mobile-nav-card ${isActive('contact.html')}`} 
            onClick={(e) => handleLinkClick(e, 'contact.html')}
          >
            <div className="mobile-nav-card-left">
              <div className="mobile-nav-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span className="mobile-nav-card-label">Contact Us</span>
            </div>
            <div className="mobile-nav-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>
        </div>

        {/* Mobile Menu Footer (NO Social Media Links as requested) */}
        <div className="mobile-menu-footer">
          <div className="mobile-menu-divider"></div>
          <div className="mobile-menu-tagline">
            INNOVATE. INTEGRATE. <span className="highlight">ELEVATE.</span>
          </div>
          <svg className="mobile-menu-wave" viewBox="0 0 500 80" preserveAspectRatio="none">
            <path d="M0,40 Q125,70 250,40 T500,40 L500,80 L0,80 Z" fill="url(#waveGrad)" opacity="0.4" />
            <path d="M0,50 Q125,20 250,50 T500,50 L500,80 L0,80 Z" fill="url(#waveGrad2)" opacity="0.2" />
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00508c" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
              <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#002b4d" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* NAV */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-inner">
          <a href="index.html" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '.6rem' }} onClick={(e) => handleLinkClick(e, 'index.html')}>
            <img 
              src="https://astratechnologies.in/wp-content/uploads/2025/11/astra-technologies.png" 
              alt="Astra Technologies" 
              className="nav-logo" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                const txt = e.target.nextSibling;
                if (txt) txt.style.display = 'block';
              }}
            />
            <span id="nlt" style={{ display: 'none', fontFamily: "'Raleway', sans-serif", fontWeight: 900, fontSize: '1.1rem', letterSpacing: '.04em', color: '#fff' }}>
              ASTRA TECHNOLOGIES
            </span>
          </a>
          <ul className="nav-links">
            <li><a href="index.html" className={isActive('index.html')} onClick={(e) => handleLinkClick(e, 'index.html')}>Home</a></li>
            <li><a href="about.html" className={isActive('about.html')} onClick={(e) => handleLinkClick(e, 'about.html')}>About Us</a></li>
            <li 
              className={`has-dropdown ${productsMenuOpen ? 'open' : ''}`} 
              ref={productsMenuRef}
              onMouseEnter={() => setProductsMenuOpen(true)}
            >
              <a href="products.html" id="products" className={isActive('products.html')} onClick={(e) => handleLinkClick(e, 'products.html')}>Products ▾</a>
              <div className="mega-menu">
                <div className="mega-menu-col">
                  <h4>Time Attendance</h4>
                  <a href="products.html#visible-light" onClick={(e) => handleLinkClick(e, 'products.html#visible-light')}>Visible Light Series</a>
                  <a href="products.html#fingerprint-attendance" onClick={(e) => handleLinkClick(e, 'products.html#fingerprint-attendance')}>Fingerprint Attendance</a>
                  <a href="products.html#face-attendance" onClick={(e) => handleLinkClick(e, 'products.html#face-attendance')}>Face Attendance</a>
                  <a href="products.html#time-attendance" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#time-attendance')}>More &gt;</a>

                  <h4 style={{marginTop: '1.5rem'}}>Software</h4>
                  <a href="products.html#time-attendance-software" onClick={(e) => handleLinkClick(e, 'products.html#time-attendance-software')}>Time Attendance Software</a>
                  <a href="products.html#cloud-attendance-software" onClick={(e) => handleLinkClick(e, 'products.html#cloud-attendance-software')}>Cloud Attendance Software</a>
                  <a href="products.html#zkbio-security-software" onClick={(e) => handleLinkClick(e, 'products.html#zkbio-security-software')}>ZKBio Security Software</a>
                  <a href="products.html#zkbio-partner" onClick={(e) => handleLinkClick(e, 'products.html#zkbio-partner')}>ZKBio Partner</a>
                  <a href="products.html#software-platforms" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#software-platforms')}>More &gt;</a>
                  
                  <h4 style={{marginTop: '1.5rem'}}>Multi Purpose Integration</h4>
                  <a href="products.html#sip-video-intercom" onClick={(e) => handleLinkClick(e, 'products.html#sip-video-intercom')}>SIP Video Intercom</a>
                  <a href="products.html#multi-purpose" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#multi-purpose')}>More &gt;</a>
                </div>

                <div className="mega-menu-col">
                  <h4>Access Controller</h4>
                  <a href="products.html#multi-door-controller" onClick={(e) => handleLinkClick(e, 'products.html#multi-door-controller')}>Multi Door Controller</a>
                  <a href="products.html#standalone-devices" onClick={(e) => handleLinkClick(e, 'products.html#standalone-devices')}>Standalone Devices</a>
                  <a href="products.html#readers" onClick={(e) => handleLinkClick(e, 'products.html#readers')}>Readers</a>
                  <a href="products.html#elevator-access" onClick={(e) => handleLinkClick(e, 'products.html#elevator-access')}>Elevator Access Controller</a>
                  <a href="products.html#access-control" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#access-control')}>More &gt;</a>

                  <h4 style={{marginTop: '1.5rem'}}>Armatura</h4>
                  <a href="products.html#armatura-terminals" onClick={(e) => handleLinkClick(e, 'products.html#armatura-terminals')}>Armatura Standalone Terminals</a>
                  <a href="products.html#armatura-one" onClick={(e) => handleLinkClick(e, 'products.html#armatura-one')}>Armatura One</a>
                  <a href="products.html#armatura-reader" onClick={(e) => handleLinkClick(e, 'products.html#armatura-reader')}>Armatura Reader</a>
                  <a href="products.html#armatura-controller" onClick={(e) => handleLinkClick(e, 'products.html#armatura-controller')}>Armatura Controller</a>
                  <a href="products.html#armatura-entrance" onClick={(e) => handleLinkClick(e, 'products.html#armatura-entrance')}>Armatura Entrance Control</a>
                  <a href="products.html#armatura" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#armatura')}>More &gt;</a>


                </div>

                <div className="mega-menu-col">
                  <h4>Smart Entrance Control</h4>
                  <a href="products.html#smart-security-gate" onClick={(e) => handleLinkClick(e, 'products.html#smart-security-gate')}>Smart Security Gate</a>
                  <a href="products.html#smart-vehicle-inspection" onClick={(e) => handleLinkClick(e, 'products.html#smart-vehicle-inspection')}>Smart Vehicle &amp; Inspection</a>
                  <a href="products.html#entrance-control" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#entrance-control')}>More &gt;</a>

                  <h4 style={{marginTop: '1.5rem'}}>Camera Surveillance</h4>
                  <a href="products.html#dome-series" onClick={(e) => handleLinkClick(e, 'products.html#dome-series')}>Dome Series</a>
                  <a href="products.html#bullet-series" onClick={(e) => handleLinkClick(e, 'products.html#bullet-series')}>Bullet Series</a>
                  <a href="products.html#ptz-series" onClick={(e) => handleLinkClick(e, 'products.html#ptz-series')}>PTZ Series</a>
                  <a href="products.html#nvr" onClick={(e) => handleLinkClick(e, 'products.html#nvr')}>NVR</a>
                  <a href="products.html#camera-surveillance" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#camera-surveillance')}>More &gt;</a>
                </div>

                <div className="mega-menu-col">
                  <h4>Security Inspection</h4>
                  <a href="products.html#baggage-scanner" onClick={(e) => handleLinkClick(e, 'products.html#baggage-scanner')}>Baggage Scanner</a>
                  <a href="products.html#door-frame-metal-detector" onClick={(e) => handleLinkClick(e, 'products.html#door-frame-metal-detector')}>Door Frame Metal Detector</a>
                  <a href="products.html#hand-held-metal-detector" onClick={(e) => handleLinkClick(e, 'products.html#hand-held-metal-detector')}>Hand Held Metal Detector</a>
                  <a href="products.html#smartphone-detector" onClick={(e) => handleLinkClick(e, 'products.html#smartphone-detector')}>Smartphone Detector</a>
                  <a href="products.html#security-inspection" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#security-inspection')}>More &gt;</a>
                </div>
              </div>
            </li>
            <li><a href="support.html" className={isActive('support.html')} onClick={(e) => handleLinkClick(e, 'support.html')}>Support</a></li>
            <li><a href="contact.html" onClick={(e) => handleLinkClick(e, 'contact.html')}>Contact Us</a></li>
          </ul>
          <button className="hamburger" id="hamburger" aria-label="Menu" onClick={() => setMenuOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </>
  );
}
