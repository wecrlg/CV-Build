import "../css/Testimonial.css";
import { content } from "../data/data";
import "../css/Projects.css";
import "../css/Skills.css";
import myPic from "../assets/person.png";
import TestimonialSlider from "./TestimonialSlider";


const { testimonials } = content;

const Testimonial = () => {
  return (
    <section id="testimonial" className="skills-container">
      <h2>{testimonials.title}</h2>
      <h1>{testimonials.subtitle}</h1>
      <div className="testimonial-group">
        <div className="testimonial-left">
          <img src={myPic} alt="my-pic" className="" width={350} />
        </div>
        <div className="testimonial-right">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
