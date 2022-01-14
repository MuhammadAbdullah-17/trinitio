import React from "react";
import Logo from "../../../Assets/Logo1.png";
import ClockImg from "../../../Assets/clock1.png";
import Points from "../../../Assets/Group541.png";
import Dayselector from "./multiselector";
import { Link } from "react-router-dom";

const Clock = () => {
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <div className="mx-auto text-center">
          <img src={Logo} alt="" className="logoimg col-3 mx-auto" />
        </div>
        <div className="box-brdr col-4 mx-auto mt-5 px-0">
          <div className="box-b row mx-auto px-3 py-4">
            <div className="col-2 mt-1">
              <img src={ClockImg} alt="" />
            </div>
            <div className="col align-left">
              <div className="wlcm-txt d-flex">
                Set your &nbsp; <div className="clr-grn">availabilty</div>
                &nbsp;
              </div>
              <div className="mt-2">
                Let Pagespeedy know when you’re typically available to accept
                meetings.
              </div>
            </div>
          </div>
          <div className="bg-white align-left px-5 py-4">
            <div className="avl-hours">Available Hours</div>
            <div className="row mt-3">
              <div className="col-5">
                <input type="time" className="time-input px-2 py-2 col-10" />
              </div>
              <div className="col mx-auto mt-2">to</div>
              <div className="col-5">
                <input type="time" className="time-input px-2 py-2 col-10" />
              </div>
            </div>
          </div>
          <div className="bg-white align-left px-5 py-4">
            <div className="avl-hours">Available Hours</div>
            <Dayselector />
          </div>
          <div className="mx-auto text-center px-5 mb-2">
            Don’t worry! You’ll be able to further customize your availability
            later on.
          </div>
        </div>
        <div className="col-4 mx-auto mt-5">
          <div className="row">
            <div className="col-3 mt-2">
              <img src={Points} alt="" />
            </div>
            <div className="col align-right">
              <a href="">
                <button className="set-btn px-3 col-5 py-2 bg-white">
                  Set Up Later
                </button>
              </a>
              <Link to="/Personalize">
                <button className="set-btn bg-green text-white col-4 px-3 py-2 mx-3">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
