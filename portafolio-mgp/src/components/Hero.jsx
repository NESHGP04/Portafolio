import { useRef, useState } from 'react';
import myPhoto from '@assets/Yo.JPG';
import ProjectLink from '@components/ProjectLink';
import { projects } from '@/data/profile';
import '@styles/Hero.css';

const featured = projects.find((p) => p.featured) ?? projects[0];

// Sticker que se puede arrastrar con mouse o dedo
const Sticker = ({ className, label, children }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const start = useRef(null);

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { px: e.clientX, py: e.clientY, ...offset };
    setDragging(true);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    setOffset({
      x: start.current.x + e.clientX - start.current.px,
      y: start.current.y + e.clientY - start.current.py,
    });
  };

  const stopDrag = () => setDragging(false);

  return (
    <span
      className={`sticker ${className}${dragging ? ' is-dragging' : ''}`}
      style={{ translate: `${offset.x}px ${offset.y}px` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDrag}
      onPointerCancel={stopDrag}
      title="Drag me!"
    >
      <span className="sticker__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {children}
        </svg>
      </span>
      <span className="sticker__clip" aria-hidden="true" />
      {label}
    </span>
  );
};

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero__status glass">
      <img src={myPhoto} alt="Marinés García" />
      <div>
        <span className="hero__available"><i className="dot" />Available for work</span>
        <strong>MARINÉS GARCÍA – JUNIOR DEVELOPER</strong>
      </div>
    </div>

    <div className="hero__headline">
      <p className="hero__hi">Hi, I'm Nes</p>
      <h1 className="hero__title">
        A software developer<br />who makes magic<br />through her products
      </h1>

      <div className="hero__stickers">
        <Sticker className="sticker--green" label="Web Dev">
          <path d="M8 8l-4 4 4 4" />
          <path d="M16 8l4 4-4 4" />
          <path d="M13.5 5l-3 14" />
        </Sticker>
        <Sticker className="sticker--pink" label="Photography">
          <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
          <circle cx="12" cy="13" r="3.5" />
        </Sticker>
        <Sticker className="sticker--purple" label="Painting">
          <path d="M12 3a9 9 0 100 18c1.5 0 2-1 1.6-2-.5-1.2.2-2.5 1.6-2.5H17a4 4 0 004-4c0-5-4-9.5-9-9.5z" />
          <circle cx="7.5" cy="11" r="1" />
          <circle cx="10" cy="7" r="1" />
          <circle cx="15" cy="7.5" r="1" />
        </Sticker>
      </div>
    </div>

    <p className="hero__blurb">
      — Not just code.
      <span>i make digital things</span>
      <span>look alive</span>
    </p>

    <ProjectLink project={featured} className="hero__project">
      <span className="hero__project-stack" aria-hidden="true" />
      <span className="hero__project-card glass">
        <img src={featured.image} alt="" />
        <span className="hero__project-text">
          <small>{featured.tag}</small>
          <strong>{featured.title.toUpperCase()}</strong>
          <small>VIEW PROJECT</small>
        </span>
        <span className="hero__project-arrow" aria-hidden="true">→</span>
      </span>
    </ProjectLink>
  </section>
);

export default Hero;
