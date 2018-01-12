// work in progress
// the return/map needs updating... 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// a template box with title, linked icon, and list of items
class ListBox extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <div>
      	<div className={this.props.classStyle}>
      		<div className='Portal-box-content Grey-background'>
	      		<h3>{this.props.title}<Link to='add-case' className='Box-icon-sm'><i className='fa fa-plus' aria-hidden='true'></i></Link></h3>
	      	  { this.props.content.map((value) => {
              return (
              <div key={value.id}>
                <hr className='Box-line-md' />
                <Link to={{pathname:'/my-case', state:{caseData: value}}} className='my-case-link'>
                  <p> { value.caseNumber ? value.caseNumber : '' } </p>
                  <p className='p2'>{ value.caseType } </p>
                </Link>
              </div>
              );
            }) }
          </div>
       	</div>
      	
      </div>
    );
  }
}
 
function mapStateToProps(state) {
  
  return {
    content: state.user.content,
  };
}

ListBox.defaultProps = { classStyle: 'Box medium-box col-2' };    
