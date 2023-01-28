import React, { useState } from "react";
import { content } from "../data/data";
import "../css/Projects.css";
import "../css/Skills.css";
import "../css/Projects.css";
import { mobileView } from "../utilities/MediaQuery";
import ProjectAccordion from "./Accordion";

const { projects } = content;
const asideTitleArray = projects.projects_desc.map((cur) => cur.company);
const accomplishmentsArray = projects.projects_desc.map(
  (cur) => cur.accomplishments
);

const Projects = () => {
  const [activeSideLink, setActiveSideLink] = useState(asideTitleArray[0]);
  const isMobile = mobileView();

  return (
    <section id="projects" className="skills-container">
      <h2>{projects.title}</h2>
      <h1>{projects.subtitle}</h1>
      {!isMobile ? (
        <div className="projectTabbed">
        <aside className="projectAside">
          <li
            className={
              activeSideLink === asideTitleArray[0]
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() => setActiveSideLink(asideTitleArray[0])}
          >
            {asideTitleArray[0]}
            <span className="carets">
              <i
                className={
                  activeSideLink === asideTitleArray[0]
                    ? "bx bx-chevron-up"
                    : "bx bx-chevron-right"
                }
              />
            </span>
          </li>

          <li
            className={
              activeSideLink === asideTitleArray[1]
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() => setActiveSideLink(asideTitleArray[1])}
          >
            {asideTitleArray[1]}
            <span className="carets">
              <i
                className={
                  activeSideLink === asideTitleArray[1]
                    ? "bx bx-chevron-up"
                    : "bx bx-chevron-right"
                }
              />
            </span>
          </li>

          <li
            className={
              activeSideLink === asideTitleArray[2]
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() => setActiveSideLink(asideTitleArray[2])}
          >
            {asideTitleArray[2]}
            <span className="carets">
              <i
                className={
                  activeSideLink === asideTitleArray[2]
                    ? "bx bx-chevron-up"
                    : "bx bx-chevron-right"
                }
              />
            </span>
          </li>

          <li
            className={
              activeSideLink === asideTitleArray[3]
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() => setActiveSideLink(asideTitleArray[3])}
          >
            {asideTitleArray[3]}
            <span className="carets">
              <i
                className={
                  activeSideLink === asideTitleArray[3]
                    ? "bx bx-chevron-up"
                    : "bx bx-chevron-right"
                }
              />
            </span>
          </li>
        </aside>
        <div className="projectTab">
          <div
            style={{
              display: activeSideLink === asideTitleArray[0] ? "flex" : "none",
            }}
          >
            <h4>{asideTitleArray[0]}</h4>
            <p>
              {accomplishmentsArray[0].map((cur) => (
                <li>{cur}</li>
              ))}
            </p>
          </div>

          <div
            style={{
              display: activeSideLink === asideTitleArray[1] ? "flex" : "none",
            }}
          >
            <h4>{asideTitleArray[1]}</h4>
            <p>
              {accomplishmentsArray[1].map((cur) => (
                <li>{cur}</li>
              ))}
            </p>
          </div>

          <div
            style={{
              display: activeSideLink === asideTitleArray[2] ? "flex" : "none",
            }}
          >
            <h4>{asideTitleArray[2]}</h4>
            <p>
              {accomplishmentsArray[2].map((cur) => (
                <li>{cur}</li>
              ))}
            </p>
          </div>

          <div
            style={{
              display: activeSideLink === asideTitleArray[3] ? "flex" : "none",
            }}
          >
            <h4>{asideTitleArray[3]}</h4>
            <p>
              {accomplishmentsArray[3].map((cur) => (
                <li>{cur}</li>
              ))}
            </p>
          </div>
        </div>
      </div>
      ) : <ProjectAccordion />}
      
    </section>
  );
};

export default Projects;
