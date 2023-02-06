import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dashboard from "../../Assets/Projects/dashboard.png";
import byronchat from "../../Assets/Projects/byron-chat.png";


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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={byronchat}
              isBlog={false}
              title="Byron Chat"
              description="Chat with google authentication, with just one step you can start chatting. You can create your own room and customize it."
              ghLink="https://github.com/ramzeta/byron-chat"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Byron Dashboard"
              description="This is a navigalbe menu with react , react-botstrap and react-router-dom, an example to have a side navigator."
              ghLink="https://github.com/ramzeta/dashboard-react"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
