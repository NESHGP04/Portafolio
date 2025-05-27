import myPhoto from "@assets/Yo.JPG";

function About(){
    return(
        <div className="about-section">
            <section id="about" className="section-title">
                <h2>ABOUT ME</h2>
            </section>
            <p className="text-about">
                I'm a Junior Developer—based in Guatemala—a colorful and dynamic country known for its breathtaking landscapes, rich traditions, and creative spirit. Currently in my third year of Computer Science, I enjoy building responsive, scalable, and engaging applications using technologies like JavaScript, React, Next.js, Vite, Kotlin, SQL, Python, C/C++, and Java. 
                I'm especially curious about the intersection of AI tools and photography—a hobby where I love experimenting with visuals and creativity. Outside the screen, you'll often find me on the softball field, painting, or working on handmade crafts.
                {/* Go to Professional for my Work Experiences and Academics. */}
            </p>
            <div className="img-about">
                <img src={myPhoto} alt="Marines García" />
            </div>
        </div>
    );
}

export default About