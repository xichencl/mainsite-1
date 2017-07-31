import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import ChatBubble from './ChatBubble.jsx';


class Chatbox extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='grey chatbox'>
        {
          this.props.chatlog.map((value, key) => {
            return (
              <ChatBubble 
                { ...value } 
                key={key} 
                onClick={(e) => this.props.onClick.bind(this, e, value)()}
              />
            );
          })
        }
      </div>
    );value
  }
}


const mapStateToProps = (state) => {
  return {
    chatlog: state.chat.log
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick (event, value) {
      if (value.type !== 'button') {
        return;
      }
      
      axios.post('/message', {message:value}) //js way of saying once we send a POST request to server, then if we receive a response(whatever object that comes in from the server)
      .then((response) => {
        console.log('Response:', response);

        if (response.status === 200) {
          dispatch({
            type: 'CHAT_ADD_MESSAGE',
            payload: {
              text: response.data,
              type: 'message',
              isBot: true,
            }
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Chatbox);
