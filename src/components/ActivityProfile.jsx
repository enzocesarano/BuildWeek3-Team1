import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PencilSquare, ArrowRight, Plus, EmojiSmile } from "react-bootstrap-icons";
import { Button, Modal, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../styles/CardProfile.css";

const ActivityProfile = ({ showButton = true }) => {
  const [showModal, setShowModal] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_TOKEN"
      },
      body: JSON.stringify({ text: postContent })
    });
    if (response.ok) {
      setPostContent("");
      handleClose();
    } else {
      console.error("Errore nella pubblicazione del post");
    }
    setIsPublishing(false);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div className="card-profile-wrapper bg-light">
      <div className="card-header">
        <div className="left-section">
          <div className="title">Attività</div>
          <div className="caption text-primary">0 follower</div>
        </div>
        <div className="right-section">
          {showButton ? (
            <button type="button" className="btn btn-outline-primary card-button" onClick={handleShow}>
              Crea un post
            </button>
          ) : (
            <Plus />
          )}
          <PencilSquare size={25} />
        </div>
      </div>
      <div className="card-content">
        <div className="content-title">Non hai ancora pubblicato nulla</div>
        <div className="content-subtitle">I post che condividi appariranno qui</div>
      </div>
      {showButton && (
        <div className="card-footer">
          <Link to="/post-list" className="footer-content">Mostra tutte le attività</Link>
          <ArrowRight />
        </div>
      )}

      <Modal show={showModal} onHide={handleClose} size="lg" dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>placeholder nome utente</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form>
            <Form.Group controlId="postContent">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Di cosa vuoi parlare?"
                value={postContent}
                onChange={handlePostContentChange}
                className="no-focus"
              />
            </Form.Group>
            <div>
            <OverlayTrigger placement="top" overlay={<Tooltip>Aggiungi emoji</Tooltip>}>
                  <i className="bi bi-emoji-smile-fill me-4 icon-pointer" onClick={toggleEmojiPicker}></i>
                </OverlayTrigger>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex align-items-center">
                <OverlayTrigger placement="top" overlay={<Tooltip>Aggiungi contenuto multimediale</Tooltip>}>
                  <i className="bi bi-image me-4 icon-pointer"></i>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Crea un evento</Tooltip>}>
                  <i className="bi bi-calendar4-week me-4 icon-pointer"></i>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Festeggia un’occasione speciale</Tooltip>}>
                  <i className="bi bi-patch-plus-fill me-4 icon-pointer"></i> 
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Fai sapere che stai assumendo</Tooltip>}>
                  <i className="bi bi-briefcase-fill me-4 icon-pointer"></i>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Crea un sondaggio</Tooltip>}>
                  <i className="bi bi-bar-chart-line-fill me-4 icon-pointer"></i>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Aggiungi un documento</Tooltip>}>
                  <i className="bi bi-file-earmark-text-fill me-4 icon-pointer"></i>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Trova un esperto</Tooltip>}>
                  <i className="bi bi-person-badge-fill icon-pointer"></i>
                </OverlayTrigger>

              </div>
              <Button
                variant="primary"
                onClick={handlePublish}
                disabled={!postContent || isPublishing}
                className={!postContent ? "disabled-button" : "active-button"}
              >
                Pubblica
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ActivityProfile;

