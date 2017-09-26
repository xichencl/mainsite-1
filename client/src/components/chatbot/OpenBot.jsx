import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';
import ChatIcon from './icons/ChatIcon.jsx';
import ChatContainer from './ChatContainer.jsx';

const BotBox = ({ visible }) =>
  <div id="bot" className={visible ? 'slideIn' : 'slideOut'}>
    <ChatContainer />
  </div>;

// class NavigationBar extends React.Component = ({ visible }) =>
//   <div id="navbar" className={visible ? 'slideIn' : 'slideOut'}>
//     <ChatContainer />
//   </div>;

class OpenBot extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { visible: false };
  }

  handleClick() {
    this.setState(prev => ({ visible: !prev.visible }));
  }

  render() {
    return (
      <div id="wrapper">
        <button type="button" onClick={this.handleClick}>
          {this.state.visible ? 'Hide bot' : 'Show bot'}
        </button>
        <BotBox visible={this.state.visible} />
      </div>
    );
  }
}

// ReactDOM.render(<OpenBot />, document.getElementById('root'));
export default OpenBot;
