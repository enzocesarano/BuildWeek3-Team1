import React, { useReducer, useEffect, useState } from "react";
import { Button, Card, Image, Popover, OverlayTrigger } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

import postsReducer from "../reducers/postReducer";
import { setPosts } from "../action";
import {
  HandThumbsUp,
  ChatLeftText,
  ArrowRepeat,
  Send,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import CommentArea from "./CommentArea";
import SendPost from "./SendPost";

const CenterHomeTest = ({ loggedInUserId }) => {
  const [state, dispatch] = useReducer(postsReducer, { posts: [] });
  const arrayAllProfiles2 = useSelector(
    (state) => state.arrayAllProfiles.arrayAllProfiles
  );

  const [click, setClick] = useState(true);

  const [showModal2, setShowModal2] = useState(false);
  const myProfile = useSelector((state) => state.myProfile.myProfile);
  const comments = useSelector((state) => state.comments.comments);
  const [visibleComments, setVisibleComments] = useState(null);

  const handleSet = () => {
    setClick(!click);
  };

  const handleComment = (postId) => {
    setVisibleComments((prevPostId) => (prevPostId === postId ? null : postId));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  
  useEffect(() => {
    fetchPosts()
  }, [click])

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
      const data = await response.json();

      const userPosts = data.filter((post) => post.userId === loggedInUserId);

      const sortedPosts = userPosts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      const latestPosts = sortedPosts.slice(0, 40);

      dispatch(setPosts(latestPosts));
    } catch (error) {
      console.error("Errore nel recupero dei post:", error);
    }
  };

  const popoverDot = (
    <Popover id="popover-basic">
      <Popover.Body>
        <div>
          <div className="cursor-pointer-pop mb-2">
            <i className="bi bi-bookmark me-2"></i>Salva
          </div>
          <div className="cursor-pointer-pop mb-2">
            <i className="bi bi-copy me-2"></i>Copia link al post
          </div>
          <div className="cursor-pointer-pop mb-2">
            <i className="bi bi-code-slash me-2"></i>Incorpora questo post
          </div>
          <div className="cursor-pointer-pop mb-2">
            <i className="bi bi-eye-slash-fill me-2"></i>Non mi interessa
          </div>
          <div className="cursor-pointer-pop mb-2">
            <i className="bi bi-x-circle-fill me-2"></i>Smetti di seguire
          </div>
          <div className="cursor-pointer-pop mb-2">
            <i className="bi bi-flag-fill me-2"></i>Segnala post
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="home-page">
      <div className="header">
        <Card className="rounded-3 mb-4">
          <Card.Body className="d-flex justify-content-between">
            <div
              className="overflow-hidden rounded-circle me-3"
              style={{ width: "50px", height: "50px" }}
            >
              <Image src={myProfile.image} alt="" className="w-100" />
            </div>
            <Button
              variant="outline-secondary"
              className="w-80 me-3 rounded-5 flex-grow-1"
              onClick={() => setShowModal2(!showModal2)}
            >
              Crea un nuovo post...{" "}
            </Button>
            <Button type="submit" variant="outline-success">
              <FaAngleRight className="fs-4" />
            </Button>
          </Card.Body>
        </Card>
        <SendPost
          show={showModal2}
          onHide={() => setShowModal2(false)}
          function1={() => handleSet()}
        />
      </div>

      <div className="posts-list">
        {state.posts.map((post) => {
          return arrayAllProfiles2.map((element, i) => {
            if (element._id === post.user._id) {
              return (
                <Card key={post._id} className="my-1 border-0 bg-transparent">
                  <Card.Body className="card-container bg-light">
                    <div className="card-home-header mb-3 align-items-center">
                      <div className="d-flex align-items-center">
                        <div
                          className="me-3 overflow-hidden rounded-circle"
                          style={{ width: "50px", height: "50px" }}
                        >
                          <Image
                            src={element.image}
                            alt=""
                            className="w-100 object-fit-cover"
                          />
                        </div>

                        <div>
                          <div className="card-title text-start mb-0">
                            {post.user.name} {post.user.surname}
                          </div>
                          <div className="card-home-subtitle text-start">
                            @{post.username}
                          </div>
                        </div>
                      </div>
                      <div className="button-title">
                        <button
                          type="button"
                          className="btn btn-light text-primary card-header-button"
                        >
                          Segui
                        </button>
                        <OverlayTrigger
                          trigger="click"
                          placement={"bottom"}
                          overlay={popoverDot}
                        >
                          <i className="bi bi-three-dots cursor-pointer"></i>
                        </OverlayTrigger>
                      </div>
                    </div>

                    <div className="card-text mb-3">
                      <Card.Text>{post.text}</Card.Text>
                    </div>
                    {post.image && (
                      <div className="mb-4 w-100">
                        <Image
                          src={post.image}
                          className="w-100 rounded-2"
                          alt={post._id}
                        />
                      </div>
                    )}

                    <Card.Footer className="text-muted text-end card-home-footer text-end">
                      <p className="mb-0">
                        Pubblicato il{" "}
                        {new Date(post.createdAt).toLocaleString()}
                      </p>
                    </Card.Footer>
                    <div className="card-home-button border border-0 border-bottom  rounded-2 border-1 border-secondary-subtle mb-3">
                      <button type="button" className="btn  text-dark">
                        <HandThumbsUp className="m-2" />
                        Consiglia
                      </button>
                      <button
                        type="button"
                        className="btn  text-dark"
                        onClick={() => handleComment(post._id)}
                      >
                        <ChatLeftText className="m-2" />
                        Commenti {""}{" "}
                        {
                          comments.filter(
                            (comment) => comment.elementId === post._id
                          ).length
                        }
                      </button>
                      <button type="button" className="btn  text-dark">
                        <ArrowRepeat className="m-2" />
                        Diffondi il post
                      </button>
                      <button type="button" className="btn  text-dark">
                        <Send className="m-2" />
                        Invia
                      </button>
                    </div>

                    {visibleComments === post._id && (
                      <CommentArea key={i} post={post} />
                    )}
                  </Card.Body>
                </Card>
              );
            }
          });
        })}
      </div>
    </div>
  );
};

export default CenterHomeTest;

/*  comments.map((element, i) => {
                        if (element.elementId === post._id) {
                          return ;
                        }
                      }) */
