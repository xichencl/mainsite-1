import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ChatBubble = props => {
  let className = 'blue chat-bubble';

  if (props.type === 'button') {
    className += ' chat-button';
  } else if (props.isBot === false) {
    className += ' orange user-bubble-right chat-bubble';
  }

  return (
    <div className={className} onClick={props.onClick}>
      {ReactHtmlParser(props.message)}
    </div>
  );
};

export default ChatBubble;
