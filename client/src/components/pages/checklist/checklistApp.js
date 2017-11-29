import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {TabbedView, Tab, TabTitle, TabContent} from 'react-tabbed-view';
import { loadChecklist } from '../../../actions';
import { ListContainer } from './listContainer';


const mapStateToProps = function(state) {
	console.log(state.checklist)
	return {
		checklist: state.checklist
	}
}

const mapDispatchToProps = function(dispatch) {
	return bindActionCreators({
		loadChecklist: loadChecklist
	}, dispatch)
}

class Checklist extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = { 
  		selectedKey: 'home',
  		// tasks: []
  	}
  }
  // state = {
  //   selectedKey: 'home'
  // }
 
 	componentDidMount() {
 		this.props.loadChecklist()
 	}

  handleTabChange = (evt, key) => {
    this.setState({selectedKey: key});
  }
 
  render() {
  	// const { tasks } = this.props.checklist;
  	// if (!tasks) {
  	// 	console.log(tasks, 'tasks')
  	// }
    return (
      <TabbedView 
        className="tab-container"
        selectedKey={this.state.selectedKey} 
        onChange={this.handleTabChange}
      >


        <Tab tabKey="before">
          <TabTitle className="tab-title">1</TabTitle>
          <TabContent className="tab-content">

          {console.log('\n\n\nsmallClaims\n\n\n', this.props.checklist.smallClaims)}

          {/*{this.props.checklist.smallClaims.map((task) => {
          	return <p>{task.title}</p>
          })}*/}

          </TabContent>
        </Tab>        
        <Tab tabKey="during">
          <TabTitle className="tab-title">2</TabTitle>
          <TabContent className="tab-content">
            <p>During your case</p>
          </TabContent>
        </Tab>
        <Tab tabKey="after">
          <TabTitle className="tab-title">3</TabTitle>
          <TabContent className="tab-content">
            <p>After the judgement checklist</p>
          </TabContent>
        </Tab>
      </TabbedView>
    );
  }
}

            // {this.state.checklist.smallClaims.map((task) => {
            // 	<ListContainer listTitle={task.title} />
            // })}


// this one is most recent working version: 
// function mapStateToProps(state) {
// 	console.log(state.checklist, 'state.checklist')
//   return {
//     checklist: state.checklist,
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);

// export default connect(mapStateToProps, mapDispatchToProps)(Checklist)



/* in tabbed view: 
        renderTab={(children, props) => <div {...props}>{children}</div>}
        renderTabList={children => <div {...props}>{children}</div>}
        renderTabContent={(children, props) => <div {...props}>{children}</div>}
*/