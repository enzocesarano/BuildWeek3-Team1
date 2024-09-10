import React, { useState } from "react";
import { PencilSquare, ArrowRight, Plus } from "react-bootstrap-icons";
import { FaRegCalendarAlt, FaCertificate, FaUserTie } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import { Button, Modal, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../styles/CardProfile.css";

const ActivityProfile = ({ showButton = true }) => {
  const [showModal, setShowModal] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);

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
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE"
      },
      body: JSON.stringify({ text: postContent })
    });
    if (response.ok) {
      setPostContent("");
      handleClose();
      console.log(postContent)
    } else {
      console.error("Errore nella pubblicazione del post");
    }
    setIsPublishing(false);
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
          <div className="footer-content">Mostra tutti i post</div>
          <ArrowRight />
        </div>
      )}

      <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>placeholder nome utente</Modal.Title>
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
                className="no-focus"
              />
            </Form.Group>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex align-items-center">
                <OverlayTrigger placement="top" overlay={<Tooltip>Immagine</Tooltip>}>
                  <FaRegImage className="me-4 icon-pointer" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Calendario</Tooltip>}>
                  <FaRegCalendarAlt className="me-4 icon-pointer" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Certificato</Tooltip>}>
                  <FaCertificate className="me-4 icon-pointer" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Lavoro</Tooltip>}>
                  <MdWork className="me-4 icon-pointer" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Grafico</Tooltip>}>
                  <RiBarChart2Fill className="me-4 icon-pointer" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Documento</Tooltip>}>
                  <IoIosDocument className="me-4 icon-pointer" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Utente</Tooltip>}>
                  <FaUserTie className="icon-pointer" />
                </OverlayTrigger>
              </div>
              <Button
                variant="primary"
                onClick={handlePublish}
                disabled={!postContent || isPublishing}
                className={!postContent ? "disabled-button" : ""}
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


