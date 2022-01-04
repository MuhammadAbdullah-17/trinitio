import React, { useState } from "react";
import Logo from "../../../Assets/Logo1.png";
import ClockImg from "../../../Assets/clock1.png";
import Points from "../../../Assets/Group541.png";
import "./multiselector.css";

const Dayselector = () => {
  const [isActiveSun, setActiveSun] = useState("false");
  const handleToggleSun = () => {
    setActiveSun(!isActiveSun);
  };
  const [isActiveMon, setActiveMon] = useState("false");
  const handleToggleMon = () => {
    setActiveMon(!isActiveMon);
  };
  const [isActiveTue, setActiveTue] = useState("false");
  const handleToggleTue = () => {
    setActiveTue(!isActiveTue);
  };
  const [isActiveWed, setActiveWed] = useState("false");
  const handleToggleWed = () => {
    setActiveWed(!isActiveWed);
  };
  const [isActiveThu, setActiveThu] = useState("false");
  const handleToggleThu = () => {
    setActiveThu(!isActiveThu);
  };
  const [isActiveFri, setActiveFri] = useState("false");
  const handleToggleFri = () => {
    setActiveFri(!isActiveFri);
  };
  const [isActiveSat, setActiveSat] = useState("false");
  const handleToggleSat = () => {
    setActiveSat(!isActiveSat);
  };
  return (
    <div className="row">
      <div className="col px-0 mx-auto">
        <div
          className={isActiveSun ? "dayb mx-1 px-2 py-2 text-center" : "dayb-A text-center px-2 py-2 mx-1"}
          onClick={handleToggleSun}
        >
          Sun
        </div>
      </div>
      <div className="col px-0 mx-auto">
        <div
          className={isActiveMon ? "dayb mx-1 px-2 py-2 text-center" : "dayb-A text-center px-2 py-2 mx-1"}
          onClick={handleToggleMon}
        >
          Mon
        </div>
      </div>
      <div className="col px-0 mx-auto">
        <div
          className={isActiveTue ? "dayb mx-1 px-2 py-2 text-center" : "dayb-A text-center px-2 py-2 mx-1"}
          onClick={handleToggleTue}
        >
          Tue
        </div>
      </div>
      <div className="col px-0 mx-auto">
        <div
          className={isActiveWed ? "dayb mx-1 px-2 py-2 text-center" : "dayb-A text-center px-2 py-2 mx-1"}
          onClick={handleToggleWed}
        >
          Wed
        </div>
      </div>
      <div className="col px-0 mx-auto">
        <div
          className={isActiveThu ? "dayb mx-1 px-2 py-2 text-center" : "dayb-A text-center px-2 py-2 mx-1"}
          onClick={handleToggleThu}
        >
          Thu
        </div>
      </div>
      <div className="col px-0 mx-auto">
        <div
          className={isActiveFri ? "dayb mx-1 px-2 py-2 text-center" : "dayb-A text-center px-2 py-2 mx-1"}
          onClick={handleToggleFri}
        >
          Fri
        </div>
      </div>
      <div className="col px-0 mx-auto">
        <div
          className={isActiveSat ? "dayb mx-1 px-2 py-2 text-center" : "dayb-A text-center px-2 py-2 mx-1"}
          onClick={handleToggleSat}
        >
          Sat
        </div>
      </div>
    </div>
  );
};

export default Dayselector;
