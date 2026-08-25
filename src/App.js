import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { portfolioItems, portfolioItemsByTag, tagLabels, tags } from './portfolioItems';

const infoTab = 'info';
const routeTabs = [...tags, infoTab];
const routeAliases = {
  print: 'play',
  prints: 'play',
  type: 'typeface',
  zines: 'play',
};

const larkTesterRows = [
  { label: 'Roman Bold', className: 'is-bold', text: 'In a sentimental mood' },
  { label: 'Roman Medium', className: 'is-medium', text: 'Take the A train' },
  { label: 'Roman Regular', className: 'is-regular', text: 'All the things you are' },
  { label: 'Roman Light', className: 'is-light', text: "Straight no chaser" },
  { label: 'Italic Bold', className: 'is-bold is-italic', text: 'Round Midnight' },
  { label: 'Italic Medium', className: 'is-medium is-italic', text: 'Autumn in New York' },
  { label: 'Italic Regular', className: 'is-regular is-italic', text: 'I fall in love too easily' },
  { label: 'Italic Light', className: 'is-light is-italic', text: 'Night in Tunisia' },
];

function projectHref(project) {
  return `#/project/${project.id}`;
}

function tabHref(tab) {
  return `#/${tab}`;
}

function isTextEntryTarget(element) {
  if (!element) {
    return false;
  }

  const tagName = element.tagName;
  return element.isContentEditable || tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT';
}

function getProjectGroup(project) {
  const projectTag = project.tags[0];
  return portfolioItemsByTag[projectTag] || portfolioItems;
}

function getRouteFromUrl() {
  const hashRoute = window.location.hash.replace(/^#\/?/, '');
  const [routeType, routeValue] = hashRoute.split('/');

  if (routeType === 'project') {
    const project = portfolioItems.find((item) => item.id === routeValue);

    if (project) {
      return {
        activeTab: project.tags[0] || tags[0],
        projectId: project.id,
        view: 'project',
      };
    }
  }

  const aliasedRoute = routeAliases[hashRoute] || hashRoute;

  if (aliasedRoute === infoTab) {
    return {
      activeTab: infoTab,
      projectId: null,
      view: 'info',
    };
  }

  if (aliasedRoute === 'typeface') {
    return {
      activeTab: 'typeface',
      projectId: 'lark',
      view: 'project',
    };
  }

  return {
    activeTab: routeTabs.includes(aliasedRoute) ? aliasedRoute : tags[0],
    projectId: null,
    view: 'gallery',
  };
}

function App() {
  const [route, setRoute] = useState(getRouteFromUrl);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeProject = portfolioItems.find((item) => item.id === route.projectId);
  const activeProjectGroup = activeProject ? getProjectGroup(activeProject) : [];
  const activeProjectIndex = activeProjectGroup.findIndex((item) => item.id === route.projectId);
  const previousProject = activeProjectIndex >= 0
    ? activeProjectGroup[(activeProjectIndex - 1 + activeProjectGroup.length) % activeProjectGroup.length]
    : null;
  const nextProject = activeProjectIndex >= 0
    ? activeProjectGroup[(activeProjectIndex + 1) % activeProjectGroup.length]
    : null;
  const activeTab = activeProject ? activeProject.tags[0] : route.activeTab;
  const shouldShowInfo = route.view === 'info';

  const visibleItems = useMemo(() => {
    if (shouldShowInfo || activeProject) {
      return [];
    }

    return portfolioItemsByTag[activeTab] || [];
  }, [activeProject, activeTab, shouldShowInfo]);

  function selectTab(tab) {
    setIsMenuOpen(false);

    if (tab === 'typeface') {
      setRoute({
        activeTab: 'typeface',
        projectId: 'lark',
        view: 'project',
      });
      return;
    }

    setRoute({
      activeTab: tab,
      projectId: null,
      view: tab === infoTab ? 'info' : 'gallery',
    });
  }

  function selectProject(project) {
    setRoute({
      activeTab: project.tags[0] || tags[0],
      projectId: project.id,
      view: 'project',
    });
  }

  useEffect(() => {
    function handleScroll() {
      setIsHeaderCompact(window.scrollY > 0);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function syncTabToUrl() {
      setRoute(getRouteFromUrl());
    }

    syncTabToUrl();
    window.addEventListener('hashchange', syncTabToUrl);
    return () => window.removeEventListener('hashchange', syncTabToUrl);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.projectId, route.view]);

  useEffect(() => {
    document.documentElement.classList.toggle('is-info-background', shouldShowInfo);
    document.body.classList.toggle('is-info-background', shouldShowInfo);

    return () => {
      document.documentElement.classList.remove('is-info-background');
      document.body.classList.remove('is-info-background');
    };
  }, [shouldShowInfo]);

  useEffect(() => {
    document.body.classList.toggle('is-menu-open', isMenuOpen);

    function handleMenuKeydown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleMenuKeydown);

    return () => {
      document.body.classList.remove('is-menu-open');
      window.removeEventListener('keydown', handleMenuKeydown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleProjectKeydown(event) {
      if (!activeProject || isTextEntryTarget(event.target) || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }

      if (event.key === 'ArrowLeft' && previousProject) {
        event.preventDefault();
        window.location.hash = projectHref(previousProject);
      }

      if (event.key === 'ArrowRight' && nextProject) {
        event.preventDefault();
        window.location.hash = projectHref(nextProject);
      }
    }

    window.addEventListener('keydown', handleProjectKeydown);
    return () => window.removeEventListener('keydown', handleProjectKeydown);
  }, [activeProject, previousProject, nextProject]);

  return (
    <div
      className={`site-shell ${shouldShowInfo ? 'is-info-view' : ''} ${activeProject ? 'is-project-view' : ''}`}
    >
      <header className={`site-header ${isHeaderCompact ? 'is-compact' : ''}`}>
        <a
          className="site-title"
          href={tabHref(tags[0])}
          onClick={() => selectTab(tags[0])}
        >
          Shana Hu
        </a>

        <nav className="site-nav" aria-label="Portfolio sections">
          {tags.map((tag) => (
            <a
              key={tag}
              className={`nav-tab ${activeTab === tag ? 'is-active' : ''}`}
              href={tabHref(tag)}
              aria-current={activeTab === tag ? 'page' : undefined}
              onClick={() => selectTab(tag)}
            >
              {tagLabels[tag]}
            </a>
          ))}
          <a
            className={`nav-tab info-tab ${shouldShowInfo ? 'is-active' : ''}`}
            href={tabHref(infoTab)}
            aria-current={shouldShowInfo ? 'page' : undefined}
            onClick={() => selectTab(infoTab)}
          >
            Info
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          􀌇
        </button>
      </header>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen}>
        <button
          className="menu-close"
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        >
          􀆄
        </button>
        <nav className="mobile-menu-nav" aria-label="Portfolio sections">
          {tags.map((tag) => (
            <a
              key={tag}
              className={`mobile-menu-link ${activeTab === tag ? 'is-active' : ''}`}
              href={tabHref(tag)}
              aria-current={activeTab === tag ? 'page' : undefined}
              onClick={() => selectTab(tag)}
            >
              {tagLabels[tag]}
            </a>
          ))}
          <a
            className={`mobile-menu-link ${shouldShowInfo ? 'is-active' : ''}`}
            href={tabHref(infoTab)}
            aria-current={shouldShowInfo ? 'page' : undefined}
            onClick={() => selectTab(infoTab)}
          >
            Info
          </a>
        </nav>
      </div>

      <main>
        {activeProject ? (
          <ProjectPage
            project={activeProject}
            previousProject={previousProject}
            nextProject={nextProject}
          />
        ) : shouldShowInfo ? (
          <InfoPage />
        ) : (
          <Gallery
            items={visibleItems}
            onOpenProject={selectProject}
          />
        )}
      </main>
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
          onOpen={() => onOpenProject(item)}
        />
      ))}
    </section>
  );
}

function GalleryItem({ item, isPriority, onOpen }) {
  return (
    <article className="gallery-item">
      <a
        className="gallery-button"
        href={projectHref(item)}
        onClick={onOpen}
        aria-label={`Open ${item.title}`}
      >
        <ProjectImage
          image={item.cover}
          isPriority={isPriority}
          sizes="(max-width: 720px) 92vw, (max-width: 1180px) 44vw, 30vw"
        />
        <span className="gallery-caption">
          <span>{item.title}</span>
        </span>
      </a>
    </article>
  );
}

function ProjectImage({ image, isPriority = false, sizes }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadedSources, setLoadedSources] = useState(() => new Set());
  const hasAnimation = Boolean(image.animatedSrc);
  const shouldAnimate = image.autoPlay || isAnimating;
  const src = hasAnimation && shouldAnimate ? image.animatedSrc : image.src;
  const isLoaded = loadedSources.has(src);
  const imageStyle = image.width && image.height
    ? { '--image-aspect': `${image.width} / ${image.height}` }
    : undefined;

  function handleLoad() {
    setLoadedSources((currentSources) => {
      const nextSources = new Set(currentSources);
      nextSources.add(src);
      return nextSources;
    });
  }

  return (
    <span
      className={`portfolio-image ${isLoaded ? 'is-loaded' : 'is-loading'}`}
      style={imageStyle}
    >
      <img
        src={src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={isPriority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        onLoad={handleLoad}
        onMouseEnter={hasAnimation ? () => setIsAnimating(true) : undefined}
        onMouseLeave={hasAnimation ? () => setIsAnimating(false) : undefined}
        onFocus={hasAnimation ? () => setIsAnimating(true) : undefined}
        onBlur={hasAnimation ? () => setIsAnimating(false) : undefined}
      />
    </span>
  );
}

function ProjectSummary({ project, boldLead }) {
  const summaryText = boldLead && project.summary.startsWith(boldLead)
    ? project.summary.slice(boldLead.length)
    : project.summary;

  if (!project.summaryLinks || project.summaryLinks.length === 0) {
    return (
      <p>
        {boldLead ? <strong>{boldLead}</strong> : null}
        {summaryText}
      </p>
    );
  }

  const summaryParts = [];
  let remainingText = summaryText;

  project.summaryLinks.forEach((link) => {
    const linkIndex = remainingText.indexOf(link.text);

    if (linkIndex === -1) {
      return;
    }

    if (linkIndex > 0) {
      summaryParts.push(remainingText.slice(0, linkIndex));
    }

    summaryParts.push(
      <a href={link.href} target="_blank" rel="noopener noreferrer" key={`${link.text}-${link.href}`}>
        {link.text}
      </a>
    );

    remainingText = remainingText.slice(linkIndex + link.text.length);
  });

  if (remainingText) {
    summaryParts.push(remainingText);
  }

  return (
    <p>
      {boldLead ? <strong>{boldLead}</strong> : null}
      {summaryParts}
    </p>
  );
}

function ProjectPage({ project, previousProject, nextProject }) {
  const images = project.images.length > 0 ? project.images : [project.cover];
  const projectDimensions = project.dimensions || project.cover.dimensions;
  const projectMaterials = project.materials || project.cover.materials;

  if (project.id === 'lark') {
    return (
      <LarkProjectPage
        project={project}
        previousProject={previousProject}
        nextProject={nextProject}
      />
    );
  }

  return (
    <section
      className={`project-page ${project.id === 'zines' ? 'is-zines-page' : ''}`}
      aria-label={project.title}
    >
      <div className="viewer-layout">
        <div className="viewer-images" aria-label={`${project.title} images`}>
          {images.map((image, index) => (
            <figure className="viewer-image" key={`${image.src}-${index}`}>
              <ProjectImage image={image} isPriority={index === 0} />
            </figure>
          ))}
        </div>

        <aside className="viewer-info">
          <h2>{project.title}</h2>
          <ProjectSummary project={project} />
          {projectMaterials ? <p className="project-materials">{projectMaterials}</p> : null}
          {projectDimensions ? <p className="project-dimensions">{projectDimensions}</p> : null}
          {project.year ? <p className="project-year">{project.year}</p> : null}
          <nav className="project-navigation" aria-label="Project navigation">
            <a
              href={projectHref(previousProject)}
              aria-label={`Previous project: ${previousProject.title}`}
            >
              􀄪
            </a>
            <a
              href={projectHref(nextProject)}
              aria-label={`Next project: ${nextProject.title}`}
            >
              􀄫
            </a>
          </nav>
        </aside>
      </div>
    </section>
  );
}

function LarkProjectPage({ project, previousProject, nextProject }) {
  return (
    <section
      className="project-page lark-project-page"
      aria-label={project.title}
    >
      <figure className="lark-hero-image">
        <ProjectImage image={project.cover} isPriority />
      </figure>

      <div className="lark-project-intro">
        <ProjectSummary project={project} boldLead="Lark" />
      </div>

      <div className="lark-type-testers" aria-label="Lark type testers">
        {larkTesterRows.map((row) => (
          <div className="lark-type-tester" key={row.label}>
            <span>{row.label}</span>
            <div
              className={`lark-type-editor ${row.className}`}
              contentEditable
              role="textbox"
              tabIndex="0"
              aria-label={`${row.label} type tester`}
              spellCheck="false"
              suppressContentEditableWarning
            >
              {row.text}
            </div>
          </div>
        ))}
      </div>

      <nav className="project-navigation" aria-label="Project navigation">
        <a
          href={projectHref(previousProject)}
          aria-label={`Previous project: ${previousProject.title}`}
        >
          􀄪
        </a>
        <a
          href={projectHref(nextProject)}
          aria-label={`Next project: ${nextProject.title}`}
        >
          􀄫
        </a>
      </nav>
    </section>
  );
}

function InfoPage() {
  return (
    <section className="info-page">
      <div className="info-copy">
        <div className="info-intro">
          <p>
            (shay-nuh who) is a textile and lettering artist based in San Francisco, exploring the relationship between analog craft and pixel precision.
          </p>
          <p>
           Her work is influenced by her Chinese-American heritage and a love of letterforms. She studied typeface design at Type@Cooper West and received her B.A. in computer science from UC Berkeley.
          </p>
          <p>
            Her professional product design work focuses on building tools for creativity. You may have encountered her work while using {' '}
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a>,{' '}
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>, {' '}
            <a href="https://apps.apple.com/fi/app/paper-sketch-draw-create/id506003812" target="_blank" rel="noopener noreferrer">FiftyThree</a>, and <a href="https://openstudio.ing" target="_blank" rel="noopener noreferrer">OpenStudio</a>.{' '}
          </p>
          <p>
          For inquiries, contact <a href="mailto:hello@shanahu.com">hello@shanahu.com</a>
          </p>
        </div>
      </div>

      <div className="info-photo">
        <img
          src={`${process.env.PUBLIC_URL}/images/optimized/info-portrait.jpg`}
          alt="Shana Hu seated beside a textile piece."
          width="1066"
          height="1600"
          loading="eager"
          decoding="async"
        />
        <div className="info-social-links" aria-label="Social links">
          <a
            href="https://www.instagram.com/shanamade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/shanahu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5.2 8.9h3.1v10H5.2zM6.8 4.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM10.5 8.9h3v1.4c.5-.8 1.6-1.7 3.2-1.7 3.3 0 3.9 2.2 3.9 5v5.3h-3.1v-4.7c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.8h-3.1v-10z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
