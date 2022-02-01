import React, { useState } from "react";
import TCards from "./TCards";
import "../../../../Styles/trinitio1.css";
import ScheduledEvents from "./ScheduledEvents";
import { Button, ButtonGroup } from "react-bootstrap";
import Maskimg from "../../../../../Assets/MaskGroup.png";
import Videoimg from "../../../../../Assets/videoimg.png";
import MyVerticallyCenteredModal from "../VideoModal";
import AppModel from "./AppModel";
const DashboardApp = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShown, setModalShown] = useState(false);
  const [show, setShow] = useState(true);
  const [shown, setShown] = useState(false);
  return (
    <>
      <div className="col-10 float-right bg-grey pgstup">
        <div className="row mx-3 my-4">
          <div className="px-0 mt-4">
            <div className="row mx-2">
              <div className="row mx-auto">
                <div className="col-6 ml-2 mr-2 p-3 brdr-r-5 brdr-g bg-white">
                  <h4 className="mt-2">Current User</h4>
                  <div className="row mt-5 mb-5 mx-0 px-0">
                    <div className="col-3 mr-2">
                      <img src={Maskimg} alt="" />
                    </div>
                    <div className="col-3 p-0 mt-4">
                      <div className="d-flex">
                        <div className="profile-n mx-2 mt-2 text-bold">
                          John Doe
                        </div>
                        <i
                          class="fas fa-chevron-down mx-2 mt-2 pt-1"
                          onClick={() => setShown(!shown)}
                        ></i>
                        <div>
                          {shown ? (
                            <div className="position-absolute usrdrpdwn mt-4 bg-white p-1 col-12 brdr-r-2">
                              <div className="text-center">
                                <div className="text-left px-2 py-2 my-0 usrdrpdwnt">
                                  John Doe
                                </div>
                                <div className="text-left px-2 py-2 my-0 usrdrpdwnt">
                                  Willium Taylor
                                </div>
                                <div className="text-left px-2 py-2 my-0 usrdrpdwnt">
                                  Watson Taylor
                                </div>
                                <div className="text-center my-1">
                                  <button
                                    type="button"
                                    class="bg-green border-0 brdr-r-5 text-white px-3 py-2 mx-auto"
                                  >
                                    + Add User
                                  </button>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <a
                        href=""
                        className="font-green ml-2 text-decoration-none appusrLNK"
                      >
                        Pagespeedy.com/johndoe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-5 mr-3 ml-1 ">
                  <button className="border-0 bg-transparent">
                    <Button variant="" onClick={() => setModalShow(true)}>
                      <img src={Videoimg} alt="" />
                    </Button>
                  </button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
              <div className="row mt-3 align-items-center">
                <div className="col-7">
                  <ButtonGroup className="">
                    <Button
                      className="mainButtons py-3"
                      style={
                        show
                          ? {
                              color: "#2adc65",
                              borderBottom: "3px solid #2adc65",
                              boxShadow: "none",
                            }
                          : {}
                      }
                      variant="transparent"
                      onClick={() => setShow(true)}
                    >
                      Appointment Types
                    </Button>
                    <Button
                      className="mainButtons py-3"
                      variant="transparent"
                      style={
                        show
                          ? {}
                          : {
                              color: "#2adc65",
                              borderBottom: "3px solid #2adc65",
                              boxShadow: "none",
                            }
                      }
                      onClick={() => setShow(false)}
                    >
                      Scheduled Events
                    </Button>
                    <Button className="mainButtons py-3" variant="transparent">
                      Availability
                    </Button>
                    <Button className="mainButtons py-3" variant="transparent">
                      Tutorials
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="col-5 text-align-right">
                  <div className="row">
                    <div className="col-5 d-flex srch-bar py-2 brdr-r-30 bg-white px-2 font-grey mx-1">
                      <i class="fas fa-search txt-g mt-1 px-0"></i>
                      <div className="mx-2 px-1">Search & hit enter</div>
                    </div>
                    <div className="col-1 px-0 mx-2 brdr-r-30">
                      <i class="fas fa-cog bg-white brdr-r-30 p-3"></i>
                    </div>
                    <Button
                      variant="primary"
                      className="btn col-5 navBtn rounded-pill ms-auto"
                      onClick={() => setModalShown(true)}
                    >
                      Add Appointment Type
                    </Button>

                    <AppModel
                      show={modalShown}
                      onHide={() => setModalShown(false)}
                    />
                  </div>
                </div>
              </div>
              {show ? <TCards /> : <ScheduledEvents />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardApp;
