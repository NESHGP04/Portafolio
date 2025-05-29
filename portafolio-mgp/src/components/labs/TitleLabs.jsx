import CardsGrid from "./CardsGridD";

function TitleLabs(){
    return(
        <div className="about-section">
            <div className="column text-column">
            <section id="about" className="section-title">
                <h2 className="title-labs">MY LABS</h2>
                <CardsGrid/>
            </section>
            </div>
        </div>
    );
}

export default TitleLabs