import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"; // Importa useLocation
import { searchProfile } from "../action";

const SearchModal = ({ filteredProfiles, onProfileSelect }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container className="position-absolute top-100 start-0 overflow-hidden z-3">
      <Row className="bg-light border-1 rounded-2 p-2">
        {filteredProfiles.length > 0
          ? filteredProfiles.slice(0, 5).map((element) => (
              <Col
                key={element._id}
                xs={12}
                id={element._id}
                className="px-1 py-2 pointer"
                onClick={() => {
                  navigate(`/profile/${element._id}`);
                  dispatch(searchProfile(element._id));
                  onProfileSelect();
                }}
              >
                <div className="search-item d-flex justify-content-between align-items-baseline">
                  <div>
                    <h6 className="mb-1 p-0">
                      {element.name} {element.surname}
                    </h6>
                    <h6 className="m-0 p-0 supersmalltext text-secondary">{element.title}</h6>
                  </div>
                  <div className="imageSearch rounded-circle overflow-hidden">
                    <Image src={element.image} className="w-100 h-100 object-fit-cover" alt={element.name} />
                  </div>
                </div>
              </Col>
            ))
          : location.pathname !== "/search-job" && <p>Nessun risultato trovato</p>}
      </Row>
    </Container>
  );
};

export default SearchModal;
