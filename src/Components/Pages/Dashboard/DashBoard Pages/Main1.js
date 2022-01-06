import React from "react";
import Frame from "../../../../Assets/Frame.png";

const Main1 = () => {
  return (
    <div className="col-10 float-right bg-grey">
      <div className="row mx-auto mt-5">
        <div className="col-8">
          <div className="row mx-auto">
            <div className="col-10">
              <h4>Appointment Statistics</h4>
            </div>
            <div className="col-2">
              <select name="" id="">
                <option value="0">Usman</option>
              </select>
            </div>
          </div>
          div.
        </div>
        <div className="col mx-2 p-3 brdr-r-5 bg-white">
          <h4>Affiliate Program</h4>
          <p>
            Did you know you can get paid as well as earn free upgrades for
            yourself by simply telling people about Pagespeedy? You can!
          </p>
          <div className="mx-auto text-center">
            <img src={Frame} alt="" />
          </div>
          <button className="btn-r col-12 mt-4 py-3 g-btn">
            Sign Up Now (It's Free)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main1;
