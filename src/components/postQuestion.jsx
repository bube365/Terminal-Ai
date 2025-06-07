import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa6";
import sendIcon from "../assets/send-right.svg";

export const PostQuestion = (props) => {
  const Handlepost = async () => {
    props.setLoading(true);
    props.setTypewriterMsg("Typing");
    props.addMessage(props.inputText, true);

    try {
      props.setAnswer(
        "Looking to take your career to the next level? The UK Tech Nation Visa gives you access to world-class networking, career opportunities and resources to bring your expertise to life."
      );
      props.setLoading(false);
      setTimeout(() => {
        props.addMessage(
          "Looking to take your career to the next level? The UK Tech Nation Visa gives you access to world-class networking, career opportunities and resources to bring your expertise to life.",
          false
        );
      }, 20);
    } catch (error) {
      props.setInputText("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === "return") {
      Handlepost();
    }
  };
  return (
    <div className="w-[70%] flex items-center bg-white mx-auto rounded-lg py-2 px-4">
      <div className="w-full flex items-center gap-6">
        <textarea
          placeholder="Enter your prompt here"
          value={props.inputText}
          onChange={(e) => {
            props.setInputText(e.target.value);
          }}
          onKeyPress={handleKeyPress}
          className="bg-white text-black outline-0 border-none w-full pt-2 text-sm"
        />

        {/* <GoPlus
          onClick={() => {}}
          className="cursor-pointer text-black text-xl font-normal text-[26px] lg:text-[20px]"
        />

        <div>
          <FaMicrophone className="text-black" />
        </div> */}

        <button onClick={Handlepost} className="text-black">
          <img src={sendIcon} alt="" className="w-6" />
        </button>
      </div>
    </div>
  );
};
