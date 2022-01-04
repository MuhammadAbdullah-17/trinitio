import React from "react";
import { Link } from "react-router-dom";
import { Select } from 'react-select';
import Logo from "../../../Assets/Logo1.png";
import CalenderImg from "../../../Assets/schedule1.png";
import Timezone from "./TimeZone.jsx";
import Points from "../../../Assets/Group539.png";
import GCalender from "../../../Assets/Group557.png";

const Calender = () => {
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <div className="mx-auto text-center">
          <img src={Logo} alt="" className="logoimg col-3 mx-auto" />
        </div>
        <div className="col-12 text-center mx-auto">
          <img src={GCalender} alt="" className="mb-0"/>
        </div>
        {/* <div className="box-brdr col-4 mx-auto mt-5">
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
          <div className="bg-white align-left px-4 py-4">
            <div className="row"></div>
            <div className="row mt-3">
              <div className="col-3 pgname mt-2">
                <i class="fab fa-google text-center"></i>
                <div className="">Google</div>
              </div>
              <div className="col-8 mx-auto">
                <Select>
                  <option value="0">
                    <div className="row">
                      <div className="col mx-auto">
                        <img src={GCalender} alt="" />
                      </div>
                    </div>
                  </option>
                </Select>
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
        </div> */}
        <div className="col-6 mx-auto">
          <div className="row">
            <div className="col-3 mt-2">
              <img src={Points} alt="" />
            </div>
            <div className="col align-right">
              <Link to="/Calender1">
                <button className="set-btn bg-white col-8 px-3 py-2 mx-3">
                  Continue without calender
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
