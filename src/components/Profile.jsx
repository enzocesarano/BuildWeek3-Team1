import { useEffect, useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import ImageSet from "./ImageSet";
import { Route, useLocation } from "react-router-dom";
import { getExperience } from "../action";
import PostList from "./PostList";

const Profile = ({myProfile}) => {

  const location = useLocation();

  const [modalShow, setModalShow] = useState(false);
  const [modalShowImg, setModalShowImg] = useState(false);
  const dispatch = useDispatch();
  const [id, setId] = useState("66deab4f4d0def0015cef0f9");

  useEffect(() => {
    setId(location.pathname.split("/").pop());
  }, [location]);

  useEffect(() => {
    if(location.pathname !== '/search-job' ){
      dispatch(getExperience(id));
    } else if (location.pathname !== '/'){
      dispatch(getExperience(id));
    }
  }, [id]);


  return (
    <>
    {myProfile && <Card className="bg-light mb-3">
        <div className="position-relative">
          <Card.Img
            variant="top"
            src="https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq"
            className="mb-5"
          />
          {location.pathname === "/profile/66deab4f4d0def0015cef0f9" ? <div className="position-absolute top-0 end-0 me-4 mt-4 pointer fs-4">
            <i className="bi bi-camera"></i>
          </div> : <></>}
          <div className="w-100 position-absolute bottom-0 px-4 d-flex justify-content-between align-items-end">
          {location.pathname === "/profile/66deab4f4d0def0015cef0f9" ? <div
              className="rounded-circle border border-3 border-light sizeImg overflow-hidden pointer"
              onClick={() => setModalShowImg(true)}
            >
              <img src={myProfile.image} alt={myProfile.name} className=" w-100" />
            </div> : <div
              className="rounded-circle border border-3 border-light sizeImg overflow-hidden"
            >
              <img src={myProfile.image} alt={myProfile.name} className=" w-100" />
            </div>}
            <div className="pointer">
              {location.pathname === "/profile/66deab4f4d0def0015cef0f9" ? <i className="bi bi-pencil fs-4" onClick={() => setModalShow(true)}></i> : <></>}
            </div>
          </div>
        </div>

        <Card.Body className="px-4 py-3">
          <div className="d-flex align-items-end mb-2">
            <Card.Title className="fs-4 mb-0">
              {myProfile.name} {myProfile.surname}
            </Card.Title>
            {location.pathname === "/profile/66deab4f4d0def0015cef0f9" ? <Button className="btnOutline borderDashed bg-transparent rounded-5 ms-3 py-0 fw-medium">
              <i className="bi bi-patch-check fw-medium"></i> Verifica ora
            </Button> : <></>}
          </div>
          <Card.Text className="mb-2 text-secondary-emphasis">{myProfile.title}</Card.Text>
          <Card.Text className="text-secondary">
            {myProfile.area} • {""}
            <span className="infoProfile pointer fw-medium">Informazioni di contatto</span>
          </Card.Text>
          <Card.Text>
            <span className="infoProfile pointer fw-medium">56 collegamenti</span>
          </Card.Text>
          <ButtonGroup className="d-block d-md-inline-block">
            <Button className="btnBg border-0 rounded-5 fw-bold me-2 mb-2">Disponibile per</Button>
            <Button className="btnOutline bg-transparent me-2 rounded-5 fw-bold mb-2">
              Aggiungi sezione del profilo
            </Button>
            <Button className="btnOutline bg-transparent me-2 rounded-5 fw-bold mb-2">Migliora profilo</Button>
            <Button className="btnOutline bg-transparent me-2 rounded-5 fw-bold mb-2">Atro</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>}

      <EditProfile show={modalShow} onHide={() => setModalShow(false)} />
      <ImageSet show={modalShowImg} onHide={() => setModalShowImg(false)} />
      
    </>
  );
};

export default Profile;
