import { useEffect, useState } from "react";
import { Button, Form, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setMyPost } from "../action";

const EditPost = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (props.element) {
      setValue(props.element.text);
    }
  }, [props.element]);

  const handleSubmit = (id, post) => {
    dispatch(setMyPost(id, post));
    props.onHide();
  };

  return (
    <Modal {...props} size="lg" dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Modifica post</Modal.Title>
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
              variant="primary"
              onClick={() => handleSubmit(props.element._id, value)}
            >
              Modifica
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditPost;