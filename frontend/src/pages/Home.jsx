import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../css/home.css';

export default function Home({ navigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scanState, setScanState] = useState(0);

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
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container">
          <div className="hero-inner-new">
            {/* Left */}
            <div className="hero-left-new reveal">
              <h1 className="hero-title">
                Secure Access.<br />
                Seamless <em>Identity.</em><br />
                Trusted Everywhere.
              </h1>
              <p className="hero-desc">
                Astra Technologies delivers advanced biometric and access management solutions that help organizations secure people, places, and processes with confidence.
              </p>
              <div className="hero-actions">
                <a href="products.html" className="btn btn-primary" onClick={(e) => handleLinkClick(e, 'products.html')} style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  Explore Products
                </a>
                <a href="contact.html" className="btn btn-outline" onClick={(e) => handleLinkClick(e, 'contact.html')} style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.8rem'}}>
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right visual */}
            <div className="hero-right-new reveal">


              <div className="hero-visual" style={{ margin: 0, padding: 0 }}>
                <div className="hero-card-wrap">
                  <div className="hero-card" style={{ margin: '0 auto' }}>
                    <div className="hc-header">
                      <div className="hc-dot red"></div>
                      <div className="hc-dot yellow"></div>
                      <div className="hc-dot green"></div>
                      <div className="hc-title">Astra Identity Terminal</div>
                    </div>
                    <div className="hc-scan">
                      <div className="fingerprint-icon">
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="32" cy="32" r="30" stroke="rgba(0,180,216,0.3)" strokeWidth="1" />
                          <path d="M20 44 C20 44 22 20 32 20 C42 20 44 44 44 44" stroke="#00b4d8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          <path d="M24 44 C24 44 24 26 32 26 C40 26 40 44 40 44" stroke="#00b4d8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          <path d="M28 44 C28 44 28 32 32 32 C36 32 36 44 36 44" stroke="#00b4d8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          <path d="M17 38 C17 38 17 16 32 16 C47 16 47 38 47 38" stroke="rgba(0,180,216,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          <path d="M13 34 C13 34 13 12 32 12 C51 12 51 34 51 34" stroke="rgba(0,180,216,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          <circle cx="32" cy="32" r="3" fill="#00b4d8" />
                        </svg>
                        <div className="scan-line"></div>
                      </div>
                      <div className="hc-status">
                        <span className="hc-pulsar" style={scanStates[scanState].style}></span>
                        {scanStates[scanState].text}
                      </div>
                    </div>
                    <div className="hc-user">
                      <div className="hc-avatar">AT</div>
                      <div className="hc-user-info">
                        <div className="hc-user-name">Authorised Personnel</div>
                        <div className="hc-user-role">Level 3 — Corporate Campus</div>
                      </div>
                      <div className="hc-access">✓ Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <div className="trust-stat-val">500<span>+</span></div>
                  <div className="trust-stat-lbl">Sites Secured</div>
                </div>
                <div className="trust-stat">
                  <div className="trust-stat-val">15<span>+</span></div>
                  <div className="trust-stat-lbl">Industries</div>
                </div>
                <div className="trust-stat">
                  <div className="trust-stat-val">99<span>.9%</span></div>
                  <div className="trust-stat-lbl">Uptime SLA</div>
                </div>
              </div>
            </div>
            <div className="trust-cards reveal">
              <div className="trust-card">
                <div className="trust-card-icon">🏭</div>
                <div className="trust-card-name">Manufacturing &amp; Logistics</div>
                <div className="trust-card-sub">Factory floors, warehouses, and distribution hubs</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">🏥</div>
                <div className="trust-card-name">Healthcare</div>
                <div className="trust-card-sub">Hospitals, clinics, and pharmaceutical plants</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">🏦</div>
                <div className="trust-card-name">BFSI &amp; Finance</div>
                <div className="trust-card-sub">Banks, NBFCs, and financial data centres</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">🏢</div>
                <div className="trust-card-name">Corporate &amp; IT Parks</div>
                <div className="trust-card-sub">Campus-wide access and attendance management</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">🛒</div>
                <div className="trust-card-name">Retail &amp; E-Commerce</div>
                <div className="trust-card-sub">Back offices, fulfilment centres, flagship stores</div>
              </div>
              <div className="trust-card">
                <div className="trust-card-icon">🚌</div>
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
                  <span className="contact-detail-icon">📍</span>
                  <div><strong>Astra Technologies</strong><span>Bengaluru, Karnataka, India</span></div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">📞</span>
                  <div><strong>Call Us</strong><a href="tel:+919483201072">+91 94832 01072</a></div>
                </div>

                <div className="contact-detail-item">
                  <span className="contact-detail-icon">✉️</span>
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
                      <option value="AMC / Support">AMC / Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="Tell us about your site or requirements…"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '.95rem', padding: '.9rem' }}>
                    Send Message ✉️
                  </button>
                  <p className="form-note">We respond within 24 hours on business days.</p>
                </form>
              ) : (
                <div className="form-success" id="formSuccess" style={{ display: 'flex' }}>
                  <div className="success-icon">✅</div>
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
