import React, { Component } from 'react';
import TitleLine from '../../template/title-line';
import { Link } from 'react-router-dom';

export default class FAQs extends Component {
	render() {
		return (
			<div>
				<TitleLine title="Frequently Asked Questions" />

				<div className="Filter">
					<Link to="/faqs/general">General</Link>
					<Link to="/faqs/smallclaims">Small Claims</Link>
					<Link to="/faqs/eviction">Eviction</Link>
					<Link to="/faqs/family">Family</Link>
					<Link to="/faqs/dv">Domestic Violence</Link>
					<Link to="/faqs/guardianship">Guardianship</Link>
					<Link to="/faqs/traffic">Traffic</Link>
				</div>

			</div>
		)
	}
}