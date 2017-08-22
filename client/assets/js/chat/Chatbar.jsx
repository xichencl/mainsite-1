import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
// import ChatButton from './ChatButton.jsx';



class Chatbar extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    return (	  
      <div className='light-grey chatbar'>
	  {/*<ChatButton value='speak' onClick={this.props.onClick.bind(this)}/>*/}
		<button type='button' value='speak' onClick={this.props.onClick.bind(this)}>
			speak
		</button>
		
        <input 
          type='text'
          placeholder='Type your message here'
		  ref='textInput'
		  // onChange={this.props.onChange.bind(this)}
          // onKeyUp={(e) => this.props.onKeyUp.bind(this, e, e.target.value)()}
		  onKeyUp ={this.props.onKeyUp.bind(this)}
        />
		{/*<ChatButton value='send' onClick={this.props.onClick.bind(this)}/>*/}
		 <button type='button' value='send' onClick={this.props.onClick.bind(this)}>
			send
		 </button>
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
	 onClick(event) {
      //using currentTarget instead of target because currentTarget is the object listening(the button). target is that actual target received, which is the icon, and not what we want
      if (event.currentTarget.type !== 'button') {
        return;
      }
      console.log('event.currentTarget.value:', event.currentTarget.value);
      if (event.currentTarget.value === 'speak') {		
        console.log('speak button clicked');    
		let recognition, synth, voices;
		try {
			const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
			const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
			const SpeechRecognitionEvent =
			  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

			recognition = new SpeechRecognition();
			recognition.lang = 'en-US';
				// const result = {};
			synth = window.speechSynthesis;
			voices = synth.getVoices();
		} catch (e){
			alert('your browser may not support speech recognition');
			return;
	
		} 
				
		recognition.start();
        recognition.onresult = e => {
          const transcript = e.results[e.results.length - 1][0].transcript;
          console.log('result: ', transcript);
          // return result;
          const data = { message: transcript, type: 'text', isBot: false };
          dispatch({
            type: 'CHAT_ADD_MESSAGE',
            payload: data
          });
          dispatch({
            type: 'USER_INPUT',
            payload: data
          });

          axios
            .post('/message', { payload: data, id: this.props.sessionId })
            .then(response => {
              console.log('Response:', response);
              if (response.status === 200) {
                const msg = response.data.speech;
				dispatch({
                  type: 'CHAT_ADD_MESSAGE',
                  payload: {
                    message: msg,
                    type: 'text',
                    isBot: true
                  }
                });
				let customPayload;
				if (response.data.messages.length >1 ){
					//get custom payload from api.ai
					customPayload = JSON.stringify(response.data.messages[1].payload.buttons);
					dispatch({
					type: 'CHAT_ADD_MESSAGE',
					payload: {
					  message: customPayload,  
					  type: 'button',
					  isBot: true,
					}
					});
				}
              }
              const utt = new SpeechSynthesisUtterance();
              utt.lang = 'en-US';
              utt.text = response.data.speech;
              utt.voice = voices[0];
              utt.pitch = 5;
              utt.volume = 5;
              synth.speak(utt);
            })
            .catch(error => {
              console.error('Error:', error);
            });
        };

        recognition.onerror = e => {
          console.error(e);
        };

        recognition.onend = () => {
          console.log('recognition end.');
        };
      } else {
        console.log('send button clicked');
        console.log('input message', this.refs.textInput.value);
        const data = {
          message: this.refs.textInput.value,
          type: 'text',
          isBot: false
        };
        //clears textbox
        this.refs.textInput.value = '';
        console.log('message:', data);

        dispatch({
          type: 'CHAT_ADD_MESSAGE',
          payload: data
        });
        dispatch({
          type: 'USER_INPUT',
          payload: data
        });

        axios
          .post('/message', { payload: data, id: this.props.sessionId })
          .then(response => {
            console.log('Response:', response);
            const msg = response.data.speech;
			if (response.status === 200) {
              dispatch({
                type: 'CHAT_ADD_MESSAGE',
                payload: {
                  message: msg,
                  type: 'text',
                  isBot: true
                }
              });
			  let customPayload;
			  if (response.data.messages.length >1 ){
				//get custom payload from api.ai
				customPayload = JSON.stringify(response.data.messages[1].payload.buttons);
				dispatch({
				type: 'CHAT_ADD_MESSAGE',
				payload: {
				  message: customPayload,  
				  type: 'button',
				  isBot: true,
				}
				});
			  }
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    },
	onKeyUp (event) {
		
		if (event.keyCode === 13){
			console.log("message:", event.target.value);
			const data = {message:event.target.value, type:'text', isBot:false};
			dispatch(
				{
				type: 'CHAT_ADD_MESSAGE',
				payload: data,
				}				
			);
			dispatch({
				type: 'USER_INPUT',
				payload:data,
			});
			//clear input bar
			this.refs.textInput.value = '';
			
			axios.post('/message', {payload:data, id:this.props.sessionId})
			.then((response) =>{
				console.log('response.data:', response.data);
				const msg = response.data.speech;
				if (response.status === 200) {
				  dispatch({
					type: 'CHAT_ADD_MESSAGE',
					payload: {
					  message: msg,
					  type: 'text',
					  isBot: true
					}
				  });
				  let customPayload;
				  if (response.data.messages.length >1 ){
					//get custom payload from api.ai
					// console.log("buttons:", response.data.messages[1].payload.buttons);
					customPayload = response.data.messages[1].payload.buttons;
					const buttons = customPayload.split('<br>')
					buttons.filter(x=>x).forEach(btn=>{
						dispatch({
						type: 'CHAT_ADD_MESSAGE',
						payload: {
						  message: btn,  
						  type: 'button',
						  isBot: true,
						}
						});
					});
				  }
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
