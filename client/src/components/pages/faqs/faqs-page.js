import React, { Component } from 'react';
import TitleLine from '../../template/title-line';
import { Link } from 'react-router-dom';
import { fetchFaqLayout } from '../../../actions/content';
import { connect } from 'react-redux';

class FAQs extends Component {
	constructor() {
		super()
	}

	componentWillMount() {
		this.props.fetchFaqLayout()
	}

	render() {
		const lang = this.props.language;
		const renderedTopics = this.props.faqTopics.map((topic) => {
			return (
				<div className="Filter-list-group" key={topic.sys.id}>
					<hr className="cat-line"/>
					<li className="Filter-topic">
						<Link to={`/faqs/${topic.fields.slug[lang]}`}>{topic.fields.title[lang]} <i className="material-icons Filter-topic-icon">keyboard_arrow_right</i></Link>
					</li>
				</div>
			)
		})

		const renderedSubHeading = this.props.faqLayout.map((text) => {
			return (
					<h3 key={text.sys.id}>{text.fields.subHeading[lang]}</h3>
			)
		})

		const renderedTitle = this.props.faqLayout.map((text) => {
			return ( <TitleLine key={text.sys.id} title={text.fields.title[lang]} />)
		})

		return (
			<div>
				{renderedTitle}
				{renderedSubHeading}
				<ul className="Filter">
					{renderedTopics}
				</ul>

			</div>
		)
	}
}

function mapStateToProps(state) {
  return { 
  	faqTopics: state.content.faqTopics,
  	faqLayout: state.content.faqLayout,
  	language: state.content.language
  }
}

export default connect(mapStateToProps, { fetchFaqLayout })(FAQs)
