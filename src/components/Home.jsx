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
              <Card.Title className="secondary-title">
                Fai crescere la tua carriera o il tuo business con Premium
              </Card.Title>
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
              <ListGroup.Item className="list-item">
                <i className="bi bi-bookmark-fill icon-small"></i> Elementi salvati
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
          <Card body>This is some text within a card body.</Card>
        </Col>

        <Col xs={12} md={3} lg={3}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title className="black-title">Card Title</Card.Title>
              <Card.Text className="secondary-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="list-item">Cras justo odio</ListGroup.Item>
              <ListGroup.Item className="list-item">Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item className="list-item">Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" className="secondary-text">
                Card Link
              </Card.Link>
              <Card.Link href="#" className="secondary-text">
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
