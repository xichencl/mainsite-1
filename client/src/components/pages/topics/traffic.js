import React, { Component } from 'react';
import Squarebox from '../../template/square-box';
import Bannerbox from '../../template/banner-box';
import Infobox from '../../template/info-box';

import BeforeIcon from '../../../img/before.svg';
import DuringIcon from '../../../img/during.svg';
import AfterIcon from '../../../img/after.svg';

export default class Traffic extends Component {
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
		//traffic id = '8'
		var faqTitle = []
    var self = this;
    // const topicArray = [];
    const trafficFAQs = this.state.topics
   	.filter(function(topic) {
   		return topic.id === '8'
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
		      <h1>Traffic</h1>
		      <Bannerbox boxTitle='Do I have to go to court?'
		           boxContent='If you got a ticket for an infraction (like running a stop sign), you can probably do everything you need to do by mail. Learn more here.'
		           buttonText='FAQs'
               buttonLink='faqs/traffic'
		      />
		      <div className='grid grid-pad'>
		        <Squarebox 
		        	boxTitle='Before Your Case'
	            imgSrc={BeforeIcon} /> 
		        <Squarebox 
		        	boxTitle='During Your Case'
	            imgSrc={DuringIcon} />
            <Squarebox 
              boxTitle='After Your Case'
              imgSrc={AfterIcon} />  
		      </div>
		      <Infobox 
		      	boxTitle='FAQs'
	          boxContent={renderFaqTitles}
	          buttonText='View More'
            buttonLink='faqs/traffic' />
		    </div>
		)
	}
}

Traffic.propTypes = { limit: React.PropTypes.number };
Traffic.defaultProps = { limit: 4 };

/* 
   		console.log(JSON.stringify(list.faqs, null, 4));

    .map(function(faqs) {
      return (
        <div>{faqs.title}</div>
      )
    })

*/