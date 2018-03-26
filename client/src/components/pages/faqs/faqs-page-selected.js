import React, { Component } from 'react';
import TitleLine from '../../template/title-line';

export default class SelectedFaqPage extends Component {
	render() {
		return (
			<div>
				<TitleLine title="Frequently Asked Questions" />
				<div>{this.props.match.params.page}</div>
				<div className="Topic">Prepare and File a Claim</div>
				<div className="Topic">Serving Court Papers</div>
				<div className="Topic">After Being Served</div>
				<div className="Topic">Can't Go to Hearing or Missed Court Date</div>
				<div className="Topic">Appeal, Collect, or Vacate Judgement</div>
				<div className="Topic">Examples of Cases Heard</div>
			</div>
		)
	}
}