import React from 'react';
import { connect, dispatch } from 'react-redux';

import axios from 'axios';
// import ChatButton from './ChatButton.jsx';



class Chatbar extends React.Component {
  constructor(props) {
    super(props);
  } 
  
  render() {
    return (
      <div className="light-grey chatbar">
        <div>
          <button
            type="button"
            value="speak"
            ref="rec" //a react attrib
            className="mic"
            onClick={this.props.onClick.bind(this)}
          >
            <i className="material-icons" style={{ fontSize: '35px' }}>
              mic
            </i>
          </button>
        </div>

        <div>
          <input
            type="text"
            placeholder="Type your message here"
            ref="textInput"
            // onChange={this.props.onChange.bind(this)}
            // onKeyUp={(e) => this.props.onKeyUp.bind(this, e, e.target.value)()}
            onKeyUp={this.props.onKeyUp.bind(this)}
          />
        </div>

        <div>
          <button
            type="button"
            ref="sendButton" //a react attrib
            value="send"
            className="circle"
            onClick={this.props.onClick.bind(this)}
          >
            <i className="material-icons" style={{ fontSize: '24px' }}>
              send
            </i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInput: state.chat.input
  };
};

const mapDispatchToProps = dispatch => {
   let msg, recognition, synth, voices, utt;
   
   //send post requests to api.ai, process response, and dispatch action to reducers
   let postAndDispatch = function(data, sessionId, speak){
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
	axios.post('/message', {payload:data, id:sessionId})
	.then((response) =>{
		console.log('response.data:', response.data);
		msg = response.data.speech;
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
		if (speak!== undefined){
			speak();
		}
	})
	.catch((error) => {
	console.error('Error:', error);
	});  
  } ;
  
  //speech synthesis for reading responses from api.ai
    let speak = function(){
		  utt = new SpeechSynthesisUtterance();
		  utt.lang = 'en-US';
		  utt.text = msg;
		  // console.log(msg);
		  utt.voice = voices[1];
		  utt.pitch = 5;
		  utt.volume = 5;
		  synth.speak(utt);
	};
  
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
		if (synth && synth.speaking){
			synth.cancel();
		}else{
			try {
			  const SpeechRecognition =
				SpeechRecognition || webkitSpeechRecognition;
			  const SpeechGrammarList =
				SpeechGrammarList || webkitSpeechGrammarList;
			  const SpeechRecognitionEvent =
				SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

			  recognition = new SpeechRecognition();
			  recognition.lang = 'en-US';
			  // const result = {};
			  synth = window.speechSynthesis;
			  voices = synth.getVoices();
			  console.log('voices: ', voices);
			} catch (e) {
			  alert('your browser may not support speech recognition');
			  return;
			}
		}
        recognition.start();
        recognition.onresult = e => {
          const userInput = e.results[e.results.length - 1][0].transcript;
          // console.log('result: ', transcript);
		  if (!userInput || /^\s*$/.test(userInput)){
			  return;
		  }
          const data = { message: userInput, type: 'text', isBot: false };
          postAndDispatch(data, this.props.sessionId, speak);
		  
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
        const userInput = this.refs.textInput.value;
		if (!userInput || /^\s*$/.test(userInput)){
			  return;
		 }
		const data = {
          message: userInput,
          type: 'text',
          isBot: false
        };
        //clears textbox
        this.refs.textInput.value = '';
        console.log('message:', data);
		if (synth && synth.speaking){
			synth.cancel();
		}
		postAndDispatch(data, this.props.sessionId);        
      }
    },
	onKeyUp (event) {		
		if (event.keyCode === 13){
			console.log("message:", event.target.value);
			const userInput = event.target.value;
			if (!userInput || /^\s*$/.test(userInput)){
			  return;
		    }
			const data = {message: userInput, type:'text', isBot:false};
			//clear input bar
			this.refs.textInput.value = '';
			if (synth && synth.speaking){
				synth.cancel();
			}
			postAndDispatch(data, this.props.sessionId);
			
						
			
		}
	}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatbar);
