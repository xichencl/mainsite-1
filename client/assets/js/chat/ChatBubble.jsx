import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ChatBubble = props => {
  let className = 'blue bot-bubble-left';

  if (props.type === 'button') {
    className = ' button-blue chat-button';
  } else if (props.isBot === false) {
    className = ' user user-bubble-right';
    //using '=' instead of '+=' seperates blue chat-bubble from orange user-bubble-right
  }
  return (
    <div>
      <div className={className} onClick={props.onClick}>
        {ReactHtmlParser(props.message)}
      </div>
      {/*<div className="test1" />*/}
    </div>
  );
};

export default ChatBubble;
