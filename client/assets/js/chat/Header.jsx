import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>sup!</h1>
        <div>
          <button type="button">reset</button>
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
