import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';


class Chatbar extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    axios.get('/');
  }

  render () {
    return (
      <div className='light-grey chatbar'>
        <input 
          type='text'
          placeholder='Type your message here'
          onKeyDown={this.props.onKeyDown.bind(this)}
        />
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
    onKeyDown (event) {
      if (event.keyCode === 13) {
        
      }
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Chatbar);
