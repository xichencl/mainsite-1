// refresh and close icons live here as links to material icons, not svg-components
// css for settings icon is in header.scss, but code lives in ChatContaier.jsx and there's a note about settings icon replacing default 'x' from react-burger-menu package;
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { validateEmail, printChatlog } from '../../helpers.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.props.sendEmail.bind(this);
    this.onClick = this.props.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const email = prompt("Please enter your email address:");
    if (!email) {
      return;
    }
    if (!validateEmail(email) ){
      alert("You have entered an invalid email address! Please try again.");
      return;
    }
    this.sendEmail(email, printChatlog(this.props.chatlog));
  }



    

  render() {
    return (
      // this empty div wraps everything, and lets header view correctly in safari*/}
      <div>
        <div className="header-m">
          <div className="icon-container">
            <button
              type="button"
              id="close-button"
              className="close-bot"
              onClick={this.onClick}
            >
              <i className="material-icons" style={{ fontSize: '1.2em' }}>
                close
              </i>
            </button>

         {/* <div>
            {this.props.ai.caseType}
          </div> */}

            <button 
              type="button"
              id="email" 
              className="button-chatbot-email"
              onClick={this.handleClick}
              >
              <i className="material-icons" style={{ fontSize: '2.5em' }}>
              email
              </i>
            </button>

            <button
              type="button"
              id="refresh-button"
              className="refresh-bot"
              onClick={this.onClick}
              >
              <i className="material-icons" style={{ fontSize: '2.5em' }}>refresh</i>
            </button>

            <button
              type="button"
              id="open-settings-button"
              className="open-bot-settings"
              onClick={this.onClick}
              >
              <i className="material-icons open-bot-settings-icon" style={{ fontSize: '2em' }}>settings</i>
            </button>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chatlog: state.chat.log,
  ai: state.chat.ai,
});

const mapDispatchToProps = dispatch => ({
  onClick(event) {
    if (event.currentTarget.type !== 'button') {
      return;
    }
    console.log("event.currentTarget.id", event.currentTarget.id);
    switch (event.currentTarget.id) {
      case 'refresh-button':
        if (confirm("You will lose all previous conversations on refresh. Do you wish to proceed?")){
          //save all user input to database

          dispatch({ type: 'RESET_BOT' });
          dispatch({ type: 'General' });
          this.props.resetSession();
        }
        break;

      case 'close-button':
        dispatch({ type: 'TOGGLE_BOT' });
        break;

      case 'open-settings-button':
        this.props.toggleMenu();
        break;     

      default:
        return;

    }
  },

    sendEmail(email, chatlog) {
        axios.post('/api/chat/email', {
          receipient: email,
          message: {
            subject: `Your chatlog ${new Date()}`,
            text: chatlog
          }
        })
        .then((response) => {
          console.log(response.data);
          dispatch({ 
            type: 'CHAT_ADD_MESSAGE',
            payload: {
                message: response.data,
                type: 'text',
                source: 'server',
                isBot: true,
            }})
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }
    
    // if (event.currentTarget.id === 'refresh-button') {
    //   if (confirm("You will lose all previous conversations on refresh. Do you wish to proceed?")){
    //     //save all user input to database

    //     dispatch({ type: 'RESET_BOT' });
    //     dispatch({ type: 'General' });
    //     this.props.resetSession();
    //   }
    // } else if (event.currentTarget.id === 'close-button') {
    //     dispatch({ type: 'TOGGLE_BOT' });
    // } else if (event.currentTarget.id === 'open-settings-button') {
    //     this.props.toggleMenu();    
    // } else if (event.currentTarget.id === 'email'){
    //     //email the dialog
    //     axios.post();
    // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
