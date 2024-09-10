import { Button, Form, Image, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import Cropper from "react-cropper";
import 'cropperjs/dist/cropper.css';
import { setMyImg } from "../action";

const ImageSet = (props) => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.myProfile);
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

  const handleSave = () => {
    if (cropper) {
      const canvas = cropper.getCroppedCanvas();
      if (canvas) {
        canvas.toBlob((blob) => {
          if (blob) {
            dispatch(setMyImg(myProfile._id, 'picture', blob));
          } else {
            console.error("Impossibile ottenere il blob dell'immagine");
          }
        }, 'image/jpeg');
      } else {
        console.error("Impossibile ottenere il canvas ritagliato");
      }
    } else {
      console.error("Cropper non è stato inizializzato");
    }


    setImage(null)
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        className="bg-dark border-0 text-light px-4"
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Foto profilo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark border-0 text-light text-center">
        {image ? (
          <Cropper
            src={image}
            style={{ height: 400, width: '100%' }}
            aspectRatio={1}
            guides={false}
            ref={cropperRef}
          />
        ) : (
          <Image src={myProfile.image} roundedCircle className="w-50" />
        )}
      </Modal.Body>
      <Modal.Footer className="bg-dark border-secondary text-light p-3 d-block">
        <Form className="d-flex justify-content-between">
          <Form.Control 
            type="file" 
            className="w-50 inputImg" 
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <Button variant="dark" onClick={handleSave}>Salva</Button>
        </Form>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageSet;