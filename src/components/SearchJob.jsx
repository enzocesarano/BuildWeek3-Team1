import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Dropdown, ListGroup, Tooltip, OverlayTrigger, Placeholder } from "react-bootstrap";
import { FaStar, FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { BsListUl, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { getProfile, fetchSearchResults } from "../action";
import MyFooter from "./MyFooter";
import { fetchDefaultJobs } from "../reducers/searchResultsReducer";
import { Link } from "react-router-dom";

const SearchJob = ({ setModalShow }) => {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.myProfile);
  const searchResults = useSelector((state) => state.searchResults);
  const [showFooter, setShowFooter] = useState(false);
  const [query, setQuery] = useState("");
  const footerRef = useRef(null);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSaveJob = (job) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav._id === job._id)) {
        return prevFavorites.filter((fav) => fav._id !== job._id);
      } else {
        return [...prevFavorites, job];
      }
    });
  };

  const handleRemoveFavorite = (jobId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav._id !== jobId));
  };

  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  useEffect(() => {
    dispatch(getProfile("me"));
  }, [dispatch]);

  useEffect(() => {
    const fetchJobs = async () => {
      await dispatch(fetchDefaultJobs());
      setLoading(false);
    };
    fetchJobs();
  }, [dispatch]);

  const handleShowFooter = (event) => {
    event.stopPropagation();
    setShowFooter(true);
  };

  const handleClickOutside = (event) => {
    if (footerRef.current && !footerRef.current.contains(event.target)) {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    if (showFooter) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showFooter]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearchResults(query));
  };

  const placeholders = Array.from({ length: 5 });

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} lg={3}>
          {myProfile && myProfile.image && (
            <Card className="bg-light mb-3">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src="https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq"
                  className="mb-5 "
                />
                <div className="position-absolute top-0 end-0 me-4 mt-4 pointer fs-4"></div>
                <div className="w-100 position-absolute bottom-0 px-4 d-flex justify-content-between align-items-end">
                  <div className="rounded-circle border border-3 border-light sizeImg overflow-hidden search-job-img">
                    <img src={myProfile.image} alt="" className=" w-100 " />
                  </div>
                  <div className="pointer"></div>
                </div>
              </div>
              <Card.Body className="px-4 py-3">
                <div className="d-flex align-items-end mb-2">
                  <Card.Title className="fs-4 mb-0">
                    {myProfile.name} {myProfile.surname}
                  </Card.Title>
                </div>
                <Card.Text className="mb-2 text-secondary-emphasis reduced-font">{myProfile.title}</Card.Text>
                <Card.Text className="text-secondary reduced-font">
                  {myProfile.area} • {""}{" "}
                  <a href="#" className="text-dark reduced-font-link">
                    <FaStar className="icon icon-blue" /> Prova 1 mese di Premium per 0 EUR
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
          <Card className="mb-3 ">
            <Card.Body className="mx-2 my-1 ">
              <div className="d-flex align-items-center justify-content-between">
                <Card.Text className="text fw-bold my-2 bi bi-bookmark-fill pointer" onClick={handleToggleFavorites}>
                  <span className="ms-3"> Preferenze</span>
                </Card.Text>
              </div>
              <div className="d-flex align-items-center icon-style mt-3">
                <BsListUl className="icon-style me-2" />
                <Card.Text className="text fw-bold ms-2 pointer">Le mie offerte di lavoro</Card.Text>
              </div>
            </Card.Body>
          </Card>
          <button className="btnJob p-4 border border-primary text-primary fw-bold w-100">
            <FaPencilAlt className="me-2" />
            Pubblica offerta gratuita
          </button>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <ListGroup>
            {loading
              ? placeholders.map((_, index) => (
                  <ListGroup.Item className="mb-3" key={index}>
                    <Card body className="my-2 border-0">
                      <Card.Title className="d-flex justify-content-between align-items-center">
                        <Placeholder as="span" animation="glow">
                          <Placeholder xs={6} />
                        </Placeholder>
                      </Card.Title>
                      <Card.Text>
                        <Placeholder as="span" animation="glow">
                          <Placeholder xs={8} />
                        </Placeholder>
                      </Card.Text>
                      <Card.Text>
                        <Placeholder as="span" animation="glow">
                          <Placeholder xs={5} />
                        </Placeholder>
                      </Card.Text>
                      <Card.Text>
                        <Placeholder as="span" animation="glow">
                          <Placeholder xs={4} />
                        </Placeholder>
                      </Card.Text>
                    </Card>
                  </ListGroup.Item>
                ))
              : showFavorites
              ? favorites.map((job) => (
                  <ListGroup.Item className="mb-3" key={job._id}>
                    <Card body className="my-2 border-0">
                      <Card.Title className="d-flex justify-content-between align-items-center">
                        <Link className="text-danger fs-4" to={`/job/${job._id}`}>
                          {job.title}
                        </Link>
                        <FaTrash className="text-danger pointer" onClick={() => handleRemoveFavorite(job._id)} />
                      </Card.Title>
                      <Card.Text>
                        <strong>Company:</strong> {job.company_name}
                      </Card.Text>
                      <Card.Text>
                        <strong>Publication Date:</strong> {new Date(job.publication_date).toLocaleDateString()}
                      </Card.Text>
                      <Card.Text>
                        <strong>Location:</strong> {job.candidate_required_location}
                      </Card.Text>
                    </Card>
                  </ListGroup.Item>
                ))
              : searchResults.map((result) => (
                  <ListGroup.Item className="mb-3 border rounded-3" key={result._id}>
                    <Card body className="my-2 border-0">
                      <Card.Title className="d-flex justify-content-between align-items-center">
                        <Link className="text-danger fs-4" to={`/job/${result._id}`}>
                          {result.title}
                        </Link>
                        {favorites.some((fav) => fav._id === result._id) ? (
                          <BsBookmarkFill
                            className="icon-style me-2 pointer text-primary"
                            onClick={() => handleSaveJob(result)}
                          />
                        ) : (
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id={`tooltip-${result._id}`}>Salva nei preferiti</Tooltip>}
                          >
                            <span className="icon-style me-2 pointer" onClick={() => handleSaveJob(result)}>
                              <BsBookmark />
                            </span>
                          </OverlayTrigger>
                        )}
                      </Card.Title>
                      <Card.Text>
                        <strong>Company:</strong> {result.company_name}
                      </Card.Text>
                      <Card.Text>
                        <strong>Publication Date:</strong> {new Date(result.publication_date).toLocaleDateString()}
                      </Card.Text>
                      <Card.Text>
                        <strong>Location:</strong> {result.candidate_required_location}
                      </Card.Text>
                    </Card>
                  </ListGroup.Item>
                ))}
          </ListGroup>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <ul className="list-unstyled d-flex flex-wrap horizontal-list mx-4 my-2 align-items-center">
            <li className="mb-2  ">
              <a
                href="https://about.linkedin.com/it-it"
                target="_blank"
                className="text-secondary footer-link text-decoration-none  horizontal-list "
              >
                Informazioni
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://it.linkedin.com/accessibility?"
                target="_blank"
                className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
              >
                Accessibilità
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.linkedin.com/help/linkedin?trk=footer_d_flagship3_job_home&lipi=urn%3Ali%3Apage%3Ad_flagship3_job_home%3BiD0s3ALZTAStDxD03w08Wg%3D%3D"
                target="_blank"
                className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
              >
                Centro assistenza
              </a>
            </li>
            <li className="mb-2">
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
                  id="dropdown-basic"
                >
                  Privacy e condizioni
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" className="horizontal-list">
                    Informativa sulla privacy
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    Contratto di licenza
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    Termini e condizioni delle pagine
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    Informativa sui cookie
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    Informativa sul copyright
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="mb-2">
              <a
                href="https://www.linkedin.com/help/linkedin/answer/a1342443/?lang=it&lipi=urn%3Ali%3Apage%3Ad_flagship3_job_home%3BiD0s3ALZTAStDxD03w08Wg%3D%3D"
                target="_blank"
                className=" text-secondary footer-link text-decoration-none p-0 horizontal-list"
              >
                Opzioni per gli annunci pubblicitari
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart"
                target="_blank"
                className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
              >
                Pubblicità
              </a>
            </li>
            <li className="mb-2">
              <Dropdown className="small-dropdown">
                <Dropdown.Toggle
                  variant="link"
                  className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
                  id="dropdown-basic"
                >
                  Privacy e condizioni
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" className="horizontal-list">
                    <p className="fs-6 fw-bold custom-hover">Impara con LinkedIn</p>
                    <p className="text-secondary custom-hover small-text">Assumi su LinkedIn</p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    <p className="fs-6 fw-bold custom-hover">Admin Center</p>
                    <p className="text-secondary custom-hover small-text">
                      Gestisci i dettagli di fatturazione e account
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    <p className="custom-hover small-text">
                      <strong className="textPlus">Crea una pagina aziendale</strong>
                      <FaPlus className="icon ms-2 iconPlus mb-2  " />
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="mb-2">
              <a href="#" className="text-secondary footer-link text-decoration-none p-0 horizontal-list">
                Scarica l’app LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
                onClick={handleShowFooter}
              >
                Altro
              </a>
            </li>
            <li className="d-flex align-items-center">
              <img
                src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/46/2022/08/Linkedin-Logo-e1660320077673.png"
                alt="LinkedIn Logo"
                className="logo-img me-2"
              />
              <p className="mb-0">LinkedIn Corporation © 2024</p>
            </li>
          </ul>
        </Col>
      </Row>
      {showFooter && (
        <div className="footer-container" ref={footerRef}>
          <MyFooter />
        </div>
      )}
    </Container>
  );
};

export default SearchJob;
