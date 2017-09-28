import React from 'react';

class ChatIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <div className="icon-size-O">*/}
        <div className="open-bot-icon">
          <svg
            fill="#7fcde5"
            height="36"
            viewBox="0 0 24 24"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
      </div>
    );
  }
}

export default ChatIcon;