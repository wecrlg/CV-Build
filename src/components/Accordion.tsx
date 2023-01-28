import { Accordion } from "react-bootstrap";
import { content } from "../data/data";

const ProjectAccordion = () => {
  const { projects } = content;
  return (
    <Accordion style={{ width: "100%" }}>
      {projects.projects_desc.map((cur, index) => (
        <Accordion.Item eventKey={index.toString()}>
          <Accordion.Header style={{ fontFamily: "Poppins" }}>
            {cur.company}
          </Accordion.Header>
          {cur.accomplishments.map((accomplishment) => (
            <Accordion.Body key={index}>
              <li style={{ fontFamily: "Poppins" }}>{accomplishment}</li>
            </Accordion.Body>
          ))}
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ProjectAccordion;
