import React from "react";
import Logo from "../../../Assets/Logo1.png";
import ClockImg from "../../../Assets/clock1.png";
import Points from "../../../Assets/Group541.png";

const Dayselector = () => {
    "#search".on("keyup", function () {
      var pattern = $(this).val();
      ".items-collection .items".hide();
      ".items-collection .items"
        .filter(function () {
          return $(this).text().match(new RegExp(pattern, "i"));
        })
        .show();
    });
  return (
    <div className="container">
      <h2>Multiple items selector with filter</h2>
      <div className="row">
        <div className="form-group">
          <div className="items-collection">
            <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="info-block block-info clearfix">
                <div data-toggle="buttons" className="btn-group bizmoduleselect">
                  <label className="btn btn-default">
                    <div className="itemcontent">
                      <input
                        type="checkbox"
                        name="var_id[]"
                        autocomplete="off"
                        value=""
                      />
                      <span className="fa fa-car fa-2x"></span>
                      <h5>car</h5>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="info-block block-info clearfix">
                <div data-toggle="buttons" className="btn-group itemcontent">
                  <label className="btn btn-default">
                    <div className="itemcontent">
                      <input
                        type="checkbox"
                        name="var_id[]"
                        autocomplete="off"
                        value=""
                      />
                      <span className="fa fa-truck fa-2x"></span>
                      <h5>truck</h5>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="info-block block-info clearfix">
                <div data-toggle="buttons" className="btn-group itemcontent">
                  <label className="btn btn-default">
                    <div className="itemcontent">
                      <input
                        type="checkbox"
                        name="var_id[]"
                        autocomplete="off"
                        value=""
                      />
                      <span className="fa fa-laptop fa-2x"></span>
                      <h5>laptop</h5>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="info-block block-info clearfix">
                <div data-toggle="buttons" className="btn-group itemcontent">
                  <label className="btn btn-default">
                    <div className="itemcontent">
                      <input
                        type="checkbox"
                        name="var_id[]"
                        autocomplete="off"
                        value=""
                      />
                      <span className="fa fa-cube fa-2x"></span>
                      <h5>cube</h5>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="info-block block-info clearfix">
                <div data-toggle="buttons" className="btn-group itemcontent">
                  <label className="btn btn-default">
                    <div className="itemcontent">
                      <input
                        type="checkbox"
                        name="var_id[]"
                        autocomplete="off"
                        value=""
                      />
                      <span className="fa fa-lock fa-2x"></span>
                      <h5>secure</h5>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="info-block block-info clearfix">
                <div data-toggle="buttons" className="btn-group itemcontent">
                  <label className="btn btn-default">
                    <div className="itemcontent">
                      <input
                        type="checkbox"
                        name="var_id[]"
                        autocomplete="off"
                        value=""
                      />
                      <span className="fa fa-barcode fa-2x"></span>
                      <h5>barcode</h5>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="info-block block-info clearfix">
                <div data-toggle="buttons" className="btn-group itemcontent">
                  <label className="btn btn-default">
                    <div className="itemcontent">
                      <input
                        type="checkbox"
                        name="var_id[]"
                        autocomplete="off"
                        value=""
                      />
                      <span className="fa fa-key fa-2x"></span>
                      <h5>key</h5>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <div className="info-block block-info clearfix">
                <div data-toggle="buttons" className="btn-group itemcontent">
                  <label className="btn btn-default">
                    <div className="itemcontent">
                      <input
                        type="checkbox"
                        name="var_id[]"
                        autocomplete="off"
                        value=""
                      />
                      <span className="fa fa-keyboard-o fa-2x"></span>
                      <h5>keyboard</h5>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <br />
        <div className="form-group">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <i className="fa fa-search fa-2x pull-left searchicon"></i>
            <input
              type="search"
              className="form-control"
              id="search"
              placeholder="Filter items..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dayselector;
