import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { fetchStageContent } from '../../../../actions/content.js';
import TitleLine from '../../../template/title-line';

import TextIconBox from '../../../template/text-icon-box';
import ChecklistIcon from '../../../../img/icn_checklist.svg';
import InfoBox from '../../../template/info-box';
import AccordionBoxContainer from '../../../template/accordion-box/accordion-box-container';


class SmallClaimsStage extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    // this.props.fetchStageContent()
  }

  renderMenuLinks() {
    const renderedLinks = this.props.content.map((stage, index) => {
      // if (button.id == this.state.stage) {
      // }
      return (
        <div onClick={(e) => this.onStageSelect(stage.fields.title, stage.sys.id, e)} key={stage.sys.id}>
          <a>{stage.fields.title}</a>
        </div>
      )
    })
    return [
      // show selected stage content and menu with stage highlighted 
      // put this in a separate component, and pass state as props
      <div>
        <AccordionBoxContainer />
        <InfoBox 
          boxTitle={`Menu - ${this.state.stageTitle}`}
          boxContent={renderedLinks}
          buttonVisibilityClass="hidden"
          infoboxClass="Box Info-box small-box col-2"
        />
      </div>
    ];
  }

  render() {

    return (
      <div>
        <TitleLine title="Small Claims" />
          {/*<div className="White-background">{this.props.match.params.stage} Your Case</div>
          <div className="col-2 Grey-background">menu*/}
            {/*<p>{this.props.match.params.stage}</p>*/}
            {/*<Link to={`${this.props.match.url}/before`}>before</Link>
            <Link to={`${this.props.match.url}/during`}>during</Link>
            <Link to={`${this.props.match.url}/after`}>after</Link>*/}
          <div className="grid grid-pad">
            {renderMenuLinks()}  
          </div>

        </div>

    )
  } 
}

function mapStateToProps(state) {
  return { content: state.content.all };
}

// export default connect(mapStateToProps, { fetchStages })(SmallClaimsStage);
export default connect(mapStateToProps)(SmallClaimsStage);


