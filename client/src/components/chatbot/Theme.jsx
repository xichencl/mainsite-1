import React from 'react';
import ReactDOM from 'react-dom';
import ThemeIcon from './icons/ThemeIcon.jsx';
import FontSizeIcon from './icons/FontSizeIcon.jsx';
import LanguageIcon from './icons/LanguageIcon.jsx';

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }
  toggleOnOff() {
    this.setState({ on: !this.state.on });
  }

  render() {
    // const text = this.state.on ? 'ON' : 'OFF';
    let className = this.state.on ? 'on' : '';
    className += ' test-button2';

    return (
      <div className={className} onClick={this.toggleOnOff.bind(this)}>
        {/* {text}*/}
        <ThemeIcon />
      </div>
    );
  }
}

export default Theme;
