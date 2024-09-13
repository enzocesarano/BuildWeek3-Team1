import React, { useState } from "react";
import { Button, FormControl, Image, InputGroup, OverlayTrigger, Popover } from "react-bootstrap";
import { useSelector } from "react-redux";

const MessagingBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const popoverDot = (
    <Popover id="popover-basic">
      <Popover.Body>
        <div>
          <div className="cursor-pointer-pop mb-2">Gestisci conversazioni</div>
          <div className="cursor-pointer-pop mb-2">Impostazioni messaggistica</div>
          <div className="cursor-pointer-pop mb-2">Posta in arrivo di richieste messaggi</div>
          <div className="cursor-pointer-pop mb-2">Imposta messaggio di assenza</div>
        </div>
      </Popover.Body>
    </Popover>
  );
  const popoverFilt = (
    <Popover id="popover-basic">
      <Popover.Body>
        <div>
          <div className="cursor-pointer-pop mb-2">Da leggere</div>
          <div className="cursor-pointer-pop mb-2">Contrassegnati con una stella</div>
          <div className="cursor-pointer-pop mb-2">Messaggi in mail</div>
          <div className="cursor-pointer-pop mb-2">I miei collegamenti</div>
          <div className="cursor-pointer-pop mb-2">Archiviati</div>
          <div className="cursor-pointer-pop mb-2">Posta indesiderata</div>
        </div>
      </Popover.Body>
    </Popover>
  );

  const myProfile = useSelector((state) => state.myProfile.myProfile);

  return (
    <div className={`messaging-box ${isOpen ? "open" : ""} d-none d-md-block`}>
      <div className="messaging-header">
        <div className="user-image">
          <Image src={myProfile.image} alt={myProfile.name} roundedCircle className="w-100" />
        </div>
        <Button onClick={toggleOpen} className="messaging-button p-0">
          Messaggistica
        </Button>
        <div className="icons d-flex">
          <OverlayTrigger trigger="click" placement={isOpen ? "bottom" : "top"} overlay={popoverDot}>
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
            <OverlayTrigger trigger="click" placement={isOpen ? "bottom" : "top"} overlay={popoverFilt}>
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
          <div className="no-messages d-flex flex-column align-items-center">
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
