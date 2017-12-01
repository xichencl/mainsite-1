import React from 'react';
import { connect } from 'react-redux';
import { loadPageData } from '../../actions/index.js'

import TestHomePage from './test-home-page.js'

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({  
  pageData: state.data.page,
});

const mapDispatchToProps = {  
  loadPageData
};

const TestHomePageWrapper = connect(  
  mapStateToProps,
  mapDispatchToProps
)(TestHomePage);

export default TestHomePageWrapper;  


