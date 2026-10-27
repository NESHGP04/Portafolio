import { skills } from '@/data/profile';
import '@styles/Sections.css';

const Skills = () => (
  <section className="section" id="skills">
    <h2 className="section-heading">
      Skills & tools <small>(what I use)</small>
    </h2>

    <div className="skills">
      {skills.map(({ group, items }) => (
        <div className="skills__group glass" key={group}>
          <h3>{group}</h3>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
