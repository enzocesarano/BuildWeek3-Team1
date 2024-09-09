import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfileArea from "./components/ProfileArea";
import { Provider } from "react-redux";
import store from "./store";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-secondary-subtle vh-100">
      <Container>
        <Row>
          <Col className="col-8 mt-5">
            <ProfileArea />
          </Col>
          <Col className="col-4">
          </Col>
        </Row>
      </Container>
      </div>
    </Provider>
  );
}

export default App;
