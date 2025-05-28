import ej1 from '@assets/ej1.png'
import topSongs from '@assets/topSongs.png'
import lab1 from '@assets/lab1.png'
import lab2 from '@assets/lab2.png'
import lab3 from '@assets/lab3.png'
import lab4 from '@assets/lab4.png'
import lab5 from '@assets/lab5.png'
import lab6 from '@assets/lab6.png'
import proyectoFinal from '@assets/proyectoFinal.png'

const Cards  = () => {
    return(
        <div className='button-labs'>
            {/* <a href={resumeFile} download className='img-about'>
                <img src={myPhoto} alt="Marines García" />
            </a> */}
            <img src={ej1} alt="Ejercicio 1" />
            <p className='description-labs'>Built using HTML</p>
        </div>
    );
}

export default Cards