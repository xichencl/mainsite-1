import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TitleLine from '../../template/title-line';
import { fetchFaqSubcategories } from '../../../actions/content';
import { connect } from 'react-redux';


class SelectedFaqPage extends Component {
	constructor() {
		super()
	this.renderSubCategories = this.renderSubCategories.bind(this)
	}

	componentWillMount() {
		const label = this.props.match.params.page;
		this.props.fetchFaqSubcategories(label);
	}

	renderSubCategories() {
		return (
			this.props.faqSubcategories.map((subcat) => {
				return (
					<Link key={subcat.sys.id} to={`/faqs/${this.props.match.params.page}/${subcat.sys.id}`} >
						<div id={subcat.sys.id} >{subcat.fields.title["en-US"]}</div>
					</Link>
				)
			})
		)
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
  return { faqSubcategories: state.content.faqSubcategories }
}

export default connect(mapStateToProps, { fetchFaqSubcategories })(SelectedFaqPage)

//return (<div className="Topic" key={