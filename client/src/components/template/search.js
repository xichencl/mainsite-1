import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="Search">
          <input className="Search-bar" placeholder=" Search our site" />

          <button>Search</button>
        </div>
      </div>
    );
  }
}
