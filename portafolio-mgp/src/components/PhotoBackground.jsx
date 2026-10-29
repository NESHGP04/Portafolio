// Fondo con foto. Cambia la imagen importada para probar otra.
// Foto: Red Nguyen en Pexels (licencia Pexels): https://www.pexels.com/photo/beautiful-rolling-hills-landscape-in-spring-32821672/
// Alternativa anterior: @assets/hills.jpg (Shahabudin Ibragimov, Unsplash: https://unsplash.com/photos/7Qr8ReZSPwk)
import photo from '@assets/pexels-ullehaddock-38626945.jpg'; 
import '@styles/Background.css';

const PhotoBackground = () => (
  <div className="photo-bg" aria-hidden="true">
    <img src={photo} alt="" />
    <div className="photo-bg__shade" />
  </div>
);

export default PhotoBackground;
