import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Importation des composants de Bootstrap React
import myImg from "../../Items/Image1.jpg" //Importation de l'image de l'avatar
import Image from 'react-bootstrap/Image'; 

function Main() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">

            <br/> <br/>
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Présentation Succinte </span> {/* Titre de la section présentation */}
            </h1>
            {/*1er Paragraphe */}
            <p className="home-about-body">
                Actuellement alternant chez la <b className="purple">Direction générale de l'aviation civile </b> en tant que développeur web,
                je suis étudiant de 3ème année en informatique à l'IUT d'Arles.
              <br />
                Mes intérêts dans le domaine se portent sur le <b className="purple">développement web</b> et dans la <b className="purple">création de logiciels</b>.
              <br />
              <br />

              {/*2ème Paragraphe */}
                J'ai des connaissances en programmation dans quelques langages <b className="purple"> (C++, Javascript, Java...) </b> {/* Compétences en programmation */}
              <br />
                J'ai des compétences en développement web avec quelques frameworks et bibliothèques <b className="purple"> (React, Angular, Material UI, Express...)</b> {/* Compétences en développement web */}
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
