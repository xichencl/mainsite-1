import React, { Component } from 'react';
import Cookies from 'universal-cookie';
const cookie = new Cookies();
import { Link } from 'react-router-dom';
// import cookie from 'react-cookie';
import { connect } from 'react-redux';

export default class ViewTodo extends Component {
  componentWillMount() {
    // Fetch user data prior to component mounting

  }

  render() {
    return (
      <div>
      	<div className='Box Portal-box '>
          <div className='Portal-box-content Yellow-background'>
  		
        		<h3>To Do List<i className="fa fa-check Box-icon-sm" aria-hidden="true"></i></h3>
        		<hr className='Box-line-md' />
            <p><Link to='/'><div className='bullet fa fa-dot-circle-o'> </div></Link> File a claim</p>
            <hr className='Box-line-md' />
            <p><Link to='/'><div className='bullet fa fa-dot-circle-o'> </div></Link> Serve the defendant(s)</p>
            <hr className='Box-line-md' />
            <p><Link to='/'><div className='bullet fa fa-circle-thin'> </div></Link> Submit proof of service</p>
            <hr className='Box-line-md' />
            <p><Link to='/'><div className='bullet fa fa-circle-thin'> </div></Link> Prepare for court</p>
            <hr className='Box-line-md' />
            <p><Link to='/'><div className='bullet fa fa-circle-thin'> </div></Link> Respond to the judgement</p>
            <hr className='Box-line-md' />

          </div>
      	</div>
      	
      </div>
    );
  }
}

// function mapStateToProps(state) {
// 	console.log(state.user)
//   return {
//     profile: state.user.profile,
//   };
// }

// export default connect(mapStateToProps, { fetchUser })(ViewProfile);


/*
old to-do code ----> 
////////////////////
render() {
    return (
      <div>
        <div className='Box Portal-box Todo-box col-2'>
        
          
          <h3>To Do List <i className="fa fa-check" aria-hidden="true"></i></h3>
          <ul>
            <li><del>File a claim</del></li>
            <li><span>Serve the defendant(s)</span></li>
            <li><span>Prepare for court</span></li>
          </ul>
        </div>
        
      </div>
    );
  }
   */
 