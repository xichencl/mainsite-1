import React, { Component } from 'react';
import Squarebox from '../../template/square-box';
import Bannerbox from '../../template/banner-box';
import Infobox from '../../template/info-box';

import PlaintiffIcon from '../../../img/suing.svg';
import DefendantIcon from '../../../img/sued.svg';

export default class SmallClaims extends Component {
	constructor(){
    super(); 
    this.state={
      topics:[]
    }
  }

  // static defaultProps() {
  //   return {
  //     limit: 4
  //   }
  // }
 
  componentDidMount() {
    return fetch('https://case-data.glitch.me/courtdata')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({topics: responseJson});
      // console.log(this.state.topics)
    })
    .catch((error) => {
      console.error(error);
    });
  }

	render() {
		//smallclaims id = '7'
		var faqTitle = []
    var self = this;
    // const topicArray = [];
    const smallclaimsFAQs = this.state.topics
   	.filter(function(topic) {
   		return topic.id === '7'
   	})
   	.map(function(list) {
   		const faqList = list.faqs;
      
      // console.log(faqList)
      for (const key of Object.keys(faqList)) {
          // console.log(faqList[key].title);
          faqTitle.push(faqList[key].title)
      }
      return (faqTitle)
   	})
    // .map(function(faqTitleAry) {
    //    <div>{title}</div>
    // }) 
    const renderFaqTitles = faqTitle
    .filter(function(title, index){
      // console.log(self)
      // console.log(self.props.limit)
      if(self.props.limit) {
        return (index < self.props.limit)
      }
      return true
    })
    .map((title) =>
      <div className='topic-title'>{title}</div>
    );


		return (
			<div className='Topic'>
		      <h1>Small Claims</h1>
		      <Bannerbox boxTitle='What is small claims court?'
		           boxContent='Learn more about small claims court, who you can sue, where you should file, how much can be claimed, and what to expect to pay in filing fees.'
		           buttonText='FAQs'
               buttonLink='faqs/smallclaims'
		      />
		      <div className='grid grid-pad'>
		        <Squarebox 
		        	boxTitle='I am Suing'
		        	id='plaintiff'
	            imgSrc={PlaintiffIcon}
	            boxContent='Filing a Small Claim' /> 
		        <Squarebox 
		        	boxTitle='I am being sued'
	            imgSrc={DefendantIcon} /> 
		      </div>
		      <Infobox 
		      	boxTitle='FAQs'
	          boxContent={renderFaqTitles}
	          buttonText='View More'/>

		    </div>
		)
	}
}

SmallClaims.propTypes = { limit: React.PropTypes.number };
SmallClaims.defaultProps = { limit: 4 };

/* 
   		console.log(JSON.stringify(list.faqs, null, 4));

    .map(function(faqs) {
      return (
        <div>{faqs.title}</div>
      )
    })

*/