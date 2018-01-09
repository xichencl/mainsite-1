import React, { Component } from 'react';

export default class SmallClaimsParty extends Component {
	
	render() {
		return (
			<div>
				<div>{this.props.match.params.path}</div>
				<div>Small Claims Checklist md box</div>
				<div>Resources box</div>
				<div>Before, during, after boxes</div>
			</div>
		)
	}		

}