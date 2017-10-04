import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MyFormsLarge extends Component {
  componentWillMount() {
    // Fetch user data prior to component mounting
  }

  render() {
    return (
      <div>
      	<div className='Box Portal-box My-cases-box-lg col-6 '>
          <div className='Portal-box-content Blue-background'>

            <h3>My Forms<Link to='calendar' className='Box-icon-sm'><i className='fa fa-file-text-o' aria-hidden='true'></i></Link></h3>
        		<hr className='Box-line-md' />
        		<p>SC-100 </p>
            <p className='p2'>Plaintiff’s Claim and Order to Go to Small Claims Court</p>
        		<p className='p2'> <em>Approved</em></p>
            <p className='p2'>view</p>  

        		<hr className='Box-line-md' />
        		<p>SC-100A </p>
            <p className='p2'>Other Plaintiffs or Defendants (Small Claims)</p>            
        		<p className='p2'> <em>Approved</em></p>
            <p className='p2'>view</p>            

            <hr className='Box-line-md' />
            <p>SC-103 </p>
            <p className='p2'>Fictitious Business Name (Small Claims)</p>            
            <p className='p2'> <em>Submitted</em></p>
            <p className='p2'>view</p>            

            <hr className='Box-line-md' />
            <p>SC-104A </p>
            <p className='p2'>Proof of Mailing (Substituted Service) (Small Claims)</p>            
            <p className='p2'> <em>Completed</em></p>
            <p className='p2'>view | edit</p>            

        		<hr className='Box-line-md' />
        		<p>FW-001 </p>
            <p className='p2'>Request to Waive Court Fees</p>            
        		<p className='p2'> <em>In Progress</em></p>
            <p className='p2'>view | edit</p>            
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

export default MyFormsLarge
// export default connect(mapStateToProps, { fetchUser })(ViewProfile);

