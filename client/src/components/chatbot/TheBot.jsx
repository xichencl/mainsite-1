import React from 'react';
// import Menu from 'react-burger-menu/lib/menus/push';
import ChatContainer from './ChatContainer.jsx';

// import ReactHtmlParser from 'react-html-parser';

class TheBot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="move-bot-right">
          <ChatContainer />
        </div>
      </div>
    );
  }
}

export default TheBot;
