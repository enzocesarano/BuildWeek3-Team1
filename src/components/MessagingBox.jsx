import React, { useState } from "react";
import { Button, FormControl, InputGroup, OverlayTrigger, Popover } from "react-bootstrap";

const MessagingBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <div>
          <div>Gestisci conversazioni</div>
          <div>Impostazioni messaggistica</div>
          <div>Posta in arrivo di richieste messaggi</div>
          <div>Imposta messaggio di assenza</div>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className={`messaging-box ${isOpen ? "open" : ""} d-none d-md-block`}>
      <div className="messaging-header">
        <div className="user-image"></div>
        <Button onClick={toggleOpen} className="messaging-button p-0 ms-1">
          Messaggistica
        </Button>
        <div className="icons d-flex">
          <OverlayTrigger trigger="click" placement={isOpen ? "bottom" : "top"} overlay={popover}>
            <i className="bi bi-three-dots cursor-pointer"></i>
          </OverlayTrigger>

          <i className="bi bi-pencil-square"></i>
          <i
            className={`bi ${isOpen ? "bi-chevron-down" : "bi-chevron-up"}`}
            onClick={toggleOpen}
          ></i>
        </div>
      </div>

      {isOpen && (
        <div className="messaging-content d-flex flex-column align-items-center">
          <InputGroup className="mb-3 me-2 search-box">
            <InputGroup.Text className="search-icon">
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <FormControl
              placeholder="Cerca messaggi"
              className="search-input"
            />
            <OverlayTrigger trigger="click" placement={isOpen ? "bottom" : "top"} overlay={popover}>
              <InputGroup.Text className="filter-icon cursor-pointer">
                <i className="bi bi-sliders"></i>
              </InputGroup.Text>
            </OverlayTrigger>
          </InputGroup>
          <div className="mb-3">
            <img
              src="https://static.licdn.com/aero-v1/sc/h/eeol4w9o9de2j4gq699mzx79d"
              alt="LinkedIn-MSG-none"
              className="w-75"
            />
          </div>
          <div className="no-messages">
            <h5 className="fs-3 fw-normal mb-3">Ancora nessun messaggio</h5>
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

