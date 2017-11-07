// refresh and close icons live here as links to material icons, not svg-components
// css for settings icon is in header.scss, but code lives in ChatContaier.jsx and there's a note about settings icon replacing default 'x' from react-burger-menu package;
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-x">
        <div className="icon-container">
          <button
            type="button"
            id="close-button"
            className="close-bot"
            onClick={this.props.onClick.bind(this)}
          >
            <i className="material-icons" style={{ fontSize: '1.2em' }}>
              close
            </i>
          </button>
          <button
            type="button"
            id="refresh-button"
            className="refresh-bot"
            onClick={this.props.onClick.bind(this)}
          >
            <i className="material-icons" style={{ fontSize: '2.5em' }}>
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
  ai: state.chat.ai,
});

const mapDispatchToProps = dispatch => ({
  onClick(event) {
    if (event.currentTarget.type !== 'button') {
      return;
    }
    if (event.currentTarget.id === 'refresh-button') {
      dispatch({ type: 'RESET_BOT' });
      dispatch({ type: 'General' });
      this.props.resetSession();
    } else {
      // id==='close-button'
      dispatch({ type: 'TOGGLE_BOT' });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
