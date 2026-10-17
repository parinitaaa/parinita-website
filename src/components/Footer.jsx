import React from 'react';

export const Footer = ({ name }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="editorial-footer" role="contentinfo">
      <div className="container">
        
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-name">{name}</span>
            <span className="footer-context">GyanSys iLEAD 2027 · Build Your Story</span>
          </div>

          <div className="footer-back-to-top">
            <button
              onClick={handleScrollToTop}
              className="back-to-top-btn"
              aria-label="Return to top of page"
            >
              <span>RETURN TO TOP</span>
              <span className="top-arrow" aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-meta-left">
            <p className="footer-concept">CONCEPT: “IN THE MAKING” — AN EXPLORER IN PROGRESS</p>
          </div>

          <div className="footer-meta-right">
            <span className="footer-year">© {currentYear} {name}. ALL RIGHTS RESERVED.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
