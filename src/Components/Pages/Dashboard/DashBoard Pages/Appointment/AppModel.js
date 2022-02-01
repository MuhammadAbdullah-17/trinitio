import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AppAdd from "../../../../../Assets/AppAdd.png";

function AppModel(props) {
  return (
    <Modal
      {...props}
      size="lg"
      className="col-12"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="row mx-auto">
          <div className="col px-0">
            <div className="d-flex">
              <img src={AppAdd} alt="" />
              <div>
                <h6>One-on-one Meeting</h6>
                <p className="font-15">
                  Your invitee can schedule an appointment at mutually preferred
                  time based on your set availability
                </p>
              </div>
            </div>
          </div>
          <div className="col-1 px-0">
            <button
              type="button"
              class="bg-green border-0 brdr-r-20 text-white px-2 py-2 mx-auto"
            >
              + Add
            </button>
          </div>
        </div>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppModel;
