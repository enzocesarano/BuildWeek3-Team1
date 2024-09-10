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
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
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

          <Col>
            <MessagingBox />
          </Col>
        </Row>
      </Container>
      {location.pathname !== "/home" && <MyFooter />}
    </div>
  );
}

export default App;
