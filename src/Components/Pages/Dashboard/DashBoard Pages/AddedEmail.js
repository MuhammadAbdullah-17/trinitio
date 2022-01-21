import React, { useState } from "react";
import Paper from "../../../../Assets/paper.png";
import Table from "react-bootstrap/Table";
import Switchbtn from "./Switchbtn";

const EmailAdded = () => {
  const [isActiveO, setActiveO] = useState("false");
  const handleToggleO = () => {
    setActiveO(!isActiveO);
  };
  const [isActiveT, setActiveT] = useState("false");
  const handleToggleT = () => {
    setActiveT(!isActiveT);
  };
  const [isActiveTh, setActiveTh] = useState("false");
  const handleToggleTh = () => {
    setActiveTh(!isActiveTh);
  };
  const [isActiveF, setActiveF] = useState("false");
  const handleToggleF = () => {
    setActiveF(!isActiveF);
  };
  return (
    <div className="col-10 float-right bg-grey pgstup">
      <div className="row mx-3 my-4">
        <div className="px-0 mt-4">
          <div className="row mx-2">
            <div className="col-12 brdr-r-5 brdr-g bg-white mx-2 px-0 py-3">
              <div className="row mx-2 my-3 px-3">
                <div className="col-6 d-flex srch-bar py-1 brdr-r-2 px-2 font-grey">
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
                <div className="col">
                  <button className="set-btn bg-green text-white px-4 py-2">
                    Add Account
                  </button>
                </div>
              </div>
              {/* <hr className="width-10 brdr-t" /> */}
              <Table responsive className="mx-0">
                <thead>
                  <tr className="font-weight-bold">
                    <td>#</td>
                    <td>Name</td>
                    <td>Email Address</td>
                    <td>Type</td>
                    <td>Sending Limit Left</td>
                    <td>On/Off</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Monika Korosna</td>
                    <td>monikakorosna22@gmail.com</td>
                    <td>Gmail</td>
                    <td>570</td>
                    <td>
                      <Switchbtn />
                    </td>
                    <td>
                      <button className="rounded px-2 py-1 bg-orng border-0 outline-0 text-white">
                        <i class="fas fa-trash-alt mx-1"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Joanna Finch</td>
                    <td>joannafinch25@outlook.com</td>
                    <td>Microsoft</td>
                    <td>1000</td>
                    <td>
                      <Switchbtn />
                    </td>
                    <td>
                      <button className="rounded px-2 py-1 bg-orng border-0 outline-0 text-white">
                        <i class="fas fa-trash-alt mx-1"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Benjamin Franklin</td>
                    <td>benjaminfrank@outlook.com</td>
                    <td>Microsoft</td>
                    <td>200</td>
                    <td>
                      <Switchbtn />
                    </td>
                    <td>
                      <button className="rounded px-2 py-1 bg-orng border-0 outline-0 text-white">
                        <i class="fas fa-trash-alt mx-1"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ricardo Adam</td>
                    <td>racardoadam@gmail.com</td>
                    <td>Gmail</td>
                    <td>400</td>
                    <td>
                      <Switchbtn />
                    </td>
                    <td>
                      <button className="rounded px-2 py-1 bg-orng border-0 outline-0 text-white">
                        <i class="fas fa-trash-alt mx-1"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Daniel Guy</td>
                    <td>danielguy@gmail.com</td>
                    <td>Gmail</td>
                    <td>250</td>
                    <td>
                      <Switchbtn />
                    </td>
                    <td>
                      <button className="rounded px-2 py-1 bg-orng border-0 outline-0 text-white">
                        <i class="fas fa-trash-alt mx-1"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Howard Everett</td>
                    <td>joannafinch25@outlook.com</td>
                    <td>Microsoft</td>
                    <td>700</td>
                    <td>
                      <Switchbtn />
                    </td>
                    <td>
                      <button className="rounded px-2 py-1 bg-orng border-0 outline-0 text-white">
                        <i class="fas fa-trash-alt mx-1"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Joanna Finch</td>
                    <td>joannafinch25@outlook.com</td>
                    <td>Microsoft</td>
                    <td>570</td>
                    <td>
                      <Switchbtn />
                    </td>
                    <td>
                      <button className="rounded px-2 py-1 bg-orng border-0 outline-0 text-white">
                        <i class="fas fa-trash-alt mx-1"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Joanna Finch</td>
                    <td>joannafinch25@outlook.com</td>
                    <td>Microsoft</td>
                    <td>680</td>
                    <td>
                      <Switchbtn />
                    </td>
                    <td>
                      <button className="rounded px-2 py-1 bg-orng border-0 outline-0 text-white">
                        <i class="fas fa-trash-alt mx-1"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Daniel Guy</td>
                    <td>danielguy@gmail.com</td>
                    <td>Gmail</td>
                    <td>590</td>
                    <td>
                      <Switchbtn />
                    </td>
                    <td>
                      <button className="rounded px-2 py-1 bg-orng border-0 outline-0 text-white">
                        <i class="fas fa-trash-alt mx-1"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div className="row mx-auto">
                <div className="col text-left font-grey font-15">
                  Displaying 1-11 of 540 Records
                </div>
                <div className="col-3 text-right font-grey font-15">
                  <div className="d-flex">
                    <div className="">
                      <div className="brdr-grey rounded border-2 mx-1 px-1 w-100 h-75 text-center">
                        <p className="font-grey">
                          <i class="fas fa-chevron-left"></i>
                        </p>
                      </div>
                    </div>
                    <div className="ml-1">
                      <div
                        className={
                          isActiveO
                            ? "brdr-grey rounded border-2 mx-1 px-1 w-100 h-75 text-center"
                            : "font-green bg-greyL brdr-r-G brdr-r-2 rounded border-2 text-center px-1 h-75 w-100 mx-1"
                        }
                        onClick={handleToggleO}
                      >
                        <p className={isActiveO ? "font-grey" : "font-green"}>
                          1
                        </p>
                      </div>
                    </div>
                    <div className="ml-1">
                      <div
                        className={
                          isActiveT
                            ? "brdr-grey border-2 rounded mx-1 px-1 w-100 h-75 text-center"
                            : "font-green bg-greyL brdr-r-G brdr-r-2 rounded border-2 text-center px-1 h-75 w-100 mx-1"
                        }
                        onClick={handleToggleT}
                      >
                        <p className={isActiveT ? "font-grey" : "font-green"}>
                          2
                        </p>
                      </div>
                    </div>
                    <div className="ml-1">
                      <div
                        className={
                          isActiveTh
                            ? "border-2 brdr-grey rounded mx-1 px-1 w-100 h-75 text-center"
                            : "font-green bg-greyL brdr-r-G brdr-r-2 rounded border-2 text-center px-1 h-75 w-100 mx-1"
                        }
                        onClick={handleToggleTh}
                      >
                        <p className={isActiveTh ? "font-grey" : "font-green"}>
                          3
                        </p>
                      </div>
                    </div>
                    <div className="ml-1">
                      <div
                        className={
                          isActiveF
                            ? "border-2 brdr-grey rounded mx-1 px-1 w-100 h-75 text-center"
                            : "font-green bg-greyL brdr-r-G brdr-r-2 rounded border-2 text-center px-1 h-75 w-100 mx-1"
                        }
                        onClick={handleToggleF}
                      >
                        <p className={isActiveF ? "font-grey" : "font-green"}>
                          4
                        </p>
                      </div>
                    </div>
                    <div className="ml-1">
                      <div className="brdr-grey rounded border-2 mx-1 px-1 w-100 h-75 text-center">
                        <p className="font-grey">
                          <i class="fas fa-chevron-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailAdded;
