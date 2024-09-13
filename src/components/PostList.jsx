import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Col, Row, Container, Card, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import {
  ArrowRepeat,
  ChatLeftText,
  HandThumbsUp,
  Send,
  Trash,
} from "react-bootstrap-icons";
import { deleteMyPost } from "../action";
import EditPost2 from "./EditPost2";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [click, setClick] = useState(false);
  const arrayAllProfiles2 = useSelector(
    (state) => state.arrayAllProfiles.arrayAllProfiles
  );

  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [postSelect, setPostSelect] = useState();

  const location = useLocation();
  const idLocation = location.pathname.split("/").pop();

  const handleDelete = (postId) => {
    try {
      dispatch(deleteMyPost(postId));
      setClick(!click);
    } catch (error) {
      console.error("Errore nella cancellazione del post:", error);
    }
  };

  const handleSet = () => {
    setClick(!click);
  };

  const handleClick = (post) => {
    setPostSelect(post);
    setModalShow(true);
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

  return arrayAllProfiles2.map((element, i) => {
    if (element._id === idLocation) {
      return (
        <Container className="post-list-wrapper" key={i}>
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
                      src={element.image}
                      alt={element.name}
                      className="w-100"
                    />
                  </Link>
                </div>
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Text>Follower: 0</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <Card className="text-center mb-4">
                <Card.Body>
                  <div className="text-start">
                    <h2 className="fs-5">Tutte le attività</h2>
                  </div>
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
                      if (post?.user._id === idLocation) {
                        return (
                          <Card
                            key={post._id}
                            className="my-3 border-0 bg-transparent"
                          >
                            <Card.Body className="card-container bg-light">
                              <div className="card-home-header mb-3 align-items-center">
                                <div className="d-flex align-items-center">
                                  <div className="sizePers me-3">
                                    <Image
                                      src={element.image}
                                      alt=""
                                      roundedCircle
                                      className="w-100"
                                    />
                                  </div>

                                  <div>
                                    <div className="card-title text-start mb-0">
                                      {post.user.name} {post.user.surname}
                                    </div>
                                    <div className="card-home-subtitle text-start">
                                      @{post.username}
                                    </div>
                                  </div>
                                </div>

                                <div className="button-title">
                                  {idLocation === "66deab4f4d0def0015cef0f9" ? (
                                    <>
                                      <Button
                                        variant="outline-danger me-2"
                                        onClick={() => handleDelete(post._id)}
                                      >
                                        <Trash className="text-danger" />
                                      </Button>
                                      <Button
                                        variant="outline-info"
                                        onClick={() => handleClick(post)}
                                      >
                                        <BsPencilSquare className="text-info" />
                                      </Button>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>

                              <div className="card-text mb-3">
                                <Card.Text className="text-start">
                                  {post.text}
                                </Card.Text>
                              </div>
                              <div className="mb-4 w-100">
                                <Image
                                  src={post.image}
                                  className="w-100 rounded-2"
                                  alt={post._id}
                                />
                              </div>

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
          <EditPost2
            show={modalShow}
            onHide={() => setModalShow(false)}
            element={postSelect}
            function1={handleSet}
          />
        </Container>
      );
    }
  });
};

export default PostList;
