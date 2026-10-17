import React from 'react';

export const Projects = ({ projectsSection, projects }) => {
  const [selectedProject, setSelectedProject] = React.useState(null);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeProjectDetail();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section className="projects-section" id="projects" aria-label="Projects and Experiments">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-meta-header">
          <span className="section-number-tag">{projectsSection.sectionNumber} / {projectsSection.sectionTitle}</span>
          <h2 className="section-editorial-headline">{projectsSection.headline}</h2>
          <p className="section-intro-text">{projectsSection.intro}</p>
        </div>

        {/* Simplified, Clean Projects Grid */}
        <div className="projects-editorial-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-editorial-card">
              <div className="project-card-top">
                <span className="project-number-mono">{project.number}</span>
                <span className="project-category-badge">{project.category}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-name-heading">{project.name}</h3>
                <p className="project-desc-text">{project.shortDescription}</p>

                {/* Tech stack tags */}
                <div className="project-stack-strip" aria-label="Technologies used">
                  <div className="stack-tags-list">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-tag-mono">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Actions: Details & GitHub */}
                <div className="project-card-action">
                  <button
                    className="explore-project-btn"
                    onClick={() => openProjectDetail(project)}
                    aria-label={`View details for ${project.name}`}
                  >
                    <span>DETAILS</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </button>
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-ext-link"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      GITHUB ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          className="editorial-modal-backdrop"
          onClick={closeProjectDetail}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="editorial-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-meta">
              <div className="modal-tags">
                <span className="modal-num">{selectedProject.number}</span>
                <span className="modal-cat">{selectedProject.category}</span>
              </div>
              <button
                className="modal-close-trigger"
                onClick={closeProjectDetail}
                aria-label="Close project details"
              >
                [ CLOSE ✕ ]
              </button>
            </div>

            <h2 id="modal-project-title" className="modal-project-title">
              {selectedProject.name}
            </h2>

            <p className="modal-short-desc">
              {selectedProject.shortDescription}
            </p>

            <div className="modal-details-grid">
              <div className="modal-col">
                <span className="modal-subheading">THE PROBLEM EXPLORED</span>
                <p className="modal-body-copy">{selectedProject.problemExplored}</p>
              </div>

              <div className="modal-col">
                <span className="modal-subheading">WHAT I LEARNED</span>
                <p className="modal-body-copy">{selectedProject.whatILearned}</p>
              </div>
            </div>

            <div className="modal-tech-section">
              <span className="modal-subheading">SELECTED TECHNOLOGIES</span>
              <div className="modal-stack-tags">
                {selectedProject.stack.map((item) => (
                  <span key={item} className="modal-stack-pill">{item}</span>
                ))}
              </div>
            </div>

            {selectedProject.githubUrl && (
              <div className="modal-footer-repo">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-repo-link"
                >
                  VIEW GITHUB REPOSITORY ↗
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
