import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfileArea from "./components/ProfileArea";
import { Provider } from "react-redux";
import store from "./store";
import { Col, Container, Row } from "react-bootstrap";
import LinkedInSidebar from "./components/Sidebar";
import MyFooter from "./components/MyFooter";
import NavScrollExample from "./components/MyNav";
import MessagingBox from "./components/MessagingBox";
import NavScroll from "./components/MyNav";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-secondary-subtle">
        <NavScrollExample />
        <Container>
          <Row className="py-5">
            <Col className="col-12 col-md-8 mt-5">
              <ProfileArea />
            </Col>
            <LinkedInSidebar />
          </Row>
        </Container>
        <MyFooter />
        <MessagingBox />
      </div>
    </Provider>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="bg-secondary-subtle">
      <NavScroll />
      <Container>
        <Row className="py-5">
          {location.pathname === "/home" ? (
            <Col className="col-12 py-5">
              <Home />
            </Col>
          ) : (
            <>
              <Col className="col-12 col-md-8 mt-5">
                <Routes>
                  <Route path="/" element={<ProfileArea />} />
                </Routes>
              </Col>
              <LinkedInSidebar />
            </>
          )}
        </Row>
      </Container>
      {location.pathname !== "/home" && <MyFooter />}
    </div>
  );
}

export default App;
