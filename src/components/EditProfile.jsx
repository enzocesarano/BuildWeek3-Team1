import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditProfile = (props) => {

    const [profile, setProfile] = useState({
        name: '',
        surname: '',
        username: '',
        area: '',
        bio: '',
    })

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modifica presentazione
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="mb-1">Nome</Form.Label>
            <Form.Control type="text" placeholder="Mario" className="mb-3" onChange={(e) => {
                setProfile(e.target.value)
            }} value={profile.name}/>
            <Form.Label className="mb-1">Cognome</Form.Label>
            <Form.Control type="text" placeholder="Rossi" className="mb-3" />
            <Form.Label className="mb-1">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="mario.rossi"
              className="mb-3"
            />
            <Form.Label className="mb-1">Area</Form.Label>
            <Form.Control type="text" placeholder="Roma" className="mb-3" />
            <Form.Label className="mb-1">Biografia</Form.Label>
            <Form.Control type="text" placeholder="Ciao, sono Mario Rossi!" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfile;
