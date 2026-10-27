import { Link, Navigate, useParams } from 'react-router-dom';
import Layout from '@components/Layout';
import { projects } from '@/data/profile';
import '@styles/Detail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  const { tag, title, description, highlights, stack, image, url, repo } = project;

  return (
    <Layout>
      <article className="detail">
        <Link to="/projects" className="detail__back">
          ← All projects
        </Link>

        <div className="detail__grid">
          <img className="detail__img glass" src={image} alt={`${title} screenshot`} />

          <div className="detail__body">
            <small className="detail__tag">{tag}</small>
            <h1 className="detail__title">{title}</h1>
            <p className="detail__text">{description}</p>

            {highlights && (
              <>
                <h2 className="detail__sub">What's inside</h2>
                <ul className="chips">
                  {highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </>
            )}

            {stack && (
              <>
                <h2 className="detail__sub">Built with</h2>
                <ul className="chips">
                  {stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="detail__links">
              {url && (
                <a className="pill pill--solid" href={url} target="_blank" rel="noreferrer">
                  Visit live site ↗
                </a>
              )}
              {repo && (
                <a className="pill glass" href={repo} target="_blank" rel="noreferrer">
                  View code ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
