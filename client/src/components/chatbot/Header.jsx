// refresh and close icons live here as links to material icons, not svg-components
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-L">
        <div className="icon-container">
          <button
            type="button"
            id="close-button"
            className="close-bot"
            onClick={this.props.onClick.bind(this)}
          >
            <i className="material-icons" style={{ fontSize: '44px' }}>
              close
            </i>
          </button>
          <button
            type="button"
            id="refresh-button"
            className="refresh-M"
            onClick={this.props.onClick.bind(this)}
          >
            <i className="material-icons">refresh</i>
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
    if (event.currentTarget.id === 'refresh-button') {
      dispatch({ type: 'RESET_BOT' });
      this.props.resetSession();
    } else {
      // id==='close-button'
      dispatch({ type: 'TOGGLE_BOT' });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
