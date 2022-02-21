import React from "react";
import Logo from "../../../Assets/Logo1.svg";
import { Link, useParams } from "react-router-dom";

const Singupnext = () => {
  const { email } = useParams();
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <div className="mx-auto text-center">
          <img src={Logo} alt="" className="logoimg mx-auto" />
        </div>
        <div className="himail mt-3">Hi {email}</div>
        <div className="box col-3 mx-auto mt-4 py-5">
          <div className="px-3">
            <p className="align-left font-w-100 mx-auto">
              The easiest way for you to sing up is with Google. This will
              automatically connect your calendar so you can start using
              Calendly right away!
            </p>
            <div className="row px-0 my-4">
              <div className="col  d-flex">
                <button className="btn-r g-btn py-3 px-3 text-white">
                  <i class="fab fa-google"></i>&nbsp; Sign up with Google
                </button>
              </div>
              <div className="col d-flex">
                <button className="btn-r g-btn py-3 px-3 text-white">
                  <i class="fab fa-facebook-f"></i>&nbsp; Sign up with Facebook
                </button>
              </div>
            </div>
          </div>
          <hr className="w-100 mx-0 px-0" />
          <div className="px-3 align-left">
            Prefer to create an account with a password?
          </div>
          <div className="px-3 align-left ">
            <Link to="/Signupnext2" className="click-link">
              Click Here
            </Link>
          </div>
        </div>
        <div className="mx-auto col-3 px-3 d-data mt-3">
          By creting a Pagespeedy account, you agree to &nbsp;
          <a href="/" className="click-link">
            Pagespeedy’s Term
          </a>
          &nbsp; and &nbsp;
          <a href="/" className="click-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Singupnext;
