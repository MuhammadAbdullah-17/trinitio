import React, { useState } from "react";
import Google1 from "../../../../../Assets/Chrome.png";
import SalesForce from "../../../../../Assets/Salesforce.png";
import Hub from "../../../../../Assets/Hub.png";
import Union from "../../../../../Assets/Union.png";
import Google from "../../../../../Assets/GoogleC.png";
import Microsoft from "../../../../../Assets/Microsoft1.png";
import Office from "../../../../../Assets/office.png";
import Exchange from "../../../../../Assets/Exchange.png";
import Outlook from "../../../../../Assets/outlook.png";
import Apple from "../../../../../Assets/Apple.png";
import Cloud from "../../../../../Assets/cloud.png";

function Connect(props) {
  return (
    <div className="col-10 float-right bg-grey pgstup">
      <div className="row mx-3 my-4">
        <div className="px-0 mt-4">
          <div className="row mx-2">
            <div className="col-12 brdr-r-10 brdr-g bg-white mx-2 px-4 pt-3 pb-5">
              <h6 className="mt-3">Select Calender</h6>
              <div className="row mx-auto">
                Connect your calendar to let Pagespeedy know when you’re
                available and update your calendar as events are scheduled.
              </div>
              <hr />
              <div className="col-8">
                <div className="row mx-auto">
                  <div className="col-1 mr-5">
                    <div className="text-center justify-content-center">
                      <img src={Union} alt="" className="ml-3" />
                      <h6>Google</h6>
                    </div>
                  </div>
                  <div className="col-9 text-right ml-5">
                    <div className="w-100 py-2 bg-Lbl brdr-ggl brdr-r-2">
                      <div className="row mx-auto">
                        <div className="col text-left px-2">
                          <div className="d-flex">
                            <img src={Google} alt="" />
                            <div className="mx-2">
                              <div className="font-weight-bold">
                                Google Calendar
                              </div>
                              <div>Gmail, G Suite</div>
                            </div>
                          </div>
                        </div>
                        <div className="col text-right px-0">
                          <button className="border-0 outline-0 my-2 brdr-r-20 bg-bl mx-3 text-white px-3 py-1">
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="w-45hvw" />
                <div className="row mx-auto">
                  <div className="col-1 mr-5">
                    <div className="text-center justify-content-center">
                      <img src={Microsoft} alt="" className="ml-4" />
                      <h6 className="mr-2">Microsoft</h6>
                    </div>
                  </div>
                  <div className="col-9 text-right ml-5">
                    <div className="w-100 py-2 bg-Lbl brdr-ggl brdr-r-2">
                      <div className="row mx-auto">
                        <div className="col text-left px-2">
                          <div className="d-flex">
                            <img src={Office} alt="" />
                            <div className="mx-2">
                              <div className="font-weight-bold">
                                Office 365 Calendar
                              </div>
                              <div className="font-13">
                                Office 365, Outlook.com, live.com, or hotmail
                                calendar
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-3 text-right px-0">
                          <button className="border-0 outline-0 my-2 brdr-r-20 bg-orng mx-3 text-white px-3 py-1">
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-100 py-2 bg-Lbl brdr-ggl brdr-r-2 mt-3">
                      <div className="row mx-auto">
                        <div className="col text-left px-2">
                          <div className="d-flex">
                            <img src={Exchange} alt="" />
                            <div className="mx-2">
                              <div className="font-weight-bold">
                                Exchange Calendar
                              </div>
                              <div className="font-13">
                                Exchange Server 2013, 2016, or 2019
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-3 text-right px-0">
                          <button className="border-0 outline-0 my-2 brdr-r-20 bg-bl mx-3 text-white px-3 py-1">
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-100 py-2 bg-Lbl brdr-ggl brdr-r-2 mt-3">
                      <div className="row mx-auto">
                        <div className="col text-left px-2">
                          <div className="d-flex">
                            <img src={Outlook} alt="" />
                            <div className="mx-2">
                              <div className="font-weight-bold">
                                Outlook Plug-In
                              </div>
                              <div className="font-13">
                                Outlook 2007 and higher, with Windows 7 and
                                higher
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-3 text-right px-0">
                          <button className="border-0 outline-0 my-2 brdr-r-20 bg-Y mx-3 text-white px-3 py-1">
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="w-45hvw" />
                <div className="row mx-auto mb-5">
                  <div className="col-1 mr-5">
                    <div className="text-center justify-content-center">
                      <img src={Apple} alt="" className="ml-3" />
                      <h6>Apple</h6>
                    </div>
                  </div>
                  <div className="col-9 text-right ml-5">
                    <div className="w-100 py-2 bg-Lbl brdr-ggl brdr-r-2">
                      <div className="row mx-auto">
                        <div className="col text-left px-2">
                          <div className="d-flex">
                            <img src={Cloud} alt="" />
                            <div className="mx-2">
                              <div className="font-weight-bold">
                                Google Calendar
                              </div>
                              <div>Gmail, G Suite</div>
                            </div>
                          </div>
                        </div>
                        <div className="col text-right px-0">
                          <button className="border-0 outline-0 my-2 brdr-r-20 bg-Sb mx-3 text-white px-3 py-1">
                            Connect
                          </button>
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
}

export default Connect;
