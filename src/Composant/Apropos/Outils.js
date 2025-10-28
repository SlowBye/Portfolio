import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiAmazonaws, SiDocker, SiFilezilla, SiGitlab, SiOvh, SiGit, SiPortainer, SiVisualstudio  } from "react-icons/si";

function Outils() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
            <h4>VS Code</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudio />
            <h4>Visual Studio</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
            <h4>Postman</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiAmazonaws />
            <h4>AWS</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiOvh />
            <h4>OVH</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiFilezilla />
            <h4>Filezilla</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiGitlab />
            <h4>Gitlab</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiGit />
            <h4>Git</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiDocker />
            <h4>Docker</h4>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiPortainer />
            <h4>Portainer</h4>
        </Col>

    </Row>
  );
}

export default Outils;
