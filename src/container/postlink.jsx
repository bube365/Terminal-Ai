import React from "react";

export const Postlink = (props) => (
  <div
    className="tooltipIcon"
    onClick={() => (props.type === "save" ? "" : props.click(props.index))}
  >
    <div className="mb-[10px]">{props.children}</div>
    <div className="tooltiptext text-sm tracking-wide">
      {props.toolTip} {props.socialname ? props.socialname : ""}
    </div>
  </div>
);
