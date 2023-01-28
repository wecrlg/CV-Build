import "../css/Skills.css";
import "../index.css";
import { content } from "../data/data";

type SkillCardProp = {
  logo: string;
  name: string;
  para: string;
  currentWidth: string;
};
// Skills Card
const SkillCard = ({ logo, name, para, currentWidth }: SkillCardProp) => {
  return (
    <div className="skill-box">
      <img src={logo} alt={name} />
      <div className="skill-group">
        <h3>{name}</h3>
        <div className="skill-container">
          <div
            className="skills-sc css"
            style={{ width: currentWidth, backgroundColor: "#808080" }}
          >
            {para}
          </div>
        </div>
      </div>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    </div>
  );
};

const Skills = () => {
  const { skills } = content;
  const SkillCardProps = content.skills.skills_content;
  return (
    <section className="skills-container" id="skills">
      <h2>{skills.title}</h2>
      <h1>{skills.subtitle}</h1>
      <div className="skills-cards">
        {SkillCardProps.map((cur) => (
          <SkillCard currentWidth={cur.para} key={cur.name.trim()} {...cur} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
