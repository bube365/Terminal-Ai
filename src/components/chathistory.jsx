import React, { useRef, useState, useEffect } from "react";
import { PostQuestion } from "./postQuestion";
import { Questionchat, Answerchat } from "./chat";
import { GiArtificialHive } from "react-icons/gi";
import logo from "../assets/terminal-preview.png";
import OlderTextFormattedTextComponent from "./OlderTextFormattedText";
import FormattedTextComponent from "./FormattedText";

export const Chathistory = (props) => {
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.messages]);

  return (
    <div className="w-[90%] p-6 mx-auto h-full flex flex-col justify-between text-white bg-[#050d1e] ">
      <div className="h-[80%]">
        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <img src={logo} alt="logo" className="w-40 h-30" />{" "}
        </div>
        <div
          ref={chatContainerRef}
          className="flex flex-col gap-6 h-[90%] overflow-y-auto "
        >
          {props.messages.map((message, index) => {
            return (
              <div className="w-full">
                {message.isUser === true ? (
                  <div
                    key={index}
                    className="flex justify-end mb-6 mt-6 w-full"
                  >
                    <div className="flex justify-end w-full">
                      <Questionchat text={message?.text} />
                    </div>
                  </div>
                ) : (
                  <div key={index}>
                    {props.typewritermsg === "Typing" &&
                    index === props.messages.length - 1 ? (
                      <div key={index}>
                        <Answerchat
                          text={
                            <FormattedTextComponent
                              text={message?.text}
                              typewritermsg={props.typewritermsg}
                              setTypewriterMsg={props.setTypewriterMsg}
                            />
                          }
                        />
                      </div>
                    ) : (
                      <div key={index}>
                        <Answerchat
                          text={
                            <OlderTextFormattedTextComponent
                              text={message?.text}
                            />
                          }
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <PostQuestion
        inputText={props.inputText}
        setInputText={props.setInputText}
        messages={props.messages}
        setMessages={props.setMessages}
        answer={props.answer}
        setAnswer={props.setAnswer}
        typewritermsg={props.typewritermsg}
        setTypewriterMsg={props.setTypewriterMsg}
        loading={props.loading}
        setLoading={props.setLoading}
        addMessage={props.addMessage}
      />
    </div>
  );
};
