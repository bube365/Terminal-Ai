import React, { useState, useEffect, useRef } from "react";

const Typewriter = ({ text, speed = 1, setTypewriterMsg }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const textContainerRef = useRef(null);

  useEffect(() => {
    if (text) {
      setDisplayText("");
      setCurrentIndex(0);
    }
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setTypewriterMsg("done");
      if (textContainerRef.current) {
        textContainerRef.current.scrollTop = 0;
      }
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    if (textContainerRef.current && currentIndex < text.length) {
      textContainerRef.current.scrollTop =
        textContainerRef.current.scrollHeight;
    }
  }, [displayText]);

  return (
    <div
      ref={textContainerRef}
      className={`Typewriter FormattedTextComponent  px-2 pt-2 text-[14px] rounded-b-[8px] rounded-tr-[8px] h-fit `}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
};

export default Typewriter;
