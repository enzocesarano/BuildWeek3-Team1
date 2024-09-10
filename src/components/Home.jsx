import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { getProfile } from "../action";

const Home = ({ setModalShow }) => {
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
                  className="mb-5"
                />
                <div className="position-absolute top-0 end-0 me-4 mt-4 pointer fs-4"></div>
                <div className="w-100 position-absolute bottom-0 px-4 d-flex justify-content-between align-items-end">
                  <div className="rounded-circle border border-3 border-light sizeImg overflow-hidden">
                    <img src={myProfile.image} alt="" className=" w-100" />
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
                <Card.Text className="mb-2 text-secondary-emphasis">{myProfile.title}</Card.Text>
                <Card.Text className="text-secondary">
                  {myProfile.area} • {""}
                  <span className="infoProfile pointer fw-medium">Informazioni di contatto</span>
                </Card.Text>
              </Card.Body>
            </Card>
          )}

          <Card className="mb-3">
            <Card.Body className="text-nowrap">
              <Card.Title style={{ fontSize: "0.5rem" }}>
                Fai crescere la tua carriera o il tuo business con Premium
              </Card.Title>
              <Card.Text>
                <a href="#">
                  <FaStar className="icon" /> Prova 1 mese di Premium per 0 EUR
                </a>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title style={{ fontSize: "0.5rem" }}>Collegamento</Card.Title>
              <Card.Text style={{ fontSize: "0.5rem" }}>Espandi la tua rete</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <i className="bi bi-bookmark-fill"></i> Elementi salvati
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="bi bi-people-fill"></i> Gruppi
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="bi bi-calendar-event-fill"></i> Eventi
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={6}>
          <Card body>This is some text within a card body.</Card>
        </Col>

        <Col xs={12} md={3} lg={3}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title style={{ fontSize: "0.5rem" }}>Card Title</Card.Title>
              <Card.Text style={{ fontSize: "0.5rem" }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ fontSize: "0.5rem" }}>Cras justo odio</ListGroup.Item>
              <ListGroup.Item style={{ fontSize: "0.5rem" }}>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item style={{ fontSize: "0.5rem" }}>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ fontSize: "0.5rem" }}>
                Card Link
              </Card.Link>
              <Card.Link href="#" style={{ fontSize: "0.5rem" }}>
                Another Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
