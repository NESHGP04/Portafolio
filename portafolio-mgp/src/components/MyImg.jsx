import myPhoto from '@assets/Yo.JPG'
import resumeFile from '@assets/CV Marinés garcía.pdf'; 
import '@styles/About.css'

function MyImg(){
    return(
        <div className='button-cv'>
            <a href={resumeFile} download className='img-about'>
                <img src={myPhoto} alt="Marines García" />
            </a>
            <p className='description'>Press image to download Resume</p>
        </div>
);
}

export default MyImg;