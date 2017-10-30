import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';
import ChatContainer from './ChatContainer.jsx';

class NewComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        <ChatContainer />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return <button {...this.props}>click</button>;
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} />
        {this.state.clicked ? <NewComponent /> : null}
      </div>
    );
  }
}

export default NewComponent;
