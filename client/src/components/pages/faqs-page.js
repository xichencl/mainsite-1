import React, {Component} from 'react';
import TitleLine from '../template/title-line';

export default class FAQs extends Component {
	render() {
		return (
			<div>
				<TitleLine title="Frequently Asked Questions" />

				<div className="Filter">
					<select>
						<option value="general">General</option>
						<option value="smallClaims">Small Claims</option>
						<option value="eviction">Eviction</option>
						<option value="family">Family</option>
						<option value="dv">Domestic Violence</option>
						<option value="guardianship">Guardianship</option>
						<option value="traffic">Traffic</option>
					</select>
				</div>

			</div>
		)
	}
}