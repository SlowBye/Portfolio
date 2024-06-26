import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Items/CV.pdf";
import { BsDownload } from "react-icons/bs";

function CV() {
  // Définir le pourcentage de zoom
  const zoomPourcent = 80;

  // Construire l'URL du PDF avec le zoom
  const pdf_zoom = `${pdf}#zoom=${zoomPourcent}`;

  return (
    <div>
      <Container fluid className="resume-section">

        <Row style={{ justifyContent: "center", position: "relative" }}>

          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <BsDownload />
            &nbsp;Télécharger CV
          </Button>

        </Row>

        <Row className="resume">
          <iframe src={pdf_zoom} title="CV" style={{ width: "40%", height: "950px", border: "none", backgroundColor: "transparent"}}></iframe>
        </Row>

      </Container>
    </div>
  );
}

export default CV;
