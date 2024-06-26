import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Projetdev from "./Projet_dev";
import img1 from "../../Items/Projet/Image1.png";
import img2 from "../../Items/Projet/Image2.png";
import img3 from "../../Items/Projet/Image3.png";
import img4 from "../../Items/Projet/Image4.png";
import img5 from "../../Items/Projet/Image6.png";

const description =["Premier projet en informatique, il s'agit de faire un agenda pour gérer des événements sur console en C++",
                    "Projet de 3ème année de mathématiques, il s'agit de faire un programme en Python qui permet de faire un Kmean et un Otsu (des algorithmes) sur une image pour la segmenter.",
                    "Projet de SAE de 2ème année, il s'agit de faire un affichage d'emploi du temps des étudiants de l'IUT d'Aix-Marseille site Arles pour remplacer la solution actuelle qui ne fonctionne pas sur TV", 
                    "Projet de 3ème année, il s'agit de faire un jeu de puissance 4 en JavaScript ReactJS avec toutes les fonctionnalités du jeu classique et quelques nouvelles.",
                    "API qui pourrait permettre au service du Temps réel d’avoir des statistiques et tri de données sur toutes leurs activités depuis le lancement de MADA ou sur une certaine année."]

const titre = [ "Agenda sur console",
                "Kmean & Otsu",
                "Affichage dynamique de l'emploi du temps",
                "Puissance 4",
                "MADAPI"]

const lien = [  0,
                "https://github.com/SlowBye/Math_kmean_otsu",
                "https://etulab.univ-amu.fr/sae-s3.a.01-2022/sae-s3.a.01-2022-sujet09",
                "https://github.com/SlowBye/Puissance_4",
                "https://github.com/SlowBye/SAE"]

const img = [img1, img2, img3, img4, img5 ]

function Projet() {
    const tab = []

    for(let i = 0; i<titre.length;i++){
        tab.push(
            <Col md={4} className="project-card">
                <Projetdev img={img[i]} titre={titre[i]} description={description[i]} lien= {lien[i]}/>
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
