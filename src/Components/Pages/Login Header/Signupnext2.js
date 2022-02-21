import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Logo1.svg";

const Signupnext2 = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    let item = { email, fullname, password };
    let result = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      mode: 'no-cors',
      redirect:"follow",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    console.log("result");
    localStorage.setItem("user-info", JSON.stringify(result));
  }
  return (
    <div className="mx-auto">
      <div className="mt-7">
        <div className="mx-auto text-center">
          <img src={Logo} alt="" className="logoimg mx-auto" />
        </div>
        <div className="himail mt-3">Sign Up with Pagespeedy for free.</div>
        <div className="box col-3 mx-auto mt-4 py-5">
          <div className="px-4">
            <form action="" className="d-block align-left">
              <label htmlFor="">Enter your email to get started</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@gmail.com"
                className="col-12 px-3 py-2 mt-2 mx-auto signup-frm-input"
              />
              <label htmlFor="" className="mt-4">
                Enter your full name
              </label>
              <input
                type="text"
                name="full name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="John Doe"
                className="col-12 px-3 py-2 mt-2 mx-auto signup-frm-input"
                required
              />
              <label htmlFor="" className="mt-4">
                Choose a password with at least 8 characters
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="col-12 px-3 py-2 mt-2 mx-auto signup-frm-input"
              />
              
              <Link to="/Signupnext3">
              <button onClick={submit} className="btn-r col-12 mt-5 py-3 g-btn">
                  Continue
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className="mx-auto col-3 px-3 d-data mt-3">
          By creating a Pagespeedy account, you agree to &nbsp;
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

export default Signupnext2;
