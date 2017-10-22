import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';
import ChatIcon from './icons/ChatIcon.jsx';
import ChatContainer from './ChatContainer.jsx';
import SpeechBubble from './SpeechBubble.jsx';
import {connect} from 'react-redux';

const BotBox = ({ visible }) => {

  return (
  <div id="bot" className={visible?'slideIn':'slideOut'} >
    <ChatContainer />
  </div>
  );

};

// class NavigationBar extends React.Component = ({ visible }) =>
//   <div id="navbar" className={visible ? 'slideIn' : 'slideOut'}>
//     <ChatContainer />
//   </div>;
// const SpeechBubble = (props) => {
//   let className;
//   if (props.visible){
//     className = 'hide-speech-bubble';
//   }
//   return (
//     <div className={className}>
//       <svg
//               fill="#7fcde5"
//               height="36"
//               viewBox="0 0 24 24"
//               width="36"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
//               <path d="M0 0h24v24H0z" fill="none" />
//       </svg>

//     </div>
//     );

// };


class OpenBot extends React.Component {
  constructor(props) {
    super(props);
    // this.setWrapperRef = this.setWrapperRef.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
    // this.state = { visible: false };
  }

  // setWrapperRef(node){
  //   this.wrapperRef= node;
  // }

  // componentDidMount(){
  //     document.addEventListener('click', (event)=>{this.props.handleClickOutside(event, this.wrapperRef)});
  // }

  // componentWillUnMount(){
  //   document.removeEventListener('click', this.props.handleClickOutside);
  // }

  // handleClick() {
  //   this.setState(prev => ({ visible: true}));
  // }

  render() {
    // let chatContainerCSS;
    // if (this.state.visible){
    //   chatContainerCSS=

    // }
    return (
      // wrapper completely hides bot until chat icon is clicked
      <div id="wrapper" ref={el => (this.wrapperRef=el)}>
        <div className="chat-icon" onClick={this.props.onClick.bind(this)}>
          {this.props.visible
            ? null
            : <SpeechBubble handleClickOutside={(event)=>this.props.handleClickOutside(event, this.wrapperRef)} /> }
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
  onClick() {
    dispatch({type: "TOGGLE_BOT"});
  },

  handleClickOutside (event, wrapperRef) {
    console.log('handleClickOutside invoked');
    console.log(wrapperRef);
    console.log(event.target);
    if (wrapperRef && !wrapperRef.contains(event.target)){
      dispatch({type: "TOGGLE_BOT"});
    }
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenBot);
