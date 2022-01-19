import React, { useState } from "react";
import "../../../../Wclasses.css";
import "../../../../Hclasses.css";
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
          <div className="w-70 h-30 mx-3 brdr-r-2 bg-greyM cdtl mt-3">
            <div className="d-flex">
              <div className="col text-center">Status</div>
              <div className="col text-center">#</div>
              <div className="col-2 text-left">First Name</div>
              <div className="col-2 text-left">Last Name</div>
              <div className="col-3 text-left">Email</div>
              <div className="col-2 text-left">Company</div>
              <div className="col-4 text-left">Linkedin Profile</div>
              <div className="col-1 text-left">Skype</div>
              <div className="col-2 text-left">Merge Tag 1</div>
              <div className="col-2 text-left">Merge Tag 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailRecipients;
