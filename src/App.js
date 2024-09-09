import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfileArea from "./components/ProfileArea";
import { Provider } from "react-redux";
import store from "./store";
import { Col, Container, Row } from "react-bootstrap";
import LinkedInSidebar from "./components/Sidebar";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-secondary-subtle">
        <Container>
          <Row>
            <Col className="col-12 col-md-8 mt-5">
              <ProfileArea />
            </Col>
            <LinkedInSidebar />
          </Row>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
