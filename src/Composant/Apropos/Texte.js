import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Texte() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
            Je suis <span className="purple">David Morais Pereira</span>.
            <br />
            Actuellement, je suis en formation <span className="purple">Expert en développement logiciel</span> à Ynov Aix.
            <br />
            Je suis aussi alternant développeur web <span className="purple">Full Stack</span> à la <span className="purple">DGAC</span> (Direction Générale de l'Aviation Civile) où je crée des outils sur mesure (Gestion de stock, Planning, Automatisation...) améliorant la productivité et le confort de travail.
            <br />
            Ce qui me passionne, c'est créer des applications qui simplifient le quotidien et réduisent la charge de travail des autres.
            <br />
            <br />
            À part le code, il y a aussi des choses que j'aime faire comme :
          </p>
          <ul>

            <li className="about-activity">
              <ImPointRight /> Pêche
            </li>

            <li className="about-activity">
              <ImPointRight /> Jeux de stratégie
            </li>

            <li className="about-activity">
              <ImPointRight /> Lecture
            </li>

          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Texte;
