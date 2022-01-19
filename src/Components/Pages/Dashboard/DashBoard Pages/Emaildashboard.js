import React from "react";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Maskimg from "../../../../Assets/MaskGroup.png";
import Videoimg from "../../../../Assets/videoimg.png";
import MyVerticallyCenteredModal from "./VideoModal";

const Email = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const data = [
    {
      campaign: "Schedule a demo with SalesHandy",
      status: "Finished",
      statusa: "Aug 23 2021 03:05 PM (GMT-05:00) America/Chicago",
      opened: "100%",
      replied: "100%",
      clicked: "100%",
    },
    {
      campaign: "Schedule a demo with SalesHandy",
      status: "Finished",
      statusa: "Aug 23 2021 03:05 PM (GMT-05:00) America/Chicago",
      opened: "100%",
      replied: "100%",
      clicked: "100%",
    },
    {
      campaign: "Schedule a demo with SalesHandy",
      status: "Finished",
      statusa: "Aug 23 2021 03:05 PM (GMT-05:00) America/Chicago",
      opened: "100%",
      replied: "100%",
      clicked: "100%",
    },
    {
      campaign: "Schedule a demo with SalesHandy",
      status: "Finished",
      statusa: "Aug 23 2021 03:05 PM (GMT-05:00) America/Chicago",
      opened: "100%",
      replied: "100%",
      clicked: "100%",
    },
  ];
  return (
    <div className="col-10 float-right bg-grey pgstup">
      <div className="row mx-auto mt-5">
        <div className="col-6 ml-4 mr-2 p-3 brdr-r-5 brdr-g bg-white">
          <h4 className="mt-2">Current User</h4>
          <div className="row mt-5 mb-5 mx-0 px-0">
            <div className="col-3">
              <img src={Maskimg} alt="" />
            </div>
            <div className="col-3 p-0 mt-4">
              <div className="d-flex">
                <div className="profile-n mx-2 mt-2 text-bold">John Doe</div>
                <i class="fas fa-chevron-down mx-2 mt-2 pt-1"></i>
              </div>
              <a href="" className="font-green ml-2">
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
      <div className="row mx-3 my-4">
        <div className="col">
          <Link to="/Email/Dashboard/Recipients" className="text-dark">
            <h3 className="mt-2">Email Compaigns</h3>
          </Link>
        </div>
        <div className="col text-right">
          <Link to="/Email/Dashboard/Follow">
            <button className="set-btn bg-green text-white col-5 px-4 py-3 mx-3">
              Add Email Campaign
            </button>
          </Link>
        </div>
        <div className="px-0 mt-4">
          <div className="row mx-2">
            <div className="col-12 brdr-r-5 brdr-g bg-white mx-2 py-3">
              <div className="row mx-2 my-3">
                <div className="col-8 d-flex srch-bar py-1 brdr-r-2 px-2 font-grey">
                  <i class="fas fa-search txt-g mt-1 px-0"></i>
                  <div className="mx-2 px-1">Search & hit enter</div>
                </div>
                <div className="col-2">
                  <select
                    name=""
                    id=""
                    className="clr-green drpdwn-green brdr-r-2 p-1"
                  >
                    <option className="mt-5" value="0">
                      All
                    </option>
                    <option value="1">Custom Date Range</option>
                    <option value="2">2021</option>
                    <option value="3">August 2021</option>
                    <option value="4">July 2021</option>
                    <option value="5">June 2021</option>
                    <option value="6">May 2021</option>
                  </select>
                </div>
                <div className="col-2">
                  <select
                    name=""
                    id=""
                    className="clr-green drpdwn-green brdr-r-2 p-1"
                  >
                    <option className="mt-5" value="0">
                      All
                    </option>
                    <option value="1">Custom Date Range</option>
                    <option value="2">2021</option>
                    <option value="3">August 2021</option>
                    <option value="4">July 2021</option>
                    <option value="5">June 2021</option>
                    <option value="6">May 2021</option>
                  </select>
                </div>
              </div>
              <hr className="width-10 brdr-t" />
              <div className="row mx-0 my-3">
                {/* <div className="col-1">
                <input type="checkbox" />
              </div>
              <div className="col">
                Compaign
              </div> */}
                <div className="table table-R font-poppins tkn-table-border h6">
                  <>
                    <div className="row bt-l-r">
                      {/* <div className="py-3 font-weight-bold text-left col-lg col"></div> */}
                      <div className="py-3 px-lg-0 px-4 ml-3 font-weight-bold text-left d-flex col-lg-4 col">
                        <div className="ml-1 my-0 p-0">
                          <input type="checkbox" />
                        </div>
                        <div className="ml-2 my-0 p-0">Compaign</div>
                      </div>
                      <div className="py-3 px-lg-0 px-5 font-weight-bold text-left col-lg-4 col">
                        Status
                      </div>
                      <div className="py-3 px-4 font-weight-bold col-lg col">
                        Opened
                      </div>
                      <div className="py-3 px-4 font-weight-bold col-lg col">
                        Replied
                      </div>
                      <div className="py-3 px-4 font-weight-bold col-lg col">
                        Clicked
                      </div>
                    </div>
                  </>

                  {data.map((i, index) => (
                    <React.Fragment>
                      <div
                        className={`row ${
                          i.name == "" ? "" : "border-bottom border-light"
                        }`}
                      >
                        <div className="py-3 px-lg-0 px-4 ml-3 text-left d-flex col-lg-4 col">
                          <div className="ml-1 my-0 p-0">
                            <input type="checkbox" />
                          </div>
                          <div className="ml-2 my-0 p-0">
                            {i.campaign}
                            <div className="position-absolute d-block">
                              <div className="Not-num px-2">1</div>
                            </div>
                          </div>
                        </div>

                        <div className="py-3 px-0 text-left small col col-lg-4">
                          {i.status} <div className="px-0">{i.statusa} </div>
                        </div>
                        <div className="py-3 px-4 text-left small col col-lg">
                          {i.opened}{" "}
                        </div>
                        <div className="py-3 px-4 text-left small col col-lg">
                          {i.replied}{" "}
                        </div>
                        <div className="py-3 px-4 col-lg col">{i.clicked} </div>
                        {/* <div className="py-3 px-4 col-lg col">{i.period} </div> */}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
