import { useState, useEffect } from 'react';

export default function Contact({ navigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <section className="contact-section" id="contact" style={{ minHeight: '80svh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="contact-inner reveal visible">
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
                  <div><strong>Astra Technologies</strong><span>Bengaluru, Karnataka, India</span></div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div><strong>Call Us</strong><a href="tel:+919483201072">+91 94832 01072</a></div>
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
                      <option value="AMC / Support">AMC / Support</option>
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
    </div>
  );
}
