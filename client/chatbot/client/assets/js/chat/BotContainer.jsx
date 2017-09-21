import React from 'react';
// import ChatContainer from './ChatContainer.jsx';
// import BubbleBreak from './BubbleBreak.jsx';

const uuidv1 = require('uuid/v1');

const sessionId = uuidv1();

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: sessionId };
    this.resetSession = this.resetSession.bind(this);
  }

  // componentDidMount(){
  // sessionId = uuidv1();
  // }

  // componentWillUnmount(){

  // }

  resetSession() {
    this.setState({ id: uuidv1() });
  }

  render() {
    return (
      <div>
        <BotContainer />
      </div>
    );
  }
}
export default BotContainer;
