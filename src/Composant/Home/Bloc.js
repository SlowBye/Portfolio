import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Importation des composants de Bootstrap React
import myImg from "../../Items/Image1.jpg"
import Image from 'react-bootstrap/Image'; 

function Main() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">

            <br/> <br/>
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Présentation Succincte  </span> {/* Titre de la section présentation */}
            </h1>
            {/*1er Paragraphe */}
            <p className="home-about-body">
                Je suis développeur <b className="purple">Full Stack en alternance</b>, passionné par l'innovation et la transformation digitale.
              <br />
              <br />
                J'ai des connaissances en programmation dans des langages tels que <b className="purple">JavaScript/TypeScript, PHP, SQL, C++...</b>
              <br />
                Mes intérêts en informatique se portent sur le <b className="purple">développement web</b> et <b className="purple">logiciel</b>.
              <br />
              <br />
                Dès que possible, je m'efforce de concevoir chaque application adaptable afin d'en faciliter la reprise par d'autres développeurs.
              <br />
            </p>
            
          </Col>
          <Col md={3} className="myAvtar">
            <Image src={myImg} className="img-fluid" alt="avatar"  fluid/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Main;
