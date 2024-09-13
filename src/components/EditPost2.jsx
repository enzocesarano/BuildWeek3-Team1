import { useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  Image,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setImgPost, setMyPost } from "../action";
import { Cropper } from "react-cropper";

const EditPost2 = ({ show, onHide, element, function1 }) => {
  const [image, setImage] = useState(null);
  const [cropper, setCropper] = useState(null);
  const fileInputRef = useRef(null);
  const cropperRef = useRef(null);

  useEffect(() => {
    if (cropperRef.current) {
      setCropper(cropperRef.current.cropper);
    }
  }, [image]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const [postSelect, setPostSelect] = useState();

  const handleClick = (post) => {
    setPostSelect(post);
    setModalShow(true);
  };

  useEffect(() => {
    if (element) {
      setValue(element.text);
    }
  }, [element]);

  const handleSubmit = (id, post) => {
    dispatch(setMyPost(id, post));
    if (cropper) {
      const canvas = cropper.getCroppedCanvas();
      if (canvas) {
        canvas.toBlob((blob) => {
          if (blob) {
            dispatch(setImgPost(element._id, blob));
          } else {
            console.error("Impossibile ottenere il blob dell'immagine");
          }
        }, "image/jpeg");
      } else {
        console.error("Impossibile ottenere il canvas ritagliato");
      }
    } else {
      console.error("Cropper non è stato inizializzato");
    }

    setImage(null);
    onHide();
    function1(() => function1);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Modifica post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="postContent">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Di cosa vuoi parlare?"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </Form.Group>
          <div>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Aggiungi emoji</Tooltip>}
            >
              <i className="bi bi-emoji-smile-fill me-4 icon-pointer"></i>
            </OverlayTrigger>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex align-items-center">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Aggiungi contenuto multimediale</Tooltip>}
                onClick={() => handleClick(element._id)}
              >
                <i className="bi bi-image me-4 icon-pointer"></i>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Crea un evento</Tooltip>}
              >
                <i className="bi bi-calendar4-week me-4 icon-pointer"></i>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Festeggia un’occasione speciale</Tooltip>}
              >
                <i className="bi bi-patch-plus-fill me-4 icon-pointer"></i>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Fai sapere che stai assumendo</Tooltip>}
              >
                <i className="bi bi-briefcase-fill me-4 icon-pointer"></i>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Crea un sondaggio</Tooltip>}
              >
                <i className="bi bi-bar-chart-line-fill me-4 icon-pointer"></i>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Aggiungi un documento</Tooltip>}
              >
                <i className="bi bi-file-earmark-text-fill me-4 icon-pointer"></i>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Trova un esperto</Tooltip>}
              >
                <i className="bi bi-person-badge-fill icon-pointer"></i>
              </OverlayTrigger>
            </div>
            <Form.Control
              type="file"
              className="w-50 inputImg"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            <Button
              variant="primary"
              onClick={() => handleSubmit(element._id, value)}
            >
              Modifica
            </Button>
          </div>
        </Form>
        <div className="text-light text-center w-100 mt-4">
          {image ? (
            <Cropper
              src={image}
              style={{ height: 400, width: "100%" }}
              aspectRatio={16/9}
              guides={false}
              ref={cropperRef}
            />
          ) : (
            <Image className="w-100 mt-4"
              src={
                element
                  ? element.image
                  : "https://www.bbcpump.com/wp-content/uploads/manufacturer/industrial-salesperson/bbc-sales-career-icon.png"
              }
            />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditPost2;


/* cazz */
