import React from "react";
import Profile from "../../../../../Assets/Ownerpic.png";
import { useState } from "react";

const ChatHistory = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleHover = () => setIsShown(!isShown);
  const ChatInnerData = [
    {
      innerpath: Profile,
      innersmall: "Do you allow dogs in your hotel?",
      reply: "Hi Hound!",
    },
    {
      innerpath: Profile,
      innersmall: "Great, do I have to pay extra?",
      reply: "Yes, you can bring your dog to Ramsay’s Hotel",
    },
    {
      innerpath: Profile,
      innersmall: "Thank you!",
      reply: "No you don’t, everything is included in the price",
    },
    {
      innerpath: Profile,
      innersmall: "My Pleasure!",
      reply: "You are welcome!",
    },
  ];
  const chatHistoryData = [
    {
      chatName: "Green Worm",
      chatTime: "19 minutes ago",
      chatAgent: "Agent:",
      agentName: "Support Bot",
      chatSb: "SB:",
      sbName: "Support Bot sent rich message",
    },
    {
      chatName: "Green Worm",
      chatTime: "19 minutes ago",
      chatAgent: "Agent:",
      agentName: "Support Bot",
      chatSb: "SB:",
      sbName: "Support Bot sent rich message",
    },
    {
      chatName: "Green Worm",
      chatTime: "19 minutes ago",
      chatAgent: "Agent:",
      agentName: "Support Bot",
      chatSb: "SB:",
      sbName: "Support Bot sent rich message",
    },
    {
      chatName: "Green Worm",
      chatTime: "19 minutes ago",
      chatAgent: "Agent:",
      agentName: "Support Bot",
      chatSb: "SB:",
      sbName: "Support Bot sent rich message",
    },
    {
      chatName: "Green Worm",
      chatTime: "19 minutes ago",
      chatAgent: "Agent:",
      agentName: "Support Bot",
      chatSb: "SB:",
      sbName: "Support Bot sent rich message",
    },
    {
      chatName: "Green Worm",
      chatTime: "19 minutes ago",
      chatAgent: "Agent:",
      agentName: "Support Bot",
      chatSb: "SB:",
      sbName: "Support Bot sent rich message",
    },
    {
      chatName: "Green Worm",
      chatTime: "19 minutes ago",
      chatAgent: "Agent:",
      agentName: "Support Bot",
      chatSb: "SB:",
      sbName: "Support Bot sent rich message",
    },
    {
      chatName: "Green Worm",
      chatTime: "19 minutes ago",
      chatAgent: "Agent:",
      agentName: "Support Bot",
      chatSb: "SB:",
      sbName: "Support Bot sent rich message",
    },
    {
      chatName: "Green Worm",
      chatTime: "19 minutes ago",
      chatAgent: "Agent:",
      agentName: "Support Bot",
      chatSb: "SB:",
      sbName: "Support Bot sent rich message",
    },
  ];
  return (
    <div className="col-10 float-right bg-grey pgstup">
      <div className="row mx-3 my-4">
        <div className="col-12 brdr-r-5 px-0 mt-4 brdr-g bg-white mx-2">
          <div className="row px-0 mx-0">
            <div className="col-4 mx-0 px-0 my-0 py-0 border-right">
              <div className="row py-2 mt-2 px-3">
                <div className="col">
                  <h6>Details</h6>
                </div>
                <div className="col-2 text-right">
                  <i class="fas fa-ellipsis-v"></i>
                </div>
              </div>
              <hr className="mt-0 border-top-0" />
              <div className="rounded mx-2 pt-1">
                <div className="col-12 d-flex srch-bar py-1 rounded px-2 font-grey">
                  <i class="fas fa-search txt-g mt-1 px-0"></i>
                  <div className="mx-2 px-1">Search in archives</div>
                </div>
              </div>
              <button
                className="rounded mt-2 mx-2 bg-g font-green font-weight-bold outline-0 border px-3 py-1"
                style={{ borderColor: "#ccc" }}
              >
                + Add Filter
              </button>
              <div className="brdr-r-2 mx-1">
                <div className="row mx-auto border-bottom">
                  <div className="col px-0 mx-1">
                    <div className="font-13 py-1">
                      <p className="my-0">1,644,218 chats + 13 new</p>
                    </div>
                  </div>
                  <div className="col text-right">
                    <select name="" id="" className="bg-transparent border-0">
                      <option value="0">Chat Setting</option>
                    </select>
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "right",
                    height: "60vh",
                    overflowX: "hidden",
                    overflowY: "scroll",
                  }}
                >
                  {chatHistoryData.map((e) => (
                    <div className="row mx-auto border-bottom">
                      <div className="col px-0 mx-2">
                        <div className="font-15 py-1">
                          <p className="my-0">{e.chatName}</p>
                        </div>
                      </div>
                      <div className="col text-right">
                        <small className="font-10 col text-right">
                          {e.chatTime}
                        </small>
                      </div>
                      <p className="mx-0 px-2 my-0 py-0 font-13 font-grey">
                        {e.chatAgent}
                        <small className="py-0 my-0 mx-1 font-13">
                          {e.agentName}
                        </small>
                      </p>
                      <p className="mx-0 px-2 my-0 py-0 font-13 font-grey">
                        {e.chatSb}
                        <small className="py-0 my-0 mx-1 font-13">
                          {e.sbName}
                        </small>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col mx-0 px-0 my-0 py-0 border-right">
              <div className="row py-2 mt-2 px-3">
                <div className="col">
                  <h6>Hound and Support Bot, The Low Sparrow</h6>
                </div>
                <div className="col-2 text-right">
                  <i class="fas fa-ellipsis-v"></i>
                </div>
              </div>
              <hr className="mt-0 border-top-0" />
              <div
                style={{
                  justifyContent: "right",
                  height: "70vh",
                  overflowX: "hidden",
                  overflowY: "scroll",
                }}
              >
                {ChatInnerData.map((e) => (
                  <div>
                    <div
                      className="row px-3 mt-5"
                      style={{ justifyContent: "right" }}
                    >
                      <div className="col-5 text-left bg-Green text-white brdr-r-2 py-2">
                        <small className="position-absolute text-dark cnmt">
                          The Low Sparrow
                        </small>
                        <p className="font-13 my-0">{e.reply}</p>
                      </div>
                      <div className="col-1 mr-3">
                        <img src={e.innerpath} alt="" />
                      </div>
                    </div>
                    <div className="row px-3 mt-4">
                      <div className="col-1 mr-3">
                        <img src={e.innerpath} alt="" />
                      </div>
                      <div className="col-4 text-left bg-gg brdr-r-2 py-2">
                        <small className="position-absolute text-dark cnmtL">
                          Hound!
                        </small>
                        <p className="font-13 my-0">{e.innersmall}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="txtp col-12 mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
