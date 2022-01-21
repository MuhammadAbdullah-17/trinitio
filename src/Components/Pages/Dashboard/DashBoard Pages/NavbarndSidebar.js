import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { DropdownButton } from "react-bootstrap";
import { DropdownItem } from "react-bootstrap";
import "../../Dashboard/Dashboard.css";
import LogoW from "../../../../Assets/TrinitiologoW.png";
import Profile from "../../../../Assets/profile.png";
import Sidebar from "./sidebar";

function MainDashboard() {
  return (
    <>
      <div className="overflow-hidden setup">
        <nav class="navbar navbar-expand-lg navbar-light bg-blk">
          <a class="navbar-brand col-2 px-3" href="#">
            <img src={LogoW} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-9 text-white d-flex">
              <button className="bg-transparent border-0 text-white">
                <i class="fas fa-bars"></i>
              </button>
              <div className="px-3">Dashboard</div>
            </div>
            <div class="navbar-nav ml-auto right">
              <button class="form-inline bg-transparent outline-0 brdr brdr-r-10">
                <i class="fas fa-search txt-g"></i>
              </button>
              <button class="form-inline bg-transparent mx-2 outline-0 brdr brdr-r-10">
                <i class="fas fa-comment-alt txt-g"></i>
              </button>
              <div className="text-white px-2 position-absolute text-num">
                5
              </div>
              <button className="profile-img d-flex mx-1 bg-transparent border-0">
                <img src={Profile} alt="" />
                <div className="profile-n mx-2 mt-2 text-white">John Doe</div>
                <i class="fas fa-chevron-down text-white mx-2 mt-2 pt-1"></i>
              </button>
            </div>
          </div>
        </nav>
        <Sidebar />
      </div>
      {/* <Link to="/Dashboard1" >
      <img src={Dashboard} alt="" className="fakeclass" />
      </Link> */}
    </>
  );
}

export default MainDashboard;
