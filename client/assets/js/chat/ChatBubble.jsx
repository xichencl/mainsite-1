import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class ChatBubble extends React.Component{
  constructor(props){
	super(props);
  }
  render (){
	  let className = 'blue bot-bubble-left';

	  if (this.props.type === 'button') {
		className = ' button-blue chat-button';
	  }else if(this.props.type === 'image'){
		className = 'rcorner';
		  return (
		  <div onClick={this.props.onClick}>
			  {ReactHtmlParser(this.props.message)}
				  {/*<div ref={modal => this.myModal=modal} className="modal">
				  <span className="close">&times;</span>
				  <img className="modal-content" id="img01">
				  <div id="caption"></div>
				  </div>*/}
		  </div>
		  );
	  } else if (this.props.isBot === false) {
		className = ' user user-bubble-right'; //using '=' instead of '+=' seperates blue chat-bubble from orange user-bubble-right
	  }

	  return (
		<div className={className} onClick={this.props.onClick}>
		  {ReactHtmlParser(this.props.message)}	  
		</div> 
	  );
	};
}


export default ChatBubble;
