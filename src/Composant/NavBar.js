import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {AiOutlineHome, AiTwotoneFolderOpen , AiOutlineUser} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar(props){
  const { setPage } = props;
  const [expanded, setExpanded] = useState(false);
  const [couleur, setCouleur] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setCouleur(true);
    } else {
      setCouleur(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expanded} fixed="top" expand="md" className={couleur ? "sticky" : "navbar"} >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => {setExpanded(expanded ? false : "expanded");}}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            <Nav.Item>
              <Nav.Link onClick={() => {setExpanded(false); setPage(0) }}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Accueil 
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => {setExpanded(false); setPage(1) }}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> À propos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => {setExpanded(false); setPage(2) }}>
                <AiTwotoneFolderOpen  style={{ marginBottom: "2px" }}/>
                  {" "} Projet
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => {setExpanded(false); setPage(3)}}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> CV
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;