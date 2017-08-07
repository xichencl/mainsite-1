import React from 'react';

import Chatbox from './Chatbox.jsx';
import Chatbar from './Chatbar.jsx';
const uuidv1 = require('uuid/v1');
const sessionId = uuidv1();

const ChatContainer = () =>
  <div className="chat-container">
    <Chatbox sessionId={sessionId} /> //props have to be in {} or ""
    <Chatbar sessionId={sessionId} />
  </div>;

export default ChatContainer;
