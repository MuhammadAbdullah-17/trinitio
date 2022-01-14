import React from "react";
import Logo from "../../../Assets/Logo1.png";

const Signupnext3 = () => {
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <div className="mx-auto text-center">
          <img src={Logo} alt="" className="logoimg col-3 mx-auto" />
        </div>
        <div className="col-6 mt-5 mx-auto para-signupnext3">
          Before continuing, we need to verify your email address. Please check
          your inbox for a confirmation link.
        </div>
        <div className="mx-auto col-6 px-3 d-data mt-3 para1-signupnext3">
          If you do not receive the email at &nbsp;
          <a href="" className="sgnpnxt3-mail-lnk">
            shannii54321@gmail.com
          </a>
          &nbsp; within an hour, &nbsp;
          <a href="" onclick="myFunction()" className="sgnpnxt3-lnk">
            we can resend it to you.
          </a>
          <script>
            function myFunction(){" "}
            {alert("Email is sent to you check your mail")}
          </script>
        </div>
      </div>
    </div>
  );
};

export default Signupnext3;
