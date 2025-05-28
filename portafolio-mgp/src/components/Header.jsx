// src/components/Header.jsx
import { useNavigate } from 'react-router-dom';
import '@styles/Home.css';
import clock from '@/assets/relojs.png';

const Header = () => {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString('en-GB'); // dd/mm/yy

  return (
    <header className="portfolio-header">
      <div className="side-label">Portfolio</div>

      <div className="header-content">
        <div className="date">{today}</div>

        <div className="title-block">
          <p className="subtitle">In todays news...</p>
          <h1 className="title">MARINES GARCIA</h1>
        </div>

        <div className="clocks">
          <img src={clock} alt="clock" />
        </div>
      </div>

      <nav className="nav-bar">
        <a href="#about" onClick={() => navigate(`/`)}>About Me</a>
        <a onClick={() => navigate(`/my-labs`)}>My Labs</a>
        {/* <a href="#projects">My Projects</a>
        <a href="#tools">Tools I Use</a>
        <a href="#professional">Professional</a> */}
      </nav>
      <div className='bottom-line'></div>
    </header>
  );
};

export default Header;