
import { Plus } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { deleteMyExperience } from "../action";
import { useDispatch, useSelector } from "react-redux";
import AddExperience from "./AddExperience";
import { Image } from "react-bootstrap";

import ImageSetExperience from "./ImageSetExperience";
import { useState } from "react";

const ExperienceCard = ({ showButton = true }) => {
  const location = useLocation();
  const experiences = useSelector((state) => state.experiences.experiences);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [modalShowEdit, setModalShowEdit] = useState(false);
  const [modalShowImg, setModalShowImg] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const formatDate = (format) => {
    const date = new Date(format);
    const options = { year: "numeric", month: "long" };
    const formattedDate = date.toLocaleDateString("it-IT", options);

    return formattedDate;
  };

  const handleDeleteExperience = (id) => {
    dispatch(deleteMyExperience(id));
  };

  return (
    <div className="card-profile-wrapper bg-light">
      <div className="card-header">
        <div className="left-section">
          <div className="title">Esperienza</div>
        </div>
        <div className="right-section">
          {location.pathname === "/profile/66deab4f4d0def0015cef0f9" ? (
            <Plus
              className="plus-button pointer"
              onClick={() => setModalShow(true)}
            />
          ) : (
            <></>
          )}
          <AddExperience show={modalShow} onHide={() => setModalShow(false)} />
          {selectedExperience && (
            <AddExperience
              show={modalShowEdit}
              onHide={() => setModalShowEdit(false)}
              element={selectedExperience}
            />
          )}
        </div>
      </div>
      <div className="card-content">
        {experiences.length > 0
          ? experiences.map((element) => (
              <div
                key={element._id}
                className="mb-4 d-flex justify-content-between align-items-start"
              >
                <div className="d-flex">
                  <div className="imageSet me-3">
                    {location.pathname ===
                    "/profile/66deab4f4d0def0015cef0f9" ? (
                      <Image
                        src={
                          element.image
                            ? element.image
                            : "https://www.bbcpump.com/wp-content/uploads/manufacturer/industrial-salesperson/bbc-sales-career-icon.png"
                        }
                        className="w-100 pointer"
                        alt={element.company}
                        onClick={() => {
                          setModalShowImg(true);
                          setSelectedImg(element);
                        }}
                      />
                    ) : (
                      <Image
                        src={
                          element.image
                            ? element.image
                            : "https://www.bbcpump.com/wp-content/uploads/manufacturer/industrial-salesperson/bbc-sales-career-icon.png"
                        }
                        className="w-100"
                        alt={element.company}
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="text-dark">{element.role}</h4>
                    <h5 className="text-secondary fw-bolder">
                      {element.company}
                    </h5>
                    <h6 className="text-secondary">
                      {formatDate(element.startDate)} -{" "}
                      {formatDate(element.endDate)}
                    </h6>
                    <h6 className="text-secondary">{element.area}</h6>
                  </div>
                </div>

                {location.pathname === "/profile/66deab4f4d0def0015cef0f9" ? (
                  <div className="d-flex align-items-center">
                    <i
                      className="bi bi-trash3-fill fs-4 me-3 pointer"
                      title="Elimina"
                      onClick={() => handleDeleteExperience(element._id)}
                    ></i>
                    <i
                      className="bi bi-pencil-square fs-4 pointer"
                      title="Modifica"
                      onClick={() => {
                        setSelectedExperience(element);
                        setModalShowEdit(true);
                      }}
                    ></i>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))
          : null}
      </div>
      <ImageSetExperience
        show={modalShowImg}
        onHide={() => setModalShowImg(false)}
        experiences={selectedImg}
      />
    </div>
  );
};

export default ExperienceCard;
