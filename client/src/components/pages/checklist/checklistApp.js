import React from 'react';
import {TabbedView, Tab, TabTitle, TabContent} from 'react-tabbed-view';
// import ListContainer from './listContainer';

export default class Checklist extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = { 
  		selectedKey: 'home',
  		listItems: []
  	}
  }
  // state = {
  //   selectedKey: 'home'
  // }
 
 	componentDidMount() {

 	}

  handleTabChange = (evt, key) => {
    this.setState({selectedKey: key});
  }
 
  render() {
    return (
      <TabbedView 
        className="tab-container"
        selectedKey={this.state.selectedKey} 
        onChange={this.handleTabChange}
      >
        <Tab tabKey="before">
          <TabTitle className="tab-title">1</TabTitle>
          <TabContent className="tab-content">
            <p>Before you file checklist</p>
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

/* in tabbed view: 
        renderTab={(children, props) => <div {...props}>{children}</div>}
        renderTabList={children => <div {...props}>{children}</div>}
        renderTabContent={(children, props) => <div {...props}>{children}</div>}
*/