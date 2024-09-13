import { useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  Image,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useDispatch } from "react-redux";

const SendPost = ({ show, onHide, function1}) => {

  const [value, setValue] = useState("");

  const handleSubmit = async (postContent) => {
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
        setValue("");
        onHide()
        function1(() => function1);
        console.log(function1)
      } else {
        console.error("Errore nella pubblicazione del post");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Crea un nuovo post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="postContent">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Di cosa vuoi parlare?"
              onChange={(e) => setValue(e.target.value)}
              value={value}
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
                overlay={<Tooltip>Aggiungi contenuto multimediale</Tooltip>}
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
                overlay={<Tooltip>Festeggia un’occasione speciale</Tooltip>}
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
              variant="success"
              onClick={() => handleSubmit(value)}
            >
              Crea
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SendPost;