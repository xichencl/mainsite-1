import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Bannerbox extends Component {
	render() {
		return (
			<div className="Box Banner-box">
				<h2>{this.props.boxTitle}</h2>
				<hr />
				<p>{this.props.boxContent}</p>
				<a href={this.props.buttonLink}><button>{this.props.buttonText}</button></a>
			</div>
		)
	}
}