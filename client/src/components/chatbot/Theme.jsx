import React from 'react';
import ReactDOM from 'react-dom';

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }
  toggleOnOff() {
    this.setState({ on: !this.state.on });
  }

  render() {
    // do consts go outside of render?
    const text = this.state.on ? 'ON' : 'OFF';
    const className = this.state.on ? 'on' : '';
    // className += ' test-button';

    return (
      <div className="test-button" onClick={this.toggleOnOff.bind(this)}>
        {text}
      </div>
    );
  }
}

export default Theme;
