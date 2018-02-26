import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { fetchStageContent } from '../../../../actions/content.js';
import TitleLine from '../../../template/title-line';

import TextIconBox from '../../../template/text-icon-box';
import ChecklistIcon from '../../../../img/icn_checklist.svg';
import InfoBox from '../../../template/info-box';
import AccordionBoxContainer from '../../../template/accordion-box/accordion-box-container';
import { fetchContent } from '../../../../actions/content.js';

class SmallClaimsStage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStage: '',
      stageId: null,
      currentContent: []
    }
    this.renderMenuLinks = this.renderMenuLinks.bind(this)
    this.onStageSelect = this.onStageSelect.bind(this);
  }
  componentWillMount() {
    this.props.fetchContent('SmallClaims')
  }

  onStageSelect(title, _id, e) {
    console.log(title)
    e.stopPropagation();
    

    this.setState({
      stageId: _id, 
      selectedStage: title 
    })
  }

  renderMenuLinks() {
    const renderedLinks = this.props.stage.map((stage, index) => {
      return (
          <div onClick={(e) => this.onStageSelect(stage.fields.url, stage.sys.id, e)} key={stage.sys.id}>
            <Link to={stage.fields.url}>{stage.fields.title}</Link>
          </div>
        )
    })

  // filterContent(stageId) {
  //   newContent = this.props.stageContent.filter((tab) => {
  //     tab.fields.stage.map((item) => item.sys.id == stageId)
  //   })
  //   console.log(newContent);
  //   return {
  //     newContent
  //   }
  // }

    return [
      <InfoBox 
          boxTitle={`Menu - ${this.props.match.params.stage}`}
          boxContent={renderedLinks}
          buttonVisibilityClass="hidden"
          infoboxClass="Box Info-box small-box col-2"
      />
    ]
  }
  
  render() {

    return (
      <div>
        <TitleLine title="Small Claims" />

          <div className="grid grid-pad">
            {this.renderMenuLinks()} 
            <AccordionBoxContainer stageId={this.state.stageId} stageContent={this.props.stageContent} /> 
          </div>

        </div>

    )
  } 
}

function mapStateToProps(state) {
  return { 
    stageContent: state.content.tabs,
    stage: state.content.stages
   };
}
export default connect(mapStateToProps, { fetchContent })(SmallClaimsStage);

// export default connect(mapStateToProps, { fetchStages })(SmallClaimsStage);

          {/*<div className="White-background">{this.props.match.params.stage} Your Case</div>
          <div className="col-2 Grey-background">menu*/}
            {/*<p>{this.props.match.params.stage}</p>*/}
            {/*<Link to={`${this.props.match.url}/before`}>before</Link>
            <Link to={`${this.props.match.url}/during`}>during</Link>
            <Link to={`${this.props.match.url}/after`}>after</Link>*/}
