import React from 'react';

export const Contact = ({ contact }) => {
  const { socialLinks } = contact;

  const activeLinks = [
    {
      key: 'linkedin',
      name: 'LinkedIn',
      url: socialLinks.linkedin,
      handle: 'in/parinita-salagala'
    },
    {
      key: 'github',
      name: 'GitHub',
      url: socialLinks.github,
      handle: 'github.com/parinitaaa'
    },
    {
      key: 'email',
      name: 'Email',
      url: socialLinks.email,
      handle: 'Direct Inquiries'
    }
  ].filter(link => Boolean(link.url));

  return (
    <section className="contact-section" id="connect" aria-label="Connect and Contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-meta-header">
          <span className="section-number-tag">{contact.sectionNumber} / {contact.sectionTitle}</span>
          <h2 className="section-editorial-headline">{contact.headline}</h2>
        </div>

        <div className="contact-editorial-layout">
          {/* Main Info Column */}
          <div className="contact-primary-col">
            <p className="contact-intro-lead">
              {contact.supportingCopy}
            </p>

            <div className="contact-signature-badge">
              <span className="sig-accent-dot" aria-hidden="true"></span>
              <span className="sig-text">“{contact.closingSignature}”</span>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="contact-links-col">
            <span className="channels-label-mono">CONNECT DIRECTLY</span>
            
            <div className="contact-cards-stack">
              {activeLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-card"
                  aria-label={`${link.name}: ${link.handle}`}
                >
                  <div className="channel-card-left">
                    <span className="channel-protocol">[{link.key.toUpperCase()}]</span>
                    <h3 className="channel-name">{link.name}</h3>
                    <span className="channel-handle">{link.handle}</span>
                  </div>
                  <div className="channel-card-right">
                    <span className="channel-arrow" aria-hidden="true">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
