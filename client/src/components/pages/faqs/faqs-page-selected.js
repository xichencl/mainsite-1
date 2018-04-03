import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TitleLine from '../../template/title-line';
import { fetchFaqSubcategories } from '../../../actions/content';
import { connect } from 'react-redux';

const pageNames = {
	smallclaims: "Small Claims",
	dv: "Domestic Violence",
	guardianship: "Guardianship",
	traffic: "Traffic",
	eviction: "Eviction",
	family: "Family"
}

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
					<div  key={subcat.sys.id} className="Filter-list-group-subcat">
						<hr className="cat-line"/>
						<li className="Filter-topic">
							<Link to={`/faqs/${this.props.match.params.page}/${subcat.sys.id}`}>
							{subcat.fields.title["en-US"]}<i className="material-icons Filter-topic-icon">keyboard_arrow_right</i>
							</Link>
						</li>
					</div>
				)
			})
		)
	}

	render() {
		const currentPageName = this.props.match.params.page
		return (
			<div>
				<TitleLine title="Frequently Asked Questions" />
				<h3>Browse {pageNames[currentPageName]} Questions</h3>
				<div className="Filter">{this.renderSubCategories()}</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return { faqSubcategories: state.content.faqSubcategories }
}

export default connect(mapStateToProps, { fetchFaqSubcategories })(SelectedFaqPage)

//return (<div className="Topic" key={