import React, { Component } from 'react';
import ChatContainer from './ChatContainer.jsx';

class MobileBot extends React.Component {
  render() {
    return (
      <div className="position-bot the-bot">
        <ChatContainer />
      </div>
    );
  }
}

export default MobileBot;
