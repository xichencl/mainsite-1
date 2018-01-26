import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextIconBox from '../../../template/text-icon-box';
import ChecklistIcon from '../../../../img/icn_checklist.svg';
import InfoBox from '../../../template/info-box';

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
          
          <div className="White-background">{this.props.match.params.stage} Your Case</div>
          <div className="col-2 Grey-background">menu
            {/*<p>{this.props.match.params.stage}</p>*/}
            <Link to={`${this.props.match.url}/before`}>before</Link>
            <Link to={`${this.props.match.url}/during`}>during</Link>
            <Link to={`${this.props.match.url}/after`}>after</Link>
          </div>

        </div>
      </div>
    )
  } 
}

