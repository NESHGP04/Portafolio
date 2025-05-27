import myPhoto from '@assets/Yo.JPG'
function MyImg(){
    return(
    <button className='column img-about'>
        <img src={myPhoto} alt="Marines García" />
    </button>
);
}

export default MyImg;