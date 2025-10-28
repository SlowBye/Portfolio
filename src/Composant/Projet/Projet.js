import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Projetdev from "./Projet_dev";
import img1 from "../../Items/Projet/Image1.png";
import img2 from "../../Items/Projet/Image2.png";
import img3 from "../../Items/Projet/Image3.png";
import img4 from "../../Items/Projet/Image4.png";
import img5 from "../../Items/Projet/Image6.png";
import img6 from "../../Items/Projet/Image7.png";

const description =["Premier projet en informatique, l'objectif était de faire un agenda pour gérer des événements sur console en C++.",
                    "Projet de 3ème année, l'objectif était faire un programme en Python qui permet de faire un Kmean et un Otsu (des algorithmes) sur une image pour la segmenter.",
                    "SAE de 2ème année, l'objectif était de faire un affichage d'emploi du temps des étudiants de l'IUT pour remplacer la solution actuelle qui ne fonctionne pas sur les TV.", 
                    "Projet de 3ème année, l'objectif était de faire un de puissance 4 en JavaScript ReactJS avec toutes les règles du jeu classique et quelques nouvelles.",
                    "API qui permet au service du Temps réel d’avoir des statistiques et tri de données sur toutes leurs activités de MADA ou sur une certaine année.",
                    "Projet ayant pour but d'aider les ACDS de la DGAC dans leurs gestions des zones de vol d'Aix-en-Provence"
                  ]

const titre = [ "Agenda sur console",
                "Kmean & Otsu",
                "Affichage dynamique de l'emploi du temps",
                "Puissance 4",
                "MADAPI",
                "Aixpert ACDS"
              ]

const lien = [  0,
                "https://github.com/SlowBye/Math_kmean_otsu",
                "https://etulab.univ-amu.fr/sae-s3.a.01-2022/sae-s3.a.01-2022-sujet09",
                "https://github.com/SlowBye/Puissance_4",
                "https://github.com/SlowBye/SAE",
                0,
                0
              ]

const lien2 = [0,
              0,
              0,
              "https://slowbye.github.io/Puissance_4/",
              0,
              0
            ]

const img = [img1, img2, img3, img4, img5, img6 ]

function Projet() {
    const tab = []

    for(let i = 0; i<titre.length;i++){
        tab.push(
            <Col md={4} className="project-card">
                <Projetdev img={img[i]} titre={titre[i]} description={description[i]} lien= {lien[i]} lien2={lien2[i]} />
          </Col>
        )
    }

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques-uns de mes projets
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            
            {tab}
            
        </Row>
      </Container>
    </Container>
  );
}

export default Projet;
