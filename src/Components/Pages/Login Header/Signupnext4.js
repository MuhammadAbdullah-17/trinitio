import React from "react";
import Logo from "../../../Assets/Logo1.png";

const Signupnext4 = () => {
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <img src={Logo} alt="" className="logoimg" />
        <div className="mt-5 name-men">John,</div>
        <div className="mx-auto col-4 d-data para1-signupnext4">
          Thank you for confirming your email address, &nbsp;
          <a href="" className="sgnpnxt3-mail-lnk">
            johndoe@gmail.com
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
                className="col-12 px-3 py-2 mt-2 mx-auto signup-frm-input"
              />
              <button className="btn-r col-12 mt-5 py-3 g-btn">Continue</button>
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
      </div>
    </div>
  );
};

export default Signupnext4;
