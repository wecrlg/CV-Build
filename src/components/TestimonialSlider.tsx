import { useState } from "react";
import "../index.css";
import "../css/TestimonialSlider.css";
import Carousel from "react-bootstrap/Carousel";
import { content } from "../data/data";

const { testimonials } = content;
const testimonialContent = testimonials.testimonials_content;

const TestimonialSlider = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      fade
      keyboard
      touch
      wrap
      activeIndex={index}
      onSelect={handleSelect}
      slide
      className="testimonial-container"
      variant="dark"
    >
      {testimonialContent.map((cur) => (
        <Carousel.Item key={cur.name.trim()} className="testimonial-item mx-auto">
          <div className="carousel-img" style={{ overflow: "hidden" }}>
            <img
              className="d-block w-100 rounded-circle mb-2"
              src={cur.img}
              alt={cur.name}
              style={{ overflow: "hidden" }}
            />
          </div>
          <Carousel.Caption className="testimonial-caption">
            <p className="text-dark mt-5 fs-10">{cur.review}</p>
            <h3 className="h6" style={{ overflow: "hidden" }}>
              {cur.name}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialSlider;
