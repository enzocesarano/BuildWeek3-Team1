import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ width: "100%" }}>
      <Container fluid style={{ maxWidth: "80%" }}>
        <Navbar.Brand href="#">
          <img src="https://placedog.net/50/50" alt="Logo" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Form className="d-flex me-auto" style={{ flex: 1 }}>
          <Form.Control type="search" placeholder="🔍 Cerca" className="me-2" aria-label="Search" style={{ flex: 1 }} />
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#home">
              <FaHome />
              <div>Home</div>
            </Nav.Link>
            <Nav.Link href="#network">
              <FaNetworkWired />
              <div>Rete</div>
            </Nav.Link>
            <Nav.Link href="#jobs">
              <FaBriefcase />
              <div>Lavoro</div>
            </Nav.Link>
            <Nav.Link href="#messaging">
              <FaEnvelope />
              <div>Messaggistica</div>
            </Nav.Link>
            <Nav.Link href="#notifications">
              <FaBell />
              <div>Notifiche</div>
            </Nav.Link>
            <NavDropdown
              title={
                <>
                  <FaUserCircle />
                  <div>Tu</div>
                </>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#">
                <img src="https://placedog.net/50/50" alt="Profile" style={{ height: "40px", marginRight: "10px" }} />
                <strong>Enzo Ceserano</strong>
                <p>Io sono un lavoratore onesto</p>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Visualizza profilo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Account</NavDropdown.Item>
              <NavDropdown.Item href="#">Prova 1 mese di Premium per 0 EUR</NavDropdown.Item>
              <NavDropdown.Item href="#">Impostazioni e privacy</NavDropdown.Item>
              <NavDropdown.Item href="#">Guida</NavDropdown.Item>
              <NavDropdown.Item href="#">Lingua</NavDropdown.Item>
              <NavDropdown.Item href="#">Gestisci</NavDropdown.Item>
              <NavDropdown.Item href="#">Post e attività</NavDropdown.Item>
              <NavDropdown.Item href="#">Account per la pubblicazione di offerte di lavoro</NavDropdown.Item>
              <NavDropdown.Item href="#">Esci</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
