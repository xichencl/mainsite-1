import React, { Component } from 'react';

class MobileBot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="x-container">
        <div className="x-input">
          <input className="chat-input" type="text" placeholder="I am mobile testing" />;
        </div>
      </div>
    );
  }
}

export default MobileBot;
