import React from 'react';
import { connect } from 'react-redux';
import CloseChat from './icons/CloseChat.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-L">
<<<<<<< HEAD
        <div className="icon-container">
          <CloseChat />
          {/* refresh icon: using material library instead of their svg for styling purposes */}
          <button type="button" className="refresh-M" onClick={this.props.onClick.bind(this)}>
=======
        <div>
          <button type="button" id="close-button" onClick={this.props.onClick.bind(this)}>close</button>
          <button type="button" id="refresh-button" className="refresh-M" onClick={this.props.onClick.bind(this)}>
>>>>>>> c1029b8a08733a229da26cd067ab032d3aabac7c
            <i className="material-icons" style={{ fontSize: '44px' }}>
              refresh
            </i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chatlog: state.chat.log,
});

const mapDispatchToProps = dispatch => ({
  onClick(event) {
    if (event.currentTarget.type !== 'button') {
      return;
    }
    if (event.currentTarget.id === 'refresh-button'){
      dispatch({ type: 'RESET_BOT' });
      this.props.resetSession();
    }else{//id==='close-button'
      dispatch({type: 'TOGGLE_BOT'});      
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
