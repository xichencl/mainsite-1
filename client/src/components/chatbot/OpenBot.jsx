import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';
import ChatIcon from './icons/ChatIcon.jsx';
import ChatContainer from './ChatContainer.jsx';

class OpenBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // toggle box is closed initially
      opened: false,
    };
    // http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    // check if box is currently opened
    const { opened } = this.state;
    this.setState({
      // toggle value of `opened`
      opened: !opened,
    });
  }

  render() {
    const { title, children } = this.props;
    const { opened } = this.state;
    return (
      // <div className="box">
      <div>
        <div className="open-bot-icon" onClick={this.toggleOpen}>
          <ChatIcon />
        </div>
        {opened &&
          <div className="box-content">
            <ChatContainer />
          </div>}
      </div>
    );
  }
}

ReactDOM.render(
  <OpenBot text="Click me">
    <div>Some content</div>
  </OpenBot>,
  document.getElementById('root'),
);
export default OpenBot;
