import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CircketPlayWebsite from "../../Assets/myprojects/Circket Play Website.jpg";
import MyBasicBiography from "../../Assets/myprojects/My Basic Biography.jpg";
import UniversityofAxford from "../../Assets/myprojects/University of Axford.jpg";
import JavaScriptGame from "../../Assets/myprojects/JavaScript Game.jpg";
import MyPortfilow from "../../Assets/myprojects/My Portfilow.jpg";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    imgPath: [UniversityofAxford],
    title: "Oxford University",
    description:
      "Oxford University and information about the best university in the world.You can get all the information about this university",
    ghLink: "https://zabiada.github.io/zabiada-app-web-final-project/",
  },

  {
    id: 2,
    imgPath: [JavaScriptGame],
    title: "JavaScript Game",
    description:
      "It is an entertainment program and game for fun with JavaScript language.",
    ghLink: "https://zabiada.github.io/JavaScript-final-project/",
  },
  {
    id: 3,
    imgPath: [MyBasicBiography],
    title: "My Boigraphy",
    description:
      "A personal website about me and my biography. Here you can get to know me and my skills",
    ghLink: "https://zabiada.github.io/final_L.project/",
  },
  {
    id: 4,
    imgPath: [MyPortfilow],
    title: "My Portfilow",
    description:
      "The web page that was created using the programming language and is my first project where the important parts and structure of this language are worked on..",
    ghLink: "https://zabiada.github.io/Assignment/",
  },
  {
    id: 5,
    imgPath: [CircketPlayWebsite],
    title: "Circket Play Website",
    description: "A webiste for Circket ",
    ghLink: "https://zabiada.github.io/Assignment/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => {
            return (
              <>
                <Col md={4} className="project-card">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/detail/${project.id}`}
                  >
                    <ProjectCard
                      imgPath={project.imgPath}
                      title={project.title}
                    />
                  </Link>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
