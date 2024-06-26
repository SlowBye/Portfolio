import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function Dev(props) {
    const { img, titre, description, lien } = props;

    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={img} alt="card-img" />
            <Card.Body>
                <Card.Title>{titre}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {description}
                </Card.Text>
                {lien !== 0 && (
                    <Button variant="primary" href={lien} target="_blank">
                        <BsGithub /> &nbsp;
                        GitHub
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default Dev;
