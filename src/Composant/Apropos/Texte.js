import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Texte() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
            Salut, je suis <span className="purple">David Morais Pereira</span> 23 ans.
            <br />
            J'ai débuté la programmation au lycée <span className="purple">Louis Pasquet</span> à Arles, en C++ et HTML/CSS. 
            <br />
            Après une formation en STI2D option SIN, j'ai poursuivi en BUT Informatique à l'IUT d'Arles, et je suis actuellement en 5ème année en alternance à la <span className="purple">Direction générale de l'aviation civile</span> en tant que développeur web.
            <br />
            Mon objectif est de devenir <span className="purple">développeur web</span> ou <span className="purple">logiciel</span>. 
            <br />
            J'ai postulé chez YNOV Campus pour un Master en alternance.
            <br />
            <br />
            En plus du développement, j'adore également :
          </p>
          <ul>

            <li className="about-activity">
              <ImPointRight /> Jeu vidéo
            </li>

            <li className="about-activity">
              <ImPointRight /> Lecture (Manga, BD, Light novel, Comics etc...)
            </li>

            <li className="about-activity">
              <ImPointRight /> Pêche
            </li>

            {/* <li className="about-activity">
              <ImPointRight /> Cuisine
            </li> */}

          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Texte;
