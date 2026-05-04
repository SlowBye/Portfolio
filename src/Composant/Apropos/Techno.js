import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGithub,
  DiJava,
  DiPhp,
  DiDotnet,
} from "react-icons/di";
import {
  SiPostgresql,
  SiTypescript,
  SiPrisma,
  SiGitlab,
  SiExpress,
} from "react-icons/si";

function Techno() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

        <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
            <h4>JavaScript</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiTypescript />
            <h4>TypeScript</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiPhp />
            <h4>PHP</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
            <h4>Node.js</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiExpress />
            <h4>Express</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            <h4>React</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql />
            <h4>PostgreSQL</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
            <h4>MongoDB</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiGithub />
            <h4>GitHub</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiGitlab />
            <h4>GitLab</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiPrisma />
            <h4>Prisma</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus />
            <h4>C++</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiDotnet />
            <h4>.NET</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
            <h4>Python</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
            <h4>Java</h4>
        </Col>

    </Row>
  );
}

export default Techno;
