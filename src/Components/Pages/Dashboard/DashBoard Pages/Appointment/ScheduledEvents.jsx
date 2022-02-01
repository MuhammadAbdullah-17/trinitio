import React from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import SEData from "./ScheduledEventsData";
import "../../../../Styles/trinitio1.css";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
const ScheduledEvents = () => {
  return (
    <>
      <div className="SEdiv container mt-3">
        <div className="row">
          <ButtonGroup className="col-4 mt-3 ms-3" aria-label="Basic example">
            <Button className="SEbtns" variant="light">
              Upcoming
            </Button>
            <Button className="SEbtns" variant="light">
              Pending
            </Button>
            <Button className="SEbtns" variant="light">
              Past
            </Button>
            <Button className="SEbtns" variant="light">
              Data Range
            </Button>
          </ButtonGroup>
          <div className="col-3 ms-auto mt-3">
            <Button className="SEbtns2 mx-4" variant="light">
              <img src="./images/filter.png" alt="" />
              Filter
            </Button>
            <Button className="SEbtns2" variant="light">
              <img src="./images/export.png" alt="" />
              Export
            </Button>
          </div>
        </div>
        <div className="row mt-3 ms-4 me-4 align-items-center">
          <div class="form-check col-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Select All
            </label>
          </div>
          <div className="col-2">
            <DropdownMultiselect
              options={["Category", "Client", "Lead"]}
              name="Select Category"
            />
          </div>
          <Button
            className="SEbtn3 col-1"
            variant="success"
            style={{ color: "#2adc65" }}
          >
            Apply
          </Button>
          <div className="col-3 ms-auto">
            <p className="SEp">Saturday, August 21, 2021</p>
          </div>
        </div>
        {SEData.map((data) => {
          return (
            <>
              <div
                className="row SEschedules mt-4 p-3 mx-auto"
                style={{ background: `${data.color}` }}
              >
                <div class="form-check col-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    height="22px"
                    width="22px"
                  />
                  <label
                    className="form-check-label d-block"
                    for="flexCheckDefault"
                  >
                    {data.time}
                  </label>
                  <small className="text-muted">{data.desc}</small>
                </div>
                <div className="col-6">
                  <div>
                    <label
                      className="form-check-label fs-6"
                      for="flexCheckDefault"
                    >
                      {data.name}
                    </label>
                    <p>{data.type}</p>
                  </div>
                  <div className="row">
                    <DropdownButton
                      className="col-2 SEdd"
                      variant=""
                      title="Details"
                    >
                      <Dropdown.Item>
                        <label
                          className="form-check-label d-block"
                          for="flexCheckDefault"
                        >
                          Email
                        </label>
                        <small className="text-muted">
                          lee@power-funnels.com
                        </small>
                        <label
                          className="form-check-label d-block"
                          for="flexCheckDefault"
                        >
                          Location
                        </label>
                        <small className="text-muted">+1604-355-2210</small>
                        <label
                          className="form-check-label d-block"
                          for="flexCheckDefault"
                        >
                          Invitee Time Zone
                        </label>
                        <small className="text-muted">
                          Pacific Time - US & Canada
                        </small>
                        <label
                          className="form-check-label d-block"
                          for="flexCheckDefault"
                        >
                          Questions
                        </label>
                        <small className="text-muted">
                          Please share your requirements. It will help me
                          prepare for out meeting
                          <br />
                          Searching for a Facebook Ads expert, as well as a
                          Google Ads expert.
                        </small>
                        <label
                          className="form-check-label d-block"
                          for="flexCheckDefault"
                        >
                          Email
                        </label>
                        <small className="text-muted">
                          lee@power-funnels.com
                        </small>
                        <label
                          className="form-check-label d-block"
                          for="flexCheckDefault"
                          style={{ color: "#2ADC65" }}
                        >
                          Add Meeting Notes
                        </label>
                        <small className="text-muted">
                          (only the host will see these)
                        </small>
                        <br />
                        <small className="text-muted">
                          created August 21, 2021
                        </small>
                      </Dropdown.Item>
                    </DropdownButton>
                    <Button variant="outline-danger" className="col-2 mx-3">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className="row mb-3 mt-3 align-items-center mx-auto">
          <h6 className="text-muted px-0 col-8 ">Displaying 1-7 of 540 Events</h6>
          <div className="Sebtns4 col-3 ms-auto me-3">
            <ButtonGroup className="" aria-label="First group">
              <Button className="SEbtn5 mx-1" variant="light">
                &#62;&#62;
              </Button>
              <Button className="SEbtn5 mx-1 " variant="light">
                1
              </Button>
              <Button className="SEbtn5 mx-1" variant="light">
                2
              </Button>
              <Button className="SEbtn5 mx-1" variant="light">
                3
              </Button>
              <Button className="SEbtn5 mx-1" variant="light">
                4
              </Button>
              <Button className="SEbtn5 mx-1" variant="light">
                &#60;&#60;
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduledEvents;
