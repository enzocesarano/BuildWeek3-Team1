import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Image, Col, Row, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const myProfile = useSelector((state) => state.myProfile.myProfile);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization: "Bearer YOUR_TOKEN"
        }
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
              <Link to="/profile" className="rounded-circle border border-3 border-light sizeImg overflow-hidden position-absolute top-50 start-50 translate-middle">
                <img src={myProfile.image} alt={myProfile.name} className="w-100" />
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
              <Button variant="success" className="mb-3 rounded-4 fw-bold">Post</Button>
              </div>
              <Container>
              <Image src="https://static.licdn.com/aero-v1/sc/h/eeol4w9o9de2j4gq699mzx79d" alt="No posts" fluid />
              <p className="mt-3">Niente da vedere per ora</p>
              <p>I contenuti a cui aggiungi reazioni, che pubblichi, condividi o commenti appariranno qui.</p>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PostList;





