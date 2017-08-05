import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import ChatBubble from './ChatBubble.jsx';
//trying to put bot's bubble on left, and user's bubble on right of chatbox
// import BubblePosition from './BubblePosition.jsx';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grey chatbox">
        {this.props.chatlog.map((value, key) => {
          // debugger;
          return (
            <ChatBubble
              {...value} //spread operator
              key={key}
              onClick={e => this.props.onClick.bind(this, e, value)()}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chatlog: state.chat.log
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick(event, data) {
      if (data.type !== 'button') {
        return;
      }

      axios
        .post('/message', data) //redux way of saying once we send a POST request to server, then if we receive a response(Promise) from server
        .then(response => {
          console.log('Response:', response);

          if (response.status === 200) {
            dispatch({
              type: 'CHAT_ADD_MESSAGE',
              payload: {
                message: response.data,
                type: 'text',
                isBot: true
              }
            });
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatbox);
