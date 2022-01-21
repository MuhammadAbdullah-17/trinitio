import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Logo1.png";
import "../Login Header/Signup.css";

const Signupnext4 = () => {
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <div className="mx-auto text-center">
          <img src={Logo} alt="" className="logoimg mx-auto" />
        </div>
        <div className="mt-5 name-men">John,</div>
        <div className="mx-auto col-4 d-data para1-signupnext4">
          Thank you for confirming your email address, &nbsp;
          <a href="" className="sgnpnxt3-mail-lnk">
            shannii54321@gmail.com
          </a>
          &nbsp;
        </div>
        <div className="mx-auto col-4 d-data para1-signupnext4">
          Let's log in and finish getting your started!
        </div>
        <div className="mx-auto col-4 d-data mt-0 para1-signupnext4">
          <a href="" className="sgnpnxt4-lnk">
            (This is not me)
          </a>
        </div>
        <div className="box col-3 mx-auto mt-4 py-4">
          <div className="px-4">
            <form action="" className="d-block align-left">
              <label htmlFor="" className="mt-4">
                Choose a password with at least 8 characters
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="col-12 px-3 py-2 mt-2 mb-4 mx-auto signup-frm-input"
              />
              <Link to="/Welcome" className="">
                <button
                  className="btn-r col-12 mt-2 py-3 px-5 g-btn"
                >
                  Continue
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className="mx-auto col-3 px-3 d-data mt-3">
          I forget my password. &nbsp;
          <a href="" className="click-link">
            Please send me a recovery email.
          </a>
        </div>
        <div className="mx-auto col-3 px-3 d-data mt-3">
          Don't have an account? &nbsp;
          <a href="" className="click-link">
            Sign Up.
          </a>
        </div>
        <div>
          <select
            name="lang-drop"
            id="Lang-drpdwn"
            className="ovrflw px-2 py-2 mt-3 clr-grey "
          >
            <option value="0">English</option>
            <option value="1">Urdu</option>
            <option value="1">Urdu</option>
            <option value="1">Urdu</option>
            <option value="1">Urdu</option>
            <option value="1">Urdu</option>
            <option value="1">Urdu</option>
            <option value="1">Urdu</option>
            <option value="1">Urdu</option>
            <option value="1">Urdu</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Signupnext4;
