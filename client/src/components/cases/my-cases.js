import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../../actions/index';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

// this component displays in the profile dashboard as a list of current cases attached to user profile
class MyCases extends Component {
  constructor(props) {
    super(props);
    
  }

  // componentWillMount() {
  //   // Fetch case data prior to component mounting
  //   const uid = cookie.get('user')._id;
  //   this.props.getData('get_data', this.props.error, true, `/user/${uid}/getData`, this.props.dispatch);
  // }

  // componentWillUpdate() {
    
  // }

  render() {
    console.log("Cases:", this.props.cases);
    return (
      <div>
      	<div className={this.props.classStyle}>
      		<div className='Portal-box-content Grey-background'>
	      		<h3>My Cases<Link to='addCase' className='Box-icon-sm'><i className='fa fa-plus' aria-hidden='true'></i></Link></h3>
	      		<hr className='Box-line-md' />
	      		{/*list case number and type here */}
            <Link to='my-case' className='my-case-link'>
              <p> { this.props.cases.length > 0 ? this.props.cases[0].caseType : '' } </p>
              <p className='p2'>{ this.props.cases.length > 0 ? this.props.cases[0].caseType : '' } </p>
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
 
function mapStateToProps(state) {
  
  return {
    cases: state.user.cases,
  };
}

// export default MyCases
export default connect(mapStateToProps, { getData })(MyCases);
// MyCases.propTypes = { limit: React.PropTypes.String };
MyCases.defaultProps = { classStyle: 'Box Portal-box col-2' }; 
