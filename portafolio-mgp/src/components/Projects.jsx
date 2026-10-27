import { Link } from 'react-router-dom';
import ProjectLink from '@components/ProjectLink';
import { ctaLabel } from '@/data/projectUtils';
import { projects } from '@/data/profile';
import '@styles/Sections.css';

const Projects = () => (
  <section className="section" id="projects">
    <h2 className="section-heading">
      Projects <small>(featured)</small>
    </h2>

    <div className="projects">
      {projects
        .filter((p) => p.featured)
        .map((p) => (
          <ProjectLink project={p} className="project glass" key={p.id}>
            <img src={p.image} alt={p.title} loading="lazy" />
            <div className="project__body">
              <small>{p.tag}</small>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span className="project__cta">{ctaLabel(p)}</span>
            </div>
          </ProjectLink>
        ))}
    </div>

    <Link to="/projects" className="projects__all">
      See all projects →
    </Link>
  </section>
);

export default Projects;
