import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';
import ChatContainer from './ChatContainer.jsx';
import CloseBot from './CloseBot.jsx';
import { connect } from 'react-redux';

const BotBox = ({ visible }) =>
  <div id="bot" className={visible ? 'slideIn' : 'slideOut'}>
    <ChatContainer />
  </div>;

const SpeechBubble = props =>
  <div>
    <div className="open-bot-icon">
      <i className="material-icons md-36">chat_bubble</i>
    </div>
    {/* dont delete. might need if we decide to add to text menu
      <div className="text-bot-icon">
      Chat <i className="material-icons md-18">chat_bubble</i>
    </div>*/}
  </div>;

class OpenBot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // wrapper completely hides bot until chat icon is clicked

      <div id="wrapper" ref={el => (this.wrapperRef = el)}>
        <div className="chat-icon" onClick={this.props.onClick.bind(this)}>
          {this.props.visible
            ? <CloseBot
              handleClickOutside={event => this.props.handleClickOutside(event, this.wrapperRef)}
            />
            : <SpeechBubble />}
        </div>
        <BotBox visible={this.props.visible} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.chat.botVisibility,
});

const mapDispatchToProps = dispatch => ({
  onClick(event) {
    dispatch({ type: 'TOGGLE_BOT' });
  },

  handleClickOutside(event, wrapperRef) {
    if (wrapperRef && !wrapperRef.contains(event.target)) {
      dispatch({ type: 'TOGGLE_BOT' });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenBot);
