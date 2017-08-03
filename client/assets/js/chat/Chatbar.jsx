import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';


class Chatbar extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    axios.get('/');
  }

  render () {
    return (
      <div className='light-grey chatbar'>
        <input 
          type='text'
          placeholder='Type your message here'
          onKeyDown={(e) => this.props.onKeyDown.bind(this, e, value)()}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
	chatlog:state.chat.log
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onKeyDown (event, data) {
	  console.log("Message: ", data);
      if (event.keyCode === 13) {
		  axios.post('/messge', data)
		  .then((response) => {
        console.log('Response:', response);

        if (response.status === 200) {
          dispatch({
            type: 'CHAT_ADD_MESSAGE',
            payload: {
              message: response.data,
              type: 'text',
              isBot: true,
            }
          });
        }
      })
	  .catch((error) => {
        console.error('Error:', error);
      });
        
      }
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Chatbar);
