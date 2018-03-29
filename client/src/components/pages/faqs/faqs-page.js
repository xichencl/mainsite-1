import React, { Component } from 'react';
import TitleLine from '../../template/title-line';
import { Link } from 'react-router-dom';

export default class FAQs extends Component {
	render() {
		return (
			<div>
				<TitleLine title="Frequently Asked Questions" />
				
				<ul className="Filter">
					<li className="Filter-topic"><Link to="/faqs/general">General</Link></li>
					<li className="Filter-topic"><Link to="/faqs/smallclaims">Small Claims</Link></li>
					<li className="Filter-topic"><Link to="/faqs/eviction">Eviction</Link></li>
					<li className="Filter-topic"><Link to="/faqs/family">Family</Link></li>
					<li className="Filter-topic"><Link to="/faqs/dv">Domestic Violence</Link></li>
					<li className="Filter-topic"><Link to="/faqs/guardianship">Guardianship</Link></li>
					<li className="Filter-topic"><Link to="/faqs/traffic">Traffic</Link></li>
				</ul>

			</div>
		)
	}
}