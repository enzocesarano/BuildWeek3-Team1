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
      </div>
    </Provider>
  );
}

export default App;
