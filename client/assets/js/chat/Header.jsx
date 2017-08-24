import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props){
	  super(props);
  }
  
  
  render() {
    return (
      <div className="header">
        <div>
          <button type="button" className="refresh" onClick={this.props.onClick.bind(this)}>
            <i className="material-icons" style={{ fontSize: '44px' }}>
              refresh
            </i>
          </button>
        </div>
        <div>
          <button type="button" className="settings">
            <i className="material-icons" style={{ fontSize: '44px' }}>
              settings
            </i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chatlog: state.chat.log
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick (event) {
      if (event.currentTarget.type !== 'button') {
        return;
      }
	  dispatch({type:"RESET_BOT"}); 
	  this.props.resetSession();
      
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);