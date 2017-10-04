import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MyCases extends Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    // Fetch user data prior to component mounting
  }

  render() {
    return (
      <div>
      	<div className={this.props.classStyle}>
      		<div className='Portal-box-content Grey-background'>
	      		<h3>My Cases<Link to='calendar' className='Box-icon-sm'><i className='fa fa-plus' aria-hidden='true'></i></Link></h3>
	      		<hr className='Box-line-md' />
	      		<Link to='my-case' className='my-case-link'>
              <p> A8271HKS2 </p>
              <p className='p2'> Small Claims</p>
            </Link>

	      		<hr className='Box-line-md' />
	      		<Link to='my-case' className='my-case-link'>
              <p>S7221909N </p>
  	      		<p className='p2'> Small Claims</p>
            </Link> 

	      		<hr className='Box-line-md' />
	      		<p> </p>
	      		<p className='p2'> </p>
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

export default MyCases
// export default connect(mapStateToProps, { fetchUser })(ViewProfile);
MyCases.propTypes = { limit: React.PropTypes.String };
MyCases.defaultProps = { classStyle: 'Box Portal-box col-2' }; 
