import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const myProfile = useSelector((state) => state.myProfile.myProfile);

  console.log(myProfile);

  return (
    <Card className="bg-light">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src="https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq"
          className="mb-5"
        />
        <div className="position-absolute top-0 end-0 me-4 mt-4 pointer fs-4">
          <i className="bi bi-camera"></i>
        </div>
        <div className="w-100 position-absolute bottom-0 px-4 d-flex justify-content-between align-items-end">
          <div className="rounded-circle border border-3 border-light sizeImg overflow-hidden">
            <img src={myProfile.image} alt="" className=" w-100" />
          </div>
          <div className="pointer">
            <i className="bi bi-pencil fs-4"></i>
          </div>
        </div>
      </div>

      <Card.Body className="px-4 py-3">
        <div className="d-flex align-items-end mb-2">
          <Card.Title className="fs-4 mb-0">
            {myProfile.name} {myProfile.surname}
          </Card.Title>
          <Button className="btnOutline borderDashed bg-transparent rounded-5 ms-3 py-0 fw-medium">
          <i className="bi bi-patch-check fw-medium"></i> Verifica ora
          </Button>
        </div>
        <Card.Text className="mb-2 text-secondary-emphasis">
          {myProfile.title}
        </Card.Text>
        <Card.Text className="text-secondary">
          {myProfile.area} • {""}
          <span className="infoProfile pointer fw-medium">
            Informazioni di contatto
          </span>
        </Card.Text>
        <Card.Text>
          <span className="infoProfile pointer fw-medium">56 collegamenti</span>
        </Card.Text>
        <ButtonGroup className="d-block d-md-inline-block">
          <Button className="btnBg border-0 rounded-5 fw-bold me-2 mb-2">
            Disponibile per
          </Button>
          <Button className="btnOutline bg-transparent me-2 rounded-5 fw-bold mb-2">
            Aggiungi sezione del profilo
          </Button>
          <Button className="btnOutline bg-transparent me-2 rounded-5 fw-bold mb-2">
            Migliora profilo
          </Button>
          <Button className="btnOutline bg-transparent me-2 rounded-5 fw-bold mb-2">
            Atro
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default Profile;
