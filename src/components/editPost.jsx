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
              {/* Bottoni e altre icone */}
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