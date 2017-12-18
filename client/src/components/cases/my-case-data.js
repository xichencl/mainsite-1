import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postData } from '../../actions/index';
import { connect } from 'react-redux';
import { CLIENT_ROOT_URL, API_URL } from '../../actions/index';


class MyCaseData extends Component {
  componentDidMount() {
    // Fetch user data prior to component mounting
  }

  render() {
  	// console.log("MyCaseData:", this.props);
    return (
      <div>
      	<div className='Box Case-data-box col-2-3 '>
      		<div className='Portal-box-content Grey-background'>
	      		<h3 className='Case-data-title'>
	      			{this.props.caseData.caseType ? this.props.caseData.caseType:''} - {this.props.caseData.caseNumber ? this.props.caseData.caseNumber:''}
	      			<Link className='Box-icon-sm' to={{pathname:"/addCase", state:{id : this.props.caseData._id}}}>
	      				<i className='fa fa-pencil' aria-hidden='true'></i>
	      			</Link>
	      		</h3>
	      
	      		<br />
	      		     		
	      		<div className='Box-row'>
	      			<div className='Parties'>
	      				<p>Plaintiff(s)</p>
	      				<p className='p2'>Monica Geller Bing,</p>
	      				<p> Chandler Bing</p>
	      			</div>
	      			<div className='Parties'>
	      				<p>Defendant(s)</p>
	      				<p className='p2'>Ross Geller,</p>
	      				<p> Rachel Greene Geller</p>
	      			</div>
	      		</div>
	      		<br />
	      		<div className='Actions'>
	      			<h3>Court Updates</h3>
      				<hr />
	      			<div className='Box-row'>
	      				<p className='Date'>6/24/2017</p>
	      				<p className='Update p2'>Proof of service on claim of plaintiff filed.</p>
	      				<hr />
	      			</div>
	      			<div className='Box-row'>
	      				<p className='Date'>7/13/2017</p>
	      				<p className='Update p2'>Case entry data completed</p>
	      				<hr />
	      			</div>
	      			<div className='Box-row'>
	      				<p className='Date'>7/13/2017</p>
	      				<p className='Update p2'>Small claims trial set for 9/28/2017 at 13:00 in Dept. SCT</p>
	      				<hr />
	      			</div>
	      		</div>
      		</div>

       	</div>
      	
      </div>
    );
  }
}
 
// function mapStateToProps(state) {
// 	// console.log(state.user)
//   return {
//     cases: state.user.cases,
//   };
// }

// export default MyCaseData
export default connect(null, { postData })(MyCaseData);

