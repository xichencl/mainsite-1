import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <button type="button" className="refresh">
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
export default Header;
// import ChatButton from './ChatButton.jsx';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div className="header">
//
//       </div>
//     );
//   }
