import React from "react";
import { Postlink } from "../container/postlink";
import repeatIcon from "../assets/repeat.svg";
import shareIcon from "../assets/share.svg";
import { CopyClipboard } from "../container/clipboard";

export const Questionchat = ({ text }) => {
  return (
    <div className="bg-black border border-[#5d5c5c] w-fit max-w-[70%] p-2 rounded-tr-xl rounded-b-xl text-sm">
      {text}
    </div>
  );
};

export const Answerchat = ({ text }) => {
  return (
    <>
      <div className="bg-[#33425d] w-fit max-w-[70%] p-2 rounded-tr-xl rounded-b-xl text-sm">
        {text}
      </div>

      {/* <div className="flex gap-2 ">
        <Postlink toolTip="copy" type="save">
          <div
        
          >
            <CopyClipboard title="Copy Link" link={text} />
          </div>
        </Postlink>

        <Postlink toolTip="Regenerate" type="Regenerate" click={() => {}}>
          <img
            onMouseEnter={() => setSocialname("")}
            src={repeatIcon}
            className="w-[20px] h-[20px] cursor-pointer"
            alt=""
          />
        </Postlink>
      </div> */}
    </>
  );
};
