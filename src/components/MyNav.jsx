import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Form, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import {
  FaNetworkWired,
  FaBriefcase,
  FaBell,
  FaTag,
  FaStar,
} from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import SearchModal from "./SearchModal";

function NavScroll() {
  const myProfile = useSelector((state) => state.myProfile.myProfile);
  const arrayAllProfiles = useSelector(
    (state) => state.arrayAllProfiles.arrayAllProfiles
  );

  const [value, setValue] = useState("");
  const [modalShow, setModalShow] = useState(false);

  // Funzione per resettare la ricerca
  const handleProfileSelect = () => {
    setValue(""); // Azzerare il campo di ricerca
    setModalShow(false); // Chiudere il modale
  };

  const filteredProfiles = arrayAllProfiles.filter((profile) => {
    const fullName = `${profile.name} ${profile.surname}`.toLowerCase();
    return fullName.includes(value.toLowerCase());
  });

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-light position-fixed z-1"
        style={{ width: "100%" }}
      >
        <Container fluid style={{ maxWidth: "70%" }}>
          <Navbar.Brand href="#">
            <img
              src="http://clipart-library.com/new_gallery/25-259122_icons-symbols-button-linkedin-png-image.png"
              alt="Logo"
              style={{ height: "35px" }}
            />
          </Navbar.Brand>
          <Form
            className="d-flex me-auto position-relative"
            style={{ flex: 1, maxWidth: "300px" }}
          >
            <Form.Control
              type="search"
              placeholder="🔍 Cerca"
              className="me-1 search-input"
              aria-label="Search"
              style={{ flex: 1 }}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              onFocus={() => setModalShow(true)}
            />
            {modalShow && value && (
              <SearchModal
                filteredProfiles={filteredProfiles}
                onProfileSelect={handleProfileSelect} // Passare la funzione di reset
              />
            )}
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-1 my-lg-0" navbarScroll>
              <Link to="/home" className="nav-link">
                <HiHome className="nav-icon" />
                <div className="nav-text">Home</div>
              </Link>
              <Nav.Link href="#network" className="nav-item">
                <FaNetworkWired className="nav-icon" />
                <div className="nav-text">Rete</div>
              </Nav.Link>
              <Nav.Link href="#jobs" className="nav-item">
                <FaBriefcase className="nav-icon" />
                <div className="nav-text">Lavoro</div>
              </Nav.Link>
              <Nav.Link href="#messaging" className="nav-item">
                <BsChatDotsFill className="nav-icon" />
                <div className="nav-text">Messaggistica</div>
              </Nav.Link>
              <Nav.Link href="#notifications" className="nav-item">
                <FaBell className="nav-icon" />
                <div className="nav-text">Notifiche</div>
              </Nav.Link>
              <div className="icon-above-dropdown ">
                <div className="icon-with-text">
                  <img
                    src={myProfile.image}
                    alt="Profile"
                    className="nav-profile-img"
                  />
                </div>
                <NavDropdown
                  title="Tu"
                  id="navbarScrollingDropdown"
                  align="end"
                >
                  <NavDropdown.Item href="#">
                    <div className="dropdown-profile">
                      <img src={myProfile.image} alt="Profile" />
                      <div>
                        <p>
                          <span>{myProfile.name}</span>{" "}
                          <span>{myProfile.surname}</span>
                        </p>
                        <p>{myProfile.title}</p>
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/">
                    <button>Visualizza profilo</button>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <div className="dropdown-section ms-4">
                    <a href="#">
                      <strong className="DropdownColortext ">Account</strong>
                    </a>
                    <a href="#" className="text-secondary fw-bold ">
                      <FaStar className="icon" /> Prova 1 mese di Premium per 0
                      EUR
                    </a>
                  </div>
                  <NavDropdown.Divider />
                  <div className="dropdown-section ms-4 text-secondary">
                    <a href="#" className="text-secondary">
                      Impostazioni e privacy
                    </a>
                    <a href="#" className="text-secondary">
                      Guida
                    </a>
                    <a href="#" className="text-secondary">
                      Lingua
                    </a>
                  </div>
                  <NavDropdown.Divider />
                  <div className="dropdown-section ms-4">
                    <a href="#">
                      <strong className="DropdownColortext">Gestisci</strong>
                    </a>
                    <a href="#" className="text-secondary">
                      Post e attività
                    </a>
                    <a href="#" className="text-secondary">
                      Account per la pubblicazione di offerte di lavoro
                    </a>
                  </div>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#" className="text-secondary">
                    Esci
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="separator-bar"></div>
              <div className="icon-above-dropdown ">
                <a href="#">
                  <div className="icon-with-text workIconColor">
                    <FaTag className="icon" />
                    <div className="nav-text">
                      Pubblica Un'offerta di lavoro
                    </div>
                  </div>
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScroll;
