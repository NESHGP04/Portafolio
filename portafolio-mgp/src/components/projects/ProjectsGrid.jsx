import ProjectLink from '@components/ProjectLink';
import { ctaLabel } from '@/data/projectUtils';
import { projects } from '@/data/profile';
import '@styles/Grid.css';

const ProjectsGrid = () => (
  <section className="labs">
    <h1 className="section-heading labs__title">
      My projects <small>(things I built)</small>
    </h1>

    <div className="labs__grid">
      {projects.map((p, i) => (
        <ProjectLink project={p} className="lab-card glass" key={p.id}>
          <img src={p.image} alt={p.title} className="lab-card__img" loading="lazy" />
          <p className="lab-card__title">
            <span>{String(i + 1).padStart(2, '0')}</span>
            {p.title}
          </p>
          <p className="lab-card__meta">
            <small>{p.tag}</small>
            <small>{ctaLabel(p)}</small>
          </p>
        </ProjectLink>
      ))}
    </div>
  </section>
);

export default ProjectsGrid;
