import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Form,
  Card,
  OverlayTrigger,
  Tooltip,
  Image,
} from "react-bootstrap";
import {
  Plus,
  ArrowRight,
  HandThumbsUp,
  ChatLeftText,
  ArrowRepeat,
  Send,
} from "react-bootstrap-icons";

import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation } from "react-router-dom";

const ActivityProfile = ({ showButton = true, userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [posts, setPosts] = useState([]);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [click, setClick] = useState(true);
  const arrayAllProfiles2 = useSelector(
    (state) => state.arrayAllProfiles.arrayAllProfiles
  );
  const location = useLocation();
  const idLocation = location.pathname.split("/").pop();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts();
  }, [idLocation]);

  useEffect(() => {
    fetchPosts();
  }, [click]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const sortedPosts = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts.filter((post) => post.user._id === idLocation));
      } else {
        console.error("Errore nel recupero dei post");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSettingsShow = () => setShowSettingsModal(true);
  const handleSettingsClose = () => setShowSettingsModal(false);

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
          },
          body: JSON.stringify({ text: postContent }),
        }
      );
      if (response.ok) {
        setPostContent("");
        handleClose();
      } else {
        console.error("Errore nella pubblicazione del post");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
    setClick(!click);
    setIsPublishing(false);
  };

  return arrayAllProfiles2.map((element, i) => {
    if (element._id === idLocation) {
      return (
        <div className="card-profile-wrapper bg-light" key={i}>
          <div className="card-header d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-0">Attività</h5>
              <small className="text-primary">{posts.length} post</small>
            </div>
            <div className="d-flex align-items-center">
              {showButton && (
                <Button
                  variant="outline-primary"
                  onClick={handleShow}
                  className="me-2 rounded-5"
                >
                  <Plus /> Crea un post
                </Button>
              )}
              <i
                className="bi bi-pencil fs-5 ms-3"
                onClick={handleSettingsShow}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>

          <div className="card-content">
            {posts.length === 0 ? (
              <div className="text-center">
                <h6>Non hai ancora pubblicato nulla</h6>
                <p>I post che condividi appariranno qui</p>
              </div>
            ) : (
              posts.slice(0, 3).map((post) => (
                <Card key={post._id} className="my-3 border-0 bg-transparent">
                  <Card.Body className="card-container bg-light">
                    <div className="card-home-header mb-3 justify-content-start align-items-center">
                      <div className="sizePers me-3">
                        <Image src={element.image} alt="" roundedCircle className="w-100"/>
                      </div>
                      <div>
                        <div className="card-title mb-0">
                          {post.user.name} {post.user.surname}
                        </div>
                        <div className="card-home-subtitle">
                          @{post.username}
                        </div>
                      </div>
                    </div>

                    <div className="card-text">
                      <Card.Text className="text-start mb-3">
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
                      Pubblicato il {new Date(post.createdAt).toLocaleString()}
                    </Card.Footer>
                    <div className="card-home-button">
                      <button type="button" className="btn fs-small text-dark">
                        <HandThumbsUp className="m-2" />
                        Consiglia
                      </button>
                      <button type="button" className="btn fs-small text-dark">
                        {" "}
                        <ChatLeftText className="m-2" />
                        Commenta
                      </button>
                      <button type="button" className="btn fs-small text-dark">
                        <ArrowRepeat className="m-2" />
                        Diffondi il post
                      </button>
                      <button type="button" className="btn fs-small text-dark">
                        <Send className="m-2" />
                        Invia
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              ))
            )}
          </div>

          {showButton && (
            <div className="card-footer">
              <Link
                to={`/post-list/${posts[0]?.user._id}`}
                className="footer-content"
              >
                Mostra tutte le attività
              </Link>
              <ArrowRight />
            </div>
          )}

          {/* Modal for post filtering settings */}
          <Modal show={showSettingsModal} onHide={handleSettingsClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Quali contenuti vuoi mostrare per primi?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <p>
                  La tua attività recente mostrerà solo i contenuti degli ultimi
                  360 giorni.
                </p>
                {[
                  "Post",
                  "Commenti",
                  "Video",
                  "Immagini",
                  "Articoli",
                  "Newsletter",
                  "Eventi",
                  "Documenti",
                ].map((option) => (
                  <Form.Check
                    key={option}
                    type="radio"
                    name="contentOptions"
                    label={option}
                    id={`content-${option}`}
                  />
                ))}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleSettingsClose}>
                Salva
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal for creating a new post */}
          <Modal
            show={showModal}
            onHide={handleClose}
            size="lg"
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>Nuovo post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="postContent">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Di cosa vuoi parlare?"
                    value={postContent}
                    onChange={handlePostContentChange}
                  />
                </Form.Group>
                <div>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Aggiungi emoji</Tooltip>}
                  >
                    <i className="bi bi-emoji-smile-fill me-4 icon-pointer"></i>
                  </OverlayTrigger>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <div className="d-flex align-items-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>Aggiungi contenuto multimediale</Tooltip>
                      }
                    >
                      <i className="bi bi-image me-4 icon-pointer"></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Crea un evento</Tooltip>}
                    >
                      <i className="bi bi-calendar4-week me-4 icon-pointer"></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>Festeggia un’occasione speciale</Tooltip>
                      }
                    >
                      <i className="bi bi-patch-plus-fill me-4 icon-pointer"></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Fai sapere che stai assumendo</Tooltip>}
                    >
                      <i className="bi bi-briefcase-fill me-4 icon-pointer"></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Crea un sondaggio</Tooltip>}
                    >
                      <i className="bi bi-bar-chart-line-fill me-4 icon-pointer"></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Aggiungi un documento</Tooltip>}
                    >
                      <i className="bi bi-file-earmark-text-fill me-4 icon-pointer"></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Trova un esperto</Tooltip>}
                    >
                      <i className="bi bi-person-badge-fill icon-pointer"></i>
                    </OverlayTrigger>
                  </div>
                  <Button
                    variant="primary"
                    onClick={handlePublish}
                    disabled={!postContent || isPublishing}
                    className={
                      !postContent ? "disabled-button" : "active-button"
                    }
                  >
                    {isPublishing ? "Pubblicando..." : "Pubblica"}
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  });
};

export default ActivityProfile;
