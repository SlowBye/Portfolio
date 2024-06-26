import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiMongodb, DiPython, DiJava, DiPhp } from "react-icons/di";
import { SiMysql } from "react-icons/si";

function Techno() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

        <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus />
            <h4>C++</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
            <h4>JavaScript</h4>
        </Col>
        
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            <h4>React</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
            <h4>MongoDB</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiPhp  />
            <h4>PHP</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
            <h4>MySQL</h4>
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
