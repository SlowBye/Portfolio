import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Texte from "./Texte";
import Techno from "./Techno";
import Images from "../../Items/Clavier.svg";
import Outils from "./Outils";
import Langues from "./Langues";

function Apropos() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{justifyContent: "center", paddingTop: "30px", paddingBottom: "50px"}}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Qui <strong className="purple">suis-je ?</strong>
            </h1>
            <Texte />
          </Col>

          <Col md={5} style={{ paddingTop: "70px", paddingBottom: "50px" }} className="about-img">
            <img src={Images} alt="about" className="img-fluid" />
          </Col>

        </Row>

        <h1 className="project-heading">
            Langage de<strong className="purple">  programmation </strong>
        </h1>

        <Techno />

        <h1 className="project-heading">
          <strong className="purple">Outils</strong> de développement
        </h1>

        <Outils />

        <h1 className="project-heading">
          <strong className="purple">Langues</strong> parlées
        </h1>

        <Langues />

      </Container>
    </Container>
  );
}

export default Apropos;
