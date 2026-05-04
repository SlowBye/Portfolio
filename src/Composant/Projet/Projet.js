import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Projetdev from "./Projet_dev";
import img1 from "../../Items/Projet/MADA.png";
import img2 from "../../Items/Projet/ExoYes.png";
import img3 from "../../Items/Projet/RPOwer.png";
import img4 from "../../Items/Projet/Aixpert_ACDS.png";
import img5 from "../../Items/Projet/Gestion_casques.png";

const description =["Outil pour les agents du Temps réel de la DGAC pour gérer leurs missions et supprimer les doubles saisies. Communique avec Epeires (un journal de bord consultable par les contrôleurs aériens) en imitant des requêtes (rétro-ingénierie en l'absence d'API), permettant à l'information de circuler dans tout le centre.",
                    "Application développée pour le BTIV afin de remplacer un outil obsolète. Récupère automatiquement les NOTAMs depuis SofiaBriefing en imitant des requêtes, basé sur des présets définis par l'admin. Offre un format de consultation plus lisible avec des filtres avancés non disponibles sur SofiaBriefing, et permet de transmettre les NOTAMs importants à Epeires.",
                    "Application d'affectation automatique du RPO (Responsable de Permanence Opérationnelle) pour chaque semaine. Un algorithme prend en compte de nombreuses contraintes et règles métier complexes pour faciliter le travail des RH, qui faisaient cela manuellement auparavant.",
                    "Outil permettant aux ACDS de réaliser leurs prévisions de secteurs de manière numérique (auparavant sur papier). Fonctionnalités : consultation des régulations par zone, aide au choix de secteur, chaînes d'épingles pour anticiper les événements à venir, informations de régulation (horaires, secteurs impactés, causes), et plus encore.",
                    "Outil pour les agents \"devinno\" afin de gérer les casques de manière centralisée et efficace. Suivi des casques, affectation aux agents, gestion des réparations et remplacements, et génération de rapports PDF pour une meilleure gestion des ressources."
                  ]

const titre = [ "MADA",
                "ExoYes",
                "Gestion RPO",
                "Aixpert ACDS",
                "Gestion Casques"
              ]

const lien = [  0,
                0,
                0,
                0,
                0
              ]

const lien2 = [0,
              0,
              0,
              0,
              0
            ]

const techStack = [ "React · PHP · MySQL",
                    "React · PHP · MySQL",
                    "React · PHP · MySQL",
                    "JavaScript · PHP · MySQL",
                    "React · PHP · MySQL"
                  ]

const img = [img1, img2, img3, img4, img5]

function Projet() {
    const tab = []

    for(let i = 0; i<titre.length;i++){
        tab.push(
            <Col md={4} className="project-card">
                <Projetdev img={img[i]} titre={titre[i]} description={description[i]} lien= {lien[i]} lien2={lien2[i]} techStack={techStack[i]} />
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
        Voici quelques-uns de mes projets réalisés à la DGAC
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            {tab}

        </Row>
      </Container>
    </Container>
  );
}

export default Projet;
