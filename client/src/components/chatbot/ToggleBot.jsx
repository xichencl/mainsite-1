import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    getInitialState() {
      this.state = { sidebarOpen: false }
  }
  // getInitialState() {
  //   return { sidebarOpen: false };
  // },
  handleViewSidebar() {
    this.setState = { sidebarOpen: !this.state.sidebarOpen } ;
  },
  
  render() {
    return (
      <div>
        <Header onClick={this.handleViewSidebar} />
        <SideBar isOpen={this.state.sidebarOpen} />
        <Content isOpen={this.state.sidebarOpen} />
      </div>
    );
  },
});
}
class Header extends React.Component{
  render() {
    return (
      <header>
        <a href="javascript:;" onClick={this.props.onClick}>
          Click Me!
        </a>
      </header>
    );
  },
});
const SideBar = React.Component({
  render() {
    const sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
    return (
      <div className={sidebarClass}>
        <div>I slide into view</div>
        <div>Me too!</div>
        <div>Meee Threeeee!</div>
      </div>
    );
  },
});

const Content = React.Component({
  render() {
    const contentClass = this.props.isOpen ? 'content open' : 'content';
    return <div className={contentClass}>I am content fill me up!</div>;
  },
});

ReactDOM.render(<Parent />, document.getElementById('root'));
