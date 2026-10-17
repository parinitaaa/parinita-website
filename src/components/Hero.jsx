import React from 'react';
import profileImg from '../assets/profile.jpg';

export const Hero = ({ identity }) => {
  const handleScrollToExplore = (e) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero" aria-label="Introduction">
      <div className="container hero-container">
        
        {/* Top Metadata Line */}
        <div className="hero-top-meta">
          <div className="editorial-label">GYANSYS iLEAD 2027 · BUILD YOUR STORY</div>
          <div className="hero-tagline-small">{identity.evolutionLabel}</div>
        </div>

        {/* Hero Identity Presentation: Portrait + Prominent Name */}
        <div className="hero-profile-hero">
          <div className="hero-portrait-frame">
            <img
              src={profileImg}
              alt={identity.name}
              className="hero-portrait-img"
            />
            <div className="hero-portrait-tag">
              <span className="dot-pulse" aria-hidden="true"></span>
              <span>ENGINEER IN PROGRESS</span>
            </div>
          </div>

          <div className="hero-name-content">
            <div className="hero-name-eyebrow">HELLO, I AM</div>
            <h1 className="hero-person-name">
              {identity.name}
            </h1>
            <p className="hero-person-tagline">
              “{identity.tagline}”
            </p>
            <p className="hero-person-bio">
              An explorer at heart and an engineering student in the GyanSys iLEAD 2027 initiative — focused on AI, machine learning, and building software that solves practical problems.
            </p>

            <div className="hero-profile-actions">
              <a
                href="#about"
                onClick={handleScrollToExplore}
                className="hero-cta-btn"
                aria-label="Scroll down to explore story and projects"
              >
                <span>{identity.ctaText}</span>
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hero-secondary-btn"
              >
                VIEW PROJECTS →
              </a>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="hero-footer-bar">
          <span className="hero-footer-item">DISCIPLINE: AI / ML & SOFTWARE</span>
          <span className="hero-footer-item">STATUS: ENGINEERING STUDENT</span>
          <span className="hero-footer-item">THEME: “IN THE MAKING”</span>
        </div>

      </div>
    </section>
  );
};
