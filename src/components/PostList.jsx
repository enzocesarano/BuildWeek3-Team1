import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Image, Col, Row, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsHandThumbsUp, BsChat, BsShare, BsSend, BsThreeDots } from "react-icons/bs";
import "../styles/PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const myProfile = useSelector((state) => state.myProfile.myProfile);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization: "Bearer YOUR_TOKEN",
        },
      });
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <Container className="post-list-wrapper">
      <Row>
        <Col xs={12} md={4}>
          <Card className="bg-light mb-3 text-center">
            <div className="position-relative">
              <Card.Img
                variant="top"
                src="https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq"
                className="mb-5"
              />
              <Link
                to="/profile"
                className="rounded-circle border border-3 border-light sizeImg overflow-hidden position-absolute top-50 start-50 translate-middle"
              >
                <img
                  src={myProfile.image}
                  alt={myProfile.name}
                  className="w-100"
                />
              </Link>
            </div>
            <Card.Body>
              <Card.Title>{myProfile.name}</Card.Title>
              <Card.Text>Follower: 0</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={8}>
          <Card className="text-center mb-4">
            <Card.Body>
              <div className="text-start">
                <h2 className="fs-5">Tutte le attività</h2>
                <Button variant="success" className="mb-3 rounded-4 fw-bold">
                  Post
                </Button>
              </div>

              {/* Layout per "Nessun post" */}
              {posts.length === 0 ? (
                <Container>
                  <Image
                    src="https://static.licdn.com/aero-v1/sc/h/eeol4w9o9de2j4gq699mzx79d"
                    alt="No posts"
                    fluid
                  />
                  <p className="mt-3">Niente da vedere per ora</p>
                  <p>
                    I contenuti a cui aggiungi reazioni, che pubblichi, condividi
                    o commenti appariranno qui.
                  </p>
                </Container>
              ) : (

                // Layout per la lista dei post
                posts.map((post) => (
                  <Card key={post._id} className="mb-3">
                    <Card.Body>
                      <Row>
                        <Col xs={2}>
                          <img
                            src={myProfile.image}
                            alt="Profile"
                            className="rounded-circle"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </Col>
                        <Col xs={10}>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <strong>{myProfile.name}</strong> • Tu
                              <p className="text-muted">(placeholder tempo dalla pubblicazione) • 🌍</p>
                            </div>
                            <div>
                              <BsThreeDots />
                            </div>
                          </div>
                          <p>{post.text}</p>
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col className="text-center">
                          <Button variant="link">
                            <BsHandThumbsUp /> Consiglia
                          </Button>
                        </Col>
                        <Col className="text-center">
                          <Button variant="link">
                            <BsChat /> Commenta
                          </Button>
                        </Col>
                        <Col className="text-center">
                          <Button variant="link">
                            <BsShare /> Diffondi il post
                          </Button>
                        </Col>
                        <Col className="text-center">
                          <Button variant="link">
                            <BsSend /> Invia
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PostList;