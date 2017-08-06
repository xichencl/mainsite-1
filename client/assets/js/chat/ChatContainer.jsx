import React from 'react';

import Chatbox from './Chatbox.jsx';
import Chatbar from './Chatbar.jsx';

const ChatContainer = () =>
  <div className="chat-container">
    <Chatbox />
    <Chatbar />
  </div>;
// if ( === 'isBot') {
//   className = "botBubble-position"
// },
// else {
//   className = "user-ch"
// }

export default ChatContainer;
