import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { portfolioItems, portfolioItemsByTag, tagLabels, tags } from './portfolioItems';

const infoTab = 'info';
const routeTabs = [...tags, infoTab];
const routeAliases = {
  print: 'play',
  prints: 'play',
  type: 'play',
  zines: 'play',
};

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
    <div className={`site-shell ${shouldShowInfo ? 'is-info-view' : ''}`}>
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

  return (
    <section className="project-page" aria-label={project.title}>
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

function InfoPage() {
  return (
    <section className="info-page">
      <div className="info-copy">
        <div className="info-intro">
          <p>
            is a textile and lettering artist based in San Francisco.
          </p>
        </div>

        <div className="info-details">
          <p>
            Shana also is passionate about building creative tooling at{' '}
            <a href="https://openstudio.ing">OpenStudio</a>,{' '}
            <a href="https://www.figma.com">Figma</a>,{' '}
            <a href="https://www.pinterest.com">Pinterest</a>, and{' '}
            <a href="https://www.fiftythree.com">FiftyThree</a>.
          </p>
          <a href="mailto:hello@shanahu.com">hello@shanahu.com</a>
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
      </div>
    </section>
  );
}

export default App;
