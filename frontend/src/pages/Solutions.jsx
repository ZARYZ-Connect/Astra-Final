import { useState, useEffect } from 'react';
import { LuDownload } from 'react-icons/lu';
import useScrollReveal from '../hooks/useScrollReveal';
import '../css/solutions.css';

export default function Solutions({ navigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useScrollReveal();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

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
      <section className="page-hero solutions-hero">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container solutions-hero-inner">
          <div className="solutions-hero-left reveal">
            <div className="solutions-hero-tag">TAILORED SOLUTIONS. TOTAL SECURITY.</div>
            <h1 className="solutions-hero-title">Smarter Access.<br />Stronger Security.<br />Built for <em>Your Industry.</em></h1>
            <p className="solutions-hero-desc">Astra Technologies delivers scalable, integrated identity and access management solutions for organizations that demand security, efficiency, and reliability.</p>
          </div>
          <div className="solutions-hero-right">
            <div className="sh-card sh-card-1 reveal">
              <div className="sh-card-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="sh-card-content">
                <h4>Visitor Management</h4>
                <p>Seamless check-ins and real-time tracking.</p>
              </div>
            </div>
            <div className="sh-card sh-card-2 reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="sh-card-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="sh-card-content">
                <h4>Biometric Authentication</h4>
                <p>Advanced verification for higher security.</p>
              </div>
            </div>
            <div className="sh-card sh-card-3 reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="sh-card-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <div className="sh-card-content">
                <h4>Access Control</h4>
                <p>Secure, role-based access across all locations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DOWNLOADS SECTION ─── */}
      <section className="downloads-section">
        <div className="container">
          <div className="downloads-header reveal">
            <div className="tag">Resources</div>
            <div className="downloads-heading-row">
              <h2 className="section-title">Software &amp; Documentation Downloads</h2>
              <a href="#" className="license-enquiry-cta" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <span>Click here for <strong>License Enquiry</strong> →</span>
              </a>
            </div>
            <p className="section-sub" style={{ marginInline: 'auto' }}>Download the latest software packages, drivers, and documentation for our solutions and ZKTeco products.</p>
          </div>

          <div className="downloads-grid">
            <div style={{ gridColumn: '1/-1', padding: '0.5rem 0', borderBottom: '2px solid var(--border)', marginBottom: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, color: 'var(--accent)', fontSize: '1.3rem' }}>Time Attendance Solutions</h3>
            </div>
            <div style={{ gridColumn: '1/-1', padding: '0.5rem 0', marginBottom: '0.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 600, color: 'var(--text)', fontSize: '1.1rem' }}>Windows</h4>
            </div>
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">EasyTimePro</div>
                <div className="download-type">Time &amp; Attendance Management</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">273.67 MB</div>
              <div className="download-date">Latest</div>
              <a href="https://www.zkteco.in/time-attendance-software/EasyTimePro#Download" className="download-btn" target="_blank" rel="noreferrer"><LuDownload size={14} style={{marginRight:'5px',verticalAlign:'middle'}}/>Download</a>
            </div>
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">EasyCafeteria</div>
                <div className="download-type">Cafeteria Management Software</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">251.39 MB</div>
              <div className="download-date">Latest</div>
              <a href="https://www.zkteco.in/time-attendance-software/easy-cafeteria#Download" className="download-btn" target="_blank" rel="noreferrer"><LuDownload size={14} style={{marginRight:'5px',verticalAlign:'middle'}}/>Download</a>
            </div>
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">easyWDMS</div>
                <div className="download-type">Document Management System</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">312.41 MB</div>
              <div className="download-date">Latest</div>
              <a href="https://www.zkteco.in/time-attendance-software/easyWDMS#Download" className="download-btn" target="_blank" rel="noreferrer"><LuDownload size={14} style={{marginRight:'5px',verticalAlign:'middle'}}/>Download</a>
            </div>
            <div style={{ gridColumn: '1/-1', padding: '1rem 0 0.5rem', marginBottom: '0.5rem', borderTop: '1px dashed var(--border)', marginTop: '1rem' }}>
              <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 600, color: 'var(--text)', fontSize: '1.1rem' }}>Linux</h4>
            </div>
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">easyWDMS-10.2.4-linux-x64</div>
                <div className="download-type">Document Management System</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">43.46 MB</div>
              <div className="download-date">Latest</div>
              <a href="https://www.zkteco.in/time-attendance-software/easyWDMS#Download" className="download-btn" target="_blank" rel="noreferrer"><LuDownload size={14} style={{marginRight:'5px',verticalAlign:'middle'}}/>Download</a>
            </div>
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">easyTimePro-10.2.4-linux-x64</div>
                <div className="download-type">Time &amp; Attendance Management</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">43.5 MB</div>
              <div className="download-date">Latest</div>
              <a href="https://www.zkteco.in/time-attendance-software/EasyTimePro#Download" className="download-btn" target="_blank" rel="noreferrer"><LuDownload size={14} style={{marginRight:'5px',verticalAlign:'middle'}}/>Download</a>
            </div>
            <div style={{ gridColumn: '1/-1', padding: '1.5rem 0 0.5rem', borderBottom: '2px solid var(--border)', marginBottom: '1rem', marginTop: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, color: 'var(--accent)', fontSize: '1.3rem' }}>Access Control solutions</h3>
            </div>
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">Armatura ONE_Overseas_V4.5.0</div>
                <div className="download-type">Access Control Solution</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">Contact Sales</div>
              <div className="download-date">Latest</div>
              <a href="https://www.zkteco.in/armatura-one#Download" className="download-btn" target="_blank" rel="noreferrer"><LuDownload size={14} style={{marginRight:'5px',verticalAlign:'middle'}}/>Download</a>
            </div>
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">EasyGymFit Solution 6.1.1_R</div>
                <div className="download-type">Gym &amp; Fitness Management</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">1.09 GB</div>
              <div className="download-date">Latest</div>
              <a href="https://www.zkteco.in/time-attendance-software/easy-gymfit#Download" className="download-btn" target="_blank" rel="noreferrer"><LuDownload size={14} style={{marginRight:'5px',verticalAlign:'middle'}}/>Download</a>
            </div>
            <div className="download-item reveal">
              <div className="download-icon">ZIP</div>
              <div>
                <div className="download-name">ZKBio CVSecurity</div>
                <div className="download-type">Access Control Solution</div>
              </div>
              <div className="download-type">zip</div>
              <div className="download-size">Contact Sales</div>
              <div className="download-date">Latest</div>
              <a href="https://www.zkteco.in/ZKBio_CVSecurity/493#Download" className="download-btn" target="_blank" rel="noreferrer"><LuDownload size={14} style={{marginRight:'5px',verticalAlign:'middle'}}/>Download</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LICENSE ENQUIRY MODAL ─── */}
      {isModalOpen && (
        <div className="license-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="license-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="license-modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close Modal">
              &times;
            </button>
            <div className="le-form-header">
              <div className="le-form-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <div className="le-form-header-text">
                <h3>License Enquiry Form</h3>
                <p>Please provide accurate details for a faster response.</p>
              </div>
            </div>
            <form className="le-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const email = formData.get('email');
              const phone = formData.get('phone');
              const licenseType = formData.get('licenseType');
              const note = formData.get('note');
              const msg = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ALicense Type: ${licenseType}%0A%0A${note}`;
              window.location.href = `mailto:sales@astratechnologies.in?subject=License Enquiry: ${licenseType}&body=${msg}`;
              setIsModalOpen(false);
            }}>
              <div className="le-form-group">
                <label>COMPANY NAME *</label>
                <div className="le-input-wrap">
                  <span className="le-input-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  <input type="text" name="name" placeholder="Enter your company name" required />
                </div>
              </div>
              <div className="le-form-group">
                <label>EMAIL ADDRESS *</label>
                <div className="le-input-wrap">
                  <span className="le-input-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <input type="email" name="email" placeholder="Enter your email address" required />
                </div>
              </div>
              <div className="le-form-group">
                <label>LICENSE TYPE *</label>
                <div className="le-input-wrap">
                  <span className="le-input-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </span>
                  <select name="licenseType" required>
                    <option value="">Select license type</option>
                    <option value="EasyCafeteria">EasyCafeteria</option>
                    <option value="easy WDMS">easy WDMS</option>
                    <option value="easy TimePro">easy TimePro</option>
                  </select>
                </div>
              </div>
              <div className="le-form-group">
                <label>PHONE NUMBER *</label>
                <div className="le-input-wrap">
                  <span className="le-input-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <input type="tel" name="phone" placeholder="Enter your phone number" required />
                </div>
              </div>
              <div className="le-form-group">
                <label>NOTE / MESSAGE</label>
                <div className="le-input-wrap">
                  <span className="le-input-icon" style={{ alignItems: 'flex-start', paddingTop: '12px' }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </span>
                  <textarea name="note" rows="3" placeholder="Write your message or additional details..."></textarea>
                </div>
              </div>
              <button type="submit" className="le-btn-submit">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Enquire Now
              </button>
              <div className="le-form-footer">
                <span className="le-footer-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </span>
                <p>Your details are 100% secure and will only be used to respond to your enquiry.</p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
