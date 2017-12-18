import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MyForms extends Component {
  componentWillMount() {
    // Fetch user data prior to component mounting
  }

  render() {
    return (
      <div>
      	<div className='Box My-cases-box-md col-2 '>
          <div className='Portal-box-content Blue-background'>

            <h3>My Forms<Link to='calendar' className='Box-icon-sm'><i className='fa fa-file-text-o' aria-hidden='true'></i></Link></h3>
        		<hr className='Box-line-md' />
        		<p>SC-100 </p>
        		<p className='p2'> <em>Complete</em></p>

        		<hr className='Box-line-md' />
        		<p>SC-104 </p>
        		<p className='p2'> <em>In Progress</em></p>

        		<hr className='Box-line-md' />
        		<p>FW-001 </p>
        		<p className='p2'> <em>In Progress</em></p>
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

export default MyForms
// export default connect(mapStateToProps, { fetchUser })(ViewProfile);

