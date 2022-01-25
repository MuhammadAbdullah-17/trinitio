import React, { useState } from "react";
import { Link } from "react-router-dom";
import OwnerPic from "../../../../Assets/Ownerpic.png";
import Switchbtn from "./Switchbtn";
import Playbtn from "../../../../Assets/play.png";
import Playbtnb from "../../../../Assets/playb.png";
import Playbtnp from "../../../../Assets/playp.png";
import Cancelbtn from "../../../../Assets/Cancel.png";
import Cancelbtnb from "../../../../Assets/cancelb.png";
import Cancelbtnp from "../../../../Assets/Cancelp.png";

const Main5 = () => {
  const [show, setShow] = useState(false);
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  const [hide3, setHide3] = useState(true);
  const [hide4, setHide4] = useState(true);
  const [hide5, setHide5] = useState(true);
  const [hide6, setHide6] = useState(true);

  const cdata = [
    {
      para:
        "Adding 1 seat(s) will add $144 to your annual bill starting February 1, 2022.",
    },
    {
      para:
        "An estimated prorated charge of $64.16 will be applied today to your Visa ending in 1963.",
    },
  ];
  return (
    <div className="col-10 float-right bg-grey pgstup mx-auto">
      <div className="row mx-auto mt-5">
        <div className="col-11 mr-4 ml-2 p-3 brdr-r-5 brdr-g bg-white mb-5 mx-auto">
          <div className="row mx-auto">
            <div className="col-10 ml-1">
              <h4>Add New User</h4>
            </div>
            <div className="col ml-5 text-right">
              <Link to="/ManageUsers">
                <button className="d-flex bg-gg border-0 outline-0 brdr-r-6 py-2 px-3">
                  <div>
                    <i class="fas fa-chevron-left font-grey"></i>
                  </div>
                  <div className="px-2 font-grey pt-0 mt-0">Back</div>
                </button>
              </Link>
            </div>
            <div className="col-8">
              <label htmlFor="" className="mt-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="yrnm"
                placeholder="Your name"
                className="iw py-2 brdr-r-2 px-2 brdr-g"
              />
              <label htmlFor="" className="mt-3">
                Email Address
              </label>
              <input
                type="text"
                name="name"
                id="yrnm"
                placeholder="Your email address"
                className="iw py-2 brdr-r-2 px-2 brdr-g"
              />
              <label htmlFor="" className="mt-3">
                Password
              </label>
              <input
                type="text"
                name="name"
                id="yrnm"
                placeholder="Password"
                className="iw py-2 brdr-r-2 px-2 brdr-g"
              />
            </div>
            <div className="col-12 mx-auto mt-3 mx-1">GLOBAL</div>
            <div className="col-8">
              <div className="row mt-2">
                <div className="col-11">
                  <p className="mb-0 py-0 mx-1">
                    Administrator{" "}
                    <small className="d-block">
                      Has full access but can’t transfer ownership
                    </small>
                  </p>
                </div>
                <div className="col-1 mx-0 px-0">
                  <Switchbtn />
                </div>
                <hr className="mx-3 mt-2 hrw" />
              </div>
            </div>
            <div className="col-8">
              <div className="row mt-2">
                <div className="col-11">
                  <p className="mb-0 py-0 mx-1">
                    Billing{" "}
                    <small className="d-block">
                      Can buy or change plans, except for domains and Google
                      Workspace
                    </small>
                  </p>
                </div>
                <div className="col-1 mx-0 px-0">
                  <Switchbtn />
                </div>
                <hr className="mx-3 mt-2 hrw" />
              </div>
            </div>
            <div className="col-8">
              <div className="row mt-2">
                <div className="col-11">
                  <p className="mb-0 py-0 mx-1">
                    Let this user manage appointment schedulings{" "}
                  </p>
                </div>
                <div className="col-1 mx-0 px-0">
                  <Switchbtn />
                </div>
                <div className="d-flex mx-1">
                  <p>Access Level</p>&nbsp;
                  <p className="text-danger">*</p>&nbsp;
                  <p>
                    <i class="far fa-question-circle"></i>
                  </p>
                </div>
                <div className="col-12">
                  <select name="" id="" className="col-12 p-2 brdr-r-2">
                    <option value="0">
                      Admin: Can view, add, and manage appointments and settings
                      for Appointment Scheduling
                    </option>
                  </select>
                </div>
                <div className="my-3 mx-1">
                  <input type="checkbox" name="Allow" id="alw" />
                  <label className="px-2">
                    Allow user to export clients and appointments
                  </label>
                </div>
                <div className="mx-1">
                  <h6>Allow access to:</h6>
                  <a href="" className="text-black">
                    <u>What can users access?</u>
                  </a>
                </div>
                <div className="row mx-1 mt-3">
                  {hide1 ? (
                    <div className="col brdr-r-S brdr-r-2 bg-r mr-2">
                      <button
                        onClick={() => setHide1(false)}
                        className="border-0 outline-0 bg-transparent position-absolute cnlbtn"
                      >
                        <img src={Cancelbtn} alt="" />
                      </button>
                      <div className="d-flex mx-2 py-3">
                        <img src={Playbtn} alt="" className="plybtn mt-1" />
                        <p className="mx-3 mb-0 py-0">
                          15 Minute ...{" "}
                          <small className="d-block">15 mins</small>
                        </p>
                      </div>
                    </div>
                  ) : null}
                  {hide2 ? (
                    <div className="col brdr-r-B brdr-r-2 bg-b mx-2">
                      <button
                        onClick={() => setHide2(false)}
                        className="border-0 outline-0 bg-transparent position-absolute cnlbtn"
                      >
                        <img src={Cancelbtnb} alt="" />
                      </button>
                      <div className="d-flex mx-2 py-3">
                        <img src={Playbtnb} alt="" className="plybtn mt-1" />
                        <p className="mx-3 mb-0 py-0">
                          15 Minute ...{" "}
                          <small className="d-block">15 mins</small>
                        </p>
                      </div>
                    </div>
                  ) : null}
                  {hide3 ? (
                    <div className="col brdr-r-P brdr-r-2 bg-p mx-2">
                      <button
                        onClick={() => setHide3(false)}
                        className="border-0 outline-0 bg-transparent position-absolute cnlbtn"
                      >
                        <img src={Cancelbtnp} alt="" />
                      </button>
                      <div className="d-flex mx-2 py-3">
                        <img src={Playbtnp} alt="" className="plybtn mt-1" />
                        <p className="mx-3 mb-0 py-0">
                          15 Minute ...{" "}
                          <small className="d-block">15 mins</small>
                        </p>
                      </div>
                    </div>
                  ) : null}
                  <div className="col brdr-r-G brdr-r-2 bg-g mx-2 evty font-green">
                    + Event type
                  </div>
                  <hr className="mt-3 hrw" />
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="row mt-2">
                <div className="col-11">
                  <p className="mb-0 py-0 mx-1">
                    Let this user manage email campaigns{" "}
                  </p>
                </div>
                <div className="col-1 mx-0 px-0">
                  <Switchbtn />
                </div>
                <div className="d-flex mx-3">
                  <p>Access Level</p>&nbsp;
                  <p className="text-danger">*</p>&nbsp;
                  <p>
                    <i class="far fa-question-circle"></i>
                  </p>
                </div>
                <div className="col-12">
                  <select name="" id="" className="col-12 p-2 brdr-r-2">
                    <option value="0">
                      View and Edit: Can view and edit assigned email campaigns
                    </option>
                  </select>
                </div>
                <div className="my-3 mx-1 col-12">
                  <input type="checkbox" name="Allow" id="alw" />
                  <label className="px-2">
                    Allow user to export clients and leads emails
                  </label>
                </div>
                <div className="mx-1 col-12">
                  <h6>Allow access to:</h6>
                  <a href="" className="text-black">
                    <u>What can users access?</u>
                  </a>
                </div>
                <div className="row mx-3 mt-3">
                  {hide4 ? (
                    <div className="col brdr-r-S brdr-r-2 bg-r mr-2">
                      <button
                        onClick={() => setHide4(false)}
                        className="border-0 outline-0 bg-transparent position-absolute cnlbtn"
                      >
                        <img src={Cancelbtn} alt="" />
                      </button>
                      <div className="d-flex mx-2 py-3">
                        <img src={Playbtn} alt="" className="plybtn mt-1" />
                        <p className="mx-3 mb-0 py-0">
                          15 Minute ...{" "}
                          <small className="d-block">15 mins</small>
                        </p>
                      </div>
                    </div>
                  ) : null}
                  {hide5 ? (
                    <div className="col brdr-r-B brdr-r-2 bg-b mx-2">
                      <button
                        onClick={() => setHide5(false)}
                        className="border-0 outline-0 bg-transparent position-absolute cnlbtn"
                      >
                        <img src={Cancelbtnb} alt="" />
                      </button>
                      <div className="d-flex mx-2 py-3">
                        <img src={Playbtnb} alt="" className="plybtn mt-1" />
                        <p className="mx-3 mb-0 py-0">
                          15 Minute ...{" "}
                          <small className="d-block">15 mins</small>
                        </p>
                      </div>
                    </div>
                  ) : null}
                  {hide6 ? (
                    <div className="col brdr-r-P brdr-r-2 bg-p mx-2">
                      <button
                        onClick={() => setHide6(false)}
                        className="border-0 outline-0 bg-transparent position-absolute cnlbtn"
                      >
                        <img src={Cancelbtnp} alt="" />
                      </button>
                      <div className="d-flex mx-2 py-3">
                        <img src={Playbtnp} alt="" className="plybtn mt-1" />
                        <p className="mx-3 mb-0 py-0">
                          15 Minute ...{" "}
                          <small className="d-block">15 mins</small>
                        </p>
                      </div>
                    </div>
                  ) : null}
                  <div className="col brdr-r-G brdr-r-2 bg-g mx-2 evty font-green">
                    + Email Campaign
                  </div>
                  <hr className="mt-3 mx-0 hrw" />
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="row mt-2">
                <div className="col-11">
                  <p className="mb-0 py-0 mx-1">Let this user manage chat </p>
                </div>
                <div className="col-1 mx-0 px-0">
                  <Switchbtn />
                </div>
                <div className="d-flex mx-3">
                  <p>Access Level</p>&nbsp;
                  <p className="text-danger">*</p>&nbsp;
                  <p>
                    <i class="far fa-question-circle"></i>
                  </p>
                </div>
                <div className="col-12">
                  <select name="" id="" className="col-12 p-2 brdr-r-2">
                    <option value="0">
                      View only: Can only view entire chats and history
                    </option>
                  </select>
                </div>
                <Link to="/ManageUsers/Upgradeaccount">
                  <button className="set-btn bg-green text-white col-2 px-3 py-2 mx-3 mt-3 mb-4">
                    Add User
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="adst position-absolute">
        <div className="col-5 mx-auto px-3 py-3 brdr-r-2 position-absolute bg-lg adstcnt">
          <h6>Add Seats</h6>
          <small className="d-block">Prices are in USD</small>
          <hr className="shrw mt-2" />
          <div className="d-flex mt-5">
            {/* <div className="col">Add</div> */}
            <label for="quantity">Add</label>&nbsp; &nbsp;
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="brdr-r-gr brdr-r-1 py-1"
            ></input>
            &nbsp; &nbsp;
            <label htmlFor="">seat(s)</label>
          </div>
          {cdata.map((i, index) => (
            <React.Fragment>
              <div className="col-11 mx-0 px-0 mt-3">{i.para}</div>
            </React.Fragment>
          ))}
          <div className="font-green my-2">Change card</div>
          <div className="d-flex mt-3">
            <button className="set-btn px-3 col-3 py-2 bg-white">Cancel</button>
            <button className="set-btn bg-green text-white col-3 px-3 py-2 mx-3">
              Add Seats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main5;
