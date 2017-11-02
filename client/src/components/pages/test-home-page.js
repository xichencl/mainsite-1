import React from 'react';
import { connect } from 'react-redux';
import { loadPageData } from '../../actions/index.js'
import { bindActionCreators } from 'redux';

class TestHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  	this.props.getPageData();
  }

  render() {


    return (
      <div>
          <div>hi 
            
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	// const testData= state.data.page;
	// console.log(testData)
	return {
		data: state.data.page
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getPageData: loadPageData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TestHomePage);

///////

  	// const topicsList = []
  	// const pageData = this.state.data.page
  	// .map(function() {

  	// })





///////////

// function mapStateToProps(state) {
// 	console.log(state.user)
//   return {
//     profile: state.user.profile,
//   };
// }

/* 
const mapStateToProps = state => ({
  	data: loadUnitData()
});
*/