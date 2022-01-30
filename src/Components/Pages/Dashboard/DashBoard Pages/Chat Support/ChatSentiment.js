import React from "react";
import Profile from "../../../../../Assets/Ownerpic.png";
import PieGraph from "../../../../../Assets/Piegraph.png";
import SmileG from "../../../../../Assets/smileG.png";
import sadG from "../../../../../Assets/sadR.png";
import ChatProfile from "../../../../../Assets/ChatP.png";
import { Link } from "react-router-dom";

const ChatSentiment = () => {
  return (
    <div className="col-10 float-right bg-grey pgstup">
      <div className="row mx-3 my-4">
        <div
          className="col-12 brdr-r-5 px-0 mt-4 brdr-g bg-white mx-2 py-3"
          style={{ height: "82.6vh" }}
        >
          <div className="row mx-auto">
            <div className="col">
              <div className="rounded mx-2 pt-1 mx-3">
                <div className="col-3">
                  <div className="row srch-bar py-1 rounded px-2 font-grey">
                    <i class="fas fa-filter txt-g mt-1 px-0 col-1"></i>
                    <div className="mx-2 px-1 col">Filter</div>
                    <i class="fas fa-chevron-down text-right txt-g mt-1 px-0 col-1"></i>
                  </div>
                </div>
              </div>
              <div className="col-2 my-4">
                <img src={PieGraph} alt="" />
              </div>
              <div className="row">
                <div className="col-4 mx-3">
                  <div className="row py-1 rounded">
                    <img src={SmileG} alt="" className="txt-g px-0 col-1" />
                    <div className="mx-2 px-1 font-15 col">
                      87% Rated as Good
                    </div>
                  </div>
                  <div className="row py-1 rounded">
                    <img src={sadG} alt="" className="txt-g px-0 col-1" />
                    <div className="mx-2 px-1 font-15 col">
                      87% Rated as Good
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mx-auto">
                <div className="box-brdr col-8 mx-auto mt-5 px-0">
                  <div className="bg-Green box-b row mx-auto px-3 py-3">
                    <div className="col-1 px-1">
                      <i class="fas fa-ellipsis-v text-white"></i>
                    </div>
                    <div className="col mx-auto text-center text-white font-weight-bold">
                      Chat with us!
                    </div>
                    <div className="col-1">
                      <i class="fas fa-times text-white"></i>
                    </div>
                  </div>
                  <div className="bg-white align-left px-4 pt-4 pb-2">
                    <div className="row">
                      <div className="col-2">
                        <img src={Profile} alt="" />
                      </div>
                      <div className="col">
                        <h6 className="mb-0">Master Bot</h6>
                        <small>Sales Expert</small>
                      </div>
                      <div className="col-6 px-0">
                        <button
                          className="rounded mx-2 bg-g font-green font-15 outline-0 border px-2 py-1"
                          style={{ borderColor: "#ccc" }}
                        >
                          Book an Appointment
                        </button>
                      </div>
                    </div>
                    <div className="col text-right">
                      <div className="row mx-auto">
                        <div className="col-3">
                          <i className="far fa-thumbs-up font-20 rounded-circle bg-gg py-2 px-2"></i>
                        </div>
                        <div className="col-1">
                          <i className="far fa-thumbs-down font-20 rounded-circle bg-gg py-2 px-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-gg align-left px-3 py-4 box-btm"
                    style={{ height: "45vh" }}
                  >
                    <div className="row">
                      <div className="col-1 mr-3">
                        <img src={ChatProfile} alt="" className="mt-4" />
                      </div>
                      <div className="col">
                        <div className="bg-white brdr-r-2 p-2">
                          Let me see if I can find someone to better help you
                          out.
                        </div>
                        <small className="position-absolute chtm">
                          04:23 PM
                        </small>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col">
                        <small className="position-absolute chtmr">
                          04:23 PM
                        </small>
                        <div className="bg-LGreen brdr-r-2 p-2">
                          Let me see if I can find someone to better help you
                          out.
                        </div>
                      </div>
                      <div className="col-1 mr-4">
                        <img src={ChatProfile} alt="" className="mt-4" />
                      </div>
                    </div>
                    <div className="position-absolute txtp col-12">
                      <div className="row">
                        <div className="col-7 bg-white brdr-r-30">
                          <div className="row py-2 mt-2">
                            <div className="col-1">
                              <i class="far fa-smile font-20"></i>
                            </div>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="col bg-transparent border-0 outline-0 py-0 my-0"
                              placeholder="Type your message here..."
                            />
                          </div>
                        </div>
                        <div className="col px-0">
                          <i className="fas fa-paperclip font-20 rounded-circle bg-white py-3 px-3 font-grey mx-2"></i>
                          <i className="fas fa-paper-plane text-white font-20 rounded-circle bg-Green py-3 px-3 font-grey mx-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSentiment;
