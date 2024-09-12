import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import { Plus, PencilSquare, ArrowRight, Trash } from "react-bootstrap-icons";
import {
  FaRegImage,
  FaRegCalendarAlt,
  FaCertificate,
  FaUserTie,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import { deleteMyPost } from "../action";
import { useDispatch } from "react-redux";

const ActivityProfile = ({ showButton = true, userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();

  const deletePost = (id) => {
    dispatch(deleteMyPost(id));
  };

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      fetchPosts();
    }
  }, []);

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
        const userPosts = data.filter((post) => post.user._id === userId);
        setPosts(userPosts);
        localStorage.setItem("posts", JSON.stringify(userPosts));
      } else {
        console.error("Errore nel recupero dei post");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
        const newPost = await response.json();
        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        setPostContent("");
        handleClose();
      } else {
        console.error("Errore nella pubblicazione del post");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
    setIsPublishing(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  return (
    <div className="card-profile-wrapper bg-light">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mb-0">Attività</h5>
          <small className="text-primary">{posts.length} post</small>
        </div>
        <div>
          {showButton ? (
            <Button
              variant="outline-primary"
              onClick={handleShow}
              className="me-2"
            >
              <Plus /> Crea un post
            </Button>
          ) : (
            <Plus />
          )}
          <PencilSquare size={25} />
        </div>
      </div>

      <div className="card-content">
        {posts.length === 0 ? (
          <div className="text-center">
            <h6>Non hai ancora pubblicato nulla</h6>
            <p>I post che condividi appariranno qui</p>
          </div>
        ) : (
          posts.map((post) => (
            <Card className="mb-3" key={post._id}>
              <Card.Body className="d-flex justify-content-between align-items-start">
                <div>
                  <Card.Text>{post.text}</Card.Text>
                  <Card.Subtitle className="text-muted">
                    {formatDate(post.createdAt)}
                  </Card.Subtitle>
                </div>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    console.log(post._id)
                    deletePost(post._id);
                  }}
                >
                  <Trash />
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>

      {showButton && (
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="footer-content">Mostra tutti i post</div>
          <ArrowRight />
        </div>
      )}

      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="custom-modal"
      >
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
              />
            </Form.Group>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex align-items-center">
                <FaRegImage className="me-3" />
                <FaRegCalendarAlt className="me-3" />
                <FaCertificate className="me-3" />
                <MdWork className="me-3" />
                <RiBarChart2Fill className="me-3" />
                <IoIosDocument className="me-3" />
                <FaUserTie />
              </div>
              <Button
                variant="primary"
                onClick={handlePublish}
                disabled={!postContent || isPublishing}
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
