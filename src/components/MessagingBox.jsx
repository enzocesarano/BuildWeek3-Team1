import React, { useState } from "react";
import { Button, FormControl, Image, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const MessagingBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const myProfile = useSelector((state) => state.myProfile.myProfile);

  return (
    <div className={`messaging-box ${isOpen ? "open" : ""}`}>
      <div className="messaging-header">
        <div className="user-image">
          <Image src={myProfile.image} alt={myProfile.name} roundedCircle className="w-100" />
        </div>
        <Button onClick={toggleOpen} className="messaging-button p-0">
          Messaggistica
        </Button>
        <div className="icons">
          <i className="bi bi-three-dots"></i>
          <i className="bi bi-pencil-square"></i>
          <i
            className={`bi ${isOpen ? "bi-chevron-down" : "bi-chevron-up"}`}
            onClick={toggleOpen}
          ></i>
        </div>
      </div>
      {isOpen && (
        <div className="messaging-content">
          <InputGroup className="mb-3">
            <FormControl placeholder="Cerca" />
            <InputGroup.Text>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <InputGroup.Text>
              <i className="bi bi-funnel"></i>
            </InputGroup.Text>
          </InputGroup>
          <img
            src="https://static.licdn.com/aero-v1/sc/h/eeol4w9o9de2j4gq699mzx79d"
            alt="LinkedIn"
            className="linkedin-image"
          />
          <div className="no-messages">
            <h5>Ancora nessun messaggio</h5>
            <p>
              Entra in contatto e dai il via a una conversazione per far
              decollare la tua carriera
            </p>
            <Button
              variant="btn btn-outline-light"
              className="rounded-pill text-dark border border-1 border-dark"
            >
              Invia un messaggio
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagingBox;
