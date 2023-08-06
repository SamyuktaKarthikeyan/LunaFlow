import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  const username=localStorage.getItem('username');
  const secret=localStorage.getItem('secret');
  return (
    <div style={{ height: '88vh', width: '74vw' }}>
      <PrettyChatWindow
        projectId="28fd332b-59c4-4ff7-966b-144b3b1fdba9"
        username={username}
        secret={secret}
        style={{ height: '50vh', width:'50vw' }}
      />
    </div>
  );
};

export default ChatsPage;
