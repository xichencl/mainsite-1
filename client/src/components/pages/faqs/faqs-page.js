import React, { Component } from 'react';
import TitleLine from '../../template/title-line';
import { Link } from 'react-router-dom';

export default class FAQs extends Component {
	render() {
		return (
			<div>
				<TitleLine title="Frequently Asked Questions" />
				<h3 className="Faq-title">Browse By Category</h3>
				<ul className="Filter">
					<div className="Filter-list-group">
						<hr className="cat-line"/>
						<li className="Filter-topic">
							<Link to="/faqs/general">General <i className="material-icons Filter-topic-icon">keyboard_arrow_right</i></Link>
						</li>
					</div>
					<div className="Filter-list-group">
						<hr className="cat-line"/>
						<li className="Filter-topic">
							<Link to="/faqs/smallclaims">Small Claims <i className="material-icons Filter-topic-icon">keyboard_arrow_right</i></Link>
						</li></div>
					<div className="Filter-list-group">
						<hr className="cat-line"/>
					<li className="Filter-topic">
						<Link to="/faqs/eviction">Eviction <i className="material-icons Filter-topic-icon">keyboard_arrow_right</i></Link>
					</li></div>
					<div className="Filter-list-group">
						<hr className="cat-line"/>
					<li className="Filter-topic">
						<Link to="/faqs/family">Family <i className="material-icons Filter-topic-icon">keyboard_arrow_right</i></Link>
					</li></div>
					<div className="Filter-list-group">
						<hr className="cat-line"/>
					<li className="Filter-topic">
						<Link to="/faqs/dv">Domestic Violence <i className="material-icons Filter-topic-icon">keyboard_arrow_right</i></Link>
					</li></div>
					<div className="Filter-list-group">
						<hr className="cat-line"/>
					<li className="Filter-topic">
						<Link to="/faqs/guardianship">Guardianship <i className="material-icons Filter-topic-icon">keyboard_arrow_right</i></Link>
					</li></div>
					<div className="Filter-list-group">
						<hr className="cat-line"/>
					<li className="Filter-topic">
						<Link to="/faqs/traffic">Traffic <i className="material-icons Filter-topic-icon">keyboard_arrow_right</i></Link>
					</li></div>
				</ul>

			</div>
		)
	}
}