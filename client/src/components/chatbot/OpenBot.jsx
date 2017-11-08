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
    this.onTouchStart = this.handleTouchStart.bind(this);
    this.onTouchMove = this.handleTouchMove.bind(this);
    this.onTouchEnd = this.handleTouchEnd.bind(this);
    // this.toggleSwiped = this.toggleSwiped.bind(this);
    // this.state = {swiped : false};
    this.swipe = {};
    this.minDistance = 50;
  }

<<<<<<< HEAD
  handleTouchStart(e){
    let touchObj = e.touches[0];
    this.swipe = {x:touchObj.clientX};
    // swiped = false;
    // this.setState(this.toggleSwiped(false));
  }

  handleTouchMove(e){
    if (e.changedTouches && e.changedTouches.length){
      const touchObj = e.changedTouches[0];
      this.swipe.swiping = true;
    }
  }

  handleTouchEnd(e){
    const touchObj = e.changedTouches[0];
    const dist = touchObj.clientX - this.swipe.x;
    if (this.props.visible && this.swipe.swiping && dist>this.minDistance){
      // this.setState(this.toggleSwiped(true));
      // swiped = true;
      this.props.onSwipe();
      // console.log("swiped", swiped);
    }
    this.swipe = {};
  }

  // toggleSwiped(toggle){
  //   return (prevState, toggle) => ({swiped: prevState.swiped && toggle  });
  // }

  render() {
    return (
      // wrapper completely hides bot until chat icon is clicked
      <div id="wrapper" ref={el => (this.wrapperRef=el)} onTouchStart={(e)=>this.handleTouchStart(e)} onTouchMove={(e)=>this.handleTouchMove(e)} onTouchEnd={(e)=>this.handleTouchEnd(e)}>
        <div className="chat-icon" onClick={this.props.onClick.bind(this)} >
=======
  render() {
    return (
      // wrapper completely hides bot until chat icon is clicked

      <div id="wrapper" ref={el => (this.wrapperRef = el)}>
        <div className="chat-icon" onClick={this.props.onClick.bind(this)}>
>>>>>>> e1b38cfef49135948ca2f121fbb6e6f50d79dc3b
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

<<<<<<< HEAD
  handleClickOutside (event, wrapperRef) {
    if (wrapperRef && event.target.tagName !== 'HTML' && !wrapperRef.contains(event.target) ){
      // console.log(event.target.tagName);
      dispatch({type: "TOGGLE_BOT"});
    }
  }, 

  onSwipe () {
    dispatch({type: "TOGGLE_BOT"});
  }
  
=======
  handleClickOutside(event, wrapperRef) {
    if (wrapperRef && !wrapperRef.contains(event.target)) {
      dispatch({ type: 'TOGGLE_BOT' });
    }
  },
>>>>>>> e1b38cfef49135948ca2f121fbb6e6f50d79dc3b
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenBot);
