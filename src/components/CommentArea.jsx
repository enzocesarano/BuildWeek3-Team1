import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  editComment,
  getComments,
  postComments,
} from "../action";
import ModalEditPost from "./ModalEditPost";

const CommentArea = ({ post }) => {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  const [commentSelect, setCommentSelect] = useState();
  const [modalShow, setModalShow] = useState(false);

  const handleClick = (comment) => {
    setCommentSelect(comment); // Imposta il commento selezionato
    setModalShow(true);
  };

  const arrayAllProfiles2 = useSelector(
    (state) => state.arrayAllProfiles.arrayAllProfiles
  );

  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: post._id,
  });

  const [click, setClick] = useState(false);

  const handleDeleteComment = (comment) => {
    dispatch(deleteComment(comment));
    dispatch(getComments());
    setClick(!click);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(postComments(comment));
    setComment({
      comment: "",
      rate: 1,
      elementId: post._id,
    });
    dispatch(getComments());
    setClick(!click);
  };

  useEffect(() => {
    dispatch(getComments());
  }, [click]);

  return (
    <>
      <Form onSubmit={submit}>
        <Form.Group
          className="mb-3 d-flex align-items-center"
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
      {comments.map((element, i) => {
        if (element.elementId === post._id) {
          return (
            <div
              className="mb-3 px-3 d-flex justify-content-between align-items-center"
              key={i}
            >
              <div>
                <p className="m-0 fs-small text-secondary">{element.author}</p>
                <h6 className="text-start">{element.comment}</h6>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="me-2">
                  <p className="fs-small text-secondary m-0">
                    {new Date(element.createdAt).toLocaleString()}
                  </p>
                  <h6 className="text-end">Rate: {element.rate}</h6>
                </div>
                <div className="d-flex align-items-center">
                  {arrayAllProfiles2.find(
                    (profile) => profile.email === element.author
                  ) ? (
                    <Button
                      variant="outline-danger"
                      className="border-0"
                      onClick={() => handleDeleteComment(element._id)}
                    >
                      <i className="bi bi-trash3"></i>
                    </Button>
                  ) : (
                    <Button
                      variant="outline-secondary"
                      className="border-0"
                      disabled
                    >
                      <i className="bi bi-trash3 text-secondary"></i>
                    </Button>
                  )}
                  {arrayAllProfiles2.find(
                    (profile) => profile.email === element.author
                  ) ? (
                    <Button
                      variant="outline-warning"
                      className="border-0"
                      onClick={() => handleClick(element)}
                    >
                      <i className="bi bi-pencil-square text-dark"></i>
                    </Button>
                  ) : (
                    <Button
                      variant="outline-secondary"
                      className="border-0"
                      disabled
                    >
                      <i className="bi bi-pencil-square text-secondary"></i>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        }
      })}

      {commentSelect && (
        <ModalEditPost
          show={modalShow}
          onHide={() => setModalShow(false)}
          post={post}
          commentElement={commentSelect}
        />
      )}
    </>
  );
};

export default CommentArea;
