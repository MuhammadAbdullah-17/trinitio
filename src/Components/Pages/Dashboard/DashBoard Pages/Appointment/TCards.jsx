import React from "react";
import { Button, Card } from "react-bootstrap";
import TCardsData from "./TCardsData";
const TCards = () => {
  return (
    <>
      <div className="row mt-4 bg-white brdr-r-2 py-3 px-3 mx-auto">
        {TCardsData.map((data) => {
          return (
            <>
              <div className="w-17vw mx-2 mb-3 px-0">
                <Card
                  className="ATcards col px-0"
                  style={{
                    width: "",
                    border: `$data.border`,
                    backgroundColor: `${data.Bg}`,
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <div
                        className="d-flex align-items-center"
                        style={{ borderBottom: "1px solid orange" }}
                      >
                        <i className="far fa-file-alt mx-1 mb-2 text-muted"></i>
                        <h6 className="text-muted ">{data.Heading}</h6>
                        <label className="switch ms-auto mb-2">
                          <input type="checkbox" />
                          <span className="slider round">
                            <span className="mx-2 fs-6 text-white">On</span>
                          </span>
                        </label>
                      </div>
                    </Card.Title>
                    <div className="m-3">
                      <Card.Subtitle className="mb-2 text-black fs-5">
                        {data.Name}
                      </Card.Subtitle>
                      <Card.Text className="text-muted mb-5">
                        {data.description}
                      </Card.Text>
                    </div>
                    <div className="">
                      <Button
                        className="ATbtn rounded-pill"
                        style={{ background: `${data.BColor}` }}
                      >
                        More Option
                      </Button>
                      <Button
                        style={{ width: "80px", background: `${data.BColor}` }}
                        className="ATbtn rounded-pill ms-3"
                      >
                        Edit
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TCards;
