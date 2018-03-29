import React, { Component } from 'react';
import TitleLine from '../../template/title-line';
import { fetchFaqs } from '../../../actions/content';
import { connect } from 'react-redux';


class SelectedFaqPage extends Component {
	constructor() {
		super()
	this.renderSubCategories = this.renderSubCategories.bind(this)
	}

	componentWillMount() {
		const topic = this.props.match.params.page;
		this.props.fetchFaqs(topic);
	}

	renderSubCategories() {
		console.log(this.props.faqs)
	
		// const subcatAry = [];
		// const subcategories = this.props.faqs.map((faq) => {
		// 	const subCatIds = faq.fields.subcategory.map((cat) => { 
		// 		subcatAry.push(cat.sys.id); 
		// 		console.log(subcatAry)
		// 	})};
		// 	const subCatTitle = faq.fields.subcategory.title
		// })
	}

	render() {

		return (
			<div>
				<TitleLine title="Frequently Asked Questions" />
				{this.renderSubCategories()}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return { faqs: state.content.faqs }
}

export default connect(mapStateToProps, { fetchFaqs })(SelectedFaqPage)

//return (<div className="Topic" key={