import React from 'react';
import {withRouter} from 'react-router';


class SearchResults extends React.Component{
	constructor(props){
		super(props);
		this.gcseCallback = this.gcseCallback.bind(this);
	}


	gcseCallback() {
	  const {match: {params}} = this.props;
	  if (document.readyState != 'complete')
	    return google.setOnLoadCallback(this.gcseCallback, true);
	  google.search.cse.element.render({gname:'gsearch', div:'testResults', tag:'searchresults-only'});
	  const element = google.search.cse.element.getElement('gsearch');
	  // console.log("location", this.props.location);
	  // console.log("history", this.props.history);
	  // console.log("match", this.props.match)
	  // console.log("params", params.query);
	  element.execute(params.query);
	};

	componentDidMount(){
    
		(function() {
		  var cx = '010012988809159316594:zgkefy-h6yk';
		  var gcse = document.createElement('script');
		  gcse.type = 'text/javascript';
		  gcse.async = true;
		  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
		    '//cse.google.com/cse.js?cx=' + cx;
		  var s = document.getElementsByTagName('script')[0];
		  s.parentNode.insertBefore(gcse, s);
		})();

		window.__gcse = {
		  parsetags: 'explicit',
		  callback: this.gcseCallback
		};
  	}

  render(){
  	return (
    <div>
  	<span>Search Results</span>
  	<div className="gcse-results-wrapper" id="testResults"></div>
  	</div>
  	);
  }

} 


export default withRouter(SearchResults);
