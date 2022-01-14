import React from "react";
import Logo from "../../../Assets/Logo1.png";
import WelcomeImg from "../../../Assets/welcome-back1.png";
import Timezone from "./TimeZone.jsx";
import Points from "../../../Assets/Group538.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <div className="mx-auto text-center">
          <img src={Logo} alt="" className="logoimg col-3 mx-auto" />
        </div>
        <div className="box-brdr col-4 mx-auto mt-5 px-0">
          <div className="box-b row mx-auto px-3 py-4">
            <div className="col-2">
              <img src={WelcomeImg} alt="" />
            </div>
            <div className="col align-left">
              <div className="wlcm-txt d-flex">
                Welcome to &nbsp; <div className="clr-grn">PageSpeedy!</div>
              </div>
              <div className="mt-2">
                We take the work out of connecting with others so you can
                accomplish more.
              </div>
            </div>
          </div>
          <div className="bg-white align-left px-4 py-4">
            <div className="crt-url">Create your PageSpeedy URL</div>
            <div className="crt-p mt-2">
              Choose a URL that describes you or your business in a concise way.
              Make it short and easy to remember so you can share links with
              ease.
            </div>
            <div className="row mt-3">
              <label htmlFor="" className="col-3 pgname mt-2">
                Pagespeedy.com/
              </label>
              <div className="col-8 mx-auto">
                <input
                  type="text"
                  name="johndoe12"
                  placeholder="johndoe12"
                  className="col-12 px-3 py-2 mx-2 my-0 signup-frm-input pgname"
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
                <button className="set-btn px-3 col-5 py-2 bg-white">
                  Set Up Later
                </button>
              </a>
              <Link to="/Calender">
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

export default Welcome;
