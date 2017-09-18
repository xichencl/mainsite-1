import React, { Component } from 'react';

export default class Infobox extends Component {
	render() {
		return (
			<div className="Box Info-box">
				<h3>{this.props.boxTitle}</h3>
				<hr />
				<div>{this.props.boxContent}</div>
				<button>{this.props.buttonText}</button>
			</div>
			)
	}
} 


