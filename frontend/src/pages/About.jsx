import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import LaserFlow from '../components/LaserFlow';
import '../css/about.css';

export default function About({ navigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useScrollReveal();

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
      <section className="page-hero">
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
          <LaserFlow
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            horizontalBeamOffset={0.7}
            verticalBeamOffset={0.0}
            color="#00b4d8"
            fogIntensity={0.65}
            wispDensity={1.5}
            wispIntensity={8.0}
          />
        </div>
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container page-hero-inner">
          <div className="hero-split">
            <div className="hero-left-content">
              <h1 className="hero-main-title">
                Securing India's <br />
                <span className="highlight-cyan">Identity</span>
              </h1>
              <div className="title-underline"></div>

              <p className="hero-desc">
                A decade of deploying biometric and access control infrastructure across India's most demanding environments — from factories to government facilities.
              </p>

              <div className="hero-buttons">
                <a href="contact.html" onClick={(e) => handleLinkClick(e, 'contact.html')} className="btn-cyan-solid">
                  Contact Us <span className="arrow">→</span>
                </a>
              </div>
            </div>

            <div className="hero-right-visual">
              <div className="biometric-scene">
                {/* Custom Biometric SVG */}
                <svg viewBox="0 0 500 500" className="biometric-svg" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="glow-heavy" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="12" result="blur1" />
                      <feGaussianBlur stdDeviation="6" result="blur2" />
                      <feMerge>
                        <feMergeNode in="blur1" />
                        <feMergeNode in="blur2" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="glow-light" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <linearGradient id="cyan-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f2fe" />
                      <stop offset="100%" stopColor="#4facfe" />
                    </linearGradient>
                    <linearGradient id="shield-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(0, 180, 216, 0.25)" />
                      <stop offset="100%" stopColor="rgba(0, 180, 216, 0.02)" />
                    </linearGradient>
                  </defs>

                  {/* Concentric grid circles in background */}
                  <g opacity="0.12">
                    <circle cx="250" cy="230" r="90" fill="none" stroke="#00b4d8" strokeWidth="1" strokeDasharray="3 8" />
                    <circle cx="250" cy="230" r="150" fill="none" stroke="#00b4d8" strokeWidth="0.75" strokeDasharray="4 12" />
                    <circle cx="250" cy="230" r="210" fill="none" stroke="#00b4d8" strokeWidth="0.5" strokeDasharray="6 15" />
                  </g>

                  {/* Dotted Map of India stylized design */}
                  <g opacity="0.18">
                    <path d="M 230,110 L 250,90 L 270,110 L 265,130 L 290,150 L 310,180 L 290,210 L 305,240 L 285,260 L 275,290 L 250,330 L 245,300 L 225,270 L 205,250 L 210,220 L 195,190 L 215,160 L 210,140 Z" fill="none" stroke="#00b4d8" strokeWidth="1.5" strokeDasharray="2 4" />
                  </g>

                  {/* Cyber-grid perspective lines at the bottom of scene */}
                  <g opacity="0.22">
                    <path d="M 120,400 L 380,400 M 100,420 L 400,420 M 70,445 L 430,445" stroke="#00b4d8" strokeWidth="1" />
                    <path d="M 250,320 L 50,450 M 250,320 L 150,450 M 250,320 L 250,450 M 250,320 L 350,450 M 250,320 L 450,450" stroke="#00b4d8" strokeWidth="0.75" />
                  </g>

                  {/* Glowing 3D Podium base */}
                  <g className="podium-group">
                    <ellipse cx="250" cy="340" rx="120" ry="32" fill="none" stroke="#00b4d8" strokeWidth="2" opacity="0.3" filter="url(#glow-heavy)" />
                    <ellipse cx="250" cy="340" rx="95" ry="24" fill="none" stroke="#00f2fe" strokeWidth="1.5" opacity="0.5" />
                    <path d="M 155,340 A 95,24 0 0,0 345,340 L 345,352 A 95,24 0 0,1 155,352 Z" fill="url(#cyan-blue)" opacity="0.2" />
                    <ellipse cx="250" cy="340" rx="80" ry="18" fill="rgba(0, 180, 216, 0.15)" stroke="#00b4d8" strokeWidth="3" filter="url(#glow-light)" />
                    <ellipse cx="250" cy="340" rx="40" ry="8" fill="#00f2fe" filter="url(#glow-heavy)" opacity="0.7" />
                  </g>

                  {/* Dotted connecting laser lines */}
                  <g className="connecting-lines" opacity="0.35" stroke="#00b4d8" strokeWidth="1.25" strokeDasharray="3 5" fill="none">
                    <path d="M 250,210 L 160,150" />
                    <path d="M 250,210 L 370,140" />
                    <path d="M 250,210 L 410,310" />
                    <path d="M 250,210 L 90,300" />
                    <path d="M 250,210 L 250,65" />
                  </g>

                  {/* Glowing Shield */}
                  <g className="shield-group" filter="url(#glow-heavy)">
                    <path d="M 250,110 C 290,110 320,120 320,160 C 320,220 280,260 250,280 C 220,260 180,220 180,160 C 180,110 210,110 250,110 Z"
                      fill="url(#shield-grad)" stroke="#00f2fe" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 250,122 C 277,122 302,130 302,162 C 302,210 272,246 250,264 C 228,246 198,210 198,162 C 198,130 223,122 250,122 Z"
                      fill="none" stroke="rgba(0, 242, 254, 0.4)" strokeWidth="1.25" strokeDasharray="6 3" />
                  </g>

                  {/* Fingerprint ridges inside shield */}
                  <g className="fingerprint-group" stroke="#00f2fe" strokeWidth="2.2" strokeLinecap="round" fill="none" filter="url(#glow-light)">
                    <path d="M 237,215 C 232,206 234,195 243,187 C 248,183 256,183 260,188 C 264,192 266,198 264,204 C 262,209 259,215 257,219" />
                    <path d="M 230,207 C 224,194 227,180 239,171 C 247,165 259,165 267,172 C 273,178 276,188 273,198 C 271,206 267,215 264,226" />
                    <path d="M 244,204 C 244,201 247,196 252,196 C 257,196 259,200 258,204 C 257,207 255,210 253,212 L 253,222" />
                    <path d="M 250,158 C 232,160 216,174 216,194 C 216,203 219,210 220,214" />
                    <path d="M 279,184 C 283,195 283,206 278,215 C 275,221 271,228 269,235" />
                  </g>

                  {/* Holographic sweep laser scan line */}
                  <line className="scan-line" x1="185" y1="130" x2="315" y2="130" stroke="#00f2fe" strokeWidth="2" filter="url(#glow-heavy)" />
                </svg>

                {/* Floating Glassmorphic Nodes */}
                <div className="floating-node node-gov">🏛️</div>
                <div className="floating-node node-factory">🏭</div>
                <div className="floating-node node-id">🪪</div>
                <div className="floating-node node-shield">🛡️</div>
                <div className="floating-node node-door">🚪</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="reveal">
              <div className="story-label">Who We Are</div>
              <h2 className="story-title">India's Trusted Partner in <em>Biometric Security</em></h2>
              <div className="story-body">
                <p>Astra Technologies is a Bengaluru-based systems integrator and authorised distributor of ZKTeco biometric products across India. We combine world-class hardware with deep local expertise to deliver identity and access control solutions that are reliable, scalable, and affordable.</p>
                <p>From a single-door fingerprint lock for a startup to a multi-building turnstile and CCTV network for a 10,000-employee campus, we have designed and deployed them all. Our tagline is a promise: <strong style={{ color: '#fff' }}>Your Rightful Identity, Securely Delivered.</strong></p>
                <p>We provide end-to-end services: site survey, product selection, installation, commissioning, software configuration, training, and Annual Maintenance Contracts — so you are never alone after the sale.</p>
              </div>
            </div>
            <div className="story-visual reveal">
              <div className="story-visual-inner">
                <div className="value-item">
                  <div className="value-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                  </div>
                  <div className="value-text">
                    <h4>Precision First</h4>
                    <p>Every deployment is engineered to spec. We don't cut corners on hardware, cabling, or commissioning.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div className="value-text">
                    <h4>Long-Term Partnership</h4>
                    <p>We stay with you post-installation — AMC contracts, firmware updates, and 24×7 remote support.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                  </div>
                  <div className="value-text">
                    <h4>Built for India</h4>
                    <p>We understand Indian power conditions, dust, humidity, and the unique requirements of Indian enterprises and government bodies.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <div className="value-text">
                    <h4>Security Without Compromise</h4>
                    <p>All products are tested to enterprise-grade standards. We recommend only what we would deploy ourselves.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="tag">Why Astra</div>
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-sub" style={{ marginInline: 'auto' }}>Not just a reseller — a solutions partner that understands security infrastructure from the ground up.</p>
          </div>
          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="1.8" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <h3>Authorised Distributor</h3>
              <p>Direct access to the full biometric product range with genuine warranty, firmware support, and replacement guarantees.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="1.8" fill="none"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>
              </div>
              <h3>End-to-End Installation</h3>
              <p>We handle everything from cable trunking and power supply to software configuration and user training on site.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="1.8" fill="none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </div>
              <h3>Deep Integrations</h3>
              <p>HRMS, payroll, SAP, Oracle, Zoho, custom APIs — we connect your biometric data to your existing business systems.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="1.8" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3>Responsive Support</h3>
              <p>Dedicated support engineers for remote assistance, on-site visits, and same-day response for critical failures.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="1.8" fill="none"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>Competitive Pricing</h3>
              <p>Direct sourcing and large-volume procurement allow us to offer the best prices without compromising on quality.</p>
            </div>
            <div className="why-card reveal">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="1.8" fill="none"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h.01M12 8h.01M17 8h.01M7 12h10"/></svg>
              </div>
              <h3>Custom System Design</h3>
              <p>No cookie-cutter solutions. Every site gets a tailored architecture designed after a thorough in-person survey.</p>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
