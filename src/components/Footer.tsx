import { createElement } from "react";
import "../css/Footer.css";
import "../index.css";
import { content } from "../data/data";
import { useForm, ValidationError } from "@formspree/react";

const { contact } = content;
const { footer } = content;

const Footer = () => {
  const [state, handleSubmit] = useForm("xwkjvpwj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const styles = {
    background: "rgb(6, 34, 63)",
    color: "white",
    paddingBottom: "5rem",
  };

  return (
    <>
      <footer
        className="w-100% d-flex gap-3 px-5 pt-5"
        style={styles}
        id="contact"
      >
        <div>
          <h4 style={{ fontFamily: "Inria Serif", fontSize: "2rem" }}>
            {contact.title}
          </h4>
          <h1 style={{ fontFamily: "Paprika", fontSize: "2.5rem" }}>
            {contact.subtitle}
          </h1>
        </div>

        <div
          className="footer-group d-flex"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <div className="footer-left">
            <form className="form-inline" onSubmit={handleSubmit}>
              <input
                className="form-control mb-3"
                name="name"
                type="text"
                placeholder="Name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <input
                className="form-control mb-3"
                name="email"
                type="email"
                placeholder="Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                className="form-control mb-3"
                name="message"
                placeholder="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                className="btn-curve"
                style={{
                  background: "white",
                  color: "rgb(6, 34, 63)",
                  border: "none",
                }}
                disabled={state.submitting}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="footer-right d-flex flex-column align-items-start gap-2">
            {contact.social_media.map((cur) => (
              <a
                key={cur.text.trim()}
                href={cur.link}
                className="d-flex align-items-start gap-2"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "18px",
                }}
              >
                <span>{createElement(cur.icon)}</span>
                {cur.text}
              </a>
            ))}
          </div>
        </div>
      </footer>
      <div className="bg-white text-dark text-center">{footer.text}</div>
    </>
  );
};

export default Footer;
