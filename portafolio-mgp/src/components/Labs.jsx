import myPhoto from "@assets/Yo.JPG";
import '@styles/Labs.css'
import Header from '@components/Header'

function Labs(){
    return(
        <>
        <Header />
        <div className="labs-section">
            <div className="column text-column">
                <section id="labs" className="labs-title">
                    <h2>MY LABS</h2>
                </section>
                <p className="text-about"></p>
            </div>
        </div>
        </>
    );
}

export default Labs