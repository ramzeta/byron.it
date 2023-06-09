import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dashboard from "../../Assets/Projects/dashboard.png";
import byronchat from "../../Assets/Projects/byron-chat.png";
import antispyware from "../../Assets/Projects/antispyware.png";
import inmovip from "../../Assets/Projects/inmovip.png";
import integracion from "../../Assets/Projects/integracion.png";


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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={antispyware}
              isBlog={false}
              title="Byron Anti Spyware"
              description="Byron Antispyware is a python script that shows you through the console the most common places where spy viruses can hide, it is not 100% 
              functional since it needs to read licenses with a wintrust windows library, but it is a good start! join up!"
              ghLink="https://github.com/ramzeta/antispyware"
            />
          </Col>
        </Row>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inmovip}
              isBlog={false}
              title="Inmovip"
              description="Web page with angular about a real estate agency,
               with this web page you can easily see characteristics and ways to improve the visibility of profitability for real estate investments"
              ghLink="https://inmo-vip.vercel.app/es"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={integracion}
              isBlog={false}
              title="Docker"
              description="In this project, I implemented a continuous integration workflow using Docker to package and deploy web applications built on Node.js. Also, I used Jenkins as an automation tool to facilitate continuous build and deployment."
              ghLink="https://github.com/ramzeta/IntegracionContinua"
            />
          </Col>
      </Container>
    </Container>
  );
}

export default Projects;
