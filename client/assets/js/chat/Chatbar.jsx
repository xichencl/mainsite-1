import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';


class Chatbar extends React.Component {
  constructor (props) {
    super(props);
  }

  // componentDidMount () {
    // axios.get('/');
  // }

  render () {
    return (
      <div className='light-grey chatbar'>
        <input 
          type='text'
          placeholder='Type your message here'
		  // onChange={this.props.onChange.bind(this)}
          onKeyUp={this.props.onKeyUp.bind(this)}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
	userInput:state.chat.input
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
	// onChange (event) {
		// dispatch ({
			// type: 'USER_INPUT',
			// payload: {
				// message: event.target.value,
				// type: 'text',
				// isBot: false,
			// }
		// });
	// },
	
	onKeyUp (event) {
		if (event.keyCode === 13){
			console.log(event.target.value);
			// dispatch (
			
				// {
				// type: 'USER_INPUT',
				// payload: {
					// message: event.target.value,
					// type: 'text',
					// isBot: false,
					// }
				// },
				// {
				// type: 'CHAT_ADD_MESSAGE',
				// payload: {
					// message: event.target.value,
					// type: 'text',
					// isBot: false,
					// }
				// },
			
			// );
			
			const data = {message:event.target.value, type:'text', isBot:'false'};
			axios.post('/message', data)
			.then((response) =>{
				console.log('Response:', response);
				if (response.status === 200){
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
		  // console.log(event.target);
			
		}
	}
	
    // onKeyDown (event, data) {
	  // console.log("Message: ", data);
      // if (event.keyCode === 13) {
		  // axios.post('/messge', data)
		  // .then((response) => {
        // console.log('Response:', response);

        // if (response.status === 200) {
          // dispatch({
            // type: 'CHAT_ADD_MESSAGE',
            // payload: {
              // message: response.data,
              // type: 'text',
              // isBot: true,
            // }
          // });
        // }
      // })
	  // .catch((error) => {
        // console.error('Error:', error);
      // });
        
      // }
    // }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Chatbar);
