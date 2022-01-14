import React from "react";
import Frame from "../../../../Assets/Frame.png";
import Schedule from "../../../../Assets/GroupCalender.png";
import Canceled from "../../../../Assets/ErrorCalender.png";
import NoShow from "../../../../Assets/NoShow.png";
import Chart from "../../../../Assets/Map3lines.png";
import Chart2 from "../../../../Assets/Chart1line.png";

const Main1 = () => {
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
        <div className="col-7 ml-5 mr-3 p-3 brdr-r-5 brdr-g bg-white">
          <div className="row mx-auto">
            <div className="col-8 ml-1">
              <h4>Appointment Statistics</h4>
            </div>
            <div className="col-3 ml-4">
              <select
                name=""
                id=""
                className="clr-green drpdwn-green brdr-r-5 p-1"
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
            <div className="col-12 mx-auto mt-3">
              <div className="row">
                <div className="col mx-auto d-flex">
                  <div className="b-img-g">
                    <img src={Schedule} alt="" className="p-2" />
                  </div>
                  <div className="mx-2">
                    <div className="font-green fnt-w">5,689</div>
                    <div>Scheduled</div>
                  </div>
                </div>
                <div className="col mx-auto d-flex">
                  <div className="b-img-r">
                    <img src={Canceled} alt="" className="p-2" />
                  </div>
                  <div className="mx-2">
                    <div className="font-red fnt-w">32,568</div>
                    <div>Canceled</div>
                  </div>
                </div>
                <div className="col mx-auto d-flex">
                  <div className="b-img-b">
                    <img src={NoShow} alt="" className="p-2" />
                  </div>
                  <div className="mx-2">
                    <div className="font-blue fnt-w">32,568</div>
                    <div>No Show</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mx-auto mt-3">
              <img src={Chart} alt="" className="w-100" />
            </div>
          </div>
        </div>
        <div className="col-4 mr-4 ml-2 p-3 brdr-r-5 brdr-g bg-white">
          <h4>Affiliate Program</h4>
          <p className="Aff-p mt-3">
            Did you know you can get paid as well as earn free upgrades for
            yourself by simply telling people about Pagespeedy? You can!
          </p>
          <div className="mx-auto text-center mt-4">
            <img src={Frame} alt="" />
          </div>
          <button className="btn-r col-12 mt-5 Aff-btn py-3 g-btn">
            Sign Up Now (It's Free)
          </button>
        </div>
      </div>
      <div className="col-12 mx-auto px-4 mt-4">
        <div className="row mx-auto px-3">
          <div className="col-12 brdr-r-5 brdr-g bg-white mx-2 py-4">
            <h4 className="mx-2">Email Compaign</h4>
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
      <div className="col-12 mx-auto px-4 mt-4 mb-4">
        <div className="row mx-auto px-3">
          <div className="col-12 brdr-r-5 brdr-g bg-white mx-2 py-4">
            <div className="row mx-auto">
              <div className="col-8 ml-1">
                <h4>Live Chat</h4>
              </div>
              <div className="col ml-5 text-right">
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
              <div className="col-12 mx-auto mt-3">
                Total number of chats for the selected period:{" "}
                <strong className="font-green">30</strong>
              </div>
              <div className="col-12 mx-auto mt-3">
                <img src={Chart2} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
