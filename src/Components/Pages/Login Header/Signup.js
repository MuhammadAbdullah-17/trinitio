import React from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../../../Assets/logo.svg";
import "./Signup.css";
import Bggroup from "../../../Assets/Group 47.png";
import Bgshade from "../../../Assets/Signupbg.svg";
import Bgimage from "../../../Assets/Signupimg.svg";
//import { useState } from "react";


function SignUp() {
  //const [email, setEmail] = useState("")
 
  return (
    <>
      <div className="header mx-auto box-shadow">
        <div className="container p-4 align-left">
          <img src={Logo} className="col-2" alt="" />
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
              name="email"
              //value={setEmail}
              placeholder="Enter your email"
              className="input1 px-3 py-3 w-100"
              required={true}
            />
            <Link
              to="/Signup"
              // onSubmit={handleSubmit}
              className="btn-r px-4 py-3 signup-btn text-white position-absolute btn-p"
            >
              Sign UP
            </Link>
          </div>
          <div className="d-flex mt-2 para">
            Already have a Pagespeedy account? &nbsp;
            <Link to="/Login" className="clr-green">
              Log In
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-1" />
      <div className="container">
        <div className="row py-3">
          <div className="paraC col-6 align-left">
            We use cookies to provide a proactive support experience, enhance,
            enhance site navigation, analyze site usage, and assist in our
            marketing efforts. For more information on how we handle personal
            information please see our Privacy Policy.
          </div>
          <div className="col-2 mt-4 align-right">
            <a href="/" className="border-dot clr-green">
              Cookie Settings
            </a>
          </div>
          <div className="col-3 mt-3 align-left">
            <button className="btn-r btn-bg-green px-4 py-2">
              Accept All Cookies
            </button>
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
}

export default SignUp;
