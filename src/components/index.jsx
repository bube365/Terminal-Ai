import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import { Chathistory } from "./chathistory";

export const Index = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [typewritermsg, setTypewriterMsg] = useState("");

  const addMessage = (text, isUser = true) => {
    const newMessage = {
      text: typeof text === "string" ? text : "",
      isUser,
      examTime: messages.length === 0 ? new Date() : undefined,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (typeof text !== "string") {
      setTimeout(() => {
        const actualText = text;
        setMessages((prevMessages) =>
          prevMessages.map((message, index) =>
            index === prevMessages.length - 1
              ? { ...message, text: actualText }
              : message
          )
        );
      }, 20);
    }
  };
  return (
    <div className="bg-[#050d1e] w-full h-[100vh] flex ">
      {/* <Sidebar /> */}
      <Chathistory
        inputText={inputText}
        setInputText={setInputText}
        messages={messages}
        setMessages={setMessages}
        answer={answer}
        setAnswer={setAnswer}
        typewritermsg={typewritermsg}
        setTypewriterMsg={setTypewriterMsg}
        loading={loading}
        setLoading={setLoading}
        addMessage={addMessage}
      />
    </div>
  );
};
