import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Col, Row, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsHandThumbsUp,
  BsChat,
  BsShare,
  BsSend,
  BsThreeDots,
} from "react-icons/bs";
import "../styles/PostList.css";
import {
  ArrowRepeat,
  ChatLeftText,
  HandThumbsUp,
  Send,
  ThreeDots,
  Trash,
} from "react-bootstrap-icons";
import { deleteMyPost } from "../action";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [click, setClick] = useState(false)
  const myProfile = useSelector((state) => state.myProfile.myProfile);
  const dispatch = useDispatch();

  const handleDelete = async (postId) => {
    try {
      await dispatch(deleteMyPost(postId));
      setClick(!click)
    } catch (error) {
      console.error("Errore nella cancellazione del post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [click]);

  const fetchPosts = () => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/posts/";

    fetch(baseEndpoint, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero del profilo");
        }
      })
      .then((data) => {
        const sortedPosts = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
                    I contenuti a cui aggiungi reazioni, che pubblichi,
                    condividi o commenti appariranno qui.
                  </p>
                </Container>
              ) : (
                // Layout per la lista dei post
                posts.map((post) => {
                  if (post?.user._id === "66deab4f4d0def0015cef0f9") {
                    return (
                      <Card
                        key={post._id}
                        className="my-3 border-0 bg-transparent"
                      >
                        <Card.Body className="card-container bg-light">
                          <div className="card-home-header">
                            <div className="card-title">
                              {post.user.name} {post.user.surname}
                              <div className="card-home-subtitle">
                                @{post.username}
                              </div>
                            </div>
                            <div className="button-title">
                              <Button
                                variant="outline-danger border-0 me-2"
                                onClick={() => handleDelete(post._id)}
                              >
                                <Trash />
                              </Button>
                              <ThreeDots />
                            </div>
                          </div>

                          <div className="card-text">
                            <Card.Text>{post.text}</Card.Text>
                          </div>
                          <div className="img-card-post"></div>

                          <Card.Footer className="text-muted card-home-footer">
                            Pubblicato il{" "}
                            {new Date(post.createdAt).toLocaleString()}
                          </Card.Footer>
                          <div className="card-home-button">
                            <button
                              type="button"
                              className="btn fs-small text-dark"
                            >
                              <HandThumbsUp className="m-2" />
                              Consiglia
                            </button>
                            <button
                              type="button"
                              className="btn fs-small text-dark"
                            >
                              {" "}
                              <ChatLeftText className="m-2" />
                              Commenta
                            </button>
                            <button
                              type="button"
                              className="btn fs-small text-dark"
                            >
                              <ArrowRepeat className="m-2" />
                              Diffondi il post
                            </button>
                            <button
                              type="button"
                              className="btn fs-small text-dark"
                            >
                              <Send className="m-2" />
                              Invia
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    );
                  } else {
                    <p>error</p>;
                  }
                })
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PostList;
