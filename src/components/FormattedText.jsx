import React from "react";
import "./formatted.css";
import Typewriter from "./Typewriter";

const FormattedTextComponent = ({ text, typewritermsg, setTypewriterMsg }) => {
  const formattedText = text
    // Format headings (## Heading)
    .replace(/^##\s*(.*)$/gm, (match, content) => `<h2>${content}</h2>`)
    // Format bold text (**bold**)
    .replace(
      /\*\*(.*?)\*\*/g,
      (match, content) => `<strong>${content}</strong>`
    )
    // Format list items (- Item)
    .replace(/^\s*-\s*(.*)$/gm, (match, content) => `<li>${content}</li>`)
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      (_, label, url) =>
        `<a href="${url}" class="green-link" target="_blank" rel="noopener noreferrer">${label}</a>`
    )
    // Wrap list items in <ul> or <ol>
    .replace(/(<li>.*<\/li>)/g, "<ul>$1</ul>")
    // Wrap each paragraph
    .replace(
      /^\s*(?!<h2>|<ul>|<\/ul>|<li>|<\/li>)(.*)$/gm,
      (match, content) => `<p>${content}</p>`
    );

  return (
    <Typewriter
      text={formattedText}
      speed={5}
      typewritermsg={typewritermsg}
      setTypewriterMsg={setTypewriterMsg}
    />
  );
};

export default FormattedTextComponent;
