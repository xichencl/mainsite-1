import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadPageData } from '../../actions/index.js'
import Squarebox from '../template/square-box';

class TestHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
   // this.getPageData();
    this.props.loadPageData()
  }

  render() {
    // const { pageData = [] } = this.props

    // .map(function(faq) {
    //   return (

    //   )
    // })
    
    // console.log('render', pageData)
    // const topic = pageData.smallclaims
    // console.log(topic, 'topic')
    console.log(this.props.pageData, 'props')
    const pageData = this.props.pageData

    console.log('variable sc', pageData)
    // console.log('variable sc', smallclaims)
    // let pageData = this.props.pageData || {}; <- took a screenshot of this reasoning if I want to check againx


    return (
      <div>
          <div>
            // <h1>{pageData.smallclaims && pageData.smallclaims.title}</h1>
            // <h4>{pageData.smallclaims && pageData.smallclaims.faqs[1].Title}</h4>
            // <p>{pageData.smallclaims && pageData.smallclaims.faqs[1].BlockText}</p>
            // <h4>{pageData.smallclaims && pageData.smallclaims.faqs[2].Title}</h4>
            // <p>{pageData.smallclaims && pageData.smallclaims.faqs[2].BlockText}</p>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    pageData: state.data.page.data,
  }
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({
    loadPageData: loadPageData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TestHomePage);


// ps this works in the div... D:<
// {pageData.smallclaims && pageData.smallclaims.title}

//     let pageData = this.props.pageData || {}
//          {pageData.smallclaims.title}

/*
{pageData.smallclaims && pageData.smallclaims.title}
          <h4>{pageData.smallclaims && pageData.smallclaims.faqs[1].Title}</h4>
          <p>{pageData.smallclaims && pageData.smallclaims.faqs[1].BlockText}</p>
          <h4>{pageData.smallclaims && pageData.smallclaims.faqs[2].Title}</h4>
          <p>{pageData.smallclaims && pageData.smallclaims.faqs[2].BlockText}</p>
          </div>
*/
