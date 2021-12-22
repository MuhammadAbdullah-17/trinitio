import React, { useState} from "react";
import Logo from "../../../Assets/Logo.png";
import "./Signup.css";
import Bggroup from "../../../Assets/Group 47.png";
import Bgshade from "../../../Assets/Signupbg.png";
import Bgimage from "../../../Assets/Signupimg.png";


// import Singupnext from './Components/Pages/Login Header/Singupnext';


const SignUp = () => {
  return (
    <>
      <div className="header mx-auto box-shadow">
        <div className="container p-4 align-left">
          <img src={Logo} className="col-2" />
        </div>
      </div>
      <div className="container align-left">
        <div className="heading mt-10">Create your</div>
        <div className="heading1">account</div>
        <div className="col-4">
          <p className="mt-5 para">
            Your free account comes with a 14-day trauk if our Professional
            plan. After your trial, continue using our Basic plan for free or
            upgrade to the plan that best fits your scheduling needs.
          </p>
          <div className="mt-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="input1 px-3 py-3 w-100"
            />
            <a to="/Singupnext.js" className="position-absolute btn-p">
              <button className="btn-r px-4 py-3 signup-btn text-white">
                Sign UP
              </button>
            </a>
          </div>
          <div className="d-flex mt-4 para">
            Already have a Pagespeedy account? &nbsp;
            <a href="" className="clr-green">
              Log In
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-7" />
      <div className="container">
        <div className="row py-3">
          <div className="paraC col-6 align-left">
            We use cookies to provide a proactive support experience, enhance,
            enhance site navigation, analyze site usage, and assist in our
            marketing efforts. For more information on how we handle personal
            information please see our Privacy Policy.
          </div>
          <div className="col-2 mt-4 align-right">
            <a href="" className="border-dot clr-green">Cookie Settings</a>
          </div>
          <div className="col-3 mt-3 align-left">
            <button className="btn-r btn-bg-green px-4 py-2">Accept All Cookies</button>
          </div>
        </div>
      </div>
      <div className="bggroup">
        <img src={Bggroup} alt="" />
      </div>
      <div className="Bgshade">
        <img src={Bgshade} alt="" />
      </div>
      <div className="Bgimage">
        <img src={Bgimage} alt="" />
      </div>
    </>
  );
};

export default SignUp;
