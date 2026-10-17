import React from 'react';

export const Exploring = ({ exploring }) => {
  return (
    <section className="exploring-section" id="exploring" aria-label="Topics What I am Exploring">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-meta-header">
          <span className="section-number-tag">{exploring.sectionNumber} / {exploring.sectionTitle}</span>
          <h2 className="section-editorial-headline">{exploring.headline}</h2>
          <p className="section-intro-text">{exploring.subtext}</p>
        </div>

        {/* Clean, Understated Grid */}
        <div className="topics-editorial-grid" role="list">
          {exploring.topics.map((item, idx) => (
            <div key={item.title} className="topic-editorial-card" role="listitem">
              <div className="topic-card-top">
                <span className="topic-badge-mono">{item.category}</span>
                <span className="topic-coord-mono">0{idx + 1}</span>
              </div>

              <h3 className="topic-title">{item.title}</h3>
              <p className="topic-description">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
