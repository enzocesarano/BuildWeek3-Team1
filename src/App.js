import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfileArea from "./components/ProfileArea";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { Col, Container, Row } from "react-bootstrap";
import LinkedInSidebar from "./components/Sidebar";
import MyFooter from "./components/MyFooter";
import MessagingBox from "./components/MessagingBox";
import NavScroll from "./components/MyNav";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import { getExperience, getProfile } from "./action";
import { useEffect, useState } from "react";
import SearchJob from "./components/SearchJob";
import JobDetails from "./components/JobDetails";

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

  const [id, setId] = useState("66deab4f4d0def0015cef0f9");

  useEffect(() => {
    setId(location.pathname.split("/").pop());
  }, [location]);

  useEffect(() => {
    dispatch(getExperience(id));
  }, [id]);

  useEffect(() => {
    dispatch(getProfile("66deab4f4d0def0015cef0f9", ""));
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
                  <Route path="/profile/66deab4f4d0def0015cef0f9" element={<ProfileArea myProfile={myProfile} />} />
                  <Route path="/profile/:id" element={<ProfileArea myProfile={searchProfile} />} />
                  <Route path="/search-job" element={<SearchJob />} />
                </Routes>
              </Col>
              {location.pathname.startsWith("/profile") && (
                <LinkedInSidebar myProfile={location.pathname === "/profile" ? myProfile : searchProfile} />
              )}
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
