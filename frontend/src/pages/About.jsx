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


      <section className="about-intro" style={{ padding: '8.5rem 0 6rem', background: 'radial-gradient(circle at center, #0B2742 0%, #041221 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px', background: 'rgba(0, 180, 216, 0.1)', border: '1px solid rgba(0, 180, 216, 0.3)', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Who We Are
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.2, color: 'var(--white)', fontFamily: 'var(--font-h)' }}>
            India's Trusted Partner for <br />
            <span style={{ color: 'var(--primary)' }}>Integrated Security Solutions</span>
          </h2>
          <p style={{ color: '#00b4d8', fontSize: '1.3rem', fontWeight: 700, marginBottom: '2.5rem', letterSpacing: '0.5px' }}>
            Smarter Security. Stronger Protection. Complete Control.
          </p>
          <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '850px', margin: '0 auto', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>
              Astra Technologies is a Bengaluru-based security solutions company and authorised distributor of leading global brands including ZKTeco, GVD, AJAX, and Armatura.
            </p>
            <p>
              We bring together advanced biometric identification, access control, video surveillance, intrusion detection, and security automation to deliver integrated solutions for businesses, institutions, industries, and critical environments across India.
            </p>
            <p>
              With a strong focus on technology, reliability, and local expertise, we help our partners and customers design, deploy, and support security systems that are scalable, intelligent, and built for the future.
            </p>

          </div>
        </div>
      </section>

      <section className="about-values" style={{ padding: '4rem 0 8rem', background: '#041221', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2.5rem 2rem', transition: 'all 0.3s', backdropFilter: 'blur(10px)', textAlign: 'center', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,180,216,0.1)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,180,216,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
              </div>
              <h4 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-h)' }}>Precision First</h4>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>Every deployment is engineered to spec. We don't cut corners on hardware, cabling, or commissioning.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2.5rem 2rem', transition: 'all 0.3s', backdropFilter: 'blur(10px)', textAlign: 'center', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,180,216,0.1)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,180,216,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-h)' }}>Long-Term Partnership</h4>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>We stay with you post-installation — remote support during business hours.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2.5rem 2rem', transition: 'all 0.3s', backdropFilter: 'blur(10px)', textAlign: 'center', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,180,216,0.1)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,180,216,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <h4 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-h)' }}>Built for India</h4>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>We understand Indian power conditions, dust, humidity, and the unique requirements of Indian enterprises and government bodies.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2.5rem 2rem', transition: 'all 0.3s', backdropFilter: 'blur(10px)', textAlign: 'center', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,180,216,0.1)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,180,216,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h4 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-h)' }}>Security Without Compromise</h4>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>All products are tested to enterprise-grade standards. We recommend only what we would deploy ourselves.</p>
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
          <div className="why-grid" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="why-card reveal" style={{ maxWidth: '700px', width: '100%', textAlign: 'center' }}>
              <div className="why-card-icon" style={{ margin: '0 auto 1.5rem' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="#00f2fe" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px rgba(0, 242, 254, 0.5))' }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-h)' }}>Authorised Distributor</h3>
              <p style={{ margin: '0 auto' }}>Direct access to leading global brands (ZKTeco, GVD, AJAX, Armatura) with genuine warranty, firmware support, and technical expertise.</p>
              
            </div>
          </div>
          
          <style>
            {`
              .about-big-scroll-wrap {
                overflow: hidden;
                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                width: 100%;
                max-width: 900px;
                margin: 4rem auto 0;
              }
              .about-big-scroll-track {
                display: flex;
                gap: 2rem;
                width: max-content;
                animation: about-big-scroll 15s linear infinite;
              }
              .about-big-scroll-track:hover {
                animation-play-state: paused;
              }
              @keyframes about-big-scroll {
                to { transform: translateX(calc(-50% - 1rem)); }
              }
              .about-big-card {
                background: #ffffff;
                border-radius: 12px;
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 240px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.5);
                transition: transform 0.3s;
              }
              .about-big-card:hover {
                transform: translateY(-5px);
              }
              .about-big-card img {
                width: 100%;
                max-width: 180px;
                height: 60px;
                object-fit: contain;
              }
              .about-big-card p {
                margin: 1.5rem 0 0;
                font-size: 0.85rem;
                font-weight: 800;
                color: #05101f;
                text-transform: uppercase;
                letter-spacing: 1.5px;
              }
              .glow-green { border-bottom: 4px solid #22c55e; }
              .glow-blue { border-bottom: 4px solid #00b4d8; }
              .glow-red { border-bottom: 4px solid #ef4444; }
            `}
          </style>

          <div className="about-big-scroll-wrap">
            <div className="about-big-scroll-track">
              {/* Set 1 */}
              <div className="about-big-card glow-green">
                <img src="/images/LOgo/ZKTeco.png" alt="ZKTeco" />
                <p>Distributor</p>
              </div>
              <div className="about-big-card glow-blue">
                <img src="/images/LOgo/AJAX.png" alt="AJAX" />
                <p>Distributor</p>
              </div>
              <div className="about-big-card glow-red">
                <img src="/images/LOgo/GVD-LOGO.png" alt="GVD" />
                <p>Distributor</p>
              </div>
              <div className="about-big-card glow-green">
                <img src="/images/LOgo/Armatura.png" alt="Armatura" />
                <p>Distributor</p>
              </div>
              
              {/* Set 2 */}
              <div className="about-big-card glow-green">
                <img src="/images/LOgo/ZKTeco.png" alt="ZKTeco" />
                <p>Distributor</p>
              </div>
              <div className="about-big-card glow-blue">
                <img src="/images/LOgo/AJAX.png" alt="AJAX" />
                <p>Distributor</p>
              </div>
              <div className="about-big-card glow-red">
                <img src="/images/LOgo/GVD-LOGO.png" alt="GVD" />
                <p>Distributor</p>
              </div>
              <div className="about-big-card glow-green">
                <img src="/images/LOgo/Armatura.png" alt="Armatura" />
                <p>Distributor</p>
              </div>
              
              {/* Set 3 for seamless loop */}
              <div className="about-big-card glow-green">
                <img src="/images/LOgo/ZKTeco.png" alt="ZKTeco" />
                <p>Distributor</p>
              </div>
              <div className="about-big-card glow-blue">
                <img src="/images/LOgo/AJAX.png" alt="AJAX" />
                <p>Distributor</p>
              </div>
              <div className="about-big-card glow-red">
                <img src="/images/LOgo/GVD-LOGO.png" alt="GVD" />
                <p>Distributor</p>
              </div>
              <div className="about-big-card glow-green">
                <img src="/images/LOgo/Armatura.png" alt="Armatura" />
                <p>Distributor</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
