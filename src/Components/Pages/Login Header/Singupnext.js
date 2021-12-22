import React from "react";
import Logo from "../../../Assets/Logo1.png";

const Singupnext = () => {
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <img src={Logo} alt="" className="logoimg" />
        <div className="himail mt-3">Hi johndoe@gmail.com!</div>
        <div className="box col-3 mx-auto mt-4 py-4 px-3">
          <p className="align-left">
            The easiest way for you to sing up is with Google. This will
            automatically connect your calendar so you can start using Calendly
            right away!
          </p>
          <div className="row">
            <div className="col btn-r">
              <button>Sign up with Google</button>
            </div>
            <div className="col btn-r">
              <button>Sign up with Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singupnext;
