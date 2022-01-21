import React, { useState } from "react";
import Google1 from "../../../../../Assets/Chrome.png";
import SalesForce from "../../../../../Assets/Salesforce.png";
import Hub from "../../../../../Assets/Hub.png";
import MailChimp from "../../../../../Assets/mailchimp.png";
import Switchbtn from "../Switchbtn";
import Table from "react-bootstrap/Table";

function Integration(props) {
  return (
    <div className="col-10 float-right bg-grey pgstup">
      <div className="row mx-3 my-4">
        <div className="px-0 mt-4">
          <div className="row mx-2">
            <div className="col-12 px-0 py-3">
              <div className="row mx-auto">
                <div className="col-3 mx-auto">
                  <div className="dayb bg-white border-0 mx-1 px-2 py-2 text-center">
                    <img src={Google1} alt="" className="py-3 mt-3" />
                    <h6>Pagespeedy for Chrome</h6>
                    <p className="font-13 font-grey mb-4 px-3">
                      Access your event type links, create Ad hoc Meetings and
                      more.
                    </p>
                  </div>
                </div>
                <div className="col-3 mx-auto">
                  <div className="dayb bg-white border-0 mx-1 px-2 py-2 text-center">
                    <img src={SalesForce} alt="" className="py-3 mt-3" />
                    <h6>Pagespeedy for Chrome</h6>
                    <p className="font-13 font-grey mb-4 px-2">
                      Access your event type links, create Ad hoc Meetings and
                      more.
                    </p>
                  </div>
                </div>
                <div className="col-3 mx-auto">
                  <div className="dayb bg-white border-0 mx-1 px-2 py-2 text-center">
                    <img src={Hub} alt="" className="py-3 mt-3" />
                    <h6>Pagespeedy for Chrome</h6>
                    <p className="font-13 font-grey mb-4 px-2">
                      Access your event type links, create Ad hoc Meetings and
                      more.
                    </p>
                  </div>
                </div>
                <div className="col-3 mx-auto">
                  <div className="dayb bg-white border-0 mx-1 px-2 py-2 text-center">
                    <img src={MailChimp} alt="" className="py-3 mt-3" />
                    <h6>Pagespeedy for Chrome</h6>
                    <p className="font-13 font-grey mb-4 px-2">
                      Access your event type links, create Ad hoc Meetings and
                      more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mx-auto mt-4">
                <div className="col-3 mx-auto">
                  <div className="dayb bg-white border-0 mx-1 px-2 py-2 text-center">
                    <img src={Google1} alt="" className="py-3 mt-3" />
                    <h6>Pagespeedy for Chrome</h6>
                    <p className="font-13 font-grey mb-4 px-3">
                      Access your event type links, create Ad hoc Meetings and
                      more.
                    </p>
                  </div>
                </div>
                <div className="col-3 mx-auto">
                  <div className="dayb bg-white border-0 mx-1 px-2 py-2 text-center">
                    <img src={SalesForce} alt="" className="py-3 mt-3" />
                    <h6>Pagespeedy for Chrome</h6>
                    <p className="font-13 font-grey mb-4 px-2">
                      Access your event type links, create Ad hoc Meetings and
                      more.
                    </p>
                  </div>
                </div>
                <div className="col-3 mx-auto">
                  <div className="dayb bg-white border-0 mx-1 px-2 py-2 text-center">
                    <img src={Hub} alt="" className="py-3 mt-3" />
                    <h6>Pagespeedy for Chrome</h6>
                    <p className="font-13 font-grey mb-4 px-2">
                      Access your event type links, create Ad hoc Meetings and
                      more.
                    </p>
                  </div>
                </div>
                <div className="col-3 mx-auto">
                  <div className="dayb bg-white border-0 mx-1 px-2 py-2 text-center">
                    <img src={MailChimp} alt="" className="py-3 mt-3" />
                    <h6>Pagespeedy for Chrome</h6>
                    <p className="font-13 font-grey mb-4 px-2">
                      Access your event type links, create Ad hoc Meetings and
                      more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mx-auto">
                <button className="set-btn1 bg-g brdr-r-GG font-green col-2 px-4 py-2 my-4 mx-auto">
                  View More
                </button>
              </div>
            </div>
            <div className="col-12 brdr-r-10 brdr-g bg-white mx-2 px-4 py-3">
              <h6 className="mt-3">API Key:</h6>
              <div className="row mx-auto">
                <div className="col px-0">
                  <input
                    type="password"
                    name="API"
                    id="apkey"
                    className="col-12 brdr-r-2 brdr-grey border-1 outline-0 py-2 mt-2"
                    placeholder="&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;&nbsp;&#9679;"
                  />
                </div>
                <button className="bg-rgk border-0 outline-0 col-2 brdr-r-2 mx-3 font-green">
                  <i class="fas fa-redo"></i>&nbsp; Regenerate Key
                </button>
              </div>
              <div className="d-flex mt-3">
                <p className="font-weight-bold font-15">Note:</p>&nbsp;
                <p className="font-15">
                  If you want to integrate on other platforms that require API
                  key, you can use this to connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integration;
