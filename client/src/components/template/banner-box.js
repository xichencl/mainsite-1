import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default class Bannerbox extends Component {
	render() {
		return (
			<div className="Box Banner-box">
				<h2>{this.props.boxTitle}</h2>
				<hr className='Banner-box-hr' />
				<p className='Banner-box-p'>{this.props.boxContent}</p>
				<Link to={this.props.buttonLink} className='Banner-box-btn'><button>{this.props.buttonText}</button></Link>
			</div>
		)
	}
}