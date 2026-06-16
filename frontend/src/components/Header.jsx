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
      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <button className="mobile-close" id="mobileClose" onClick={() => setMenuOpen(false)}>✕</button>
        <img 
          src="https://astratechnologies.in/wp-content/uploads/2025/11/astra-technologies.png" 
          alt="Astra" 
          className="mobile-nav-logo" 
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="mobile-divider"></div>
        <a href="index.html" className={isActive('index.html')} onClick={(e) => handleLinkClick(e, 'index.html')}>Home</a>
        <a href="about.html" className={isActive('about.html')} onClick={(e) => handleLinkClick(e, 'about.html')}>About Us</a>
        <a href="products.html" className={isActive('products.html')} onClick={(e) => handleLinkClick(e, 'products.html')}>Products</a>
        <a href="solutions.html" className={isActive('solutions.html')} onClick={(e) => handleLinkClick(e, 'solutions.html')}>Solutions</a>
        <a href="contact.html" onClick={(e) => handleLinkClick(e, 'contact.html')}>Contact Us</a>
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

                  <h4 style={{marginTop: '1.5rem'}}>Accessories</h4>
                  <a href="products.html#lock" onClick={(e) => handleLinkClick(e, 'products.html#lock')}>Lock</a>
                  <a href="products.html#exit-button" onClick={(e) => handleLinkClick(e, 'products.html#exit-button')}>Exit Button</a>
                  <a href="products.html#rfid-card" onClick={(e) => handleLinkClick(e, 'products.html#rfid-card')}>RFID Card</a>
                  <a href="products.html#fingerprint-scanner" onClick={(e) => handleLinkClick(e, 'products.html#fingerprint-scanner')}>Fingerprint Scanner</a>
                  <a href="products.html#accessories" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#accessories')}>More &gt;</a>
                </div>

                <div className="mega-menu-col">
                  <h4>Android Terminals</h4>
                  <a href="products.html#android-terminals" onClick={(e) => handleLinkClick(e, 'products.html#android-terminals')}>Android Terminals</a>
                  <a href="products.html#android-terminals" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#android-terminals')}>More &gt;</a>

                  <h4 style={{marginTop: '1.5rem'}}>Smart Entrance Control</h4>
                  <a href="products.html#smart-security-gate" onClick={(e) => handleLinkClick(e, 'products.html#smart-security-gate')}>Smart Security Gate</a>
                  <a href="products.html#smart-vehicle-inspection" onClick={(e) => handleLinkClick(e, 'products.html#smart-vehicle-inspection')}>Smart Vehicle &amp; Inspection</a>
                  <a href="products.html#entrance-control" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#entrance-control')}>More &gt;</a>

                  <h4 style={{marginTop: '1.5rem'}}>Video Surveillance</h4>
                  <a href="products.html#network-camera" onClick={(e) => handleLinkClick(e, 'products.html#network-camera')}>Network Camera</a>
                  <a href="products.html#hd-analog-camera" onClick={(e) => handleLinkClick(e, 'products.html#hd-analog-camera')}>HD Analog Camera</a>
                  <a href="products.html#video-surveillance" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#video-surveillance')}>More &gt;</a>
                </div>

                <div className="mega-menu-col">
                  <h4>Smart Door Lock</h4>
                  <a href="products.html#hybrid-biometric-lock" onClick={(e) => handleLinkClick(e, 'products.html#hybrid-biometric-lock')}>Hybrid Biometric Lock</a>
                  <a href="products.html#bluetooth-locks" onClick={(e) => handleLinkClick(e, 'products.html#bluetooth-locks')}>Bluetooth Locks</a>
                  <a href="products.html#hotel-lock" onClick={(e) => handleLinkClick(e, 'products.html#hotel-lock')}>Hotel Lock</a>
                  <a href="products.html#smart-lock" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#smart-lock')}>More &gt;</a>

                  <h4 style={{marginTop: '1.5rem'}}>Security Inspection</h4>
                  <a href="products.html#baggage-scanner" onClick={(e) => handleLinkClick(e, 'products.html#baggage-scanner')}>Baggage Scanner</a>
                  <a href="products.html#door-frame-metal-detector" onClick={(e) => handleLinkClick(e, 'products.html#door-frame-metal-detector')}>Door Frame Metal Detector</a>
                  <a href="products.html#hand-held-metal-detector" onClick={(e) => handleLinkClick(e, 'products.html#hand-held-metal-detector')}>Hand Held Metal Detector</a>
                  <a href="products.html#smartphone-detector" onClick={(e) => handleLinkClick(e, 'products.html#smartphone-detector')}>Smartphone Detector</a>
                  <a href="products.html#security-inspection" className="more-link" onClick={(e) => handleLinkClick(e, 'products.html#security-inspection')}>More &gt;</a>
                </div>
              </div>
            </li>
            <li><a href="solutions.html" className={isActive('solutions.html')} onClick={(e) => handleLinkClick(e, 'solutions.html')}>Solutions</a></li>
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
