import React from "react";

import { ChatEngineWrapper, ChatSocket, ChatFeed } from "react-chat-engine";
const username = localStorage.getItem("username");

const Community = () => {
  return (
    <div style={{ height: "88vh", width: "74vw" }}>
      <ChatEngineWrapper>
        <ChatSocket
          projectID="28fd332b-59c4-4ff7-966b-144b3b1fdba9"
          chatID="194865"
          chatAccessKey="ca-bb2c0826-4457-4c11-8ef1-880dc92d3c2f"
          senderUsername={username}
        />

        <ChatFeed activeChat="194865" />
      </ChatEngineWrapper>
    </div>
  );
};

export default Community;
