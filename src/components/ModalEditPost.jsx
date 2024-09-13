import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { editComment, getComments } from "../action";
import { useDispatch } from "react-redux";

const ModalEditPost = ({ show, onHide, post, commentElement }) => {
  console.log(commentElement);
  const dispatch = useDispatch();

  const [comment, setComment] = useState({
    comment: commentElement.comment,
    rate: commentElement.rate,
    elementId: post._id,
  });

  useEffect(() => {
    setComment({
      comment: commentElement.comment,
      rate: commentElement.rate,
      elementId: post._id,
    });
  }, [commentElement]);

  const submit = (e) => {
    e.preventDefault();
    dispatch(editComment(commentElement._id, comment));
    setComment({
      comment: "",
      rate: 1,
      elementId: post._id,
    });
    dispatch(getComments());
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" dialogClassName="custom-modal" centered>
      <Modal.Body>
        <Modal.Title className="fs-5 mb-2">Modifica il tuo commento</Modal.Title>
        <Form onSubmit={submit} className="bg-transparent">
          <Form.Group
            className="d-flex align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              required
              type="text"
              placeholder="Lascia il tuo commento..."
              className="me-2 w-100 rounded-5"
              value={comment.comment}
              onChange={(e) =>
                setComment({
                  ...comment,
                  comment: e.target.value,
                })
              }
            />
            <Form.Label className="m-0 p-0 me-1">Valutazione</Form.Label>
            <Form.Control
              required
              as="select"
              className="w-15 me-3 fw-semibold"
              value={comment.rate}
              onChange={(e) =>
                setComment({
                  ...comment,
                  rate: e.target.value,
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
            <Button type="submit" variant="outline-success">
              <FaAngleRight className="fs-4 text-success" />
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalEditPost;
