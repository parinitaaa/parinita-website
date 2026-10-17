import React from 'react';

export const About = ({ about }) => {
  return (
    <section className="about-section" id="about" aria-label="About Parinita">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-meta-header">
          <span className="section-number-tag">{about.sectionNumber} / {about.sectionTitle}</span>
          <h2 className="section-editorial-headline">{about.headline}</h2>
        </div>

        {/* Simplified Two-Column Editorial Layout */}
        <div className="about-editorial-grid">
          
          {/* Left Column: Personal Story */}
          <div className="about-story-col">
            <div className="editorial-story-lead">
              <span className="editorial-dropcap">I</span>
              <p className="story-paragraph-first">
                {about.storyParagraphs[0].slice(1)}
              </p>
            </div>

            {about.storyParagraphs.slice(1).map((paragraph, index) => (
              <p key={index} className="story-paragraph">
                {paragraph}
              </p>
            ))}

            {/* Pull Quote */}
            <blockquote className="editorial-pullquote">
              <p className="pullquote-text">“{about.pullQuote}”</p>
            </blockquote>
          </div>

          {/* Right Column: Identity Notes */}
          <div className="about-identity-col">
            <div className="identity-panel">
              <div className="identity-panel-header">
                <span className="panel-title-mono">IDENTITY_MANIFEST</span>
                <span className="panel-status-code">IN_PROGRESS</span>
              </div>

              <div className="identity-notes-list">
                {about.identityNotes.map((note, idx) => (
                  <div key={idx} className="identity-note-item">
                    <div className="identity-note-top">
                      <span className="note-index">0{idx + 1}</span>
                      <h3 className="note-title">{note.label}</h3>
                    </div>
                    <p className="note-detail">{note.detail}</p>
                  </div>
                ))}
              </div>

              <div className="identity-panel-footer">
                <p className="identity-foot-text">
                  “Curiosity is where it begins. Creation is how it grows.”
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
