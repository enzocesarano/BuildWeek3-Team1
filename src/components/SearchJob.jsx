import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, ListGroup, Dropdown } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { getProfile } from "../action";
import { FaPlus } from "react-icons/fa";

const SearchJob = ({ setModalShow }) => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.myProfile);

  useEffect(() => {
    dispatch(getProfile("me"));
  }, [dispatch]);

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
                  {myProfile.area} • {""}
                  <div>
                    {" "}
                    <a href="#" className="text-dark reduced-font-link">
                      <FaStar className="icon icon-blue" /> Prova 1 mese di Premium per 0 EUR
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          )}

          <Card className="mb-3">
            <Card.Body className="text-nowrap">
              <Card.Title className="secondary-title">Espandi la tua carriera o il tuo business con Premium</Card.Title>
              <Card.Text>
                <a href="#" className="premium-link">
                  <FaStar className="icon icon-blue" /> Prova 1 mese di Premium per 0 EUR
                </a>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="black-title">Collegamento</Card.Title>
              <Card.Text className="secondary-text">Espandi la tua rete</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item className="list-item ">
                <i className="bi bi-bookmark-fill icon-small "></i> Elementi salvati
              </ListGroup.Item>
              <ListGroup.Item className="list-item">
                <i className="bi bi-people-fill icon-small"></i> Gruppi
              </ListGroup.Item>
              <ListGroup.Item className="list-item">
                <i className="bi bi-calendar-event-fill icon-small"></i> Eventi
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={6}>
          <Card body>
            Serve solo a testare come suddividere le colonne , verra sostituita poi con la creazione dei post
          </Card>
        </Col>

        <Col xs={12} md={3} lg={3}>
          <ul className="list-unstyled d-flex flex-wrap horizontal-list mx-4 my-2 align-items-center">
            <li className="mb-2  ">
              <a href="#" className="text-secondary footer-link text-decoration-none  horizontal-list ">
                Informazioni
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-secondary footer-link text-decoration-none p-0 horizontal-list">
                Accessibilità
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-secondary footer-link text-decoration-none p-0 horizontal-list">
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
                  <Dropdown.Item href="#">Informativa sulla privacy</Dropdown.Item>
                  <Dropdown.Item href="#">Contratto di licenza</Dropdown.Item>
                  <Dropdown.Item href="#">Termini e condizioni delle pagine</Dropdown.Item>
                  <Dropdown.Item href="#">Informativa sui cookie</Dropdown.Item>
                  <Dropdown.Item href="#">Informativa sul copyright</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="mb-2">
              <a href="#" className="text-secondary footer-link text-decoration-none p-0 horizontal-list">
                Opzioni per gli annunci pubblicitari
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-secondary footer-link text-decoration-none p-0 horizontal-list">
                Pubblicità
              </a>
            </li>
            <li className="mb-2">
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
                  id="dropdown-basic"
                >
                  Servizi alle aziende
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title className="black-title">Impara con LinkedIn</Card.Title>
                      <Card.Text className="secondary-text">Assumi su LinkedIn</Card.Text>
                      <Card.Title className="black-title">Admin Center</Card.Title>
                      <Card.Text className="secondary-text">Gestisci i dettagli di fatturazione e account</Card.Text>
                      <p>
                        <strong className="ms-3 DropdownColortext small-text">Crea una pagina aziendale</strong>
                        <FaPlus className="icon ms-3 iconPlus " />
                      </p>
                    </Card.Body>
                  </Card>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="mb-2">
              <a href="#" className="text-secondary footer-link text-decoration-none p-0 horizontal-list">
                Scarica l’app LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-secondary footer-link text-decoration-none p-0 horizontal-list">
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
    </Container>
  );
};

export default SearchJob;
