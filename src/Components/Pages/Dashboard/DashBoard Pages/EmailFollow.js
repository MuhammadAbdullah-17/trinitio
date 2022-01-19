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

const EmailFollow = () => {
  const [show, setShow] = useState(false);
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  const [hide3, setHide3] = useState(true);
  const [hide4, setHide4] = useState(true);
  const [hide5, setHide5] = useState(true);
  const [hide6, setHide6] = useState(true);
  return (
    <div className="col-10 float-right bg-grey pgstup mx-auto" id="follow">
      <div className="row mx-auto mt-5">
        <div className="col-11 mr-4 ml-2 p-3 brdr-r-5 brdr-g bg-white mb-5 mx-auto">
          <div className="row mx-auto">
            <div className="col-10 ml-1">
              <h4>Followup-Thursday August 23,2021</h4>
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
          </div>
          <div className="row mx-auto mt-2">
            <div className="col-5">
              <div className="row mx-auto">
                <div className="col brdr-b-g-2 text-center font-green text-decoration-none py-3 mx-1">
                  <a href="" className="font-green font-weight-bold flwup1">
                    Initial Email
                  </a>
                </div>
                <div className="col text-center font-green text-decoration-none py-3 mx-1">
                  <a href="" className="text-dark font-weight-bold flwup1">
                    Initial Email
                  </a>
                </div>
                <div className="col text-center text-decoration-none py-3 mx-1">
                  <a href="" className="text-dark font-weight-bold flwup1">
                    Initial Email
                  </a>
                </div>
              </div>
            </div>
            <div className="col justify-content-right">
              <div className="row mx-auto text-right">
                <div className="col text-center mt-2 px-0 mx-2 rounded border brdr-r-Gr">
                  <i class="fas fa-search font-grey px-1 font-weight-100"></i>
                  <input
                    type="search"
                    name="flwsearch"
                    id="flwsrch"
                    placeholder="Search & hit enter"
                    className="outline-0 border-0 py-1 w-88"
                  />
                </div>
                <div className="col text-center font-green mt-2 px-0 mx-2 py-1 rounded brdr-r-G bg-g">
                  <i class="far fa-envelope mx-2"></i>
                  Preview Email
                </div>
                <div className="col-2 mt-2 pt-1 text-center font-green">
                  <i class="fas fa-redo-alt mx-2"></i>
                  <i class="fas fa-download mx-2"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-3 my-2 px-3 py-3 bg-grey brdr-r-2">
            <div className="mb-2">Campaign Status</div>
            <hr className="mx-auto px-2" />
            <div className="row mx-auto mt-2">
              <div className="col-3 text-dark font-weight-bold">Finished</div>
              <div className="col text-dark font-weight-bold">36</div>
              <div className="col text-dark font-weight-bold">100%</div>
              <div className="col text-dark font-weight-bold">11%</div>
              <div className="col text-dark font-weight-bold">0%</div>
              <div className="col text-dark font-weight-bold">0%</div>
            </div>
            <div className="row mx-auto mt-2">
              <div className="col-3 text-dark">
                <p className="py-0 my-0">Finished on:</p>
                <p className="py-0 my-0">Friday, Aug 23 2019, 09:10PM</p>
                <p className="py-0 my-0">America/New_York</p>
              </div>
              <div className="col text-dark">
                <p className="py-0 mb-0 mt-4">Recipients</p>
              </div>
              <div className="col text-dark">
                <p className="py-0 mb-0 mt-4">36 Sent</p>
                <p className="py-0 my-0">Recipients</p>
              </div>
              <div className="col text-dark">
                <p className="py-0 mb-0 mt-4">4 Opened</p>
                <p className="py-0 my-0">Recipients</p>
              </div>
              <div className="col text-dark">
                <p className="py-0 mb-0 mt-4">0 Clicked</p>
                <p className="py-0 my-0">Recipients</p>
              </div>
              <div className="col text-dark">
                <p className="py-0 mb-0 mt-4">0 Failed</p>
                <p className="py-0 my-0">Recipients</p>
              </div>
            </div>
          </div>
          <div className="my-3 mx-3">
            <div className="d-flex">
              <p className="my-0 font-weight-bold font-15">Subject:</p>
              <p className="my-0 font-15">
                Re:First Name, use video to increase participation in wellness
                programs.
              </p>
            </div>
            <div className="d-flex">
              <p className="my-0 font-15">Condition:</p> &nbsp;
              <p className="my-0 px-1 bg-grey text-white rounded font-15">
                Not Opened
              </p>
              &nbsp;
              <p className="my-0 font-15">to the message from</p>&nbsp;
              <p className="my-0 px-1 bg-grey text-white rounded font-15">
                Initial Email
              </p>{" "}
              &nbsp;
              <p className="my-0 font-15">after 1 day(s) that is @</p>&nbsp;
              <p className="my-0 font-weight-bold font-15">
                Thursday, Aug 21 2021, 08:30 PM (GMT-04:00) America/New York
              </p>
            </div>
          </div>
          <hr className="mt-4 mx-3" />
          <div className="row mx-auto">
            <div className="col-3 ml-3 text-left font-weight-bold">
              <div className="d-flex">
                <div>#</div> &nbsp; &nbsp;
                <div>Email</div>
              </div>
            </div>
            <div className="col-3 text-left font-weight-bold">Status</div>
            <div className="col font-weight-bold mx-auto text-center">Opened</div>
            <div className="col font-weight-bold mx-auto text-center">Clicked</div>
            <div className="col font-weight-bold mx-auto text-center">Unsubscribed</div>
            <div className="col font-weight-bold mx-auto text-center">Action</div>
          </div>
          <hr className="mt-3 mx-3" />
          <div className="row mx-auto">
            <div className="col-3 ml-3 text-left">
              <div className="d-flex">
                <div className="pt-2">1</div> &nbsp; &nbsp;
                <div>
                  <div>Javier de la Torre</div>
                  <small>javier@carto.com</small>
                </div>
              </div>
            </div>
            <div className="col-3 text-left">
              <div>
                <div>Sent</div>
                <small>Thursday, Aug 21 2021, 08:31 PM</small>
              </div>
            </div>
            <div className="col mx-auto text-center pt-2">0</div>
            <div className="col mx-auto text-center pt-2">-</div>
            <div className="col mx-auto text-center pt-2">-</div>
            <div className="col mx-auto text-center pt-2">
            <i class="fas fa-envelope font-orange pt-2"></i>
            </div>
          </div>
          <hr className="mt-3 mx-3" />
          <div className="row mx-auto">
            <div className="col-3 ml-3 text-left">
              <div className="d-flex">
                <div className="pt-2">2</div> &nbsp; &nbsp;
                <div>
                  <div>Donna Marcus</div>
                  <small>donna.marcus@moorecap.com</small>
                </div>
              </div>
            </div>
            <div className="col-3 text-left">
              <div>
                <div>Sent</div>
                <small>Thursday, Aug 21 2021, 08:31 PM</small>
              </div>
            </div>
            <div className="col mx-auto text-center pt-2">0</div>
            <div className="col mx-auto text-center pt-2">-</div>
            <div className="col mx-auto text-center pt-2">-</div>
            <div className="col mx-auto text-center pt-2">
            <i class="fas fa-envelope font-orange pt-2"></i>
            </div>
          </div>
          <hr className="mt-3 mx-3" />
          <div className="row mx-auto">
            <div className="col-3 ml-3 text-left">
              <div className="d-flex">
                <div className="pt-2">3</div> &nbsp; &nbsp;
                <div>
                  <div>Daniel H Dellacona</div>
                  <small>daniel.h@outcomehealth.com</small>
                </div>
              </div>
            </div>
            <div className="col-3 text-left">
              <div>
                <div>Sent</div>
                <small>Thursday, Aug 21 2021, 08:31 PM</small>
              </div>
            </div>
            <div className="col mx-auto text-center pt-2">0</div>
            <div className="col mx-auto text-center pt-2">-</div>
            <div className="col mx-auto text-center pt-2">-</div>
            <div className="col mx-auto text-center pt-2">
            <i class="fas fa-envelope font-orange pt-2"></i>
            </div>
          </div>
          <hr className="mt-3 mx-3" />
          <div className="row mx-auto">
            <div className="col-3 ml-3 text-left">
              <div className="d-flex">
                <div className="pt-2">4</div> &nbsp; &nbsp;
                <div>
                  <div>Jeff Brodsky</div>
                  <small>jeff.brodsky@morganstanley.com</small>
                </div>
              </div>
            </div>
            <div className="col-3 text-left">
              <div>
                <div>Sent</div>
                <small>Thursday, Aug 21 2021, 08:31 PM</small>
              </div>
            </div>
            <div className="col mx-auto text-center pt-2">0</div>
            <div className="col mx-auto text-center pt-2">-</div>
            <div className="col mx-auto text-center pt-2">-</div>
            <div className="col mx-auto text-center pt-2">
            <i class="fas fa-envelope font-orange pt-2"></i>
            </div>
          </div>
          <hr className="mt-3 mx-3" />
        </div>
      </div>
    </div>
  );
};

export default EmailFollow;
