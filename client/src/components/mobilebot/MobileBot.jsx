import React, { Component } from 'react';
import ChatContainer from './ChatContainer.jsx';

class MobileBot extends React.Component {
	constructor(props) {
	    super(props);
	}

  render() {
    return (
      <div className="position-bot the-bot">
        <ChatContainer history={this.props.history} />
      </div>
    );
  }
}

export default MobileBot;
