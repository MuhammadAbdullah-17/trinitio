import React from "react";
import Logo from "../../../Assets/Logo1.png";
import CalenderImg from "../../../Assets/Calender.png";
import Timezone from "./TimeZone.jsx";
import Points from "../../../Assets/Group540.png";

const Calender1 = () => {
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
                Your &nbsp; <div className="clr-grn">Google</div> Calender's
                connected!
              </div>
              <div className="mt-2">
                Pagespeedy will auto-check your calendar for busy times and add
                new events as they are scheduled
              </div>
            </div>
          </div>
          <div className="bg-white align-left px-5 py-4">
            <div className="cnct-email">
              Here’s how Pagespeedy will work with johndoe@gmail.com
            </div>
            <div className="row mt-4">
              <div className="col-9 d-flex">
                <div className="rounded-circle bg-blue brdr-grey px-2 py-1">
                  1
                </div>
                <span className="mt-1 px-2 d-flex chck-emai">
                  We’ll check &nbsp;
                  <strong className="">“johndoe@gmail.com”</strong> &nbsp; for
                  conflicts
                </span>
              </div>
              <div className="col align-right clr-green txt-bold mt-1">
                Edit
              </div>
            </div>
          </div>
          <hr className="col-12 my-0" />
          <div className="bg-white align-left px-5 py-4 box-btm">
            <div className="row mt-0">
              <div className="col-9 d-flex">
                <div className="rounded-circle bg-blue brdr-grey px-2 py-1">
                  2
                </div>
                <span className="mt-1 px-2 d-flex chck-emai">
                  We'll add events to &nbsp;
                  <strong className="">“johndoe@gmail.com”</strong>
                </span>
              </div>
              <div className="col align-right clr-green txt-bold mt-1">
                Edit
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 mx-auto mt-5">
          <div className="row">
            <div className="col-3">
              <img src={Points} alt="" />
            </div>
            <div className="col align-right">
              <a href="">
                <button className="set-btn px-3 col-4 py-2 bg-white">
                  Set Up Later
                </button>
              </a>
              <a href="">
                <button className="set-btn bg-green text-white col-4 px-3 py-2 mx-3">
                  Continue
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5">
            <a href="" className="cntnue-wo-btn">
                Continue  without calender
            </a>
        </div>
      </div>
    </div>
  );
};

export default Calender1;
