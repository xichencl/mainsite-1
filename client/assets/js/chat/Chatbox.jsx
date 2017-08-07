import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import ChatBubble from './ChatBubble.jsx';

// const uuidv1 = require('uuid/v1');

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    // this.sessionId = uuidv1();
  }

  render() {
    return (
      <div className="grey chatbox">
        {/*map to iterate over the newState Array and apply function for each element*/
        this.props.chatlog.map((value, key) => {
          return (
            <ChatBubble
              {...value} /*spread operator*/
              key={key}
              onClick={e =>
                this.props.onClick.bind(
                  this,
                  e,
                  value
                )()} /*this is basically replacing the function (event) => {} with (event, value){}; value here is an element in the defaultState array*/
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
        .post('/message', { payload: data, id: this.props.sessionId }) //redux way of saying once we send a POST request to server, then if we receive a response(Promise) from server
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
