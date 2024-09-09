import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Dropdown } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-light py-4 ">
      <div className="container ">
        <div className="row">
          <div className="col-md-2">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Informazioni
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Informativa sulla community professionale
                </a>
              </li>
              <li className="mb-4">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    className="text-secondary text-decoration-none p-0"
                    id="dropdown-basic"
                  >
                    Privacy e condizioni
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Informativa sulla privacy</Dropdown.Item>
                    <Dropdown.Item href="#">Contratto di licenza</Dropdown.Item>
                    <Dropdown.Item href="#">Termini e condizioni delle pagine</Dropdown.Item>
                    <Dropdown.Item href="#">Informativa sui cookie</Dropdown.Item>
                    <Dropdown.Item href="#">Informativa sul copyright</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Sales Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Centro sicurezza
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Accessibilità
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-secondary text-decoration-none">
                  Carriera
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Opzioni per gli annunci pubblicitari
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Mobile
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Talent Solutions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-secondary text-decoration-none">
                  Soluzioni di marketing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-secondary text-decoration-none">
                  Pubblicità
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Piccole imprese
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <div className="d-flex">
                <i className="bi bi-question-circle-fill me-2 fs-4"></i>
                <li className="mb-3 text-secondary">
                  Domande?
                  <br />
                  Visita il nostro Centro assistenza.
                </li>
              </div>
              <div className="d-flex">
                <i className="bi bi-gear-fill me-2 fs-4"></i>
                <li className="mb-3">
                  Gestisci il tuo account e la tua privacy
                  <br /> Vai alle impostazioni
                </li>
              </div>
              <div className="d-flex">
                <i className="bi bi-shield-shaded me-2 fs-4"></i>
                <li className="mb-3">
                  Trasparenza sui contenuti consigliati <br /> Scopri di più sui
                  contenuti consigliati
                </li>
              </div>
            </ul>
          </div>
          <div className="col-md-2">
            <label htmlFor="language" className="me-2">
              Seleziona lingua
            </label>
            <select id="language" className="form-select d-inline w-auto">
              <option value="it"> Italiano (Italiano)</option>
              <option value="en"> English (Inglese)</option>
              <option value="fr"> French (Francese)</option>
              <option value="ge"> Deutsch (Tedesco)</option>
            </select>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p className="text-secondary">LinkedIn Corporation © 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
