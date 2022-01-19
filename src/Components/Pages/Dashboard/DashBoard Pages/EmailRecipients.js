import React, { useState } from "react";
import "../../../../Wclasses.css";
import "../../../../Hclasses.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
// import { TextField } from "@material-ui/core";s

const EmailRecipients = () => {
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
          <div className="w-70 h-30 cdtl mx-3 brdr-r-2 mt-4">
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
                  <button className="border-0 brdr-r-20 bg-green text-white px-4 py-2 mx-3">
                    + Add Email Campaign
                  </button>
              </div>
            </div>
          </div>
          <div className="col-7 mt-3 brdr-r-2 brdr-grey mx-3"></div>
        </div>
      </div>
    </div>
  );
};

export default EmailRecipients;
