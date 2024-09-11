import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Form, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import {
  FaNetworkWired,
  FaBriefcase,
  FaBell,
  FaTag,
  FaStar,
  FaPlus,
  FaBullseye,
  FaPlay,
  FaInfoCircle,
  FaChartLine,
  FaUsers,
  FaCompass,
  FaTh,
} from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import SearchModal from "./SearchModal";

function NavScroll() {
  const myProfile = useSelector((state) => state.myProfile.myProfile);
  const searchProfile = useSelector((state) => state.searchProfile.searchProfile);
  const arrayAllProfiles = useSelector((state) => state.arrayAllProfiles.arrayAllProfiles);
  const location = useLocation();

  const [value, setValue] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const handleProfileSelect = () => {
    setValue("");
    setModalShow(false);
  };

  const filteredProfiles = arrayAllProfiles.filter((profile) => {
    const fullName = `${profile.name} ${profile.surname}`.toLowerCase();
    return fullName.includes(value.toLowerCase());
  });

  return (
    <>
      <Navbar expand="lg" className="bg-white position-fixed z-1" style={{ width: "100%" }}>
        <Container fluid style={{ maxWidth: "70%" }}>
          <Navbar.Brand href="#">
            <img
              src="http://clipart-library.com/new_gallery/25-259122_icons-symbols-button-linkedin-png-image.png"
              alt="Logo"
              style={{ height: "35px" }}
              className="ms-3"
            />
          </Navbar.Brand>
          <Form className="d-flex me-auto position-relative" style={{ flex: 1, maxWidth: "300px" }}>
            {location.pathname !== "/search-job" && (
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
            )}
            {location.pathname === "/search-job" && (
              <Form.Control
                type="search"
                placeholder="🔍 Cerca lavoro"
                className="ms-5 search-input twoLabel"
                aria-label="Search Job"
                style={{ flex: 1 }}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                onFocus={() => setModalShow(true)}
              />
            )}
            {modalShow && value && (
              <SearchModal filteredProfiles={filteredProfiles} onProfileSelect={handleProfileSelect} />
            )}
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-1 my-lg-0 " navbarScroll>
              <Link to="/" className="nav-link">
                <HiHome className="nav-icon" />
                <div className="nav-text">Home</div>
              </Link>
              <Nav.Link href="#network" className="nav-item">
                <FaNetworkWired className="nav-icon" />
                <div className="nav-text">Rete</div>
              </Nav.Link>
              <Nav.Link as={Link} to="/search-job" className="nav-item">
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
                  <img src={myProfile.image} alt="Profile" className="nav-profile-img" />
                </div>
                <NavDropdown title="Tu" id="navbarScrollingDropdown" align="end">
                  <NavDropdown.Item href="#">
                    <div className="dropdown-profile">
                      <img src={myProfile.image} alt="Profile" />
                      <div>
                        <p>
                          <span>{myProfile.name}</span> <span>{myProfile.surname}</span>
                        </p>
                        <p>{myProfile.title}</p>
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/profile">
                    <button>Visualizza profilo</button>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <div className="dropdown-section ms-4">
                    <a href="#">
                      <strong className="DropdownColortext ">Account</strong>
                    </a>
                    <a href="#" className="text-secondary fw-bold ">
                      <FaStar className="icon" /> Prova 1 mese di Premium per 0 EUR
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
              <div className="icon-above-dropdown">
                <a href="#">
                  <div className="icon-with-text">
                    <FaTh className="icon workIconColor" />
                  </div>
                </a>

                <NavDropdown title="Per le aziende" id="navbarScrollingDropdown" align="end">
                  <div className="dropdown-columns mt-5">
                    <div className="column">
                      <p>
                        <strong>Scopri altri prodotti LinkedIn</strong>
                      </p>
                      <a href="#" className="mb-4 mt-5 fw-bold ms-3 ">
                        <FaCompass className="icon iconBlu me-3  " />{" "}
                        <span className="DropdownColortext small-text"> Trova lead </span>
                      </a>
                      <a href="#" className="mb-5 mt-3 fw-bold ms-3 ">
                        <FaUsers className="icon iconBlu me-3 " />{" "}
                        <span className="DropdownColortext small-text"> Gruppi </span>
                      </a>
                      <a href="#" className="text-secondary ">
                        Talent
                      </a>
                      <a href="#" className="mb-5 mt-3 fw-bold ms-3 ">
                        <FaChartLine className="icon iconBlu me-3 " />
                        <span className="DropdownColortext small-text"> Talent Insights</span>
                      </a>
                      <a href="#" className="text-secondary ">
                        Vendite
                      </a>
                      <a href="#" className="mb-5 mt-3 fw-bold ms-3 ">
                        <FaInfoCircle className="icon iconBlu me-3 " />
                        <span className="DropdownColortext small-text"> Marketplace dei servizi</span>
                      </a>
                      <a href="#" className="text-secondary ">
                        Marketing
                      </a>
                      <a href="#" className="mb-5 mt-3 fw-bold ms-3 ">
                        <FaBullseye className="icon iconBlu me-3 " />
                        <span className="DropdownColortext small-text"> Pubblicizza</span>
                      </a>
                      <a href="#" className="text-secondary ">
                        Learning
                      </a>
                      <a href="#" className="mb-5 mt-3 fw-bold ms-3 ">
                        <FaPlay className="icon iconBlu me-3 " />{" "}
                        <span className="DropdownColortext small-text">Learning</span>
                      </a>
                    </div>
                    <div className="column">
                      <p>
                        <strong className="ms-3">Scopri altro per il business</strong>
                      </p>
                      <div>
                        <a href="#">
                          <div className="mt-4">
                            <strong className="fw-bold ms-3 DropdownColortext small-text">Assumi su LinkedIn</strong>
                            <p className="ms-3 secSmalltext ">Trova, attrai e assumi</p>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <div className="mt-4">
                            <strong className="fw-bold ms-3 DropdownColortext small-text">Vendi con LinkedIn</strong>
                            <p className="ms-3 secSmalltext">Sblocca nuove opportunità di vendita</p>
                          </div>
                        </a>
                      </div>
                      <div className="mt-4">
                        <a href="#">
                          <div>
                            <strong className="fw-bold ms-3 DropdownColortext small-text">
                              Offerta di lavoro gratuita
                            </strong>
                            <p className="ms-3 secSmalltext">Ottieni rapidamente candidati qualificati</p>
                          </div>
                        </a>
                      </div>
                      <div className="mt-4">
                        <a href="#">
                          <div>
                            <strong className="fw-bold ms-3 DropdownColortext small-text">
                              Fai pubblicità su LinkedIn
                            </strong>
                            <p className="ms-3 secSmalltext">Acquisisci clienti e fai crescere la tua azienda</p>
                          </div>
                        </a>
                      </div>
                      <div className="mt-4">
                        <a href="#">
                          <div>
                            <strong className="fw-bold ms-3 DropdownColortext small-text">Impara con LinkedIn</strong>
                            <p className="ms-3 secSmalltext">Assumi su LinkedIn</p>
                          </div>
                        </a>
                      </div>
                      <div className="mb-3 mt-4">
                        <a href="#">
                          <div>
                            <strong className="fw-bold ms-3 DropdownColortext small-text">Admin Center</strong>
                            <p className="ms-3 secSmalltext">Gestisci i dettagli di fatturazione e account</p>
                          </div>
                        </a>
                      </div>
                      <a href="#">
                        <div>
                          <p>
                            <strong className="ms-3 DropdownColortext small-text">Crea una pagina aziendale</strong>

                            <FaPlus className="icon ms-3 iconPlus " />
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </NavDropdown>
              </div>
              <div className="separator-bar"></div>
              <div className="icon-above-dropdown ">
                <a href="#">
                  <div className="icon-with-text workIconColor">
                    <FaTag className="icon" />
                    <div className="nav-text">Pubblica Un'offerta di lavoro</div>
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
