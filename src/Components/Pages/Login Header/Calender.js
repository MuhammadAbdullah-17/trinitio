import React from "react";
import Logo from "../../../Assets/Logo1.png";
import CalenderImg from "../../../Assets/schedule1.png";
import Timezone from "./TimeZone.jsx";
import Points from "../../../Assets/Group539.png";

const Calender = () => {
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <img src={Logo} alt="" className="logoimg" />
        <div className="box-brdr col-4 mx-auto mt-5">
          <div className="box-b row mx-auto px-3 py-4">
            <div className="col-2 mt-1">
              <img src={CalenderImg} alt="" />
            </div>
            <div className="col align-left">
              <div className="wlcm-txt d-flex">
                Connect your &nbsp; <div className="clr-grn">Calender</div>
              </div>
              <div className="mt-2">
                Connect your calendar to auto-check for busy times and add new
                events as they are scheduled.
              </div>
            </div>
          </div>
          <div className="bg-white align-left px-5 py-4">
            <div className="row"></div>
            <div className="row mt-3">
              <label htmlFor="" className="col-3 pgname mt-2">
                Pagespeedy.com/
              </label>
              <div className="col mx-auto">
                <input
                  type="text"
                  name="johndoe12"
                  placeholder="johndoe12"
                  className="col-12 px-3 py-2 mx-3 my-0 signup-frm-input pgname"
                  required
                />
              </div>
            </div>
          </div>
          <hr className="col-12" />
          <div className="bg-white align-left px-5 py-4 box-btm">
            <label htmlFor="" className="wlcm-tm-zn">
              Time Zone
            </label>
            <div className="col-12 mt-3"></div>
            <Timezone />
          </div>
        </div>
        <div className="col-4 mx-auto mt-5">
          <div className="row">
            <div className="col-3">
              <img src={Points} alt="" />
            </div>
            <div className="col align-right">
              <a href="">
                <button className="set-btn bg-white col-6 px-3 py-2 mx-3">
                  Continue without calender
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
