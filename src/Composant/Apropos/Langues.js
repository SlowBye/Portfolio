
import React from "react";
import { Col, Row } from "react-bootstrap";
import PT from "../../Items/PT.svg";
import GB from "../../Items/AN.svg";

function Outils() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

        <Col xs={4} md={2} className="tech-icons">
            <img src={PT} alt="about" className="img-fluid" />
            <h4>Portugais</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <img src={GB} alt="about" className="img-fluid" />
            <h4>Anglais</h4>
        </Col>
    </Row>
  );
}

export default Outils;
