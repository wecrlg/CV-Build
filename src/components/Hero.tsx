import "../css/Hero.css";
import { content } from "../data/data";
import { usePortfolioContext } from "../utilities/contextAPI";
import "../index.css";
import CV from "../assets/NwanuMartinCV.pdf"
// import { MovingComponent } from "react-moving-text";

const Hero = () => {
  const { hero } = content;

  const { toggleNavbar } = usePortfolioContext();
  return (
    <main id="home">
      <div className="main-left"></div>
      <div className="main-right"></div>
      <div className="menu-icon">
        <svg
          onClick={toggleNavbar}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 20 20"
          height="34"
          width="34"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="hero-group">
        <h2>
          Full Stack Developer
          {/* <MovingComponent type="typewriter" dataText={hero.movingTextData} /> */}
        </h2>
        <a href={CV} download>
          <button className="btn-curve">{hero.btnText}</button>
        </a>
        <div className="experience">
          <h3>{hero.hero_content[0].count}</h3>
          <p>{hero.hero_content[0].text}</p>
        </div>
        <div className="projects-worked">
          <p>{hero.hero_content[1].text}</p>
          <h3>{hero.hero_content[1].count}</h3>
        </div>
      </div>
      <img src={hero.image} alt="home-bg-img" />
    </main>
  );
};

export default Hero;
