import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Google1 from "../../../../Assets/Google1.png";
import Microsoft from "../../../../Assets/Microsoft.png";
import Paper from "../../../../Assets/paper.png";

function MailProvider(props) {
  const [isOpen, setOpen] = useState(false);
  const [isActiveGgle, setActiveGgle] = useState("false");
  const handleToggleGgle = () => {
    setActiveGgle(!isActiveGgle);
  };
  const [isActiveMcrsft, setActiveMcrsft] = useState("false");
  const handleToggleMcrsft = () => {
    setActiveMcrsft(!isActiveMcrsft);
  };
  const [isActivePlane, setActivePlane] = useState("false");
  const handleTogglePlane = () => {
    setActivePlane(!isActivePlane);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose you email provider
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row mx-auto">
          <div className="col-4">
            <div
              className={
                isActiveGgle
                  ? "dayb border-2 mx-1 px-2 py-2 text-center"
                  : "bg-greyL brdr-r-G brdr-r-2 border-2 text-center px-2 py-2 mx-1"
              }
              onClick={handleToggleGgle}
            >
              <img src={Google1} alt="" className="py-3 mt-2" />
              <h5>Google Account</h5>
              <p className="font-15 font-grey mb-4">Gmail and G Suite</p>
            </div>
          </div>
          <div className="col-4">
            <div
              className={
                isActiveMcrsft
                  ? "dayb border-2 mx-1 px-2 py-2 text-center"
                  : "bg-greyL brdr-r-G brdr-r-2 border-2 text-center px-2 py-2 mx-1"
              }
              onClick={handleToggleMcrsft}
            >
              <img src={Microsoft} alt="" className="py-3 mt-2" />
              <h5>Google Account</h5>
              <p className="font-15 font-grey mb-4">Gmail and G Suite</p>
            </div>
          </div>
          <div className="col-4">
            <div
              className={
                isActivePlane
                  ? "dayb border-2 mx-1 px-2 py-2 text-center"
                  : "bg-greyL brdr-r-G brdr-r-2 border-2 text-center px-2 py-2 mx-1"
              }
              onClick={handleTogglePlane}
            >
              <img src={Paper} alt="" className="py-3 mt-2" />
              <h5>Google Account</h5>
              <p className="font-15 font-grey mb-4">Gmail and G Suite</p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="px-4">
          Add Email Account
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MailProvider;
