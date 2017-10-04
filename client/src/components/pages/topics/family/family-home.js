import React, { Component } from 'react';
import Squarebox from '../../../template/square-box';
import Bannerbox from '../../../template/banner-box';
import Infobox from '../../../template/info-box';

import AdoptionIcon from '../../../../img/family_adoption.svg';
import ChildCustodyIcon from '../../../../img/family_child-custody.svg';
import ChildSupportIcon from '../../../../img/family_child-support.svg';
import SpousalSupportIcon from '../../../../img/family_spousal-support.svg';
import ParentageIcon from '../../../../img/family_parentage.svg';
import DivorceIcon from '../../../../img/family_divorce.svg';

export default class FamilyHome extends Component {
	render() {
		return (
			<div className='Topic'>
	      <h1>Family Law</h1>
	      <div className='grid grid-pad'>
	        <Squarebox 
	        	boxTitle='Adoption'
            imgSrc={AdoptionIcon} /> 
	        <Squarebox 
	        	boxTitle='Child Custody'
            imgSrc={ChildCustodyIcon} /> 
					<Squarebox 
						boxTitle='Child Support'
            imgSrc={ChildSupportIcon} /> 
					<Squarebox 
						boxTitle='Spousal Support'
            imgSrc={SpousalSupportIcon} /> 
					<Squarebox 
						boxTitle='Parentage'
            imgSrc={ParentageIcon} /> 
					<Squarebox 
						boxTitle='Divorce'
            imgSrc={DivorceIcon} /> 
	      </div>
		  </div>
		)
	}
}


