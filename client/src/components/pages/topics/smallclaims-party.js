import React, { Component } from 'react';
import TextIconBox from '../../template/text-icon-box';
import ChecklistIcon from '../../../img/icn_checklist.svg';
import InfoBox from '../../template/info-box';

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
        		/>
        	<InfoBox 
        		boxTitle="Resources"
        		boxContent={resources}
        		buttonVisibilityClass="hidden"
        		infoboxClass="Box Info-box small-box"
        		/>
        </div>
	    </div>
		)
  } 
}

