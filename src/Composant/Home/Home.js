import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Items/undraw_programming_re_kg9v.svg";
import Bloc from "./Bloc";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Salut!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋
                </span>
              </h1>

              <h1 className="heading-name">
                Je suis
                <strong className="main-name"> David Morais Pereira</strong>.
                <br />
                Étudiant en informatique.
              </h1>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }}/>
            </Col>
            
          </Row>
        </Container>
      </Container>
      <Bloc />
    </section>
  );
}

export default Home;
