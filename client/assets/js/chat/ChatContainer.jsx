import React from 'react';

import Header from './Header.jsx';
import Chatbox from './Chatbox.jsx';
import Chatbar from './Chatbar.jsx';

const uuidv1 = require('uuid/v1');
let sessionId = uuidv1();

class ChatContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={id:sessionId};
		this.resetSession=this.resetSession.bind(this);
	}
	
	// componentDidMount(){
		// sessionId = uuidv1();
	// }
	
	// componentWillUnmount(){		
		
	// }
	
	resetSession(){
		this.setState({id: uuidv1()});
	}
	
	render (){
		return(
		  <div className="chat-container">
			<Chatbox sessionId={this.state.id} /> {/*props have to be in {} or ""*/}
			<Chatbar sessionId={this.state.id} />
			<Header resetSession={this.resetSession}/>
		  </div>
		);
	}
}
export default ChatContainer;
