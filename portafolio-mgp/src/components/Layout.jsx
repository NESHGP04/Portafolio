import { Link } from 'react-router-dom';
import HillsBackground from '@components/HillsBackground';
import PhotoBackground from '@components/PhotoBackground';
import Dock from '@components/Dock';
import '@styles/Layout.css';

// 'photo' usa una imagen; 'hills' usa el fondo vectorial de colinas.
const BACKGROUND = 'photo';

const Layout = ({ children }) => (
  <>
    {BACKGROUND === 'photo' ? <PhotoBackground /> : <HillsBackground />}

    <Link to="/" className="brand" aria-label="Home">
      Nes<sup>®</sup>
    </Link>

    <main className="page">{children}</main>

    <Dock />
  </>
);

export default Layout;
