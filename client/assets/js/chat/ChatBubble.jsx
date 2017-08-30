import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ImageViewer from "./ImageViewer.jsx";

class ChatBubble extends React.Component{
  constructor(props){
	super(props);
  }
  render (){
	  let className = 'blue bot-bubble-left';

	  if (this.props.type === 'button') {
		className = ' button-blue chat-button';
	  }else if(this.props.type === 'image'){
		// className = 'rcorner';
		// console.log(this.props.message);
		// const attr = JSON.parse(this.props.message);
		   return (		  
		  <ImageViewer src={this.props.message.src} alt={this.props.message.alt}  />
		  );
	  } else if (this.props.isBot === false) {
		className = ' user user-bubble-right'; //using '=' instead of '+=' seperates blue chat-bubble from orange user-bubble-right
		return (
		  //allows user bubble and bot bubble to be on two different lines because we're wrapping in div className=bubble-breaker
		  <div className="bubble-breaker">
			<div className={className} onClick={this.props.onClick}>
			  {ReactHtmlParser(this.props.message)}
			</div>
		  </div>
		);
	  }

	  return (
		<div className={className} onClick={this.props.onClick}>
		  {ReactHtmlParser(this.props.message)}	  
		</div> 
	  );
	};
}



export default ChatBubble;
