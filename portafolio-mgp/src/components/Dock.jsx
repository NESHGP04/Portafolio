import { useLocation, useNavigate } from 'react-router-dom';
import '@styles/Dock.css';

const items = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <>
        <path d="M3 11l9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
  },
  {
    id: 'about',
    label: 'About me',
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
      </>
    ),
  },
  {
    id: 'projects',
    label: 'Featured project',
    icon: (
      <>
        <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </>
    ),
  },
  {
    id: 'all',
    label: 'All projects',
    route: '/projects',
    icon: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v6L4.5 19a1.5 1.5 0 001.3 2.2h12.4a1.5 1.5 0 001.3-2.2L14 9V3" />
        <path d="M7.5 15h9" />
      </>
    ),
  },
  {
    id: 'skills',
    label: 'Skills & tools',
    icon: (
      <>
        <path d="M12 3l2.4 5.6L20 9.5l-4.3 3.9 1.3 5.9L12 16.4 7 19.3l1.3-5.9L4 9.5l5.6-.9z" />
      </>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3.5 7l8.5 6 8.5-6" />
      </>
    ),
  },
];

const Dock = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onProjects = pathname.startsWith('/projects');

  const goTo = (id) => {
    if (pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="dock glass" aria-label="Main navigation">
      {items.map(({ id, label, icon, route }) => (
        <button
          key={id}
          className={`dock__item dock__item--${id}${onProjects && id === 'all' ? ' is-active' : ''}`}
          onClick={() => (route ? navigate(route) : goTo(id))}
          aria-label={label}
          title={label}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {icon}
          </svg>
        </button>
      ))}
    </nav>
  );
};

export default Dock;
