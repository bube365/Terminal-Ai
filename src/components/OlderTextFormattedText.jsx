import React from "react";
import "./formatted.css";

const OlderTextFormattedTextComponent = ({ text }) => {
  const formattedText = text
    .replace(/^##\s*(.*)$/gm, (match, content) => `<h2>${content}</h2>`)
    .replace(
      /\*\*(.*?)\*\*/g,
      (match, content) => `<strong>${content}</strong>`
    )
    .replace(/^\s*-\s*(.*)$/gm, (match, content) => `<li>${content}</li>`)
    .replace(/(<li>.*<\/li>)/g, "<ul>$1</ul>")
    .replace(
      /^\s*(?!<h2>|<ul>|<\/ul>|<li>|<\/li>)(.*)$/gm,
      (match, content) => `<p>${content}</p>`
    );

  return (
    <>
      <div
        className="FormattedTextComponent  text-[14px] rounded-b-[8px] rounded-tr-[8px]"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />
    </>
  );
};

export default OlderTextFormattedTextComponent;
