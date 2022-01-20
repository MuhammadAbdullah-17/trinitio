import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../../../../Wclasses.css";
import "../../../../Hclasses.css";
import "../../../../Border.css";
import Table from "react-bootstrap/Table";
import Google from "../../../../Assets/Google.png";
import Switchbtn from "./Switchbtn";
import Timezone from "../../Login Header/TimeZone";
import MailProvider from "./MailProvider";

const EmailRecipients = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="col-10 float-right bg-grey pgstup mx-auto" id="follow">
      <div className="row mx-auto mt-5">
        <div className="col-11 mr-4 ml-2 p-3 brdr-r-5 brdr-g bg-white mb-5 mx-auto">
          <div className="col-10 ml-1">
            <h4>Recipients</h4>
          </div>
          <p className="my-0 ml-3 pl-1 font-15 mt-4">
            Please select one or more of the availablel categories below to send
            emails:
          </p>
          <div className="col-7 bg-greyL brdr-grey brdr-r-1 mt-2 py-3 mx-3">
            <div className="row mx-auto my-2">
              <div className="col-8">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Type the category name to add as recipient"
                  className="w-100 py-3 px-3 brdr-r-2 outline-0 brdr-grey"
                />
              </div>
              <div className="col mx-auto">
                <button className="set-btn bg-green text-white px-4 py-3">
                  Add Reciepents
                </button>
              </div>
            </div>
            <h6 className="mx-3 mt-3">Available Categories:</h6>
            <div className="row mx-1">
              <div className="d-flex">
                <div className="dayb-G text-center px-2 py-2 mx-1 w-15">
                  Leads
                </div>
                <div className="dayb-G text-center px-2 py-2 mx-1 w-15">
                  Prospects
                </div>
                <div className="dayb-G text-center px-2 py-2 mx-1 w-15">
                  Premium
                </div>
              </div>
            </div>
            <h6 className="mx-3 mt-3">Added Recipients:</h6>
            <div className="row mx-1">
              <div className="d-flex">
                <div className="dayb-G text-center px-2 py-2 mx-1 w-15">
                  Clients
                </div>
                <div className="dayb-G text-center px-2 py-2 mx-1 w-15">
                  Recipients
                </div>
              </div>
            </div>
          </div>
          <div className="w-70 h-30 cdtl brdr-grey mx-3 brdr-r-2 mt-4">
            <Table responsive className="w-98vw">
              <thead>
                <tr className="bg-greyM">
                  <th className="text-center">Status</th>
                  <th className="text-center">#</th>
                  <th className="text-left">First Name</th>
                  <th className="text-left">Last Name</th>
                  <th className="text-left">Email</th>
                  <th className="text-left">Company</th>
                  <th className="text-left">Linkedin Profile</th>
                  <th className="text-left">Skype</th>
                  <th className="text-left">Merge Tag 1</th>
                  <th className="text-left">Merge Tag 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center ifobg">
                    <i class="fas fa-info-circle"></i>
                  </td>
                  <td className="text-center">#</td>
                  <td>Piyush</td>
                  <td>Patel</td>
                  <td>piyush@saleshandy.com</td>
                  <td>SalesHandy Inc.</td>
                  <td>https://www.linkedin.com/in/piyushnp</td>
                  <td>piyushnp88</td>
                  <td>custom message 1</td>
                  <td>custom message 1</td>
                </tr>
                <tr>
                  <td className="text-center ifobg">
                    <i class="fas fa-info-circle"></i>
                  </td>
                  <td className="text-center">#</td>
                  <td>Piyush</td>
                  <td>Patel</td>
                  <td>piyush@saleshandy.com</td>
                  <td>SalesHandy Inc.</td>
                  <td>https://www.linkedin.com/in/piyushnp</td>
                  <td>piyushnp88</td>
                  <td>custom message 1</td>
                  <td>custom message 1</td>
                </tr>
                <tr>
                  <td className="text-center ifobg">
                    <i class="fas fa-info-circle"></i>
                  </td>
                  <td className="text-center">#</td>
                  <td>Piyush</td>
                  <td>Patel</td>
                  <td>piyush@saleshandy.com</td>
                  <td>SalesHandy Inc.</td>
                  <td>https://www.linkedin.com/in/piyushnp</td>
                  <td>piyushnp88</td>
                  <td>custom message 1</td>
                  <td>custom message 1</td>
                </tr>
                <tr>
                  <td className="text-center ifobg">
                    <i class="fas fa-info-circle"></i>
                  </td>
                  <td className="text-center">#</td>
                  <td>Piyush</td>
                  <td>Patel</td>
                  <td>piyush@saleshandy.com</td>
                  <td>SalesHandy Inc.</td>
                  <td>https://www.linkedin.com/in/piyushnp</td>
                  <td>piyushnp88</td>
                  <td>custom message 1</td>
                  <td>custom message 1</td>
                </tr>
                <tr>
                  <td className="text-center ifobg">
                    <i class="fas fa-info-circle"></i>
                  </td>
                  <td className="text-center">#</td>
                  <td>Piyush</td>
                  <td>Patel</td>
                  <td>piyush@saleshandy.com</td>
                  <td>SalesHandy Inc.</td>
                  <td>https://www.linkedin.com/in/piyushnp</td>
                  <td>piyushnp88</td>
                  <td>custom message 1</td>
                  <td>custom message 1</td>
                </tr>
                <tr>
                  <td className="text-center ifobg">
                    <i class="fas fa-info-circle"></i>
                  </td>
                  <td className="text-center">#</td>
                  <td>Piyush</td>
                  <td>Patel</td>
                  <td>piyush@saleshandy.com</td>
                  <td>SalesHandy Inc.</td>
                  <td>https://www.linkedin.com/in/piyushnp</td>
                  <td>piyushnp88</td>
                  <td>custom message 1</td>
                  <td>custom message 1</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="d-flex mx-auto mt-3">
            <div className="mx-3 w-18vw">
              <input
                type="text"
                name=""
                id=""
                placeholder="CC"
                className="w-100 py-2 px-3 brdr-r-2 outline-0 brdr-grey"
              />
            </div>
            <div className="w-18vw">
              <input
                type="text"
                name=""
                id=""
                placeholder="BCC"
                className="w-100 py-2 px-3 brdr-r-2 outline-0 brdr-grey"
              />
            </div>
          </div>
          <div className="col-7 mt-2 font-15 mx-1">
            We recommend that while sending emails from Gmail account, please Do
            NOT specify the same account in CC and/or BCC for accurate results
            in replay tracking.
          </div>

          <div className="col-7 mt-3">
            <div className="row">
              <div className="col mx-1">
                <h5 className="mt-2">From Email</h5>
              </div>
              <div className="col text-right">
                <Button
                  onClick={() => setModalShow(true)}
                  className="border-0 brdr-r-20 bg-green text-white px-4 py-2 mx-3"
                >
                  + Add Email Campaign
                </Button>
                <MailProvider
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>

          {/* Email taken from email provider */}
          <div className="col-7 mt-3 mx-3 px-0 py-0">
            <div className="brdr-r-2 brdr-grey w-38vw">
              <div className="bg-greyM px-2 py-2 brdr-r-LT-10 brdr-r-LB-10 my-0 emlpA position-absolute">
                <img src={Google} alt="" className="" />
              </div>
              <div className="font-15 ml-5 py-2">
                daniel.houtcomehealth@gmail.com
              </div>
            </div>
          </div>

          {/* These are switches to followup, open tracking, link tracking */}
          <div className="col-7 d-flex mt-3">
            <Switchbtn />
            <div className="font-15 mx-2">
              Send followup email in the same thread
            </div>
            <div>
              <i class="fas fa-info-circle"></i>
            </div>
          </div>
          <div className="col-7 d-flex mt-3">
            <Switchbtn />
            <div className="font-15 mx-2">Open tracking</div>
          </div>
          <div className="col-7 d-flex mt-3">
            <Switchbtn />
            <div className="font-15 mx-2">Link Tracking</div>
          </div>

          {/* Add Followup Stage Button */}
          <div className="col-12 mx-auto">
            <div className="row mx-auto">
              <div className="col-12 bg-greyM brdr-r-2 brdr-grey py-3">
                <button className="border-0 brdr-r-20 bg-green text-white px-4 py-2 mx-3">
                  + Add Followup Stage
                </button>
              </div>
            </div>
          </div>

          {/* Preference */}
          <div className="col-12 mx-auto mt-3">
            <div className="row mx-auto">
              <div className="col-12 bg-greyM brdr-r-2 brdr-grey py-3">
                <h6>Preference</h6>
                <div className="row mt-3">
                  <div className="col-3">
                    <label htmlFor="" className="font-15 font-grey">
                      Schedule Time
                    </label>
                    <input
                      type="datetime-local"
                      name="Schedule Time"
                      id=""
                      className="bg-greyL brdr-grey brdr-r-2 px-2 py-2 w-100 d-block"
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-15 font-grey">
                      Timezone
                    </label>
                    <Timezone className="" />
                  </div>
                  <div className="col mx-auto">
                    <div className="d-flex mt-4">
                      <div className="mt-2 mx-2">
                        Interval between two emails (in seconds)
                      </div>
                      <div className="brdr-r-2 brdr-grey bg-greyL p-2">60</div>
                      <div className="mt-2 mx-2">to</div>
                      <div className="brdr-r-2 brdr-grey bg-greyL p-2">90</div>
                    </div>
                  </div>
                </div>
                <div className="my-3 mx-0 col-12">
                  <input type="checkbox" name="Allow" id="alw" />
                  <label className="px-2">
                    I understand that sending campaign emails in a short time
                    period means I may hit email provider’s sending rate limit.
                    <a href="">Learn more</a>
                  </label>
                </div>
                <button className="border-0 brdr-r-20 bg-green text-white px-4 py-2 ">
                  Schedule Campaign
                </button>
                <button className="set-btn px-3 mx-3 py-2 bg-greyL">
                  Save As Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailRecipients;
