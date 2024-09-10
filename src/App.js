import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfileArea from "./components/ProfileArea";
import { Provider } from "react-redux";
import store from "./store";
import { Col, Container, Row } from "react-bootstrap";
import LinkedInSidebar from "./components/Sidebar";
import MyFooter from "./components/MyFooter";
import NavScroll from "./components/MyNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-secondary-subtle">
          <NavScroll />
          <Container>
            <Row className="py-5">
              <Col className="col-12 col-md-8 mt-5">
                <Routes>
                  <Route path="/" element={<ProfileArea />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </Col>
              <LinkedInSidebar />
            </Row>
          </Container>
          <MyFooter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
