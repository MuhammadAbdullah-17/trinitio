import React from "react";
import Logo from "../../../Assets/Logo1.png";

const Signupnext3 = () => {
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <img src={Logo} alt="" className="logoimg" />
        <div className="col-6 mt-5 mx-auto para-signupnext3">
          Before continuing, we need to verify your email address. Please check
          your inbox for a confirmation link.
        </div>
        <div className="mx-auto col-6 px-3 d-data mt-3 para1-signupnext3">
          If you do not receive the email at
          &nbsp;<a href="" className="sgnpnxt3-mail-lnk">johndoe@gmail.com</a>&nbsp;
          within an hour,
          &nbsp;<a href="" className="sgnpnxt3-lnk">we can resend it to you.</a>
        </div>
      </div>
    </div>
  );
};

export default Signupnext3;
