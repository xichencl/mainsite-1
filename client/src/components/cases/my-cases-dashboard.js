import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyCases from './my-cases';
import ViewTodo from '../todo/view-todo';
import MyCaseData from './my-case-data';
import MyFormsLarge from '../pages/FormsBoxes/my-forms-lg';

export default class MyCasesDashboard extends Component {
  componentWillMount() {
    // Fetch user data prior to component mounting
  }

  render() {
    return (
      <div>
      	<div className='dashboard-wrapper'>
      	  <h1>My Case - A8271HKS2</h1>
      	  <MyCaseData className='dashboard-inner content-wrapper'/>
					<ViewTodo className='dashboard-inner sidebar-inner sidebar-bottom'/>

      		<div className='sidebar-wrapper'>

      		</div>
      		
      		<MyFormsLarge className='dashboard-inner forms-wrapper' />
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

