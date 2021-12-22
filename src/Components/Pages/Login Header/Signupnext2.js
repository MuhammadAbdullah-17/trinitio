import React from "react";
import Logo from "../../../Assets/Logo1.png";

const Signupnext2 = () => {
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <img src={Logo} alt="" className="logoimg" />
        <div className="himail mt-3">Sign Up with Pagespeedy for free.</div>
        <div className="box col-3 mx-auto mt-4 py-5">
          <div className="px-4">
            <form action="" className="d-block align-left">
              <label htmlFor="">Enter your email to get started</label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className="col-12 px-3 py-2 mt-2 mx-auto signup-frm-input"
              />
              <label htmlFor="" className="mt-4">
                Enter your full name
              </label>
              <input
                type="text"
                name="full name"
                placeholder="John Doe"
                className="col-12 px-3 py-2 mt-2 mx-auto signup-frm-input" required
              />
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
          By creting a Pagespeedy account, you agree to &nbsp;
          <a href="" className="click-link">
            Pagespeedy’s Term
          </a>
          &nbsp; and &nbsp;
          <a href="" className="click-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signupnext2;
