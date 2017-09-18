import React, { Component } from 'react';
import Squarebox from '../../template/square-box';
import Bannerbox from '../../template/banner-box';
import Infobox from '../../template/info-box';

export default class Guardianship extends Component {
	render() {
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
	          	boxContent='[list of 5 FAQs]'
	          	buttonText='View'/>

		    </div>
		)
	}
}