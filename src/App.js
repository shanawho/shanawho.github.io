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
  { label: 'Roman Medium', className: 'is-medium', text: 'My funny valentine' },
  { label: 'Roman Regular', className: 'is-regular', text: 'Body and soul' },
  { label: 'Roman Light', className: 'is-light', text: "You don't know what love is" },
  { label: 'Italic Bold', className: 'is-bold is-italic', text: 'Someone to watch over me' },
  { label: 'Italic Medium', className: 'is-medium is-italic', text: 'Autumn in New York' },
  { label: 'Italic Regular', className: 'is-regular is-italic', text: 'I fall in love too easily' },
  { label: 'Italic Light', className: 'is-light is-italic', text: 'The nearness of you' },
];

function projectHref(project) {
  return `#/project/${project.id}`;
}

function tabHref(tab) {
  return `#/${tab}`;
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

  return (
    <div
      className={`site-shell ${shouldShowInfo ? 'is-info-view' : ''} ${activeProject ? 'is-project-view' : ''}`}
      style={activeProject ? { '--project-accent': activeProject.accentColor || '#008f72' } : undefined}
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
      </header>

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
          {item.year ? <span>{item.year}</span> : null}
        </span>
      </a>
    </article>
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
      className="project-page"
      aria-label={project.title}
      style={{ '--project-accent': project.accentColor || '#008f72' }}
    >
      <div className="viewer-layout">
        <div className="viewer-images" aria-label={`${project.title} images`}>
          {images.map((image, index) => (
            <figure className="viewer-image" key={`${image.src}-${index}`}>
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </figure>
          ))}
        </div>

        <aside className="viewer-info">
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
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
      style={{ '--project-accent': project.accentColor || '#008f72' }}
    >
      <figure className="lark-hero-image">
        <img
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          loading="eager"
          decoding="async"
        />
      </figure>

      <div className="lark-project-intro">
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
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
