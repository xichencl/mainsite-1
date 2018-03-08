import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TitleLine from '../../../template/title-line';

import TextIconBox from '../../../template/text-icon-box';
import SquareBoxStatic from '../../../template/square-box-static';

import ChecklistIcon from '../../../../img/icn_checklist.svg';
import InfoBox from '../../../template/info-box';
import AccordionBoxContainer from '../../../template/accordion-box/accordion-box-container';
import { fetchContentByParty } from '../../../../actions/content.js';


const partyIds = [
  {
    name: 'defendant',
    id: 'mI8A9AawXACAmYEmSyU0g' 
  },
  {
    name: 'plaintiff',
    id: '2zYmskK1EUW22uukow4CaU'
   }
]

const stageIds = [
  {
    name: 'before',
    id: '1cMyrIaZ680ukwwSi8YscC'
  },
  {
    name: 'during',
    id: '5iDqJ92Rzqksq88gYWawE4'
  },
  {
    name: 'after',
    id: '4HkTlYlsFqqIgscmGWOCkk'
  }
]

class SmallClaimsStage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStageId: this.props.stageId.id,
      selectedStageTitle: this.props.stageId.title,
      selectedContent: []
    }
    this.renderMenuLinks = this.renderMenuLinks.bind(this)
    this.filterContent = this.filterContent.bind(this)
    this.onStageSelect = this.onStageSelect.bind(this);
  }
  componentWillMount() {
    // before component mounts, load content by selected party
    let _partyId;
    // check if params.party matches the partyId[x].name
    if (this.props.match.params.party === partyIds[0].name) {
        // whichever name matches, return the id to _partyId
          _partyId = partyIds[0].id
      } else {
         _partyId = partyIds[1].id
      }
    // update state with smallclaims/:party content
    this.props.fetchContentByParty('SmallClaims', _partyId)
  }

  componentWillUpdate() {

  }

  onStageSelect(title, _id, e) {
    e.stopPropagation();
    this.setState({
      selectedStageId: _id, 
      selectedStageTitle: title,
      selectedContent: [] 
    })
  }

  filterContent(content, findById) {
    let filledAry = [];
    let emptyAry = [];
    // filter content by party 
    return content.tabs.reduce(function (acc, tab) {
    // first reduce gets each tab 
      const thisTab = tab;
      // second reduce gets each tab's array of stages 
      const aryTabs = tab.fields.stage.reduce(function (acc, cat) {
        // checks if ID is present in stage array
        const tabStage = cat.sys.id.includes(findById);
        // if the ID matches, push the tab content to a new array
        return !tabStage ? emptyAry.push(thisTab) : filledAry.push(thisTab)
        // return !tabStage ? acc : acc.concat(Object.assign({}, cat, { tabStage }));
      }, []); 
      console.log("7. filledAry", filledAry)
      // pass content to AccordionBoxContainer as props
      return !filledAry.length ? <AccordionBoxContainer stageContent={null} /> : <AccordionBoxContainer stageContent={filledAry} />

    }, []);
  }

  renderMenuLinks() {

    return [].concat(this.props.stage)
    .sort((a, b) => a.fields.id > b.fields.id)
    .map((stage) => {
      return (
        <div className="Stage-menu-item" onClick={(e) => this.onStageSelect(stage.fields.title, stage.sys.id, e)} key={stage.sys.id}>
          <Link to={stage.fields.url}>{stage.fields.title}</Link>
        </div>
      )
    })

    {/*return [
      <InfoBox 
          boxTitle="Menu"
          boxContent={renderedLinks}
          buttonVisibilityClass="hidden"
          infoboxClass="Box Info-box xs-box"
      />

    ]*/}
  }

  
  render() {
    const currentTitle = this.state.selectedStageTitle

    return (
      <div>

        <TitleLine title={currentTitle} />
        <div className="Stage-menu">{this.renderMenuLinks()}</div>
        <div>
          {this.filterContent(this.props.content, this.state.selectedStageId)}
        </div>
      </div>
    )
  } 
}

function mapStateToProps(state) {
  return { 
    stageContent: state.content.tabs,
    stage: state.content.stages,
    content: state.content, 
    stageId: state.content.stageId
  };
}
export default connect(mapStateToProps, { fetchContentByParty })(SmallClaimsStage);