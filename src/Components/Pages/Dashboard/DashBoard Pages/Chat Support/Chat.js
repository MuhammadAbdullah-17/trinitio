import React from "react";
import Bell from "../../../../../Assets/ringing.png";
import CancelW from "../../../../../Assets/CancelW.png";
import CancelG from "../../../../../Assets/CancelG.png";
import ChatProfile from "../../../../../Assets/ChatPro.png";
import Profile from "../../../../../Assets/Ownerpic.png";
import ProfileIcon from "../../../../../Assets/proicon.png";
import Map from "../../../../../Assets/Map.png";
import { useState } from "react";

const Chat = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleHover = () => setIsShown(!isShown);
  const chatData = [
    {
      path: Profile,
      name: "Theon",
      small: "How can i help you today?",
    },
    {
      path: Profile,
      name: "Theon",
      small: "How can i help you today?",
    },
    {
      path: Profile,
      name: "Theon",
      small: "How can i help you today?",
    },
  ];
  const ChatInnerData = [
    {
      innerpath: Profile,
      innertext: "Pre-chat survey",
      mail: "E-mail:",
      innersmall: "greenjoy@gmail.com",
      yourname: "Your Name:",
      innername: "Theon",
      reply: "Hi Theon! How can help you today?",
    },
  ];
  return (
    <div className="col-10 float-right bg-grey pgstup">
      <div className="row mx-3 my-4">
        <div className="col-12 brdr-r-5 px-0 mt-4 brdr-g bg-white mx-2">
          <div className="row px-0 mx-0">
            <div className="col-3 mx-0 px-0 my-0 py-0 border-right">
              <h6 className="py-2 mt-2 px-3">Chat Setting</h6>
              <hr className="mt-0 border-top-0" />
              <div className="bg-gg brdr-r-2 mx-1 py-2">
                <div className="text-right">
                  <img src={CancelW} alt="" />
                </div>
                <div className="text-center">
                  <img src={Bell} alt="" />
                  <p className="font-weight-bold font-15 mt-3">
                    Never miss a chat. Allow browser notifications.
                  </p>
                </div>
                <div className="row mx-4">
                  <button className="set-btn bg-green text-white px-3 py-1">
                    Allow
                  </button>
                </div>
              </div>
              <div className="bg-gg brdr-r-2 my-3 mx-1 py-2 h-60">
                <div className="row mx-auto border-bottom pt-2">
                  <div className="col">
                    <select
                      name=""
                      id=""
                      className="bg-transparent border-0 h6"
                    >
                      <option value="0">Chat Setting</option>
                    </select>
                  </div>
                  <div className="col-2 text-right">
                    <div className="rounded-circle bg-Green font-10 py-1 text-center text-white">
                      <p className="my-0">3</p>
                    </div>
                  </div>
                </div>
                <div>
                  {chatData.map((e) => (
                    <div
                      className={
                        isShown
                          ? "row mx-auto py-2 bg-g"
                          : "row mx-auto border-bottom py-2"
                      }
                      onMouseEnter={toggleHover}
                      onMouseLeave={toggleHover}
                    >
                      <div className="col-2 mt-1">
                        <img src={e.path} alt="" />
                      </div>
                      <div className="col">
                        <p className="my-0 py-0">{e.name}</p>
                        <small className="py-0 my-0">{e.small}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col mx-0 px-0 my-0 py-0 border-right">
              <div className="row mx-auto py-2">
                <div className="col-1">
                  <img src={ChatProfile} alt="" className="mt-1" />
                </div>
                <div className="col pt-2">
                  <h6>Theon</h6>
                </div>
                <div className="col-1 text-right pt-2">
                  <i class="fas fa-ellipsis-v"></i>
                </div>
              </div>
              <hr className="mt-0 border-top-0" />
              {ChatInnerData.map((e) => (
                <div>
                  <div className="row px-3">
                    <div className="col-1 mr-3">
                      <img src={e.innerpath} alt="" />
                    </div>
                    <div className="col-4 text-left bg-gg brdr-r-2 py-2">
                      <h6 className="mb-0">{e.innertext}</h6>
                      <div className="mt-3 mb-0">{e.mail}</div>
                      <small className="mt-0 pt-0">{e.innersmall}</small>
                      <div className="mt-3 mb-0 py-0">{e.yourname}</div>
                      <small>{e.innername}</small>
                    </div>
                  </div>
                  <div
                    className="row px-3 mt-5"
                    style={{ justifyContent: "right" }}
                  >
                    <div className="col-5 text-left bg-Green text-white brdr-r-2 py-2">
                      <small className="position-absolute text-dark cnmt">
                        Tyrion
                      </small>
                      <p className="font-13 my-0">{e.reply}</p>
                    </div>
                    <div className="col-1 mr-3">
                      <img src={e.innerpath} alt="" />
                    </div>
                  </div>
                </div>
              ))}
              <div className="position-absolute txtp col-12">
                <div className="row mx-auto">
                  <div className="col-9 bg-gg brdr-r-30">
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
                  <div className="col">
                    <i className="fas fa-paperclip font-20 rounded-circle bg-gg py-3 px-3 font-grey mx-1"></i>
                    <i className="fas fa-paper-plane text-white font-20 rounded-circle bg-Green py-3 px-3 font-grey"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 mx-0 px-0 my-0 py-0 border-right">
              <div className="row mx-auto py-2">
                <div className="col">
                  <img src={ProfileIcon} alt="" className="" />
                </div>
                <div className="col-2 text-right">
                  <img src={CancelG} alt="" />
                </div>
              </div>
              <hr className="mt-1 mb-1 border-top-0" />
              <div className="row mx-auto py-1">
                <div className="col">
                  <h6>Details</h6>
                </div>
                <div className="col-2 text-right">
                  <i class="fas fa-ellipsis-v"></i>
                </div>
              </div>
              <div className="bg-gg brdr-r-2 mx-1 pt-2">
                <div className="px-3">
                  <h6 className="">General</h6>
                </div>
                <div className="row mx-auto py-2">
                  <div className="col-2 mt-1">
                    <img src={ChatProfile} alt="" />
                  </div>
                  <div className="col">
                    <h6 className="my-0 py-0">
                      Theon
                      <small className="py-0 my-0 d-block">
                        greenjoy@gmail.com
                      </small>
                    </h6>
                  </div>
                </div>
                <div className="row mx-auto font-grey">
                  <i class="far fa-clock col-1 pt-1 mx-2 font-15"></i>
                  <p className="col px-0">11:52 AM local time</p>
                </div>
                <div className="row mx-auto font-grey">
                  <i class="fas fa-map-marker-alt col-1 pt-1 mx-2 font-15"></i>
                  <p className="col px-0">11:52 AM local time</p>
                </div>
                <img src={Map} alt="" className="w-100" />
              </div>
              <div className="bg-gg brdr-r-2 mt-2 mx-1 py-2 px-3 ">
                <h6 className="font-weight-bold">Pre-chat survey</h6>
                <p className="my-0 py-0 font-13 font-grey">
                  Theon:
                  <small className="py-0 my-0 mx-1 font-13">
                    greenjoy@gmail.com
                  </small>
                </p>
                <p className="my-0 py-0 font-13 font-grey">
                  Your Name:
                  <small className="py-0 my-0 mx-1 font-13">Theon</small>
                </p>
              </div>
              <div className="bg-gg brdr-r-2 mt-2 mx-1 py-2 px-3 ">
                <h6 className="font-weight-bold">Additional info</h6>
                <p className="my-0 py-0 font-13 font-grey">
                  Group:
                  <small className="py-0 my-0 mx-1 font-13">General</small>
                </p>
              </div>
              <div className="bg-gg brdr-r-2 mt-2 mx-1 py-2 px-3 ">
                <h6 className="font-weight-bold">Technology</h6>
                <p className="my-0 py-0 font-13 font-grey">
                  IP Address:
                  <small className="py-0 my-0 mx-1 font-13">
                    221.089.120.710
                  </small>
                </p>
                <p className="my-0 py-0 font-13 font-grey">
                  OS Device:
                  <small className="py-0 my-0 mx-1 font-13">Windows (10)</small>
                </p>
                <p className="my-0 py-0 font-13 font-grey">
                  Browser:
                  <small className="py-0 my-0 mx-1 font-13">
                    Firefox (66.0)
                  </small>
                </p>
                <p className="my-0 py-0 font-13 font-grey">
                  User agent:
                  <small className="py-0 my-0 mx-1 font-13">
                    Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Ge
                    cko/20100101 Firefox/66.0
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
