import React, { Component } from 'react';
import ChatContainer from '../chatbot/ChatContainer.jsx';
// import OpenBot from './OpenBot.jsx';

class Bot extends React.Component {
  render() {
    return (
      <div>
        <div className="position-bot the-bot">
          <ChatContainer />
        </div>
      </div>
    );
  }
}

export default Bot;
