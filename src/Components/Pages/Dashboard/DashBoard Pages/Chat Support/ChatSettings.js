import React, { useState } from "react";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Maskimg from "../../../../../Assets/MaskGroup.png";
import Videoimg from "../../../../../Assets/videoimg.png";
import Mobile from "../../../../../Assets/Mobile.png";
import Halfscreen from "../../../../../Assets/hscreen.png";
import Back from "../../../../../Assets/back.png";
import Circle from "../../../../../Assets/circle.png";
import Multi from "../../../../../Assets/Multi.png";
import MyVerticallyCenteredModal from "../VideoModal";

const ChatSetting = () => {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);
  const handleToggleshown = () => {
    setShown(!shown);
  };
  const [isActiveSun, setActiveSun] = useState("false");
  const handleToggleSun = () => {
    setActiveSun(!isActiveSun);
  };
  const [isActiveSat, setActiveSat] = useState("false");
  const handleToggleSat = () => {
    setActiveSat(!isActiveSat);
  };
  const [isActiveSun1, setActiveSun1] = useState("false");
  const handleToggleSun1 = () => {
    setActiveSun1(!isActiveSun1);
  };
  const [isActiveSat1, setActiveSat1] = useState("false");
  const handleToggleSat1 = () => {
    setActiveSat1(!isActiveSat1);
  };
  const [isActiveMulti, setActiveMulti] = useState("false");
  const handleToggleMulti = () => {
    setActiveMulti(!isActiveMulti);
  };
  return (
    <div className="col-10 float-right bg-grey pgstup">
      <div className="row mx-auto mt-5">
        <div className="col-6 ml-4 mr-2 p-3 brdr-r-5 brdr-g bg-white">
          <h4 className="mt-2">Current User</h4>
          <div className="row mt-5 mb-5 mx-0 px-0">
            <div className="col-3">
              <img src={Maskimg} alt="" />
            </div>
            <div className="col-3 p-0 mt-4">
              <div className="d-flex">
                <div className="profile-n mx-2 mt-2 text-bold">John Doe</div>
                <i class="fas fa-chevron-down mx-2 mt-2 pt-1"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 mr-3 ml-1 ">
          <button className="border-0 bg-transparent">
            <Button variant="" onClick={() => setModalShow(true)}>
              <img src={Videoimg} alt="" />
            </Button>
          </button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
      <div className="row mx-3 my-4">
        <div className="px-0 mt-4">
          <div className="row mx-2">
            <div className="col-12 brdr-r-5 brdr-g bg-white mx-2 py-3">
              <div className="row mx-2 my-1">
                <h5>Chat Settings</h5>
              </div>
              <hr className="width-10 brdr-t" />
              <div className="bg-gg py-3 font-grey brdr-r-2 col-6 mx-2">
                <div className="row font-weight-bold">
                  <div className="col">Install on the web</div>
                  <div className="col-1 mx-3 text-right">
                    <button
                      onClick={() => setShow(!show)}
                      className="brdr-r-2 bg-white border-0 py-1 px-2"
                    >
                      <i class="fas fa-chevron-down"></i>
                    </button>
                  </div>
                </div>
                <div>
                  {show ? (
                    <div className="py-2 rounded font-15">
                      Paste the code below before the tag on every page of your
                      website.
                      <textarea
                        type="text"
                        style={{ height: "25vh" }}
                        className="my-2 brdr-r-2 w-100 bg-white brdr-r-gr"
                        placeholder="</script>
<noscript></noscript>
<a href=”https://www.livechatinc.com/chat-with/1220/”> re!=”nofollow”>Chat with us</a> powered by <a href=”https://www.livechatinc.com/?welcome” rel=”noopener nofollow” target>
</noscript>
<!..End of LiveChat code..>"
                      ></textarea>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="bg-gg py-3 font-grey mt-2 brdr-r-2 col-6 mx-2">
                <div className="row font-weight-bold">
                  <div className="col">Customize the chat widget</div>
                  <div className="col-1 mx-3 text-right">
                    <button
                      onClick={() => setShown(!shown)}
                      className={
                        shown
                          ? "brdr-r-2 bg-white font-green border-0 py-1 px-2"
                          : "brdr-r-2 bg-white border-0 py-1 px-2"
                      }
                    >
                      <i
                        className={
                          shown ? "fas fa-chevron-up" : "fas fa-chevron-down"
                        }
                      ></i>
                    </button>
                  </div>
                </div>
                <div>
                  {shown ? (
                    <div className="py-2 rounded font-15">
                      <h6 className=" ">Maximized Window</h6>
                      <div className="row mx-auto mt-3">
                        <div
                          className={
                            isActiveSun
                              ? "col bg-white brdr-r-2 py-4 px-4 mx-2 text-center"
                              : "col bg-white brdr-r-G border-2 brdr-r-2 py-4 px-4 mx-2 text-center font-green"
                          }
                          onClick={handleToggleSun}
                        >
                          <img src={Mobile} alt="" />
                          <div className="mt-3 font-weight-bold">Smooth</div>
                          <div
                            className={
                              isActiveSun
                                ? "position-absolute chck-icn text-white"
                                : "position-absolute chck-icn font-green"
                            }
                          >
                            <i class="fas fa-check-circle"></i>
                          </div>
                        </div>
                        <div
                          className={
                            isActiveSat
                              ? "col bg-white brdr-r-2 py-4 px-4 mx-2 text-center"
                              : "col bg-white brdr-r-G border-2 brdr-r-2 py-4 px-4 mx-2 text-center font-green"
                          }
                          onClick={handleToggleSat}
                        >
                          <img src={Halfscreen} alt="" className="mt-3" />
                          <div className="mt-3 font-weight-bold">Smooth</div>
                          <div
                            className={
                              isActiveSat
                                ? "position-absolute chck-icn text-white"
                                : "position-absolute chck-icn font-green"
                            }
                          >
                            <i class="fas fa-check-circle"></i>
                          </div>
                        </div>
                        <div className="col bg-white brdr-r-2 dt-brdr py-4 px-4 mx-2 text-center">
                          <div className="mt-3 pt-3 font-weight-bold">
                            New themes coming soon!
                          </div>
                        </div>
                      </div>
                      <h6 className="mt-3">Minimized Window</h6>
                      <div className="row mx-auto mt-3">
                        <div
                          className={
                            isActiveSun1
                              ? "col-4 bg-white brdr-r-2 py-5 px-4 mx-2 text-center"
                              : "col-4 bg-white brdr-r-G border-2 brdr-r-2 py-5 px-4 mx-2 text-center font-green"
                          }
                          onClick={handleToggleSun1}
                        >
                          <img src={Back} alt="" className="mt-2" />
                          <div className="mt-3 font-weight-bold">Smooth</div>
                          <div
                            className={
                              isActiveSun1
                                ? "position-absolute chck-icn text-white"
                                : "position-absolute chck-icn font-green"
                            }
                          >
                            <i class="fas fa-check-circle"></i>
                          </div>
                        </div>
                        <div
                          className={
                            isActiveSat1
                              ? "col-4 bg-white brdr-r-2 py-5 px-4 mx-2 text-center"
                              : "col-4 bg-white brdr-r-G border-2 brdr-r-2 py-5 px-4 mx-2 text-center font-green"
                          }
                          onClick={handleToggleSat1}
                        >
                          <img src={Circle} alt="" className="" />
                          <div className="mt-3 font-weight-bold">Smooth</div>
                          <div
                            className={
                              isActiveSat1
                                ? "position-absolute chck-icn text-white"
                                : "position-absolute chck-icn font-green"
                            }
                          >
                            <i class="fas fa-check-circle"></i>
                          </div>
                        </div>
                      </div>
                      <h6 className="mt-3">Pick your color</h6>
                      <div className="mt-3">
                        <input type="checkbox" name="" id="" />
                        &nbsp;
                        <label htmlFor="" className="font-weight-bold">
                          Theme color
                        </label>
                      </div>
                      <div className="col-7">
                        <div className="row">
                          <div className="col">
                            <div>
                              <img
                                src={Multi}
                                alt=""
                                className={
                                  isActiveMulti
                                    ? "border-2 clr-btn py-1 px-1"
                                    : "brdr-r-G clr-btn py-1 px-1 border-2"
                                }
                                onclick={handleToggleMulti}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSetting;
