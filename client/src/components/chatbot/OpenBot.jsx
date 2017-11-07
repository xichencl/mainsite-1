import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';
// import ChatIcon from './icons/ChatIcon.jsx';
import ChatContainer from './ChatContainer.jsx';
import CloseBot from './CloseBot.jsx';
import {connect} from 'react-redux';

let swiped = false;

const BotBox = ({ visible }) => {
  
  return (
  <div id="bot" className={visible?'slideIn':'slideOut'} >
    <ChatContainer />
  </div>
  );

};

const SpeechBubble = (props) => {
  return (
    <div>
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
    );

};


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

  handleTouchStart(e){
    let touchObj = e.touches[0];
    this.swipe = {x:touchObj.clientX};
    swiped = false;
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
    if (this.swipe.swiping && dist>this.minDistance){
      // this.setState(this.toggleSwiped(true));
      swiped = true;
      this.props.onSwipe();
      console.log("swiped", swiped);
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
          {this.props.visible
            ? <CloseBot handleClickOutside={(event)=>this.props.handleClickOutside(event, this.wrapperRef)} />
            : <SpeechBubble  /> }
        </div>
        <BotBox visible={this.props.visible} /> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
    visible: state.chat.botVisibility
});

const mapDispatchToProps = (dispatch) => ({
  onClick(event) {
    dispatch({type: "TOGGLE_BOT"});
  },

  handleClickOutside (event, wrapperRef) {
    if (wrapperRef && !wrapperRef.contains(event.target)){
      dispatch({type: "TOGGLE_BOT"});
    }
  }, 

  onSwipe () {
    dispatch({type: "TOGGLE_BOT"});
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenBot);
