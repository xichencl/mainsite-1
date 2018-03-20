import React from 'react';

class SearchResults extends React.Component{

	ComponentWillMount(){
            var config = {
          gcseId: '010012988809159316594:zgkefy-h6yk',
          resultsUrl: 'http://localhost:8000/search-results',
          searchWrapperClass: 'gcse-search-wrapper',
          resultsWrapperClass: 'gcse-results-wrapper'
        };

        var renderSearchForms = function () {
          if (document.readyState == 'complete') {
            queryAndRender();
          } else {
            google.setOnLoadCallback(function () {
              queryAndRender();
            }, true);
          }
        };

        var queryAndRender = function() {
          var gsceSearchForms = document.querySelectorAll('.' + config.searchWrapperClass);
          var gsceResults = document.querySelectorAll('.' + config.resultsWrapperClass);

          if (gsceSearchForms) {
            console.log("found search forms", gsceSearchForms);
            renderSearch(gsceSearchForms[0]);
          }
          if (gsceResults) {
            renderResults(gsceResults[0]);
          }
        };

        var renderSearch = function (div) {

            google.search.cse.element.render(
              {
                div: div.id,
                tag: 'searchbox-only',
                attributes: {
                  resultsUrl: config.resultsUrl
                }
              }
            );

            console.log("google element has been created");
            if (div.dataset &&
                div.dataset.stylingFunction &&
                window[div.dataset.stylingFunction] &&
                typeof window[div.dataset.stylingFunction] === 'function') {
              window[div.dataset.stylingFunction](form);
            }
        };

        var renderResults = function(div) {
          google.search.cse.element.render(
            {
              div: div.id,
              tag: 'searchresults-only'
            });
        };

        window.__gcse = {
          parsetags: 'explicit',
          callback: renderSearchForms
        };

        (function () {
          var cx = config.gcseId;
          var gcse = document.createElement('script');
          gcse.type = 'text/javascript';
          gcse.async = true;
          gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
            '//cse.google.com/cse.js?cx=' + cx;
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(gcse, s);
        })();

  }

  render(){
  	return (
    <div>
  	{/*<div className="gcse-search-wrapper" id="testSearch"></div>*/}
  	{<div className="gcse-results-wrapper" id="testResults"></div>}
  	</div>
  	);
  }

} 

export default SearchResults;	
