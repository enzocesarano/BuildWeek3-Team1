import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaBell, FaSearch, FaStar } from "react-icons/fa";
import "../App.css";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ width: "100%" }}>
      <Container fluid style={{ maxWidth: "60%" }}>
        <Navbar.Brand href="#">
          <img
            src="http://clipart-library.com/new_gallery/25-259122_icons-symbols-button-linkedin-png-image.png"
            alt="Logo"
            style={{ height: "35px" }}
          />
        </Navbar.Brand>
        <Form className="d-flex me-auto" style={{ flex: 1, maxWidth: "300px" }}>
          <Form.Control
            type="search"
            placeholder="🔍 Cerca"
            className="me-1 search-input"
            aria-label="Search"
            style={{ flex: 1 }}
          />
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-1 my-lg-0" navbarScroll>
            <Nav.Link href="#home" className="nav-item">
              <FaHome className="nav-icon" />
              <div className="nav-text">Home</div>
            </Nav.Link>
            <Nav.Link href="#network" className="nav-item">
              <FaNetworkWired className="nav-icon" />
              <div className="nav-text">Rete</div>
            </Nav.Link>
            <Nav.Link href="#jobs" className="nav-item">
              <FaBriefcase className="nav-icon" />
              <div className="nav-text">Lavoro</div>
            </Nav.Link>
            <Nav.Link href="#messaging" className="nav-item">
              <FaEnvelope className="nav-icon" />
              <div className="nav-text">Messaggistica</div>
            </Nav.Link>
            <Nav.Link href="#notifications" className="nav-item">
              <FaBell className="nav-icon" />
              <div className="nav-text">Notifiche</div>
            </Nav.Link>
            <NavDropdown
              title={
                <div className="nav-dropdown-title">
                  <img src="https://placedog.net/50/50" alt="Profile" className="nav-profile-img" />
                  <div className="nav-text">Tu</div>
                </div>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#">
                <div className="dropdown-profile">
                  <img src="https://placedog.net/50/50" alt="Profile" />
                  <div>
                    <strong>Enzo Ceserano</strong>
                    <p>Io sono un lavoratore onesto</p>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <button>Visualizza profilo</button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <div className="dropdown-section ms-4">
                <a href="#">
                  <strong>Account</strong>
                </a>
                <a href="#">
                  <FaStar className="icon" /> Prova 1 mese di Premium per 0 EUR
                </a>
              </div>
              <NavDropdown.Divider />
              <div className="dropdown-section ms-4 text-secondary">
                <a href="#">Impostazioni e privacy</a>
                <a href="#">Guida</a>
                <a href="#">Lingua</a>
              </div>
              <NavDropdown.Divider />
              <div className="dropdown-section ms-4">
                <a href="#">
                  <strong>Gestisci</strong>
                </a>
                <a href="#">Post e attività</a>
                <a href="#">Account per la pubblicazione di offerte di lavoro</a>
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Esci</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
