import { Link } from 'react-router-dom';

// Si el proyecto tiene página propia va ahí; si no, abre su repo (o su url) en otra pestaña.
const ProjectLink = ({ project, children, ...props }) => {
  if (project.detail) {
    return (
      <Link to={`/projects/${project.id}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={project.repo ?? project.url} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
};

export default ProjectLink;
