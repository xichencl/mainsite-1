import React, { Component } from 'react';
import TextIconBox from '../../template/text-icon-box';
import ChecklistIcon from '../../../img/icn_checklist.svg';
import InfoBox from '../../template/info-box';
import SquareBox from '../../template/square-box';
import Before from '../../../img/before_1.svg';
import During from '../../../img/during_1.svg';
import After from '../../../img/after_1.svg';

const resourceList = [
	{ 
		title: "Small Claims Advisor",
		link: "http://www.courts.ca.gov/selfhelp-advisors.htm"
	},
	{ 
		title: "Non-profit Agencies",
		link: "http://www.courts.ca.gov/selfhelp-lowcosthelp.htm#Legal_aid_agencies_and_other_non-profit_groups"
	},
	{ 
		title: "Small Claims Advisor",
		link: "http://www.courts.ca.gov/selfhelp-advisors.htm"
	},
]
		

export default class SmallClaimsParty extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const resources = resourceList.map((item) => {
			return (
				<div>
					<a href={item.link} target="_blank">{item.title}</a>
				</div>
			)
		})
		return (
  		<div>
  			<div className="mainpage-title">
          <hr className="mainpage-title-line" />
          <h1>Small Claims</h1>
          <hr className="mainpage-title-line"/>
        </div>
        <div className="grid grid-pad">
        	<TextIconBox 
        		boxTitle="Small Claims Checklist"
        		boxContent="Use our interactive checklist to help you manage your small claims case before you file, during your case, and after a judgement has been made."
        		iconLarge={ChecklistIcon}
        		TextIconBoxClass="Box Text-icon-box Grey-background medium-box"
        		buttonLink="/test-todo"
        		/>
        	<InfoBox 
        		boxTitle="Resources"
        		boxContent={resources}
        		buttonVisibilityClass="hidden"
        		infoboxClass="Box Info-box small-box col-2"
        		/>
        	<SquareBox 
        		boxTitle="Before"
        		imgSrc={Before}
        	/>
        	<SquareBox 
        		boxTitle="During"
        		imgSrc={During}
        	/>
        	<SquareBox 
        		boxTitle="After"
        		imgSrc={After}
        	/>
        </div>
	    </div>
		)
  } 
}

