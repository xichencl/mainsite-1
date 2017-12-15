import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyCases from './my-cases';
// import ViewTodo from '../todo/view-todo';
import MyCaseData from './my-case-data';
import MyFormsLarge from '../pages/FormsBoxes/my-forms-lg';

export default class MyCasesDashboard extends Component {
  componentDidMount() {
    // Fetch user data prior to component mounting
  }

  render() {
    // console.log("CaseData props: ", this.props);
    // console.log("CaseData state:", this.state);
    return (
      <div>
      	<div className='dashboard-wrapper'>
      	  <h1>My Case - {this.props.location.state.caseData.caseNumber}</h1>
      	  <MyCaseData className='dashboard-inner content-wrapper' caseData={this.props.location.state.caseData}/>
					{/*<ViewTodo className='dashboard-inner sidebar-inner sidebar-bottom'/>*/}
          <Link to={{pathname:'/test-todo', state:{caseId:this.props.location.state.caseData._id, caseType:this.props.location.state.caseData.caseType}}}>Create a Checklist</Link>
      		<div className='sidebar-wrapper'>

      		</div>
      		
      		<MyFormsLarge className='dashboard-inner forms-wrapper' />
      	</div>
      </div>
    );
  }
}
 
//          <ViewTodo className='dashboard-inner sidebar-inner sidebar-bottom'/>
 
// function mapStateToProps(state) {
// 	console.log(state.user)
//   return {
//     profile: state.user.profile,
//   };
// }

// export default connect(mapStateToProps, { fetchUser })(ViewProfile);

