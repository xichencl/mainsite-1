import React, { Component } from 'react';
import Squarebox from '../../template/square-box';
import Bannerbox from '../../template/banner-box';
import Infobox from '../../template/info-box';

export default class SmallClaims extends Component {
	constructor(props){
    super(props); 
    this.state={
      topics:[]
    }
  }

  // static defaultProps() {
  //     return {
  //       limit: 4
  //     }
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
		//smallclaims id = 7

		const topicArray = [];
    const smallclaimsFAQs = this.state.topics
   	.filter(function(topic) {
   		return topic.id === '7'
   	})
   	.map(function(list) {
   		console.log(list)
   		return (<div>{list.faqs.title}</div>)
   	})


		return (
			<div className='Topic'>
		      <h1>Small Claims</h1>
		      <Bannerbox boxTitle='What is small claims court?'
		           boxContent='Learn more about small claims court, who you can sue, where you should file, how much can be claimed, and what to expect to pay in filing fees.'
		           buttonText='FAQs'
		      />
		      <div className='grid grid-pad'>
		        <Squarebox 
		        	boxTitle='I am Suing'
		        	id='plaintiff'
	            	iconClass='fa fa-arrow-circle-o-up'
	            	boxContent='Filing a Small Claim' /> 
		        <Squarebox 
		        	boxTitle='I am being sued'
	            	iconClass='fa fa-arrow-circle-o-down' /> 
		      </div>
		      <Infobox 
		      	boxTitle='FAQs'
	          	boxContent={smallclaimsFAQs}
	          	buttonText='View'/>

		    </div>
		)
	}
}

/* 

    .map(function(faqs) {
      return (
        <div>{faqs.title}</div>
      )
    })

*/