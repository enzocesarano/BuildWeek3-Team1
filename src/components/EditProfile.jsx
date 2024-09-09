import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setMyProfile } from "../action";

const EditProfile = (props) => {

    const dispatch = useDispatch()
  const myProfile = useSelector((state) => state.myProfile.myProfile);

  const [profile, setProfile] = useState({
    name: "",
    surname: "",
    username: "",
    area: "",
    bio: "",
  });

  useEffect(() => {
    if (myProfile) {
      setProfile({
        name: myProfile.name,
        surname: myProfile.surname,
        username: myProfile.username,
        area: myProfile.area,
        bio: myProfile.bio,
      });
    }
  }, [myProfile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const onSubmitBtn = () => {
    dispatch(setMyProfile(profile));
    props.onHide()
  }


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
            <Form.Control
              type="text"
              placeholder="Mario"
              className="mb-3"
              name="name"
              onChange={handleInputChange}
              value={profile.name}
            />
            <Form.Label className="mb-1">Cognome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Rossi"
              className="mb-3"
              name="surname"
              onChange={handleInputChange}
              value={profile.surname}
            />
            <Form.Label className="mb-1">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="mario.rossi"
              className="mb-3"
              name="username"
              onChange={handleInputChange}
              value={profile.username}
            />
            <Form.Label className="mb-1">Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Roma"
              className="mb-3"
              name="area"
              onChange={handleInputChange}
              value={profile.area}
            />
            <Form.Label className="mb-1">Biografia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ciao, sono Mario Rossi!"
              name="bio"
              onChange={handleInputChange}
              value={profile.bio}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSubmitBtn}>Salva</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfile;