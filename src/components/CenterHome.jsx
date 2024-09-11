import React, { useReducer, useEffect, useState } from "react";
import { Button, Modal, Form, Card, Tooltip } from "react-bootstrap";
import { FaRegImage, FaRegCalendarAlt, FaCertificate, FaUserTie } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import postsReducer from "../reducers/postReducer";
import { setPosts, addPost } from "../action";

const CenterHome = ({ loggedInUserId }) => {
  const [state, dispatch] = useReducer(postsReducer, { posts: [] });
  const [showModal, setShowModal] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
        },
      });
      const data = await response.json();
      
      const userPosts = data.filter(post => post.userId === loggedInUserId);

      const sortedPosts = userPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      const latestPosts = sortedPosts.slice(0, 10);
      
      dispatch(setPosts(latestPosts));
    } catch (error) {
      console.error("Errore nel recupero dei post:", error);
    }
  };

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWI0ZjRkMGRlZjAwMTVjZWYwZjkiLCJpYXQiOjE3MjU4Njg5NzgsImV4cCI6MTcyNzA3ODU3OH0.vpenBJjVmYH1g5nrjB1BJV-hd86LkH7gLC7uZYGlZiE",
        },
        body: JSON.stringify({ text: postContent }),
      });
      if (response.ok) {
        const newPost = await response.json();
        dispatch(addPost(newPost));
        setPostContent("");
        handleClose();
      } else {
        console.error("Errore nella pubblicazione del post");
      }
    } catch (error) {
      console.error("Errore nella pubblicazione del post:", error);
    }
    setIsPublishing(false);
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="home-page">
      <div className="header">
        <h1>Notizie</h1>
        {loggedInUserId && (
          <button type="button" className="btn btn-outline-primary" onClick={handleShow}>
            Crea un post
          </button>
        )}
      </div>

      <div className="posts-list">
        {state.posts.map((post) => (
          <Card key={post._id} className="my-3">
            <Card.Body>
              <Card.Text>{post.text}</Card.Text>
              <Card.Footer className="text-muted">
                Pubblicato il {new Date(post.createdAt).toLocaleString()}
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default CenterHome;
