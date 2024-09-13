import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Form, Navbar, NavDropdown, Nav, Button, Image } from "react-bootstrap";
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
import { MdBadge } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import SearchModal from "./SearchModal";
import { fetchSearchResults } from "../reducers/searchResultsReducer";
import { useNavigate } from "react-router-dom";

function NavScroll() {
  const myProfile = useSelector((state) => state.myProfile.myProfile);
  const searchProfile = useSelector((state) => state.searchProfile.searchProfile);
  const arrayAllProfiles = useSelector((state) => state.arrayAllProfiles.arrayAllProfiles);
  const [query, setQuery] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const [showPopupNav, setShowPopupNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setShowPopupNav(true);
      } else {
        setShowPopupNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(fetchSearchResults(query));
      setQuery("");
    }
  };

  const handleProfileSelect = () => {
    setQuery("");
    setModalShow(false);
  };

  const handleProfileClick = () => {
    navigate(`/profile/${myProfile._id}`);
  };

  const filteredProfiles = arrayAllProfiles.filter((profile) => {
    const fullName = `${profile.name} ${profile.surname}`.toLowerCase();
    return fullName.includes(query.toLowerCase());
  });

  return (
    <>
      <Navbar expand="lg" className="bg-white position-fixed z-1 " style={{ width: "100%" }}>
        <Container fluid style={{ maxWidth: "70%" }}>
          <Navbar.Brand href="#">
            <Link to="/">
              <img
                src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"
                alt="Logo"
                style={{ height: "35px" }}
                className="ms-3"
              />
            </Link>
          </Navbar.Brand>
          <Form
            onSubmit={handleSearch}
            className="d-flex me-auto position-relative"
            style={{ flex: 1, maxWidth: "300px" }}
          >
            <Form.Control
              type="search"
              placeholder="🔍 Cerca ..."
              className="me-1 search-input"
              aria-label="Search Job"
              style={{ flex: 1 }}
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onFocus={() => setModalShow(true)}
            />
            {modalShow && query && (
              <SearchModal filteredProfiles={filteredProfiles} onProfileSelect={handleProfileSelect} />
            )}
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" className="d-md-none d-lg-none" />
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
                  <NavDropdown.Item className="visualizProfile-button" as={Link} to="/profile/66deab4f4d0def0015cef0f9">
                    <Button className="justify-content-center">Visualizza profilo</Button>
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
                      <a href="#" className="mb-4 mt-3 fw-bold ms-3 ">
                        <FaChartLine className="icon iconBlu me-3 " />
                        <span className="DropdownColortext small-text"> Talent Insights</span>
                      </a>
                      <a href="#" className="mb-5 mt-3 fw-bold ms-3 ">
                        <MdBadge className="icon iconBlu me-3 " />
                        <span className="DropdownColortext small-text"> Pubblica un’offerta di lavoro</span>
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
                            <strong className="ms-3 DropdownColortext small-text">
                              Crea una pagina aziendale <i className="bi bi-plus ms-3 fw-bold fs-4"></i>
                            </strong>
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </NavDropdown>
              </div>
              <div className="icon-above-dropdown ">
                <a href="https://www.linkedin.com/job-posting/?trk=nav_spotlight_post_job&" target="_blank">
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
      {showPopupNav && (
        <div
          className={`popup-nav popup-navShadow py-2 d-flex justify-content-around align-items-center bg-white shadow-sm ${
            showPopupNav ? "show" : "hide"
          }`}
          style={{ borderBottom: "2px solid #ccc", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="d-flex align-items-center" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
            <img className="imgPopupProfile me-3" src={myProfile.image} alt="Profile" />
            <div>
              <p className="fw-bold mb-0">
                <span className="small-font">{myProfile.name}</span>
                <span className="small-font">{myProfile.surname}</span>
              </p>
              <p className="mb-0 small-font">{myProfile.title}</p>
            </div>
          </div>
          <div className="d-flex">
            <Button variant="outline-dark" className="me-2 rounded-5 md-font">
              Altro
            </Button>
            <Button
              variant="border border-primary text-primary btn-AddSection"
              className="me-2 rounded-5 visualizProfile-button md-font"
            >
              Aggiungi sezione del profilo
            </Button>
            <Button variant="primary rounded-5 btn-popuNav">Disponibile per</Button>
          </div>
        </div>
      )}
    </>
  );
}

export default NavScroll;
