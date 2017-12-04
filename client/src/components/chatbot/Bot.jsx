import React, { Component } from 'react';
import ChatContainer from './ChatContainer.jsx';
import OpenBot from './OpenBot.jsx';

class Bot extends React.Component {
  render() {
    return (
      <div>
        <div className="position-bot the-bot">
          <OpenBot ref={el => (this.chatWindow = el)} />
        </div>
      </div>
    );
  }
}

export default Bot;
