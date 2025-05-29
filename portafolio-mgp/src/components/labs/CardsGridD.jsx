import '@styles/Grid.css';

import ej1 from '@assets/ej1.png';
import topSongs from '@assets/topSongs.png';
import lab1 from '@assets/lab1.png';
import lab2 from '@assets/lab2.png';
import lab3 from '@assets/lab3.png';
import lab4 from '@assets/lab4.png';
import lab5 from '@assets/lab5.png';
import lab6 from '@assets/lab6.png';
import proyectoFinal from '@assets/proyectoFinal.png';


const CardsGrid = () => {
  return (
  <div className='button-lab-container'>
    <button className='button-labs'>
        <img src={ej1} alt="Ejercicio 1" className='img-labs'/>
          <p className='description-labs'>Introduction to HTML</p>
      </button>
      <div className='button-labs'>
        <img src={topSongs} alt="TopSongs" className='img-labs'/>
          <p className='description-labs'>Introduction to HTML</p>
    </div>
    <div className='button-labs'>
        <img src={lab1} alt="lab1" className='img-labs'/>
          <p className='description-labs'>Internet before Web</p>
      </div>
      <div className='button-labs'>
        <img src={lab2} alt="lab2" className='img-labs'/>
          <p className='description-labs'>Administrator of remote services</p>
    </div>
    <div className='button-labs'>
        <img src={lab3} alt="Lab3" className='img-labs'/>
          <p className='description-labs'>HTML only</p>
      </div>
      <div className='button-labs'>
        <img src={lab4} alt="lab4" className='img-labs'/>
          <p className='description-labs'>CSS only</p>
    </div>
    <div className='button-labs'>
        <img src={lab5} alt="lab5" className='img-labs'/>
          <p className='description-labs'>JS only</p>
      </div>
      <div className='button-labs'>
        <img src={lab6} alt="lab6" className='img-labs'/>
          <p className='description-labs'>React</p>
    </div>
    <div className='button-labs'>
        <img src={proyectoFinal} alt="Final Project" className='img-labs'/>
          <p className='description-labs'>Final Project</p>
      </div>
  </div>
  );
};

export default CardsGrid;