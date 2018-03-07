import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyCases from './my-cases';
// import ViewTodo from '../todo/view-todo';
import MyCaseData from './my-case-data';
// import MyFormsLarge from '../pages/FormsBoxes/my-forms-lg';
// import SquareBox from '../template/square-box';
import SquareBoxStatic from '../template/square-box-static';
import TextIconBox from '../template/text-icon-box';
import ChecklistIcon from '../../img/checklist_1.svg';
import TitleLine from '../template/title-line';

export default class MyCasesDashboard extends Component {
  componentDidMount() {
    // Fetch user data prior to component mounting
  }

  render() {
    // console.log("CaseData: ", this.props.location.state.caseData);
    // console.log("caseData state:", this.state);
    const myCaseTitle = this.props.location.state.caseData.caseNumber
    return (
      <div>
        <TitleLine title={`My Case - ${myCaseTitle}`} />
      	<div className='dashboard-wrapper grid grid-pad'>
          <div className="Box-container">
        	  <MyCaseData className='dashboard-inner content-wrapper' caseData={this.props.location.state.caseData}/>
  					{/*<ViewTodo className='dashboard-inner sidebar-inner sidebar-bottom'/>*/}
          </div>
          <Link to={{
            pathname:'/checklist', 
            state:{
                    caseId:this.props.location.state.caseData._id, 
                    caseType:this.props.location.state.caseData.caseType,
                    party: this.props.location.state.caseData.isPlaintiff 
                  }
          }}>
            <div className="Box-container">
              <SquareBoxStatic 
                boxTitle="My Case Checklist"
                imgSrc={ChecklistIcon}
              />
            </div>
            {/*<TextIconBox 
              boxTitle="Create / View Checklist"
              iconLarge={ChecklistIcon}
              TextIconBoxClass="Box Text-icon-box Grey-background medium-box"
            />*/}
          
          </Link>

      		<div className='sidebar-wrapper'></div>
        	{/*<MyFormsLarge className='dashboard-inner forms-wrapper' />*/}

      	</div>
      </div>
    );
  }
}

//               boxContent="Use our interactive checklist to help you manage your small claims case before you file, during your case, and after a judgement has been made."

