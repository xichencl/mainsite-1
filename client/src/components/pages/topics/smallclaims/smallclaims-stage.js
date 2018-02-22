import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStages } from '../../../../actions/content.js';
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
    this.props.fetchStages()
  }

  renderStages() {
    return this.props.content.map((stage, index) => {
      return (
        <div key={stage.sys.id}>
          <Link to={`${this.props.match.url}/${stage.fields.url}`}>
            <Squarebox 
              id={stage.sys.id}
              boxTitle={stage.fields.title}  
              assetId={stage.fields.image.sys.id}
            />
          </Link>
        </div>
      );
    });
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
            <AccordionBoxContainer />
            <InfoBox 
              boxTitle={`Menu - ${this.state.stageTitle}`}
              boxContent={renderedLinks}
              buttonVisibilityClass="hidden"
              infoboxClass="Box Info-box small-box col-2"
            />
          
            {renderStages()}  
          </div>

        </div>

    )
  } 
}

function mapStateToProps(state) {
  return { content: state.content.all };
}

export default connect(mapStateToProps, { fetchStages })(SmallClaimsStage);


