
import ProfileArea from "./components/ProfileArea";
import PostList from "./components/PostList";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MyFooter from "./components/MyFooter";
import MessagingBox from "./components/MessagingBox";
import NavScroll from "./components/MyNav";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import { getComments, getExperience, getProfile } from "./action";
import { useEffect, useState } from "react";
import SearchJob from "./components/SearchJob";
import JobDetails from "./components/JobDetails";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}

function AppContent() {
  const location = useLocation();
  const myProfile = useSelector((state) => state.myProfile.myProfile);
  const searchProfile = useSelector((state) => state.searchProfile.searchProfile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile("66deab4f4d0def0015cef0f9"));
    dispatch(getComments(""));
  }, []);

  return (
    <div className="bgApp">
      <NavScroll />
      <Container>
        <Row className="py-5">
          {location.pathname === "/" ? (
            <Col className="col-12 py-5">
              <Home />
            </Col>
          ) : location.pathname === "/search-job" ? (
            <Col className="col-12 py-5">
              <SearchJob />
            </Col>
          ) : location.pathname.startsWith("/job/") ? (
            <Col className="col-12 mt-5">
              <Routes>
                <Route path="/job/:id" element={<JobDetails />} />
              </Routes>
            </Col>
          ) : (
            <>
              <Col className="col-12 col-md-8 mt-5">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile/:id" element={<ProfileArea />} />
                  <Route path="/search-job" element={<SearchJob />} />
                  <Route path="/job/:id" element={<JobDetails />} />
                  <Route path="/job-details" element={<JobDetails />} />
                  <Route path="/post-list/:id" element={<PostList />} />
                </Routes>
              </Col>
              {location.pathname === "/profile"
                ? myProfile && <Sidebar myProfile={myProfile} />
                : searchProfile && <Sidebar myProfile={searchProfile} />}
            </>
          )}

          {location.pathname !== "/search-job" && !location.pathname.startsWith("/job/") && (
            <Col>
              <MessagingBox />
            </Col>
          )}
        </Row>
      </Container>
      {location.pathname !== "/" && location.pathname !== "/search-job" && !location.pathname.startsWith("/job/") && (
        <MyFooter />
      )}
    </div>
  );
}

export default App;
