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
        <div className="icon-container">
          <CloseChat />
          {/* refresh icon: using material library instead of their svg for styling purposes */}
          <button type="button" className="refresh-M" onClick={this.props.onClick.bind(this)}>
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
    dispatch({ type: 'RESET_BOT' });
    this.props.resetSession();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
