import React from 'react';
import { connect } from 'react-redux';
// import { loadPageData } from '../../actions/index.js'
// import { bindActionCreators } from 'redux';
import { loadPageData } from '../../actions/index.js'


class TestHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  	// this.props.getPageData();
    this.props.loadPageData();
  }

  render() {


    return (
      <div>
          <div>hi 
          {this.props.pageData.smallclaims.title} 
          </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
	console.log('component', state.data.page)
	return {
		pageData: state.data.page
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ getPageData: loadPageData }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TestHomePage);

export default connect(mapStateToProps, { loadPageData })(TestHomePage);


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