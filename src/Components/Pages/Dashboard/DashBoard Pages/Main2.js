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

const Main2 = () => {
  const [show, setShow] = useState(false);
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  const [hide3, setHide3] = useState(true);
  const [hide4, setHide4] = useState(true);
  const [hide5, setHide5] = useState(true);
  const [hide6, setHide6] = useState(true);
  return (
    <div className="col-10 float-right bg-grey pgstup">
      <div className="row mx-auto mt-5">
        <div className="col-3 ml-5 mr-3 p-3 brdr-r-5 brdr-g bg-white mngusr">
          <h4>Manage Users</h4>
          <p className="Aff-p mt-3">
            Invite others and give them access to areas relevant to their work.
          </p>
          <a href="">Learn More</a>
          <button className="btn-r col-12 mt-4 Aff-btn py-3 g-btn">
            Invite Member
          </button>
          <p className="bold mt-4">OWNER</p>
          <div className="d-flex mx-2">
            <img src={OwnerPic} alt="" />
            <p className="mx-3 mt-1">John Ravi</p>
          </div>
          <hr />
          <p className="bold mt-4">INVITES SENT</p>
          <div className="d-flex mx-2">
            <img src={OwnerPic} alt="" />
            <p className="mx-3 mb-0 py-0">
              Kalai <small className="d-block">Scheduling Administrator</small>
            </p>
          </div>
          <hr />
          <p className="bold mt-4">ADDED USERS</p>
          <div className="d-flex mx-2">
            <img src={OwnerPic} alt="" />
            <p className="mx-3 mb-0 py-0">
              Joanna Finch{" "}
              <small className="d-block">Scheduling Administrator</small>
            </p>
          </div>
          <div className="d-flex mx-2 mt-3">
            <img src={OwnerPic} alt="" />
            <p className="mx-3 mb-0 py-0">
              Kanchana Taylor{" "}
              <small className="d-block">Scheduling Administrator</small>
            </p>
          </div>
          <div className="d-flex mx-2 mt-3">
            <img src={OwnerPic} alt="" />
            <p className="mx-3 mb-0 py-0">
              Watson Miller{" "}
              <small className="d-block">Scheduling Administrator</small>
            </p>
          </div>
        </div>
        <div className="col-8 mr-4 ml-2 p-3 brdr-r-5 brdr-g bg-white mb-5">
          <div className="row mx-auto">
            <div className="col-8 ml-1">
              <p className="mb-0 py-0">
                Watson Miller{" "}
                <small className="d-block">joannafinch12@gmail.com</small>
              </p>
            </div>
            <div className="col-3 ml-5 text-right">
              <button
                onClick={() => setShow(!show)}
                className="bg-transparent border-0 outline-0"
              >
                <i class="fas fa-ellipsis-v"></i>
              </button>
              <div>
                {show ? (
                  <div className="bg-white rapdtu py-2 p-2 position-absolute rounded">
                    <ul className="btn-peruser text-left px-0 my-0">
                      <li>
                        <small>Remove All Permissions</small>
                      </li>
                      <li>
                        <small>Delete the User</small>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-3 mt-4 mx-1">
              <button className="rounded btn-chng outline-0">
                Change Password
              </button>
            </div>
            <div className="col-12 mx-auto mt-3 mx-1">GLOBAL</div>
            <div className="col-12">
              <div className="row mt-2">
                <div className="col-11">
                  <p className="mb-0 py-0 mx-1">
                    Administrator{" "}
                    <small className="d-block">
                      Has full access but can???t transfer ownership
                    </small>
                  </p>
                </div>
                <div className="col-1 mx-0 px-0">
                  <Switchbtn />
                </div>
                <hr className="mx-3 mt-2 hrww" />
              </div>
            </div>
            <div className="col-12">
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
                <hr className="mx-3 mt-2 hrww" />
              </div>
            </div>
            <div className="col-12">
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
                <div className="my-3 mx-1 col-12">
                  <input type="checkbox" name="Allow" id="alw" />
                  <label className="px-2">
                    Allow user to export clients and appointments
                  </label>
                </div>
                <div className="mx-1 col-12">
                  <h6>Allow access to:</h6>
                  <a href="" className="text-black">
                    <u>What can users access?</u>
                  </a>
                </div>
                <div className="row mx-3 mt-3">
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
                  <hr className="mt-3 hrww" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row mt-2">
                <div className="col-11">
                  <p className="mb-0 py-0 mx-1">
                    Let this user manage email campaigns{" "}
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
                  <hr className="mt-3 hrww" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row mt-2">
                <div className="col-11">
                  <p className="mb-0 py-0 mx-1">Let this user manage chat </p>
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
                      View only: Can only view entire chats and history
                    </option>
                  </select>
                </div>
                <Link to="/ManageUsers/AddUsers">
                  <button className="set-btn bg-green text-white col-2 px-3 py-2 mx-3 mt-3 mb-4">
                    Add User
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
