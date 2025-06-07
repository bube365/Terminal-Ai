import React, { useState, useRef } from "react";
import copyIcon from "../assets/copy.svg";

export const CopyClipboard = (props) => {
  const [copied, setCopied] = useState(false);
  const board = useRef();

  const copyCodeToClipboard = () => {
    if (props.link) {
      navigator.clipboard.writeText(props.link);
      setCopied(true);
      props.shareNum && props.shareNum(props.id || "", props.shares || 0);
      props.click && props.click();
    }
  };

  return (
    <div>
      {props.link && (
        <div ref={board} onClick={copyCodeToClipboard}>
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src={copyIcon}
            alt=""
          />

          {/* <p>{copied ? 'Copied' : ' - Click to Copy - '}</p> */}
        </div>
      )}
    </div>
  );
};
