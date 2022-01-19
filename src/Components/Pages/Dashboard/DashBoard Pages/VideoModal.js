import React , {useState} from "react";
import { Modal } from "react-bootstrap";
import ModalVideo from "react-modal-video";

function MyVerticallyCenteredModal(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="62GOTb0YwiA"
        onClose={() => setOpen(false)}
      /> */}
      <video src="https://www.youtube.com/watch?v=62GOTb0YwiA&t=5s"></video>
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
