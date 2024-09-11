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
import { getProfile } from "./action";
import { useEffect } from "react";
import SearchJob from "./components/SearchJob";

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
    dispatch(getProfile("me", ""));
  }, []);

  return (
    <div className="bg-secondary-subtle">
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
          ) : (
            <>
              <Col className="col-12 col-md-8 mt-5">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<ProfileArea myProfile={myProfile} />} />
                  <Route path="/profile/:id" element={<ProfileArea myProfile={searchProfile} />} />
                  <Route path="/search-job" element={<SearchJob />} />
                </Routes>
              </Col>
              {location.pathname === "/profile" ? (
                <LinkedInSidebar myProfile={myProfile} />
              ) : (
                <LinkedInSidebar myProfile={searchProfile} />
              )}
            </>
          )}

          {location.pathname !== "/search-job" && (
            <Col>
              <MessagingBox />
            </Col>
          )}
        </Row>
      </Container>
      {location.pathname !== "/" && location.pathname !== "/search-job" && <MyFooter />}
    </div>
  );
}
export default App;
