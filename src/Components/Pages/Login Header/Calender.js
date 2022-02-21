import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Logo1.png";
import CalenderImg from "../../../Assets/schedule1.png";
import Points from "../../../Assets/Group539.png";
import cloud from "../../../Assets/cloud.svg";
import exchange from "../../../Assets/Exchange.svg";
import googleC from "../../../Assets/GoogleC.svg";
import apple from "../../../Assets/Apple.svg";
import microsoft from "../../../Assets/Microsoft.svg";
import outlook from "../../../Assets/outlook.svg";
import office from "../../../Assets/office.svg";
import union from "../../../Assets/Union.svg";
import { Dropdown } from "react-bootstrap";

const Calender = () => {
  return (
    <div className="mx-auto">
      <div className="mt-5">
        <div className="mx-auto text-center">
          <img src={Logo} alt="" className="logoimg" />
        </div>
        <div className="box-brdr mb-5 col-5 mx-auto mt-5">
          <div className="box-b row py-3">
            <div className="col-1 px-3 mt-3">
              <img src={CalenderImg} alt="" height="50px" width="50px" />
            </div>
            <div className="col-11 px-5 align-left">
              <div className="wlcm-txt d-flex">
                Connect your &nbsp; <div className="clr-grn">Calender</div>
              </div>
              <div className="mt-2 fs-6 fw-2">
                <p style={{ fontSize: "12px" }}>
                  Connect your calendar to auto-check for busy times and add new
                  events as they are scheduled.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white align-left px-2 py-2">
            <div className="row mt-3">
              <div className="col-2 pgname mt-1 text-center">
                <img src={union} alt="" />
                <div className="fw-bolder">Google</div>
              </div>
              <div className="col-10 dropWidth">
                <Dropdown className="m-1">
                  <div className="col-1 mt-1 float-left ">
                    <img src={googleC} alt="" />
                  </div>
                  <div className="col-11 ms-5 align-content-center">
                    <h6
                      style={{ fontSize: "15px" }}
                      className="text-black-50 text-left float-left mt-1 fw-bolder"
                    >
                      Google Calender
                      <br />
                      <span style={{ fontSize: "13px", fontWeight: "lighter" }}>
                        {" "}
                        G-Suite, GMail
                      </span>
                    </h6>
                    <div className=" col-1 ms-auto">
                      <Dropdown.Toggle
                        className=""
                        variant="light"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                    </div>
                  </div>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-2">G-Suite</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">GMail</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-2 mt-2 pgname text-center">
                <img src={microsoft} alt="" />
                <div className="fw-bolder text-left">Microsoft</div>
              </div>
              <div className="col-10 dropWidth">
                <Dropdown className="m-1">
                  <div className="col-1 float-left mt-1 ">
                    <img src={office} alt="" />
                  </div>
                  <div className="col-11 ms-5 align-content-center">
                    <h6
                      style={{ fontSize: "15px" }}
                      className="text-black-50 text-left float-left mt-1 fw-bolder"
                    >
                      Office 365 Calender
                      <br />
                      <span style={{ fontSize: "13px", fontWeight: "lighter" }}>
                        {" "}
                        Office 365, Outlook.com, live.com or Hotmail Calender
                      </span>
                    </h6>
                    <div className=" col-1 ms-auto">
                      <Dropdown.Toggle
                        className=""
                        variant="light"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                    </div>
                  </div>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Office 365</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Outlook</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Live.com</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Hotmail Calender
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="row mt-3 ">
              <div className="col-10 ms-auto dropWidth">
                <Dropdown className="m-1">
                  <div className="col-1 float-left mt-1 ">
                    <img src={exchange} alt="" />
                  </div>
                  <div className="col-11 ms-5 align-content-center">
                    <h6
                      style={{ fontSize: "15px" }}
                      className="text-black-50 text-left float-left mt-1 fw-bolder"
                    >
                      Exchange Calender
                      <br />
                      <span style={{ fontSize: "13px", fontWeight: "lighter" }}>
                        {" "}
                        Exchange server 2013, 2016, or 2019
                      </span>
                    </h6>
                    <div className=" col-1 ms-auto">
                      <Dropdown.Toggle
                        className=""
                        variant="light"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                    </div>
                  </div>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Exchange Server 2013
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Exchange Server 2016
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Exchange Server 2019
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="row mt-3 ">
              <div className="col-10 ms-auto dropWidth">
                <Dropdown className="m-1">
                  <div className="col-1 float-left mt-1 ">
                    <img src={outlook} alt="" />
                  </div>
                  <div className="col-11 ms-5 align-content-center">
                    <h6
                      style={{ fontSize: "15px" }}
                      className="text-black-50 text-left float-left mt-1 fw-bolder"
                    >
                      Outlook Plug-In
                      <br />
                      <span style={{ fontSize: "13px", fontWeight: "lighter" }}>
                        {" "}
                        Outllok 2007 and higher, with Windows 7 and higher.
                      </span>
                    </h6>
                    <div className=" col-1 ms-auto">
                      <Dropdown.Toggle
                        className=""
                        variant="light"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                    </div>
                  </div>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Outllok 2007
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-2 pgname mt-1 text-center">
                <img src={apple} alt="" />
                <div className="fw-bolder">Apple</div>
              </div>
              <div className="col-10 dropWidth">
                <Dropdown className="m-1">
                  <div className="col-1 mt-1 float-left ">
                    <img src={cloud} alt="" />
                  </div>
                  <div className="col-11 ms-5 align-content-center">
                    <h6
                      style={{ fontSize: "15px" }}
                      className="text-black-50 text-left float-left mt-1 fw-bolder"
                    >
                      iCloud Calender
                      <br />
                      <span style={{ fontSize: "13px", fontWeight: "lighter" }}>
                        {" "}
                        Default Calender for all Apple products
                      </span>
                    </h6>
                    <div className=" col-1 ms-auto">
                      <Dropdown.Toggle
                        className=""
                        variant="light"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                    </div>
                  </div>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Default Calender
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 mx-auto mb-5">
          <div className="row">
            <div className="col-3 mt-2">
              <img src={Points} alt="" />
            </div>
            <div className="col align-right">
              <Link to="/Calender1">
                <button className="set-btn bg-white col-8 py-2">
                  Continue without calender
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
