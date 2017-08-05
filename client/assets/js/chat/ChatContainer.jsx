import React from 'react';

import Chatbox from './Chatbox.jsx';
import Chatbar from './Chatbar.jsx';

const ChatContainer = () =>
  <div className="chat-container">
    <Chatbox />
    <Chatbar />
  </div>;

export default ChatContainer;
