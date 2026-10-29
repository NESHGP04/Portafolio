import myPhoto from '@assets/YO2.jpeg';
import resumeFile from '@assets/CV Marinés garcía.pdf';
import '@styles/About.css';

const About = () => (
  <section className="about" id="about">
    <div className="about__photo">
      <a className="polaroid" href={resumeFile} download aria-label="Download resume">
        <img src={myPhoto} alt="Marinés García" />
        <span className="polaroid__caption">Nes, Guatemala</span>
      </a>
      <p className="about__hint">press the photo to download my resume</p>
    </div>

    <div className="about__card glass">
      <h2 className="section-heading">
        About me <small>(that's me!)</small>
      </h2>
      <p>
        I'm a Junior Developer based in Guatemala, a colorful and dynamic country known for its
        breathtaking landscapes, rich traditions, and creative spirit. Currently in my third year of
        Computer Science, I enjoy building responsive, scalable, and engaging applications using
        JavaScript, React, Next.js, Vite, Kotlin, SQL, Python, C/C++, and Java.
      </p>
      <p>
        I'm especially curious about the intersection of AI tools and photography, a hobby where I
        love experimenting with visuals and creativity. Outside the screen, you'll often find me on
        the softball field, painting, or working on handmade crafts.
      </p>
    </div>
  </section>
);

export default About;
