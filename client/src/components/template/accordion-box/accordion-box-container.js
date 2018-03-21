import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
// import marked from 'marked';
import { CSSTransitionGroup } from 'react-transition-group'
const ReactMarkdown = require('react-markdown')

const uuid = require('uuid/v4')

export default class AccordionBoxContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeId: 0,
			pressed: false
		}
		this.toggleClass = this.toggleClass.bind(this);
		// this.getParsedMarkdown = this.getParsedMarkdown.bind(this);
	}

	toggleClass(id) {
		this.setState({ 
			activeId: id,
			pressed: !this.state.pressed 
		});
		// console.log(this.state, 'print this.state for toggleClass')
  }

  componentWillMount() {
  	// console.log("Next Page: this.props.stageContent", this.props.stageContent)
  }

  // getParsedMarkdown(content) {
  // 	return {
  // 		__html: marked(content, {sanitize: true})
  // 	}
  // }

	render() {
		// return <div>test</div>

	  let renderedContent = [];

    // yuck
    if (this.props.type === 'links' && this.props.hasOwnProperty('itemField')) {

      // also yuck
      renderedContent = Object.keys(this.props.stageContent)
      // .sort((a, b) => a.title > b.title)
      .map((contentKey) => {
        const tab = this.props.stageContent[contentKey];
        const links = tab[this.props.itemField];

        return (
          <div className="Accordion-box-item " key={uuid()}>
            <h3 onClick={() => this.toggleClass(tab.id)} className={this.state.activeId == tab.id && this.state.pressed == true ? "blue-font": " "} >
              {tab.title}

              <span className="Accordion-box-icon">
                {this.state.activeId == tab.id && this.state.pressed == true ? "-" : "+"}
              </span>
            </h3>
            
            <div className={this.state.activeId == tab.id && this.state.pressed == true ? " ": "hidden"}> 
              <div className="Accordion-box-content">
                {
                  Object.keys(links).map((linkKey) => {
                    const videoLink = links[linkKey];

                    if (videoLink.hasOwnProperty('link')) {
                      return (
                        <div key={uuid()}>
                          <a href={videoLink.link}>
                            {videoLink.title}
                          </a>
                        </div>
                      )
                    }

                    return (
                      <div key={uuid()}>
                        <Link to={this.props.linkTo + videoLink.linkTo}>
                          {videoLink.title}
                        </Link>
                      </div>
                    )
                  })
                }

                {/*<div dangerouslySetInnerHTML={ { __html: input } }></div>*/}
              </div>
              {/*           <div dangerouslySetInnerHTML={this.getParsedMarkdown(input)}></div>
              */}         


            </div>
            <hr />
          </div>
        )
      })
    }
    else {
      renderedContent = renderedContent.concat(this.props.stageContent)
      .sort((a, b) => a.fields.id > b.fields.id)
      .map((tab) => {
  		// const renderedContent = this.props.stageContent.map((tab) => {
  			const input = tab.fields.blockText || '';
  			return (
  				<div className="Accordion-box-item " key={tab.fields.id}>
  					<h3 onClick={() => this.toggleClass(tab.sys.id)} className={this.state.activeId == tab.sys.id && this.state.pressed == true ? "blue-font": " "} >
              {tab.fields.title}

              <span className="Accordion-box-icon">
                {this.state.activeId == tab.sys.id && this.state.pressed == true ? "-" : "+"}
              </span>
            </h3>
            
  					<div className={this.state.activeId == tab.sys.id && this.state.pressed == true ? " ": "hidden"}> 
  						<div className="Accordion-box-content">
  							<ReactMarkdown source={input} />

  							{/*<div dangerouslySetInnerHTML={ { __html: input } }></div>*/}
  						</div>
  						{/*						<div dangerouslySetInnerHTML={this.getParsedMarkdown(input)}></div>
  						*/}					


  					</div>
  					<hr />
  				</div>
  			)
  		})
    }
		// const newContent = this.props.stageContent.filter((tab) => {
  // 		tab.fields.stage.map((item) => item.sys.id == stageId)
  // 	})

		return (
			<div className="Box AccordionBoxContainer large-box">
				<hr />

				{renderedContent}
			</div>
		)
	}
} 

AccordionBoxContainer.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    activeId: PropTypes.number.isRequired,
    // expanded: PropTypes.bool.isRequired,
    // blockText: PropTypes.string.isRequired, 
    
  }).isRequired).isRequired,
  	toggleClass: PropTypes.func.isRequired
  // onTabClick: PropTypes.func.isRequired,
  // onAccordionClick: PropTypes.func.isRequired,
}

/* 
	render() {
		const renderedContent = this.props.stageContent.map((tab) => {
			return (
				<div className="Accordion-box-item " key={tab.sys.id}>
					<h3 onClick={() => this.toggleClass(tab.sys.id)}>{tab.sys.title}<span></span></h3>
					<div className={this.state.activeId == tab.sys.id && this.state.pressed == true ? " ": "hidden"} >{tab.fields.blockText}</div>
					<hr />
				</div>
			)
		})
		return (
			<div className="Box AccordionBoxContainer medium-box">
				<hr />
				{renderedContent}
			</div>
		)
	}
} 
*/