import React from 'react';

export const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Exploring', href: '#exploring' },
    { label: 'Connect', href: '#connect' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`editorial-nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-identity">
            <a href="#" className="identity-title" onClick={(e) => handleNavClick(e, '#root')}>
              <span className="dot-pulse" aria-hidden="true"></span>
              PARINITA CHANDAR SALAGALA
            </a>
          </div>

          <nav className="desktop-nav" aria-label="Main navigation">
            <ul className="nav-items-list">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`nav-link-anchor ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <div className="status-badge" title="GyanSys iLEAD 2027">
              <span className="status-indicator" aria-hidden="true"></span>
              <span className="status-text">CURRENTLY EVOLVING</span>
            </div>

            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className={`bar ${mobileMenuOpen ? 'bar-1' : ''}`} />
              <span className={`bar ${mobileMenuOpen ? 'bar-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span className="editorial-label">NAVIGATION</span>
            <button
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="mobile-nav-list" aria-label="Mobile Navigation">
            {navLinks.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-num">0{idx + 1}</span>
                <span className="mobile-nav-text">{item.label}</span>
                <span className="mobile-nav-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <p className="mobile-menu-tag">“IN THE MAKING”</p>
            <p className="mobile-menu-sub">GyanSys iLEAD 2027</p>
          </div>
        </div>
      </div>
    </>
  );
};
