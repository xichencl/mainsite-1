import React, { Component } from 'react';
import Squarebox from '../../template/square-box';
import Bannerbox from '../../template/banner-box';
import Infobox from '../../template/info-box';

import PropertyOwnerIcon from '../../../img/eviction_landlord.svg';
import TenantIcon from '../../../img/eviction_tenant.svg';
import OccupantIcon from '../../../img/eviction_oo.svg';

export default class Eviction extends Component {
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
    const evictionFAQs = this.state.topics
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
		      <h1>Eviction</h1>
		      <Bannerbox boxTitle='Do I Need a Lawyer?'
		           boxContent='Learn more about rental responsibilities, unlawful detainer, and information for tenants and property owners.'
		           buttonText='FAQs'
               buttonLink='faqs/eviction'
		      />
		      <div className='grid grid-pad'>
		        <Squarebox 
		        	boxTitle='Property Owner'
		        	id='plaintiff'
	            imgSrc={PropertyOwnerIcon}
	            boxContent='Filing a Small Claim' /> 
		        <Squarebox 
		        	boxTitle='Tenant'
	            imgSrc={TenantIcon} /> 
            <Squarebox 
              boxTitle='Other Occupant'
              imgSrc={OccupantIcon} /> 
		      </div>
		      <Infobox 
		      	boxTitle='FAQs'
	          boxContent={renderFaqTitles}
	          buttonText='View More'
            buttonLink='faqs/eviction' />
		    </div>
		)
	}
}

Eviction.propTypes = { limit: React.PropTypes.number };
Eviction.defaultProps = { limit: 4 };

/* 
   		console.log(JSON.stringify(list.faqs, null, 4));

    .map(function(faqs) {
      return (
        <div>{faqs.title}</div>
      )
    })

*/