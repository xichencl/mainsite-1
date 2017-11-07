import React from 'react';
import Menu from 'react-burger-menu/lib/menus/push';
import Header from './Header.jsx';
import Chatbox from './Chatbox.jsx';
import Chatbar from './Chatbar.jsx';
import LanguageIcon from './icons/LanguageIcon.jsx';
import ThemeIcon from './icons/ThemeIcon.jsx';
import FontSizeIcon from './icons/FontSizeIcon.jsx';
import { connect } from 'react-redux';
// import BubbleBreak from './BubbleBreak.jsx';
// import { ReduxTheme, Theme, registerTheme, registerStyle } from 'redux-theme';

const uuidv1 = require('uuid/v1');

const sessionId = uuidv1();

// let dist, startX, startY, startTime;
// const swipeThreshold = 150, restraint = 100, allowedTime = 300

//experimenting with theme switch
// const baseTheme = new Theme ('base');
// const myTheme = new Theme ('mytheme');
// myTheme.typo.font = 'Luckiest Guy, sans-serif';
 
// const textStyle = (theme) => ({
//   base: {
//     fontFamily: theme.typo.font
//   }
// });
 
// // Build array of themes and styles 
// const themes = [defaultTheme, myTheme];
// const styles = [{
//   componentName: 'Chatbox', // Will apply on decorated component with this name 
//   style: textStyle
// }];

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: sessionId };
    this.resetSession = this.resetSession.bind(this);
  }

  // componentDidMount(){
  //   console.log("store: ", this.context.store);
  // }

  // componentWillUnmount(){

  // }

  resetSession() {
    this.setState({ id: uuidv1() });
  }

  

  // caseSelection(){
  //   this.setState({ caseTypeSelected: true });
  // }

  // pushes out settings/navbar
  render() {
    // const {store} = this.context;
    // console.log("theme:", this.props.theme);
    let chatContainerCSSClass;
    if (this.props.theme === 'dark'){
      chatContainerCSSClass = 'dark chat-container-E';
    }else{
      chatContainerCSSClass = 'grey-C chat-container-E';
    }
    return (
      <div>
        <Menu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          right
          noOverlay
          width={'100px'}
          customCrossIcon={
            // settings icon replaced original x (close) icon
            <svg
              fill="#545757"
              height="44"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
            </svg>
          }
        >
          <div id="outer-container">
            <Chatbar sessionId={this.state.id} theme={this.props.theme}/>
            <Header resetSession={this.resetSession} theme={this.props.theme}/>
            <ThemeIcon />
            <FontSizeIcon />
            <LanguageIcon />
          </div>
        </Menu>
        

        <main id="page-wrap">
          {/* chat-container-E keeps header and chatbar in fixed position*/}
          <div className={chatContainerCSSClass}>
            <Chatbox sessionId={this.state.id} theme={this.props.theme}/>
          </div>
        </main>
      </div>
    );
  }
}

// ChatContainer.contextTypes = {
//   store: React.PropTypes.object
// };


const mapStateToProps = state => ({
  theme: state.chat.theme
}) ;

// const mapDispatchToProps = dispatch => ({
//   onClick(event){
//     console.log(event.target.path);
//     if (event.currentTarget.nodeName !== 'ThemeIcon'){
//         return;
//     }
//     console.log("executed");
//     console.log("current theme: ",event.currentTarget.props.theme);
//     dispatch({
//       type:'TOGGLE_THEME'
//     });


//   }

// });

export default connect(mapStateToProps)(ChatContainer);
