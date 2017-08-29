import React from 'react';
import ReactHtmlParser from 'react-html-parser';
const ChatBubble = props => {
  let className = 'blue bot-bubble-left';
  if (props.type === 'button') {
    className = ' button-blue chat-button';
  } else if (props.isBot === false) {
    className = ' user user-bubble-right'; //using '=' instead of '+=' seperates blue chat-bubble from orange user-bubble-right
    return (
      //allows user bubble and bot bubble to be on two different lines because we're wrapping in div className=bubble-breaker
      <div className="bubble-breaker">
        <div className={className} onClick={props.onClick}>
          {ReactHtmlParser(props.message)}
        </div>
      </div>
    );
  }
  return (
    <div className={className} onClick={props.onClick}>
      {ReactHtmlParser(props.message)}
    </div>
  );
};
export default ChatBubble;
