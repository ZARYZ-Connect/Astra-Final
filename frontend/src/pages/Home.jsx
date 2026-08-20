import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../css/home.css';

export default function Home({ navigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scanState, setScanState] = useState(0);

  const slides = [
    { src: '/images/Home Page Slide/Zkteco.png?v=2', bg: '#fefdfd' },
    { src: '/images/Home Page Slide/Ajax.png?v=2', bg: '#060b0f' },
    { src: '/images/Home Page Slide/Armatura.png?v=2', bg: '#010511' },
    { src: '/images/Home Page Slide/GVD.png?v=2', bg: '#041221' }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 40;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    } else if (distance < -minSwipeDistance) {
      setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  useScrollReveal();

  const scanStates = [
    { text: 'Scanning…', style: {} },
    { text: 'Verifying…', style: { background: '#eab308', boxShadow: '0 0 6px #eab308' } },
    { text: 'Access Granted ✓', style: { background: '#22c55e', boxShadow: '0 0 6px #22c55e' } }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setScanState(prev => (prev + 1) % scanStates.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      {/* ─── HERO SLIDER ─── */}
      <section 
        className="hero-slider" 
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ position: 'relative', width: '100%', height: 'calc(100vh - 76px)', minHeight: '500px', overflow: 'hidden', background: '#041221', marginTop: '76px' }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="slide-item"
            style={{ 
              position: 'absolute', 
              inset: 0, 
              opacity: currentSlide === index ? 1 : 0, 
              transition: 'opacity 0.8s ease-in-out',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: currentSlide === index ? 1 : 0,
              background: slide.bg
            }}
          >
            <img src={slide.src} alt={`Slide ${index + 1}`} className="slide-img" />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button 
          className="slider-arrow slider-arrow-prev"
          onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
          style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '50px', height: '50px', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,180,216,0.8)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
        >
          &#10094;
        </button>
        <button 
          className="slider-arrow slider-arrow-next"
          onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
          style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '50px', height: '50px', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,180,216,0.8)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="slider-dots" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
          {slides.map((_, index) => (
            <button
              key={index}
              className="slider-dot"
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px', height: '12px', borderRadius: '50%', border: 'none', cursor: 'pointer', transition: 'all 0.3s',
                background: currentSlide === index ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                transform: currentSlide === index ? 'scale(1.2)' : 'scale(1)'
              }}
            />
          ))}
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <div className="marquee-item"><span className="dot"></span>Biometric Access Control</div>
          <div className="marquee-item"><span className="dot"></span>Time &amp; Attendance</div>
          <div className="marquee-item"><span className="dot"></span>Smart Door Lock</div>
          <div className="marquee-item"><span className="dot"></span>Turnstile Solutions</div>
          <div className="marquee-item"><span className="dot"></span>Visitor Management</div>
          <div className="marquee-item"><span className="dot"></span>Security Inspection</div>
          <div className="marquee-item"><span className="dot"></span>Identity Platform</div>
          <div className="marquee-item"><span className="dot"></span>HRMS Integration</div>
          {/* Duplicates for seamless loop */}
          <div className="marquee-item"><span className="dot"></span>Biometric Access Control</div>
          <div className="marquee-item"><span className="dot"></span>Time &amp; Attendance</div>
          <div className="marquee-item"><span className="dot"></span>Smart Door Lock</div>
          <div className="marquee-item"><span className="dot"></span>Turnstile Solutions</div>
          <div className="marquee-item"><span className="dot"></span>Visitor Management</div>
          <div className="marquee-item"><span className="dot"></span>Security Inspection</div>
          <div className="marquee-item"><span className="dot"></span>Identity Platform</div>
          <div className="marquee-item"><span className="dot"></span>HRMS Integration</div>
        </div>
      </div>






      {/* ─── TRUST ─── */}
      <section className="trust-section" id="trust">
        <div className="container">
          <div className="trust-inner">
            <div className="trust-text reveal">
              <div className="tag">Trusted By Leaders</div>
              <h2 className="section-title">Technology-Driven Companies Choose Astra</h2>
              <p className="section-sub">Organisations across India rely on Astra to secure offices, warehouses, plants, and campuses — where uptime, accuracy, and reliability are non-negotiable.</p>
              <div className="trust-stats-row">
                <div className="trust-stat">
                  <div className="trust-stat-val">300<span>+</span></div>
                  <div className="trust-stat-lbl">Projects Delivered</div>
                </div>
                <div className="trust-stat">
                  <div className="trust-stat-val">6<span> Yrs</span></div>
                  <div className="trust-stat-lbl">Years of Expertise</div>
                </div>
                <div className="trust-stat">
                  <div className="trust-stat-val">100<span>+</span></div>
                  <div className="trust-stat-lbl">Product Models</div>
                </div>
              </div>
            </div>
            <div className="trust-cards reveal">
              <div className="trust-card">
                <div className="trust-card-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20h20" />
                    <path d="M21 18V8l-4 4-4-4-4 4-4-4v10" />
                    <path d="M17 18h4" />
                    <path d="M3 18h4" />
                    <path d="M10 18v-4" />
                    <path d="M14 18v-4" />
                  </svg>
                </div>
                <div className="trust-card-name">Manufacturing &amp; Logistics</div>
                <div className="trust-card-sub">Factory floors, warehouses, and distribution hubs</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                    <path d="M10 12h4" />
                    <path d="M12 10v4" />
                  </svg>
                </div>
                <div className="trust-card-name">Healthcare</div>
                <div className="trust-card-sub">Hospitals, clinics, and pharmaceutical plants</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M19 21v-4" />
                    <path d="M5 21v-4" />
                    <path d="M9 21v-4" />
                    <path d="M13 21v-4" />
                    <path d="M3 10h18" />
                    <path d="M3 7l9-4 9 4H3z" />
                  </svg>
                </div>
                <div className="trust-card-name">BFSI &amp; Finance</div>
                <div className="trust-card-sub">Banks, NBFCs, and financial data centres</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 22V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14" />
                    <path d="M22 22V12a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v10" />
                    <path d="M2 22h20" />
                    <path d="M6 10h.01M6 14h.01M6 18h.01M14 14h.01M14 18h.01M18 14h.01M18 18h.01" />
                  </svg>
                </div>
                <div className="trust-card-name">Corporate &amp; IT Parks</div>
                <div className="trust-card-sub">Campus-wide access and attendance management</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <div className="trust-card-name">Retail &amp; E-Commerce</div>
                <div className="trust-card-sub">Back offices, fulfilment centres, flagship stores</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div className="trust-card-name">Transportation</div>
                <div className="trust-card-sub">Depots, terminals, and fleet management hubs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}


      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-inner reveal">
            <div className="contact-left">
              <div className="tag">Get In Touch</div>
              <h2 className="contact-title">Let's Secure Your <em>Premises</em></h2>
              <p className="contact-sub">Talk to our biometric experts. We'll assess your site and propose the perfect solution — at the right budget.</p>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div><strong>Astra Technologies</strong><span>no 72/A, 1st Floor, Chamundi Arcade, 29th Cross, 2nd Block Rajajinagar, Bangalore-560010</span></div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div><strong>Call Us</strong><a href="tel:+919483201072">+91 94832 01072</a> / <a href="tel:+919886157696">+91 98861 57696</a></div>
                </div>

                <div className="contact-detail-item">
                  <span className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <div><strong>Email Us</strong><a href="mailto:sales@astratechnologies.in">sales@astratechnologies.in</a></div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              {!formSubmitted ? (
                <form className="contact-form" id="contactForm" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" placeholder="+91 94832 01072" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="form-group">
                    <label>Company / Organisation</label>
                    <input type="text" placeholder="Your company name" />
                  </div>
                  <div className="form-group">
                    <label>What do you need?</label>
                    <select required>
                      <option value="">Select a product / service…</option>
                      <option value="Time Attendance System">Time Attendance System</option>
                      <option value="Access Control">Access Control</option>
                      <option value="Smart Entrance / Turnstile">Smart Entrance / Turnstile</option>
                      <option value="Smart Door Lock">Smart Door Lock</option>
                      <option value="Security Inspection Equipment">Security Inspection Equipment</option>
                      <option value="Video Surveillance">Video Surveillance</option>
                      <option value="Software / Integration">Software / Integration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="Tell us about your site or requirements…"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '.95rem', padding: '.9rem' }}>
                    Send Message
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                  <p className="form-note">We respond within 24 hours on business days.</p>
                </form>
              ) : (
                <div className="form-success" id="formSuccess" style={{ display: 'flex' }}>
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#22c55e' }}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you. Our team will get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
