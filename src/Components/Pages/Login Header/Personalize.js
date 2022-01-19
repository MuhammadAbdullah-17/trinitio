import React from "react";
import Logo from "../../../Assets/Logo1.png";
import ClockImg from "../../../Assets/development1.png";
import Points from "../../../Assets/Group542.png";
import { Link } from "react-router-dom";

const Personalize = () => {
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <div className="mx-auto text-center">
          <img src={Logo} alt="" className="logoimg mx-auto" />
        </div>
        <div className="box-brdr col-4 mx-auto mt-5 px-0">
          <div className="box-b row mx-auto px-3 py-4">
            <div className="col-2 mt-1">
              <img src={ClockImg} alt="" />
            </div>
            <div className="col align-left">
              <div className="wlcm-txt d-flex px-1">
                Personalize your &nbsp;{" "}
                <div className="clr-grn">experience</div>
                &nbsp;
              </div>
              <div className="mt-2 px-1">
                Tell us about your role at work. This will help us to provide a
                tailored support experience.
              </div>
            </div>
          </div>
          <div className="bg-white box-w align-left px-5 py-4">
            <div className="avl-hours">Available Hours</div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Sales + Marketing
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Leader + Enterprenuer
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault3">
                Freelance + Consultant
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault3">
                Interview Scheduling
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault3">
                Education
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault3">
                Customer Success + Account Management
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault3">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="col-4 mx-auto mt-5">
          <div className="row">
            <div className="col-3 mt-2">
              <img src={Points} alt="" />
            </div>
            <div className="col align-right">
              <Link to="/Dashboard">
                <button className="set-btn bg-green text-white col-4 px-3 py-2 mx-3">
                  Finish
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalize;
