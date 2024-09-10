import { Col, Container, Row } from "react-bootstrap";



const SearchModal = ({filteredProfiles}) => {

    console.log(filteredProfiles)
    return (
        <Container>
            <Row>
                {filteredProfiles.slice(0,5).map((element) => {
                    <Col>
                    <h4>{element.name}</h4>
                    </Col>
                })}
            </Row>
        </Container>
      );
}

export default SearchModal