import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main4 = () => {
  return (
    <div className="col-10 float-right bg-grey pgstup">
      <div className="row mx-auto mt-5">
        <div className="col-11 mr-4 ml-2 p-3 brdr-r-5 brdr-g bg-white mb-5 pgw-70 mx-auto">
          <div className="col-10 ml-1">
            <h4>Manage User</h4>
          </div>
          <div className="col-4 mt-5 mx-3 px-3 brdr-r-2 py-3 bg-dg text-white">
            <h6>Premium Feature</h6>
            <div className="d-flex">
              Available on paid plans. &nbsp;{" "}
              <a href="" className="font-green upnwlnk">
                <u>Upgrade Now</u>
              </a>
            </div>
          </div>
          <Link to="/ManageUsers/AddSeats">
            <button className="set-btn bg-green text-white col-2 py-2 mx-3 mt-4 mb-4">
              New User
            </button>
          </Link>
          <div className="mt-3 col-6 mx-1 px-4">
            Who else should be able to manage appointments and availability of
            this calendar? Receptionist? Business Partner? Aunt Louise?
            <a href="" className="font-green d-block upnwlnk">
              <u>Learn More.</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main4;
