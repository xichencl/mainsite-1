import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.firstName}</p>
      </div>
    );
  }
}

export default UserInfo;
 