import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { portfolioItems, portfolioItemsByTag, tagLabels, tags } from './portfolioItems';

function App() {
  const [activeTab, setActiveTab] = useState(tags[0]);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);

  const activeProject = portfolioItems.find((item) => item.id === activeProjectId);
  const shouldShowInfo = activeTab === 'info';

  const visibleItems = useMemo(() => {
    if (shouldShowInfo) {
      return [];
    }

    return portfolioItemsByTag[activeTab] || [];
  }, [activeTab, shouldShowInfo]);

  function selectTag(tag) {
    setActiveTab(tag);
  }

  useEffect(() => {
    function handleScroll() {
      setIsHeaderCompact(window.scrollY > 0);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header ${isHeaderCompact ? 'is-compact' : ''}`}>
        <button
          className="site-title"
          type="button"
          onClick={() => setActiveTab(tags[0])}
        >
          Shana Hu
        </button>

        <nav className="site-nav" aria-label="Portfolio sections">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`nav-tab ${activeTab === tag ? 'is-active' : ''}`}
              type="button"
              aria-current={activeTab === tag ? 'page' : undefined}
              onClick={() => selectTag(tag)}
            >
              {tagLabels[tag]}
            </button>
          ))}
          <button
            className={`nav-tab info-tab ${shouldShowInfo ? 'is-active' : ''}`}
            type="button"
            aria-current={shouldShowInfo ? 'page' : undefined}
            onClick={() => setActiveTab('info')}
          >
            Info
          </button>
        </nav>
      </header>

      <main>
        {shouldShowInfo ? (
          <InfoPage />
        ) : (
          <Gallery
            items={visibleItems}
            onOpenProject={setActiveProjectId}
          />
        )}
      </main>

      {activeProject ? (
        <ProjectViewer
          project={activeProject}
          onClose={() => setActiveProjectId(null)}
        />
      ) : null}
    </div>
  );
}

function Gallery({ items, onOpenProject }) {
  if (items.length === 0) {
    return (
      <section className="empty-state" aria-live="polite">
        <p>No work in this section yet.</p>
      </section>
    );
  }

  return (
    <section className="gallery" aria-label="Selected work">
      {items.map((item, index) => (
        <GalleryItem
          key={item.id}
          item={item}
          isPriority={index < 4}
          onOpen={() => onOpenProject(item.id)}
        />
      ))}
    </section>
  );
}

function GalleryItem({ item, isPriority, onOpen }) {
  return (
    <article className="gallery-item">
      <button
        className="gallery-button"
        type="button"
        onClick={onOpen}
        aria-label={`Open ${item.title}`}
      >
        <img
          src={item.cover.src}
          alt={item.cover.alt}
          width={item.cover.width}
          height={item.cover.height}
          loading={isPriority ? 'eager' : 'lazy'}
          decoding="async"
          sizes="(max-width: 720px) 92vw, (max-width: 1180px) 44vw, 30vw"
        />
        <span className="gallery-caption">
          <span>{item.title}</span>
          <span>{item.tags.map((tag) => tagLabels[tag]).join(', ')}</span>
        </span>
      </button>
    </article>
  );
}

function ProjectViewer({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = project.images.length > 0 ? project.images : [project.cover];
  const activeImage = images[imageIndex];
  const hasMultipleImages = images.length > 1;

  function showPrevious() {
    setImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  }

  function showNext() {
    setImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }

      if (!hasMultipleImages) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        showPrevious();
      }

      if (event.key === 'ArrowRight') {
        showNext();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <section className="project-viewer" role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="viewer-topbar">
        <div>
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
        </div>
        <button className="close-button" type="button" onClick={onClose} aria-label="Close project">
          Close
        </button>
      </div>

      <div className="viewer-stage">
        {hasMultipleImages ? (
          <button
            className="viewer-hit-area viewer-hit-area-previous"
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
          />
        ) : null}

        <img
          src={activeImage.src}
          alt={activeImage.alt}
          width={activeImage.width}
          height={activeImage.height}
          decoding="async"
        />

        {hasMultipleImages ? (
          <button
            className="viewer-hit-area viewer-hit-area-next"
            type="button"
            onClick={showNext}
            aria-label="Next image"
          />
        ) : null}
      </div>

      <footer className="viewer-footer">
        <p>{project.tags.map((tag) => tagLabels[tag]).join(', ')}</p>
        {hasMultipleImages ? (
          <p>
            {imageIndex + 1} / {images.length}
          </p>
        ) : null}
      </footer>
    </section>
  );
}

function InfoPage() {
  return (
    <section className="info-page">
      <div className="info-photo">
        <img
          src={`${process.env.PUBLIC_URL}/images/optimized/info-portrait.jpg`}
          alt="Shana Hu seated beside a textile piece."
          width="1066"
          height="1600"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="info-copy">
        <div className="info-intro">
          <p>
            Shana Hu is an artist and designer based in San Francisco, working across
            textiles, type, printed matter, red envelopes, and small editions.
          </p>
        </div>

        <div className="info-details">
          <p>
            This page is scaffolded for a longer bio, selected clients, exhibitions,
            stockists, press, and contact links.
          </p>
          <a href="mailto:hello@shanahu.com">hello@shanahu.com</a>
        </div>
      </div>
    </section>
  );
}

export default App;
