import React from 'react';
import ReactHtmlParser from 'react-html-parser';


const ChatBubble = (props) => {
  let className = 'blue chat-bubble';

  if (props.type === 'button') {
    className += ' chat-button';
  }

  return (
    <div className={className} onClick={props.onClick}>
      { ReactHtmlParser(props.text) }
    </div>
  );
};


export default ChatBubble;
