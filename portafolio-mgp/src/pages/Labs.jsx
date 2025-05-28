import '@styles/Labs.css'
import Header from '@components/Header'
import LabsCards from '@components/labs/LabsCards';
import TitleLabs from '@components/labs/TitleLabs';
import Cards from '@components/labs/Cards';

function Labs(){
    return(
        <div className='background'>
        <Header />

        <TitleLabs />

        <LabsCards />
        {/* <Cards /> */}

        </div>
    );
}

export default Labs