import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ChatBubble from './ChatBubble.jsx';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.state = { key: 0 };
    this.newMsgRef = React.createRef();
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: 'instant' });
  }

  componentDidMount() {
    this.scrollToBottom();
    this.setState({ key: this.props.chatlog.length })
  }

  componentDidUpdate() {
    this.scrollToBottom();
    this.setState({ key: this.props.chatlog.length })
  }
  render() {
    let className = '';
    console.log('current theme : ', this.props.theme);
    if (this.props.theme === 'dark') {
      className = 'dark chatbox-alignment';
    } else {
      className = 'chat-box-bg chatbox-alignment';
    }

    return (
      <div className={className}>

        {this.props.chatlog.map((value, key) => {
          console.log(value, key);
          console.log("state key: ", this.state.key)
          return (
            <ChatBubble
              {...value} // spread operator
              key={key}
              sessionId={this.props.sessionId}
              theme={this.props.theme}
              ref={(this.state.key === key) ?  this.newMsgRef : null}
            />
          );
        })}

       {/* <div
          className="clear"
          ref={(el) => {
            this.messagesEnd = el;
          }}
        /> */} 
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chatlog: state.chat.log,
});


export default connect(mapStateToProps)(Chatbox);
