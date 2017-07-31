import React from 'react';
import { connect } from 'react-redux';

import ChatContainer from './chat/ChatContainer.jsx';


class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Chat</h1>

        <ChatContainer />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
