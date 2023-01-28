import "../css/Services.css"
import "../index.css";
import { content } from "../data/data";

type ServicesCardProp = {
  id: number;
  title: string;
  para: string;
  logo: string;
};

function ServiceCard({ id, title, para, logo }: ServicesCardProp) {

  return (
    <div className={`service-card service-card-${id}`}>
      <img src={logo} alt={title} />
      <p>{title}</p>
      <h6>{para}</h6>
    </div>
  );
}

const Services = () => {
  const { services } = content;
  const ServicesCardProp = content.services.service_content;
  return (
    <section id="services" className="skills-container">
      <h2>{services.title}</h2>
      <h1>{services.subtitle}</h1>
      <div className="service-cards">
        {ServicesCardProp.map((cur) => (
          <ServiceCard key={cur.id} {...cur} />
        ))}
      </div>
    </section>
  );
};

export default Services;