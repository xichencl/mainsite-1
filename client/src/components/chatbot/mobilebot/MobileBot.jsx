import React, { Component } from 'react';
import ChatContainer from '../ChatContainer.jsx';
// import OpenBot from './OpenBot.jsx';

class MobileBot extends React.Component {
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

export default MobileBot;
